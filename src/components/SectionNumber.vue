<template>
  <div class="section-number">
    <p class="section-title-dark">В ЦИФРАХ</p>
    <p class="section-number__subtitle">Преобразуем идеи в цифровые решения</p>
    <div class="section-number__cards">
      <div class="section-number__cards-card">
        <div class="section-number__cards-card__icon">
          <TimeIcon fill="#3B82F6" :width="31" :height="31" />
        </div>
        <p class="section-number__cards-card__number">10<span>+</span></p>
        <p class="section-number__cards-card__description">лет в IT-разработке</p>
      </div>
      <div class="section-number__cards-card">
        <div class="section-number__cards-card__icon">
          <RealeseProjectIcon fill="#3B82F6" :width="31" :height="31" />
        </div>
        <p class="section-number__cards-card__number">50<span>+</span></p>
        <p class="section-number__cards-card__description">реализованных проектов</p>
      </div>
      <div class="section-number__cards-card">
        <div class="section-number__cards-card__icon">
          <PeplesIcon fill="#3B82F6" :width="31" :height="31" />
        </div>
        <p class="section-number__cards-card__number">18<span>+</span></p>
        <p class="section-number__cards-card__description">экспертов в штате</p>
      </div>
      <div class="section-number__cards-card">
        <div class="section-number__cards-card__icon">
          <BagIcon fill="#3B82F6" :width="31" :height="31" />
        </div>
        <p class="section-number__cards-card__number">15<span>+</span></p>
        <p class="section-number__cards-card__description">
          госструктур и компаний среди заказчиков
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TimeIcon from '@/assets/icons/TimeIcon.vue'
import BagIcon from '@/assets/icons/BagIcon.vue'
import PeplesIcon from '@/assets/icons/PeplesIcon.vue'
import RealeseProjectIcon from '@/assets/icons/RealeseProjectIcon.vue'
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
    &__cards {
      width: var(--section-width-blocks);
      margin-left: auto;
      margin-right: auto;
      display: flex;
      justify-content: center;
      gap: var(--section-number-gap-card);
      margin-top: var(--section-number-top-card);
      &-card {
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        width: var(--section-number-card-width);
        height: var(--section-number-card-height);
        background: rgba(255, 255, 255, 0.05);
        &__icon {
          margin-bottom: 15px;
          width: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 60px;
          border-radius: 100%;
          background: rgba(59, 130, 246, 0.15);
          box-shadow: 0 0 30px 0 rgba(59, 130, 246, 0.2);
          margin-top: 7px;
        }
        &__number {
          font-family: var(--font-family);
          font-weight: 700;
          font-size: 42px;
          color: #fff;
          margin-top: 46px;
          span {
            font-family: var(--font-family);
            font-weight: 700;
            font-size: 31px;
            text-align: center;
            color: #3b82f6;
          }
        }
        &__description {
          text-align: center;
          margin-top: 10px;
          font-family: var(--font-family);
          font-weight: 700;
          font-size: 19px;
          color: #f8fafc;
        }
      }
    }
  }
}
</style>
