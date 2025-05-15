<template>
  <div class="section-prezentation" id="section-prezentation">
    <AppTitle theme="light">Презентация</AppTitle>
    <div class="presentation-container">
      <div class="presentation-content">
        <!-- Режим предпросмотра -->
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
                <strong>Страниц:</strong> {{ pageCount }}
              </div>
              <div class="presentation-content__preview-description__detali">
                <strong>Обновлено:</strong> 15.04.2025
              </div>
            </div>
          </div>
        </div>

        <!-- Режим встроенного просмотра -->
        <template v-if="displayMode === 'embed'">
          <div class="presentation-content__header">
            <p class="presentation-content__header-title">Презентация компании</p>
            <AppButon @click="downloadPdf" dark>
              <DownloadIcon :width="18" :height="18" fill="white" /> Скачать PDF
            </AppButon>
          </div>

          <div class="presentation-content__embed">
            <div ref="pdfContainer" class="presentation-content__embed-container">
              <div v-if="loading" class="presentation-content__embed-container__loading">
                Загрузка PDF...
              </div>
              <canvas
                ref="pdfCanvas"
                class="presentation-content__embed-container__canvas"
              ></canvas>
            </div>
          </div>

          <div class="presentation-content__controls">
            <div
              class="presentation-content__controls-line"
              :style="{ width: lineWidthPercentage + '%' }"
            ></div>

            <div class="presentation-content__controls-btncontainer">
              <button
                @click="onePage"
                :disabled="currentPage <= 1"
                class="presentation-content__controls-btncontainer__one control-button"
              >
                <ArrowTwoLine :width="20" :height="20" fill="white" />
              </button>
              <button
                @click="prevPage"
                :disabled="currentPage <= 1"
                class="presentation-content__controls-btncontainer__prev control-button"
              >
                <ArrowNext :width="20" :height="20" fill="white" />
              </button>
              <button
                @click="nextPage"
                :disabled="currentPage >= pageCount"
                class="presentation-content__controls-btncontainer__next control-button"
              >
                <ArrowNext :width="20" :height="20" fill="white" />
              </button>
              <button
                @click="latestPage"
                :disabled="currentPage >= pageCount"
                class="presentation-content__controls-btncontainer__latest control-button"
              >
                <ArrowTwoLine :width="20" :height="20" fill="white" />
              </button>
            </div>

            <div class="presentation-content__controls-btncontainer">
              <button
                @click="switchToEmbed"
                class="presentation-content__controls-btncontainer__zoomout control-button"
              >
                <ArrowBackPrezentation />
              </button>
              <button
                @click="zoomOut"
                class="presentation-content__controls-btncontainer__zoomin control-button"
              >
                <ZoomOut :width="20" :height="20" fill="white" />
              </button>
              <button
                @click="zoomIn"
                class="presentation-content__controls-btncontainer__zoomout control-button"
              >
                <ZoomIn :width="20" :height="20" fill="white" />
              </button>
              <a :href="pdfSrc" target="_blank">
                <button class="presentation-content__controls-btncontainer__newpage control-button">
                  <NewPageIcon :width="20" :height="20" fill="white" />
                </button>
              </a>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppTitle from './UI/AppTitle.vue'
import previewImageSrc from '@/assets/images/presentation-preview.jpg'
import AppButon from './UI/AppButon.vue'
import DownloadIcon from '@/assets/icons/DownloadIcon.vue'
import EyeIcon from '@/assets/icons/EyeIcon.vue'
import ArrowTwoLine from '@/assets/icons/ArrowTwoLine.vue'
import ArrowNext from '@/assets/icons/ArrowNext.vue'
import ZoomOut from '@/assets/icons/ZoomOut.vue'
import ZoomIn from '@/assets/icons/ZoomIn.vue'
import NewPageIcon from '@/assets/icons/NewPageIcon.vue'
import usePdfViewer from '@/composables/usePdfViewer'
import ArrowBackPrezentation from '@/assets/icons/ArrowBackPrezentation.vue'

const pdfSrc = '/src/assets/pdf/PresONR.pdf'
const pdfjsWorkerSrc = '/pdfjs/build/pdf.worker.mjs'

const {
  displayMode,
  pdfCanvas,
  loading,
  pageCount,
  currentPage,
  lineWidthPercentage,
  pdfContainer,
  switchToEmbed,
  goToFirstPage: onePage,
  goToPrevPage: prevPage,
  goToNextPage: nextPage,
  goToLastPage: latestPage,
  zoomIn,
  zoomOut,
  downloadPdf,
} = usePdfViewer(pdfSrc, pdfjsWorkerSrc)
</script>

<style lang="scss" scoped>
/* Базовая анимация для всех переходов */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Добавляем общие переходы для всех элементов */
* {
  transition: all 0.3s ease;
}

