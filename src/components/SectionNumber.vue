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
@use '@/assets/styles/styles.scss';
.section {
  &-number {
    @include styles.section-dark;
    height: var(--section-number-height);

    &__subtitle {
      font-size: var(--font-size-number-subtitle);
      color: var(--section-white-color);
      font-weight: var(--font-weight-medium);
      margin-top: var(--section-subtitle-top);
      width: var(--width-number-subtitle);
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }

    &__cards {
      width: var(--section-content-width);
      margin-left: auto;
      margin-right: auto;
      display: flex;
      justify-content: center;
      gap: var(--section-number-gap-card);
      margin-top: var(--section-number-top-card);

      &-card {
        @include styles.card-dark;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: var(--section-number-card-width);
        height: var(--section-number-card-height);

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
          font-weight: var(--font-weight-bold);
          font-size: 42px;
          color: #fff;
          margin-top: 46px;

          span {
            font-family: var(--font-family);
            font-weight: var(--font-weight-bold);
            font-size: 31px;
            text-align: center;
            color: var(--color-primary);
          }
        }

        &__description {
          text-align: center;
          margin-top: 10px;
          font-family: var(--font-family);
          font-weight: var(--font-weight-bold);
          font-size: 19px;
          color: #f8fafc;
        }
      }
    }
  }
}
</style>
