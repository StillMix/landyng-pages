<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  threshold: {
    type: Number,
    default: 0.2,
  },
  rootMargin: {
    type: String,
    default: '0px',
  },
  once: {
    type: Boolean,
    default: true,
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
.is-visible [data-animation] {
  animation-play-state: running !important;
}

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
