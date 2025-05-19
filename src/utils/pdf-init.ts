import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist'

// Инициализация PDF.js
const initPdfjs = () => {
  // Используем стандартный путь для worker
  GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs'

  // Возвращаем API для работы с PDF
  return {
    getDocument,
    GlobalWorkerOptions,
  }
}

export default initPdfjs
