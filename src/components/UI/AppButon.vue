<template>
  <button :type="type" :class="[{ fullwidth }, { blue }, { white }, { dark }]" @click="handleClick">
    <span class="button-content">
      <slot>{{ text }}</slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

defineProps({
  blue: {
    type: Boolean,
    default: false,
  },
  white: {
    type: Boolean,
    default: false,
  },
  dark: {
    type: Boolean,
    default: false,
  },
  fullwidth: {
    type: Boolean,
    default: false,
  },

  text: {
    type: String,
    default: '',
  },

  type: {
    type: String as () => 'button' | 'submit' | 'reset',
    default: 'button',
  },
})

const emit = defineEmits(['click'])

const handleClick = (event: MouseEvent) => {
  emit('click', event)
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/styles.css';
button {
  &.blue {
    @include button-blue;
  }

  &.white {
    @include button-white;
  }

  &.dark {
    @include button-dark;
  }
}

.button-content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.fullwidth {
  width: 100%;
}
</style>
