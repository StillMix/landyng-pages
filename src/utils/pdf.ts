import type { PDFDocumentProxy } from '@/types/pdf'

/**
 * Загружает PDF документ
 * @param pdfSrc Путь к PDF файлу
 * @param pdfjsWorkerSrc Путь к PDF.js worker
 * @returns Promise с PDF документом и количеством страниц
 */
export const loadPdfDocument = async (
  pdfSrc: string,
  pdfjsWorkerSrc: string,
): Promise<{
  pdfDoc: PDFDocumentProxy | null
  pageCount: number
}> => {
  try {
    if (!window.pdfjsLib) {
      console.error('PDF.js не загружен')
      return { pdfDoc: null, pageCount: 0 }
    }

    window.pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorkerSrc
    const loadingTask = window.pdfjsLib.getDocument(pdfSrc)
    const pdfDoc = await loadingTask.promise
    const pageCount = pdfDoc.numPages

    return { pdfDoc, pageCount }
  } catch (error) {
    console.error('Ошибка при загрузке PDF:', error)
    return { pdfDoc: null, pageCount: 0 }
  }
}

/**
 * Рендерит страницу PDF документа
 * @param pdfDoc PDF документ
 * @param pageNum Номер страницы
 * @param canvas Элемент canvas
 * @param targetHeight Целевая высота
 * @param currentScale Текущий масштаб
 */
export const renderPdfPage = async (
  pdfDoc: PDFDocumentProxy | null,
  pageNum: number,
  canvas: HTMLCanvasElement | null,
  targetHeight: number = 470,
  currentScale: number = 1.0,
): Promise<void> => {
  if (!pdfDoc || !canvas || !window.pdfjsLib) return

  const page = await pdfDoc.getPage(pageNum)
  const originalViewport = page.getViewport({ scale: 1.0 })
  const scaleFactor = targetHeight / originalViewport.height
  const viewport = page.getViewport({ scale: scaleFactor * currentScale })

  const context = canvas.getContext('2d')
  canvas.classList.add('page-transition')

  canvas.style.opacity = '0'
  canvas.style.transform = 'scale(0.97)'
  await new Promise((resolve) => setTimeout(resolve, 150))

  canvas.height = viewport.height
  canvas.width = viewport.width

  const renderContext = {
    canvasContext: context,
    viewport: viewport,
  }

  canvas.style.transform = 'scale(1.03)'
  await page.render(renderContext).promise

  setTimeout(() => {
    if (canvas) {
      canvas.style.opacity = '1'
      canvas.style.transform = 'scale(1)'
    }
  }, 50)
}
