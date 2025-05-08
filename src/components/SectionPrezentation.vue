<template>
  <div class="section-prezentation">
    <p class="section-title-light">ПРЕЗЕНТАЦИЯ</p>
    <div class="presentation-container">
      <div class="presentation-content">
        <div v-if="displayMode === 'preview'" class="presentation-content__preview">
          <div class="presentation-content__preview-img">
            <img :src="previewImageSrc" alt="Превью презентации" />
            <div class="presentation-content__preview-overlay">
              <button class="presentation-content__preview-overlay__btn" @click="switchToEmbed">
                <EyeIcon :width="24" :height="24" fill="currentColor" />
                Просмотреть онлайн
              </button>
            </div>
          </div>
          <div class="presentation-content__preview-description">
            <h3>О презентации</h3>
            <p>
              Данная презентация содержит подробную информацию о нашей компании, предоставляемых
              услугах и успешно реализованных проектах.
            </p>
            <p>Вы можете скачать презентацию, нажав кнопку "Скачать PDF" или просмотреть онлайн.</p>
            <div class="presentation-content__preview-description__detalis">
              <div class="presentation-content__preview-description__detali">
                <strong>Формат:</strong> PDF
              </div>
              <div class="presentation-content__preview-description__detali">
                <strong>Размер:</strong> 2.4 МБ
              </div>
              <div class="presentation-content__preview-description__detali">
                <strong>Страниц:</strong> 12
              </div>
              <div class="presentation-content__preview-description__detali">
                <strong>Обновлено:</strong> 15.04.2025
              </div>
            </div>
          </div>
        </div>

        <div class="presentation-content__header" v-if="displayMode === 'embed'">
          <p class="presentation-content__header-title">Презентация компании</p>
          <AppButon @click="downloadPdf" dark
            ><DownloadIcon :width="18" :height="18" fill="white" /> Скачать PDF</AppButon
          >
        </div>
        <div v-if="displayMode === 'embed'" class="presentation-content__embed">
          <div ref="pdfContainer" class="presentation-content__embed-container">
            <div v-if="loading" class="presentation-content__embed-container__loading">
              Загрузка PDF...
            </div>
            <canvas ref="pdfCanvas" class="presentation-content__embed-container__canvas"></canvas>
          </div>
        </div>
        <div v-if="displayMode === 'embed'" class="presentation-content__controls">
          <div class="presentation-content__controls-line"></div>
          <div class="presentation-content__controls-btncontainer">
            <button
              @click="onePage"
              :disabled="currentPage <= 1"
              class="presentation-content__controls-btncontainer__one"
            >
              <ArrowTwoLine :width="20" :height="20" fill="white" />
            </button>
            <button
              @click="prevPage"
              :disabled="currentPage <= 1"
              class="presentation-content__controls-btncontainer__prev"
            >
              <ArrowNext :width="20" :height="20" fill="white" />
            </button>
            <button
              @click="nextPage"
              :disabled="currentPage >= pageCount"
              class="presentation-content__controls-btncontainer__next"
            >
              <ArrowNext :width="20" :height="20" fill="white" />
            </button>
            <button
              @click="latestPage"
              :disabled="currentPage >= pageCount"
              class="presentation-content__controls-btncontainer__latest"
            >
              <ArrowTwoLine :width="20" :height="20" fill="white" />
            </button>
          </div>
          <div class="presentation-content__controls-btncontainer">
            <button @click="zoomOut" class="presentation-content__controls-btncontainer__zoomin">
              <ZoomOut :width="20" :height="20" fill="white" />
            </button>
            <button @click="zoomIn" class="presentation-content__controls-btncontainer__zoomout">
              <ZoomIn :width="20" :height="20" fill="white" />
            </button>
            <a :href="pdfSrc" target="_blank">
              <button class="presentation-content__controls-btncontainer__newpage">
                <NewPageIcon :width="20" :height="20" fill="white" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted, watch } from 'vue'
import previewImageSrc from '@/assets/images/presentation-preview.jpg'
import AppButon from './UI/AppButon.vue'
import DownloadIcon from '@/assets/icons/DownloadIcon.vue'
import EyeIcon from '@/assets/icons/EyeIcon.vue'
import ArrowTwoLine from '@/assets/icons/ArrowTwoLine.vue'
import ArrowNext from '@/assets/icons/ArrowNext.vue'
import ZoomOut from '@/assets/icons/ZoomOut.vue'
import ZoomIn from '@/assets/icons/ZoomIn.vue'
import NewPageIcon from '@/assets/icons/NewPageIcon.vue'

// Путь к PDF-файлу
const pdfSrc = '/src/assets/pdf/PresONR.pdf'
const pdfjsWorkerSrc = '/pdfjs/build/pdf.worker.mjs'

// Управление режимом отображения
const displayMode = ref<'preview' | 'embed'>('preview')
const pdfContainer = ref<HTMLDivElement | null>(null)
const pdfCanvas = ref<HTMLCanvasElement | null>(null)
const loading = ref(true)

// PDF состояние
let pdfDoc: any = null
const pageCount = ref(0)
const currentPage = ref(1)
let currentScale = 1.0

