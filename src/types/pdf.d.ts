// PDF.js типы
declare global {
  interface Window {
    pdfjsLib: {
      GlobalWorkerOptions: {
        workerSrc: string
      }
      getDocument: (src: string) => {
        promise: Promise<PDFDocumentProxy>
      }
    }
  }
}

interface PDFDocumentProxy {
  numPages: number
  getPage: (pageNumber: number) => Promise<PDFPageProxy>
  destroy: () => void
}

interface PDFPageProxy {
  getViewport: (options: { scale: number }) => PDFViewport
  render: (renderContext: {
    canvasContext: CanvasRenderingContext2D | null
    viewport: PDFViewport
  }) => { promise: Promise<void> }
}

interface PDFViewport {
  height: number
  width: number
}

export {}
