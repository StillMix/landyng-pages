<template>
  <div
    class="section-main"
    :style="{
      backgroundImage: `url(${currentBackground})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }"
  >
    <div class="section-main__overlay"></div>
    <div class="section-main__text">
      <p class="section-main__text--title">Мы создаем надежные решения для Вас и Вашей компании</p>
      <p class="section-main__text--subtitle">Мы и есть надежное решение Ваших задач!</p>
      <div class="section-main__text--btn">
        <AppButton blue>Наши решения <ArrowOneLine /></AppButton>
        <AppButton white text="Связаться с нами" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import backgroundImage1 from '@/assets/images/SectionMainImg1.png'
import backgroundImage2 from '@/assets/images/SectionMainImg2.png'
import backgroundImage3 from '@/assets/images/SectionMainImg3.png'
import ArrowOneLine from '@/assets/icons/ArrowOneLine.vue'

const backgrounds = [backgroundImage1, backgroundImage2, backgroundImage3]
const currentBackground = ref(backgrounds[0])
let currentIndex = 0
let intervalId: number | null = null

const changeBackground = () => {
  currentIndex = (currentIndex + 1) % backgrounds.length
  currentBackground.value = backgrounds[currentIndex]
}

onMounted(() => {
  intervalId = setInterval(changeBackground, 10000) as unknown as number
})

onBeforeUnmount(() => {
  if (intervalId !== null) {
    clearInterval(intervalId)
  }
})
</script>

<style lang="scss" scoped>
@use '@/assets/styles/styles.scss';
.section {
  &-main {
    @include styles.section-base;
    height: var(--section-main-height);
    display: flex;
    align-items: center;
    transition: background-image 1.5s ease-in-out;

    &__overlay {
      z-index: 0;
      position: absolute;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      background: var(--section-main-overlay);
    }

    &__text {
      width: var(--width-text-main);
      z-index: 1;
      margin-left: var(--section-main-text-left);

      &--title {
        font-weight: var(--font-weight-regular);
        font-size: var(--font-size-main-title);
        font-family: var(--font-family);
        color: var(--section-white-color);
      }

      &--subtitle {
        font-weight: var(--font-weight-regular);
        font-size: var(--font-size-main-subtitle);
        font-family: var(--font-family);
        color: var(--font-color-main-subtitle);
      }

      &--btn {
        margin-top: var(--section-main-btn-top);
        display: flex;
        gap: var(--section-main-gap);
      }
    }
  }
}
</style>