/* Контрольные кнопки с общими стилями */
.control-button {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(0);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    background: #2563eb !important;
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(59, 130, 246, 0.2);
  }

  &:disabled {
    opacity: 0.5;
    transform: translateY(0);
    box-shadow: none;
    background: rgba(59, 130, 246, 0.7) !important;
    cursor: not-allowed;
  }
}

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
  transition:
    box-shadow 0.4s ease,
    transform 0.4s ease;

  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
}

.presentation-content {
  height: 100%;
  &__preview {
    display: flex;
    height: 100%;
    flex-shrink: 0;
    animation: fadeIn 0.5s ease-in-out;
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
        transition: transform 0.5s ease;
      }
      &:hover {
        img {
          transform: scale(1.03);
        }
        .presentation-content__preview-overlay {
          opacity: 1;
        }
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
      transition:
        opacity 0.4s ease,
        background 0.3s ease;
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
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        text-decoration: none;
        padding: 12px 20px;
        font-size: 16px;
        transform: translateY(0);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

        &:hover {
          background: #2563eb;
          transform: translateY(-3px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
        }

        &:active {
          transform: translateY(-1px);
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }
      }
    }
    &-description {
      width: 40%;
      padding: 30px;
      background: white;
      transition: background-color 0.3s ease;
      h3 {
        margin-top: 0;
        margin-bottom: 20px;
        font-size: 20px;
        color: #0f172a;
        transition: color 0.3s ease;
      }
      p {
        margin-bottom: 15px;
        color: #475569;
        line-height: 1.5;
        transition: color 0.3s ease;
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
        transition: color 0.3s ease;

        &:hover {
          color: #3b82f6;
        }
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
    transition: padding 0.3s ease;
    animation: fadeIn 0.5s ease-in-out;
    &-title {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 18px;
      line-height: 89%;
      color: #fff;
      transition:
        font-size 0.3s ease,
        color 0.3s ease;
    }
  }
  &__embed {
    width: 100%;
    animation: fadeIn 0.5s ease-in-out;
    &-container {
      width: 100%;
      height: 522px;
      background: #f1f5f9;
      overflow: auto;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      position: relative;
      transition: background 0.3s ease;
      &__loading {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 16px;
        color: #64748b;
        animation: pulse 1.5s infinite ease-in-out;
      }
      &__canvas {
        margin: 20px auto;
        display: block;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        transition:
          opacity 0.4s ease,
          transform 0.4s ease,
          box-shadow 0.4s ease;
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
    animation: fadeIn 0.5s ease-in-out;
    &-line {
      width: 0;
      height: 3px;
      background-color: #3b82f6;
      position: absolute;
      top: -3px;
      left: 0;
      transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
    &-btncontainer {
      display: flex;
      gap: 10px;
      transition: gap 0.3s ease;
      &__one,
      &__prev,
      &__next,
      &__latest,
      &__zoomin,
      &__zoomout,
      &__newpage {
        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
          background: #2563eb !important;
        }

        &:active {
          transform: translateY(0);
          box-shadow: 0 2px 6px rgba(59, 130, 246, 0.2);
        }

        &:disabled {
          opacity: 0.5;
          transform: translateY(0);
          box-shadow: none;
          background: rgba(59, 130, 246, 0.7) !important;
          cursor: not-allowed;
        }
        width: 42px;
        height: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #3b82f6;
        border-radius: 3px;
        cursor: pointer;
        border: none;
        outline: none;
      }
      &__prev {
        transform: rotate(180deg);
        &:hover {
          transform: rotate(180deg) translateY(2px);
        }

        &:active {
          transform: rotate(180deg) translateY(0);
        }
        &:disabled {
          transform: rotate(180deg) translateY(0);
        }
      }
      &__latest {
        transform: rotate(180deg);
        &:hover {
          transform: rotate(180deg) translateY(2px);
        }

        &:active {
          transform: rotate(180deg) translateY(0);
        }
        &:disabled {
          transform: rotate(180deg) translateY(0);
        }
      }
    }
  }
}

/* Пульсирующая анимация для загрузки */
@keyframes pulse {
  0% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(0.95);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(0.95);
  }
}

/* Анимация перехода страниц */
.page-transition {
  transition:
    opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.5s ease;
}

/* Эффект тени для текущей страницы */
.presentation-content__embed-container__canvas {
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15) !important;
}

/* Плавная анимация при переключении между режимами */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Анимация слайда для переключения страниц */
@keyframes slideFromRight {
  from {
    transform: translateX(30px) scale(0.95);
    opacity: 0;
  }
  to {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
}

@keyframes slideFromLeft {
  from {
    transform: translateX(-30px) scale(0.95);
    opacity: 0;
  }
  to {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
}

/* Анимация масштабирования */
@keyframes zoomIn {
  from {
    transform: scale(0.9);
    opacity: 0.6;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes zoomOut {
  from {
    transform: scale(1.1);
    opacity: 0.6;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
