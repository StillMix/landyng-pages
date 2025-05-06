<template>
  <div class="slogan-wrapper" ref="wrapper">
    <div class="slogan">
      <h1 class="slogan-one">Мы создаем надежные решения для Вас и Вашей компании</h1>
      <h1 class="slogan-two">Мы и есть надежное решение Ваших задач!</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const wrapper = ref<HTMLElement>();

onMounted(() => {
  setTimeout(() => {
    if (wrapper.value) {
      wrapper.value.classList.add('animate-in');
    }
  }, 1000);
});
</script>

<style scoped lang="scss">
.slogan-wrapper {
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.slogan {
  position: relative;
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  isolation: isolate;
  max-width: 80vw;
  opacity: 0;
  transform: scale(0.95);
  transition: all 0.8s cubic-bezier(0.33, 1, 0.68, 1);
}

.slogan-wrapper.animate-in .slogan {
  opacity: 1;
  transform: scale(1);
}

.slogan::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.4) 100%
  );
  border-radius: 20px;
  backdrop-filter: blur(10px);
  z-index: -1;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 1s cubic-bezier(0.65, 0, 0.35, 1);
}

.slogan-wrapper.animate-in .slogan::before {
  transform: scaleX(1);
}

.slogan-one,
.slogan-two {
  color: white;
  text-shadow:
    0 2px 4px rgba(0, 0, 0, 0.5),
    0 1px 2px rgba(255, 255, 255, 0.3);
  line-height: 1.3;
  margin: 0 auto;
  padding: 10px 0;
  font-size: clamp(24px, 3vw, 48px);
  font-weight: 700;
  max-width: 50vw;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}

.slogan-wrapper.animate-in .slogan-one {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 1.3s;
}

.slogan-wrapper.animate-in .slogan-two {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 1.5s;
}

</style>
