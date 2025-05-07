<template>
  <div class="section-prezentation">
    <p class="section-title-light">ПРЕЗЕНТАЦИЯ</p>
    <div class="presentation-container">
      <div class="presentation-header">
        <div class="presentation-title">Презентация компании</div>
        <button class="btn download-btn" @click="downloadPdf">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="18"
            height="18"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          <span style="margin-left: 5px">Скачать PDF</span>
        </button>
      </div>

      <div class="presentation-content">
        <!-- Вариант 1: Предпросмотр с изображением (статический, надежный способ) -->
        <div v-if="displayMode === 'preview'" class="preview-mode">
          <div class="preview-image">
            <img :src="previewImageSrc" alt="Превью презентации" />
            <div class="preview-overlay">
              <button class="btn view-btn" @click="switchToEmbed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width="24"
                  height="24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                Просмотреть онлайн
              </button>
            </div>
          </div>
          <div class="preview-description">
            <h3>О презентации</h3>
            <p>
              Данная презентация содержит подробную информацию о нашей компании, предоставляемых
              услугах и успешно реализованных проектах.
            </p>
            <p>Вы можете скачать презентацию, нажав кнопку "Скачать PDF" или просмотреть онлайн.</p>
            <div class="preview-details">
              <div class="preview-detail"><strong>Формат:</strong> PDF</div>
              <div class="preview-detail"><strong>Размер:</strong> 2.4 МБ</div>
              <div class="preview-detail"><strong>Страниц:</strong> 12</div>
              <div class="preview-detail"><strong>Обновлено:</strong> 15.04.2025</div>
            </div>
          </div>
        </div>

        <!-- Вариант 2: Встроенный PDF через тег object (встроенный просмотрщик) -->
        <div v-if="displayMode === 'embed'" class="embed-mode">
          <object
            :data="pdfSrc"
            type="application/pdf"
            width="100%"
            height="600px"
            class="pdf-object"
          >
            <div class="fallback-message">
              <p>
                Ваш браузер не поддерживает встроенные PDF. Пожалуйста,
                <a :href="pdfSrc" target="_blank">скачайте PDF</a> чтобы просмотреть его.
              </p>
            </div>
          </object>
          <div class="embed-controls">
            <button class="btn back-btn" @click="switchToPreview">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="20"
                height="20"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Вернуться к обзору
            </button>
            <a :href="pdfSrc" target="_blank" class="btn open-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="20"
                height="20"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Открыть в новой вкладке
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Импортируем изображение предпросмотра и PDF
// Замените на фактические пути к вашим файлам
const previewImageSrc = '/src/assets/images/presentation-preview.jpg'
const pdfSrc = '/src/assets/pdf/PresONR.pdf'

// Управление режимом отображения
const displayMode = ref<'preview' | 'embed'>('preview')

const switchToEmbed = () => {
  displayMode.value = 'embed'
}

const switchToPreview = () => {
  displayMode.value = 'preview'
}

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
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.presentation-header {
  height: 60px;
  background: linear-gradient(135deg, #0f172a 0%, rgba(30, 41, 59, 0.9) 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.presentation-title {
  font-size: 18px;
  font-weight: 600;
}

.presentation-content {
  padding: 0;
  background: #f8fafc;
}

/* Стили для режима предпросмотра */
.preview-mode {
  display: flex;
  min-height: 600px;
}

.preview-image {
  width: 60%;
  position: relative;
  overflow: hidden;
  background: #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.preview-overlay {
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
}

.preview-image:hover .preview-overlay {
  opacity: 1;
}

.preview-description {
  width: 40%;
  padding: 30px;
  background: white;
}

.preview-description h3 {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 20px;
  color: #0f172a;
}

.preview-description p {
  margin-bottom: 15px;
  color: #475569;
  line-height: 1.5;
}

.preview-details {
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.preview-detail {
  font-size: 14px;
  color: #64748b;
}

.preview-detail strong {
  color: #334155;
}

/* Стили для режима встроенного просмотра */
.embed-mode {
  width: 100%;
}

.pdf-object {
  border: none;
}

.embed-controls {
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  background: #f1f5f9;
  border-top: 1px solid #e2e8f0;
}

.fallback-message {
  padding: 30px;
  text-align: center;
  background: #f1f5f9;
  color: #475569;
}

/* Кнопки */
.btn {
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
}

.btn:hover {
  background: #2563eb;
}

.btn:active {
  transform: translateY(1px);
}

.download-btn {
  background: linear-gradient(135deg, #0f172a 0%, rgba(30, 41, 59, 0.9) 100%);
}

.download-btn:hover {
  background: #0f172a;
}

.view-btn {
  padding: 12px 20px;
  font-size: 16px;
}

.back-btn,
.open-btn {
  padding: 8px 15px;
}

.back-btn {
  background: #64748b;
}

.back-btn:hover {
  background: #475569;
}

.open-btn {
  background: #0f172a;
}

.open-btn:hover {
  background: #1e293b;
}
</style>
