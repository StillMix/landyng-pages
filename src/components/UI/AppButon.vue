<template>
  <button :type="type" :class="[{ fullwidth }, { blue }, { white }, { dark }]" @click="handleClick">
    <span class="button-content">
      <slot>{{ text }}</slot>
    </span>
  </button>
</template>

<script setup lang="ts">
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
@use '@/assets/styles/styles.scss';
button {
  &.blue {
    @include styles.button-blue;
  }

  &.white {
    @include styles.button-white;
  }

  &.dark {
    @include styles.button-dark;
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