// Функция для рендеринга страницы PDF
const renderPage = async (pageNum: number) => {
  if (!pdfDoc || !pdfCanvas.value || !window.pdfjsLib) return

  const page = await pdfDoc.getPage(pageNum)
  const viewport = page.getViewport({ scale: currentScale })

  const canvas = pdfCanvas.value
  const context = canvas.getContext('2d')
  canvas.height = viewport.height
  canvas.width = viewport.width

  const renderContext = {
    canvasContext: context,
    viewport: viewport,
  }

  await page.render(renderContext).promise
}

// Загрузка PDF документа
const loadPdf = async () => {
  try {
    loading.value = true

    // Проверяем, загружена ли библиотека
    if (!window.pdfjsLib) {
      console.error('PDF.js не загружен')
      loading.value = false
      return
    }

    // Настраиваем путь к воркеру
    window.pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorkerSrc

    // Загружаем PDF
    const loadingTask = window.pdfjsLib.getDocument(pdfSrc)
    pdfDoc = await loadingTask.promise

    pageCount.value = pdfDoc.numPages
    currentPage.value = 1

    await renderPage(currentPage.value)
    loading.value = false
  } catch (error) {
    console.error('Ошибка при загрузке PDF:', error)
    loading.value = false
  }
}
const onePage = async () => {
  if (currentPage.value <= 1) return
  currentPage.value = 1
  await renderPage(currentPage.value)
}
// Функции навигации по страницам
const prevPage = async () => {
  if (currentPage.value <= 1) return
  currentPage.value--
  await renderPage(currentPage.value)
}

const nextPage = async () => {
  if (currentPage.value >= pageCount.value) return
  currentPage.value++
  await renderPage(currentPage.value)
}

const latestPage = async () => {
  if (currentPage.value >= pageCount.value) return
  currentPage.value = pageCount.value
  await renderPage(currentPage.value)
}

const zoomIn = async () => {
  currentScale += 0.25
  await renderPage(currentPage.value)
}

const zoomOut = async () => {
  if (currentScale <= 0.5) return
  currentScale -= 0.25
  await renderPage(currentPage.value)
}

const switchToEmbed = () => {
  displayMode.value = 'embed'
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
</script>

<style lang="scss" scoped>
.section {
  &-prezentation {
    overflow: hidden;
    width: 100vw;
    height: var(--section-prezentation-height);
    background: var(--bg-light-section);
    position: relative;
  }
}

.presentation-container {
  margin-left: auto;
  margin-right: auto;
  margin-top: 59px;
  width: 1032px;
  height: 652px;
  position: relative;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.presentation-content {
  height: 100%;
  &__preview {
    display: flex;
    height: 100%;
    flex-shrink: 0;
    &-img {
      flex-shrink: 0;
      object-fit: cover;
      width: 60%;
      height: 100%;
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      &:hover .presentation-content__preview-overlay {
        opacity: 1;
      }
    }
    &-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(15, 23, 42, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
      &__btn {
        background: #3b82f6;
        color: white;
        border: none;
        border-radius: 4px;
        padding: 10px 15px;
        font-size: 14px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.2s;
        text-decoration: none;
        padding: 12px 20px;
        font-size: 16px;
        &:hover {
          background: #2563eb;
        }
        &::after {
          transform: translateY(1px);
        }
      }
    }
    &-description {
      width: 40%;
      padding: 30px;
      background: white;
      h3 {
        margin-top: 0;
        margin-bottom: 20px;
        font-size: 20px;
        color: #0f172a;
      }
      p {
        margin-bottom: 15px;
        color: #475569;
        line-height: 1.5;
      }
      &__detalis {
        margin-top: 30px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
      }
      &__detali {
        font-size: 14px;
        color: #64748b;
      }
    }
  }
  &__header {
    background: linear-gradient(135deg, #0f172a 0%, rgba(30, 41, 59, 0.9) 100%);
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 19px;
    &-title {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 18px;
      line-height: 89%;
      color: #fff;
    }
  }
  &__embed {
    width: 100%;
    &-container {
      width: 100%;
      height: 522px;
      background: #f1f5f9;
      overflow: auto;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      position: relative;
      &__loading {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 16px;
        color: #64748b;
      }
      &__canvas {
        margin: 20px auto;
        display: block;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      }
    }
  }
  &__controls {
    position: relative;
    z-index: 2;
    background: #f1f5f9;
    height: 70px;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;
    &-line {
      width: 86px;
      height: 3px;
      background-color: #3b82f6;
      position: absolute;
      top: -3px;
      left: 0;
    }
    &-btncontainer {
      display: flex;
      gap: 10px;
      &__one {
        width: 42px;
        height: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #3b82f6;
        border-radius: 3px;
      }
      &__prev {
        width: 42px;
        height: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: rotate(180deg);
        background: #3b82f6;
        border-radius: 3px;
      }
      &__next {
        width: 42px;
        height: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #3b82f6;
        border-radius: 3px;
      }
      &__latest {
        width: 42px;
        height: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: rotate(180deg);
        background: #3b82f6;
        border-radius: 3px;
      }
      &__zoomin {
        width: 42px;
        height: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #3b82f6;
        border-radius: 3px;
      }
      &__zoomout {
        width: 42px;
        height: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #3b82f6;
        border-radius: 3px;
      }
      &__newpage {
        width: 42px;
        height: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #3b82f6;
        border-radius: 3px;
      }
    }
  }
}
</style>
