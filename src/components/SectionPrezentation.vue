<template>
  <div class="section-prezentation">
    <p class="section-title-light">ПРЕЗЕНТАЦИЯ</p>
    <div class="pdf-container">
      <div class="pdf-header">
        <div class="pdf-title">Презентация компании</div>
        <button class="btn download-btn">
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

      <div class="pdf-content">
        <div class="pdf-page">
          <div class="page-placeholder">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3b82f6"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <line x1="10" y1="9" x2="8" y2="9"></line>
            </svg>
            <p style="margin-top: 15px">Ваша PDF презентация</p>
          </div>
        </div>
        <div class="pdf-progress"></div>
      </div>

      <div class="pdf-controls">
        <div class="page-nav">
          <button class="btn btn-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
          </button>
          <button class="btn btn-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button class="btn btn-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <button class="btn btn-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div class="pdf-page-counter">
          Страница <span id="current-page">1</span> из <span id="total-pages">12</span>
        </div>

        <div class="zoom-controls">
          <button class="btn btn-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"
              />
            </svg>
          </button>
          <button class="btn btn-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
              />
            </svg>
          </button>
          <button class="btn btn-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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

.pdf-container {
  margin-left: auto;
  margin-right: auto;
  margin-top: 59px;
  width: 1032px;
  height: 652px;
  background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf2 100%);
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.pdf-header {
  height: 60px;
  background: linear-gradient(135deg, #0f172a 0%, rgba(30, 41, 59, 0.9) 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.pdf-title {
  font-size: 18px;
  font-weight: 600;
}

.pdf-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 20px;
}

.pdf-page {
  background: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  width: 640px;
  height: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  transition: transform 0.3s ease;
}

.page-placeholder {
  color: #777;
  font-size: 24px;
  text-align: center;
}

.pdf-controls {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

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
}

.btn:hover {
  background: #2563eb;
}

.btn:active {
  transform: translateY(1px);
}

.btn-icon {
  width: 42px;
  height: 42px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-icon svg {
  width: 20px;
  height: 20px;
}

.pdf-page-counter {
  background: rgba(255, 255, 255, 0.8);
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 14px;
  color: #1e293b;
  display: flex;
  align-items: center;
  margin: 0 15px;
}

.download-btn {
  background: linear-gradient(135deg, #0f172a 0%, rgba(30, 41, 59, 0.9) 100%);
}

.download-btn:hover {
  background: #0f172a;
}

.zoom-controls {
  display: flex;
  gap: 10px;
  margin-left: auto;
}

.page-nav {
  display: flex;
  gap: 10px;
  margin-right: auto;
}

.pdf-progress {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  background: #3b82f6;
  width: 30%;
  transition: width 0.3s ease;
}
</style>
