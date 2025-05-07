<template>
  <div
    class="section-main"
    :style="{
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }"
  >
    <div class="section-main__overlay"></div>
    <div class="section-main__text">
      <p class="section-main__text--title">Мы создаем надежные решения для Вас и Вашей компании</p>
      <p class="section-main__text--subtitle">Мы и есть надежное решение Ваших задач!</p>
      <div class="section-main__text--btn">
        <AppButon />
        <AppButon />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import backgroundImage from '@/assets/images/SectionMainImg1.png'
</script>

<style lang="scss" scoped>
.section {
  &-main {
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    &__overlay {
      z-index: 0;
      position: absolute;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      background: var(--section-main-overlay);
    }
    &__text {
      width: var(--width-text-main);
      z-index: 1;
      &--title {
        font-weight: var(--font-weight-400);
        font-size: var(--font-size-main-title);
        font-family: var(--font-family);
        color: var(--section-white-color);
      }
      &--subtitle {
        font-weight: var(--font-weight-400);
        font-size: var(--font-size-main-subtitle);
        font-family: var(--font-family);
        color: var(--font-color-main-subtitle);
      }
    }
  }
}
</style>
