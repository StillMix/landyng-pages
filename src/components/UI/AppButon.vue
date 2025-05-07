<template>
  <button :type="type" :class="[{ fullwidth }, { blue }, { white }]" @click="handleClick">
    <slot>{{ text }}</slot>
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
button {
  padding: var(--btn-padding);
  border-radius: 4px;
  cursor: pointer;
  font-family: var(--font-family);
  font-weight: 500;
  border: none;
  outline: none;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: translateY(1px);
  }
}

.fullwidth {
  width: 100%;
}

.blue {
  background-color: var(--btn-image-color);
  color: var(--section-white-color, #fff);
}

.white {
  background-color: transparent;
  color: var(--section-white-color, #fff);
  border: 1px solid var(--section-white-color, #fff);
}
</style>
