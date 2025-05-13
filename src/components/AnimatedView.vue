<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Экспортируем свойства из родительского компонента
const props = defineProps({
  threshold: {
    type: Number,
    default: 0.2, // Порог видимости по умолчанию (20%)
  },
  rootMargin: {
    type: String,
    default: '0px', // Отступ по умолчанию
  },
  once: {
    type: Boolean,
    default: true, // По умолчанию анимация запускается только один раз
  },
})

const isVisible = ref(false)
const elementRef = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (window.IntersectionObserver) {
    observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        isVisible.value = entry.isIntersecting
        // Если установлен флаг "один раз" и элемент видим, отключаем наблюдение
        if (props.once && entry.isIntersecting && observer) {
          observer.disconnect()
        }
      },
      {
        threshold: props.threshold,
        rootMargin: props.rootMargin,
      },
    )

    if (elementRef.value) {
      observer.observe(elementRef.value)
    }
  } else {
    // Запасной вариант, если браузер не поддерживает IntersectionObserver
    isVisible.value = true
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<template>
  <div ref="elementRef">
    <div :class="{ 'is-visible': isVisible }">
      <slot />
    </div>
  </div>
</template>

<style>
/* Базовый класс для анимированных элементов */
.is-visible [data-animation] {
  animation-play-state: running !important;
}

/* Скрытое состояние для всех анимируемых элементов */
[data-animation] {
  animation-play-state: paused !important;
  animation-fill-mode: both !important;
}

/* Предопределенные анимации */
[data-animation='fade-in'] {
  animation: fadeIn 0.8s ease forwards;
}

[data-animation='fade-in-up'] {
  animation: fadeInUp 0.8s ease forwards;
}

[data-animation='slide-in-right'] {
  animation: slideInRight 0.7s ease forwards;
}

[data-animation='slide-in-left'] {
  animation: slideInLeft 0.7s ease forwards;
}
</style>
