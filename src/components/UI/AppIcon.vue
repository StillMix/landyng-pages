<template>
  <div :class="['icon-container', { 'is-primary': primary, 'is-light': light }]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  primary: {
    type: Boolean,
    default: false,
  },
  light: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" scoped>
.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  width: 40px;
  height: 40px;

  &.is-primary {
    background: rgba(59, 130, 246, 0.14);
  }

  &.is-light {
    background: rgba(255, 255, 255, 0.1);
  }
}
</style>
