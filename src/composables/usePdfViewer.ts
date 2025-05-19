import { ref, computed, onUnmounted, onMounted, watch } from 'vue'
import type { PDFDocumentProxy } from '@/types/pdf'

export default function usePdfViewer(pdfSrc: string, pdfjsWorkerSrc: string) {
  const displayMode = ref<'preview' | 'embed'>('preview')
  const pdfContainer = ref<HTMLDivElement | null>(null)
  const pdfCanvas = ref<HTMLCanvasElement | null>(null)
  const loading = ref(true)

  // PDF состояние
  let pdfDoc: PDFDocumentProxy | null = null
  const pageCount = ref(0)
  const currentPage = ref(1)
  let currentScale = 1.0
  const targetHeight = 470

  const lineWidthPercentage = computed(() => {
    if (pageCount.value <= 1) return 0
    // Вычисляем процент прогресса (0% для первой страницы, 100% для последней)
    const percentage = ((currentPage.value - 1) / (pageCount.value - 1)) * 100
    // Округляем до целого числа
    return Math.round(percentage)
  })

  const loadPdfJsLibrary = () => {
    return new Promise((resolve, reject) => {
      if (window.pdfjsLib) {
        console.log('PDF.js уже загружен')
        resolve(true)
        return
      }

      const script = document.createElement('script')
      script.src = '/pdfjs/pdf.mjs'
      script.type = 'module'
      script.onload = () => {
        console.log('PDF.js загружен динамически')
        // Небольшая задержка для инициализации библиотеки
        setTimeout(() => resolve(true), 500)
      }
      script.onerror = (error) => {
        console.error('Ошибка загрузки PDF.js:', error)
        reject(error)
      }

      document.head.appendChild(script)
    })
  }

  // Вызываем перед использованием PDF.js
  onMounted(async () => {
    if (displayMode.value === 'embed') {
      try {
        await loadPdfJsLibrary()
        // Теперь PDF.js должен быть загружен
        loadPdf()
      } catch (error) {
        console.error('Не удалось загрузить PDF.js:', error)
      }
    }
  })

  const renderPage = async (pageNum: number) => {
    if (!pdfDoc || !pdfCanvas.value || !window.pdfjsLib) return

    try {
      const page = await pdfDoc.getPage(pageNum)

      // Получаем viewport с масштабом 1.0 для определения исходных размеров
      const originalViewport = page.getViewport({ scale: 1.0 })

      // Вычисляем новый масштаб на основе целевой высоты
      const scaleFactor = targetHeight / originalViewport.height

      // Применяем вычисленный масштаб
      const viewport = page.getViewport({ scale: scaleFactor * currentScale })

      const canvas = pdfCanvas.value
      const context = canvas.getContext('2d')

      // Добавляем класс для анимации
      canvas.classList.add('page-transition')

      // Создаем эффект выхода для текущей страницы
      canvas.style.opacity = '0'
      canvas.style.transform = 'scale(0.97)'

      // Короткая пауза для визуализации эффекта выхода
      await new Promise((resolve) => setTimeout(resolve, 150))

      // Устанавливаем новые размеры
      canvas.height = viewport.height
      canvas.width = viewport.width

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      }

      // Настраиваем анимацию входа для новой страницы
      canvas.style.transform = 'scale(1.03)'

      await page.render(renderContext).promise

      // Плавно показываем новую страницу с эффектом входа
      setTimeout(() => {
        if (canvas) {
          canvas.style.opacity = '1'
          canvas.style.transform = 'scale(1)'
        }
      }, 50)
    } catch (error) {
      console.error('Ошибка при рендеринге страницы:', error)
    }
  }

  // Загрузка PDF документа
  const loadPdf = async () => {
    try {
      loading.value = true
      console.log('Загрузка PDF:', pdfSrc, 'Worker:', pdfjsWorkerSrc)

      // Проверяем, загружена ли библиотека
      if (!window.pdfjsLib) {
        console.error('PDF.js не загружен, проверьте подключение скрипта в index.html')
        loading.value = false
        return
      }

      // Настраиваем путь к воркеру
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorkerSrc
      console.log('Worker установлен:', pdfjsWorkerSrc)

      // Загружаем PDF
      const loadingTask = window.pdfjsLib.getDocument(pdfSrc)
      console.log('Задача загрузки создана')

      loadingTask.promise.catch((error) => {
        console.error('Ошибка при загрузке PDF (промис):', error)
      })

      pdfDoc = await loadingTask.promise
      console.log('PDF загружен успешно, страниц:', pdfDoc.numPages)

      pageCount.value = pdfDoc.numPages
      currentPage.value = 1

      await renderPage(currentPage.value)
      loading.value = false
    } catch (error) {
      console.error('Ошибка при загрузке PDF:', error)
      loading.value = false
    }
  }

  const goToFirstPage = async () => {
    if (currentPage.value <= 1) return
    currentPage.value = 1
    await renderPage(currentPage.value)
  }

  // Функции навигации по страницам
  const goToPrevPage = async () => {
    if (currentPage.value <= 1) return
    currentPage.value--
    await renderPage(currentPage.value)
  }

  const goToNextPage = async () => {
    if (currentPage.value >= pageCount.value) return
    currentPage.value++
    await renderPage(currentPage.value)
  }

  const goToLastPage = async () => {
    if (currentPage.value >= pageCount.value) return
    currentPage.value = pageCount.value
    await renderPage(currentPage.value)
  }

  const zoomIn = async () => {
    // Сохраняем предыдущий масштаб для анимации
    const prevScale = currentScale

    // Устанавливаем новый масштаб
    currentScale += 0.25

    // Получаем canvas
    const canvas = pdfCanvas.value
    if (canvas) {
      // Добавляем плавную анимацию масштабирования
      canvas.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease'
      canvas.style.opacity = '0.7'
      canvas.style.transform = `scale(${prevScale / currentScale})`

      // Короткая пауза для визуализации эффекта
      await new Promise((resolve) => setTimeout(resolve, 100))
    }

    // Рендерим страницу с новым масштабом
    await renderPage(currentPage.value)
  }

  const zoomOut = async () => {
    if (currentScale <= 0.5) return

    // Сохраняем предыдущий масштаб для анимации
    const prevScale = currentScale

    // Устанавливаем новый масштаб
    currentScale -= 0.25

    // Получаем canvas
    const canvas = pdfCanvas.value
    if (canvas) {
      // Добавляем плавную анимацию масштабирования
      canvas.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease'
      canvas.style.opacity = '0.7'
      canvas.style.transform = `scale(${prevScale / currentScale})`

      // Короткая пауза для визуализации эффекта
      await new Promise((resolve) => setTimeout(resolve, 100))
    }

    // Рендерим страницу с новым масштабом
    await renderPage(currentPage.value)
  }

  // Модифицируйте switchToEmbed
  const switchToEmbed = async () => {
    displayMode.value = displayMode.value === 'embed' ? 'preview' : 'embed'

    // Если переключаемся в режим встроенного просмотра
    if (displayMode.value === 'embed') {
      try {
        // Убедимся, что библиотека загружена
        await loadPdfJsLibrary()
        // Даем время DOM обновиться перед загрузкой PDF
        setTimeout(loadPdf, 100)
      } catch (error) {
        console.error('Ошибка при загрузке PDF.js:', error)
      }
    }
  }

  // Загрузка PDF при переключении режима
  watch(displayMode, async (newMode) => {
    if (newMode === 'embed') {
      // Даем время DOM обновиться перед загрузкой PDF
      setTimeout(loadPdf, 50)
    }
  })

  // Функция скачивания PDF
  const downloadPdf = () => {
    const link = document.createElement('a')
    link.href = pdfSrc
    link.download = 'Презентация_компании.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Очистка ресурсов при уничтожении компонента
  onUnmounted(() => {
    if (pdfDoc) {
      pdfDoc.destroy()
      pdfDoc = null
    }
  })

  return {
    displayMode,
    pdfCanvas,
    loading,
    pageCount,
    currentPage,
    lineWidthPercentage,
    loadPdf,
    pdfContainer,
    switchToEmbed,
    goToFirstPage,
    goToPrevPage,
    goToNextPage,
    goToLastPage,
    zoomIn,
    zoomOut,
    downloadPdf,
  }
}
