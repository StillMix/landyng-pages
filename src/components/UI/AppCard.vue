<template>
  <div
    :class="[
      'app-card',
      { 'app-card--dark': theme === 'dark', 'app-card--light': theme === 'light' },
    ]"
  >
    <div
      v-if="$slots.header || title || icon"
      :class="['app-card__header', { 'app-card__header--light': theme === 'light' }]"
    >
      <div
        v-if="icon"
        class="app-card__icon"
        :class="{
          'app-card__icon--dark': theme === 'dark',
          'app-card__icon--light': theme === 'light',
        }"
      >
        <component :is="icon" :width="iconSize" :height="iconSize" :fill="iconFill" />
      </div>
      <p v-if="headerTitle">{{ headerTitle }}</p>
    </div>
    <div class="app-card__content" :class="{ 'app-card__content--centered': contentCentered }">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType, CSSProperties } from 'vue'
import type { IconComponent } from '@/types/components'
defineProps({
  title: {
    type: String,
    default: '',
  },
  theme: {
    type: String,
    default: 'light',
    validator: (value: string) => ['light', 'dark'].includes(value),
  },
  headerTitle: {
    type: String,
    default: null,
  },
  icon: {
    type: Object as PropType<IconComponent>,
    default: null,
  },
  iconSize: {
    type: [Number, String],
    default: 29,
  },
  iconFill: {
    type: String,
    default: '#3B82F6',
  },
  iconRounded: {
    type: Boolean,
    default: true,
  },
  centered: {
    type: Boolean,
    default: false,
  },
  contentCentered: {
    type: Boolean,
    default: false,
  },
  bordered: {
    type: Boolean,
    default: true,
  },
  hoverable: {
    type: Boolean,
    default: true,
  },
  flat: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'default',
    validator: (value: string) => ['small', 'default', 'large', 'auto'].includes(value),
  },
  customStyle: {
    type: Object as PropType<CSSProperties>,
    default: () => ({}),
  },
  width: {
    type: [String, Number],
    default: null,
  },
  height: {
    type: [String, Number],
    default: null,
  },
})
</script>

<style lang="scss" scoped>
.app-card {
  overflow: hidden;
  &--dark {
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    width: 222px;
    height: 309px;
    background: rgba(255, 255, 255, 0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    &--light {
      border-radius: 6px;
      width: 40px;
      height: 40px;
      background: rgba(59, 130, 246, 0.14);
    }
    &--dark {
      width: 60px;
      margin-top: 7px;
      height: 60px;
      border-radius: 100%;
      background: rgba(59, 130, 246, 0.15);
      box-shadow: 0 0 30px 0 rgba(59, 130, 246, 0.2);
    }
  }
  &__header {
    &--light {
      display: flex;
      align-items: center;
      gap: 10px;
      padding-bottom: 5px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);
      p {
        font-family: var(--font-family);
        font-weight: 600;
        font-size: 17px;
        color: #000;
      }
    }
  }
}
</style>
