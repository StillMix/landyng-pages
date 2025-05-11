<template>
  <section :class="['app-section', `app-section--${theme}`, `app-section--${height}`]" :id="id">
    <AppTitle v-if="title" :theme="theme">{{ title }}</AppTitle>

    <p v-if="subtitle" class="app-section__subtitle">
      {{ subtitle }}
    </p>

    <div class="app-section__content">
      <slot></slot>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppTitle from './AppTitle.vue'

defineProps({
  id: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
  theme: {
    type: String,
    default: 'light',
    validator: (value: string) => ['light', 'dark'].includes(value),
  },
  height: {
    type: String,
    default: 'auto',
    validator: (value: string) => ['auto', 'full', 'content'].includes(value),
  },
})
</script>

<style lang="scss" scoped>
.app-section {
  width: var(--section-width);
  position: relative;
  overflow: hidden;
  padding-bottom: 100px;
  &--light {
    background: var(--bg-light-section);
  }

  &--dark {
    background: var(--bg-dark-section);
  }

  &--full {
    height: 100vh;
  }

  &--auto {
    // Берем высоту из CSS переменной в зависимости от имени секции
    height: auto; // Будет переопределено в родительском компоненте
  }

  &--content {
    min-height: 500px;
    height: auto;
  }

  &__subtitle {
    font-family: var(--font-family);
    font-weight: var(--font-weight-regular);
    font-size: var(--font-size-large);
    line-height: 141%;
    text-align: center;
    margin: 24px auto 0;
    color: #3b3b3b;
    width: var(--section-content-width);

    .app-section--dark & {
      color: rgba(255, 255, 255, 0.8);
    }
  }

  &__content {
    width: var(--section-content-width);
    margin-left: auto;
    margin-right: auto;
    padding-top: 30px;
  }
}
</style>
