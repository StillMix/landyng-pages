<template>
  <AppSection
    id="section-about"
    title="Почему мы?"
    subtitle="Мы — команда профессионалов с большим опытом научно-исследовательской работы в области создания информационных управляющих и аналитических систем. На протяжении многих лет мы успешно занимаемся программированием веб-приложений, разработкой распределённых информационно-аналитических, мониторинговых и управляющих систем, а также созданием программной и конструкторской документации в рамках НИОКР по ГОСТ."
    theme="light"
  >
    <div class="about-us-popup">
      <div class="about-us-popup-info">
        <h3 class="about-us-popup-info__title">Делаем быстро и качественно</h3>

        <div v-for="(item, index) in servicesList" :key="index" class="about-us-popup-info-item">
          <div class="about-us-popup-info-item__bullet"></div>
          <p class="about-us-popup-info-item__text">{{ item }}</p>
        </div>
      </div>

      <div class="about-us-popup__img">
        <img src="../assets/images/SectionAboutUs.png" alt="О нас" />
      </div>
    </div>
  </AppSection>
</template>

<script setup lang="ts">
import AppSection from '@/components/UI/AppSection.vue'

const servicesList = [
  'Предпроектное обследование и определение путей решения проблем заказчиков',
  'Разработка технических заданий на создание программного обеспечения',
  'Проведение научных исследований по тематике заказчика',
  'Разработка программного обеспечения',
  'Тестирование программного обеспечения',
  'Разработка программной документации',
]
</script>

<style lang="scss" scoped>
.about-us-popup {
  padding-left: 59px;
  gap: 30px;
  align-items: center;
  display: flex;
  border-radius: 13px;
  width: 100%;
  height: 526px;
  box-shadow: var(--card-box-shadow);
  background: #fff;
  margin-left: auto;
  margin-top: 28px;
  margin-right: auto;

  &-info {
    flex-shrink: 0;
    width: 494px;
    display: flex;
    flex-direction: column;
    gap: 33px;

    &__title {
      font-family: var(--font-family);
      font-weight: var(--font-weight-medium);
      font-size: var(--font-size-xl);
      color: var(--color-text-dark);
      width: 100%;
      margin: 0;
    }

    &-item {
      display: flex;
      width: 100%;
      gap: 7px;

      &__bullet {
        border-radius: 100%;
        background: var(--color-primary);
        width: 14px;
        flex-shrink: 0;
        height: 14px;
      }

      &__text {
        font-family: var(--font-family);
        font-weight: var(--font-weight-light);
        font-size: 20px;
        line-height: 105%;
        color: var(--color-text-gray);
        margin: 0;
      }
    }
  }

  &__img {
    flex-shrink: 0;
    width: 432px;
    height: 415px;
    box-shadow: var(--all-box-shadow);
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;

    img {
      width: 416px;
      height: 399px;
    }
  }
}
</style>
