<template>
  <h2 :class="['app-title', `app-title--${theme}`]">
    <slot></slot>
  </h2>
</template>

<script setup lang="ts">
defineProps({
  theme: {
    type: String,
    default: 'light',
    validator: (value: string) => ['light', 'dark'].includes(value),
  },
})
</script>

<style lang="scss" scoped>
.app-title {
  font-size: var(--section-title-size);
  font-weight: var(--section-title-weight);
  margin-top: var(--section-title-top);
  text-align: center;
  position: relative;
  display: inline-block;
  margin-left: 50%;
  transform: translateX(-50%);
  padding-bottom: 10px;
  margin-bottom: 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 86px;
    height: 2px;
    background-color: var(--color-primary);
  }

  &--light {
    color: var(--section-black-color);
  }

  &--dark {
    color: var(--section-white-color);
  }
}
</style>
