<template>
  <div class="section-number">
    <p class="section-title-dark">В ЦИФРАХ</p>
    <p class="section-number__subtitle">Преобразуем идеи в цифровые решения</p>
    <div class="section-number__cards">
      <div class="section-number__cards-card">
        <div class="section-number__cards-card__icon">
          <TimeIcon
            :width="var(--section-number-icon-size)"
            :height="var(--section-number-icon-size)"
          />
        </div>
        <p class="section-number__cards-card__number">10<span>+</span></p>
        <p class="section-number__cards-card__description">лет в IT-разработке</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TimeIcon from '@/assets/icons/TimeIcon.vue'
</script>

<style lang="scss" scoped>
.section {
  &-number {
    overflow: hidden;
    width: 100vw;
    height: var(--section-number-height);
    background: var(--bg-dark-section);
    position: relative;
    &__subtitle {
      font-size: var(--font-size-number-subtitle);
      color: var(--section-white-color);
      font-weight: var(--font-weight-500);
      margin-top: var(--section-subtitle-top);
      width: var(--width-number-subtitle);
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>
