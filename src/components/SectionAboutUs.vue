<!-- src/components/SectionAboutUs.vue -->
<template>
  <AppSection
    id="section-about"
    title="Почему мы?"
    subtitle="Мы — команда профессионалов с большим опытом научно-исследовательской работы в области создания информационных управляющих и аналитических систем. На протяжении многих лет мы успешно занимаемся программированием веб-приложений, разработкой распределённых информационно-аналитических, мониторинговых и управляющих систем, а также созданием программной и конструкторской документации в рамках НИОКР по ГОСТ."
    theme="light"
  >
    <AnimatedView>
      <div class="about-us-popup" data-animation="fade-in">
        <div class="about-us-popup-info">
          <h3
            class="about-us-popup-info__title"
            data-animation="slide-in-right"
            style="animation-delay: 0.3s"
          >
            Делаем быстро и качественно
          </h3>

          <div
            v-for="(item, index) in servicesList"
            :key="index"
            class="about-us-popup-info-item"
            :data-animation="'slide-in-right'"
            :style="`animation-delay: ${0.5 + index * 0.15}s`"
          >
            <div class="about-us-popup-info-item__bullet"></div>
            <p class="about-us-popup-info-item__text">{{ item }}</p>
          </div>
        </div>

        <div class="about-us-popup__img" data-animation="slide-in-left" style="animation-delay: 1s">
          <img src="../assets/images/SectionAboutUs.png" alt="О нас" />
        </div>
      </div>
    </AnimatedView>
  </AppSection>
</template>

<script setup lang="ts">
import AppSection from '@/components/UI/AppSection.vue'
import AnimatedView from '@/components/AnimatedView.vue'

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
  overflow: hidden;
  position: relative;
  animation: fadeIn 0.8s ease-out forwards;

  /* Эффект свечения при наведении */
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(255, 255, 255, 0) 60%);
    opacity: 0;
    transition: opacity 1s ease;
    pointer-events: none;
    z-index: 1;
  }

  &:hover::before {
    opacity: 1;
    animation: pulse 3s infinite ease-in-out;
  }

  &-info {
    flex-shrink: 0;
    width: 494px;
    display: flex;
    flex-direction: column;
    gap: 33px;
    position: relative;
    z-index: 2;

    &__title {
      font-family: var(--font-family);
      font-weight: var(--font-weight-medium);
      font-size: var(--font-size-xl);
      color: var(--color-text-dark);
      width: 100%;
      margin: 0;
      transform: translateX(-30px);
      opacity: 0;
      animation: slideInRight 0.7s ease forwards 0.3s;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 0;
        height: 2px;
        background: var(--color-primary);
        animation: lineExpand 1.2s ease forwards 0.8s;
      }
    }

    &-item {
      display: flex;
      align-items: center;
      width: 100%;
      gap: 7px;
      transform: translateX(-20px);
      opacity: 0;

      /* Задержка анимации для каждого элемента */
      @for $i from 1 through 6 {
        &:nth-child(#{$i + 1}) {
          animation: slideInRight 0.6s ease forwards #{0.5 + $i * 0.15}s;
        }
      }

      &__bullet {
        border-radius: 100%;
        background: var(--color-primary);
        width: 14px;
        flex-shrink: 0;
        height: 14px;
        transform: scale(0);
        animation: popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards 1.5s;
      }

      &__text {
        font-family: var(--font-family);
        font-weight: var(--font-weight-light);
        font-size: 20px;
        line-height: 105%;
        color: var(--color-text-gray);
        margin: 0;
        transition:
          transform 0.3s ease,
          color 0.3s ease;
      }

      &:hover {
        .about-us-popup-info-item__bullet {
          box-shadow: 0 0 15px 3px rgba(59, 130, 246, 0.3);
          transition: box-shadow 0.3s ease;
        }

        .about-us-popup-info-item__text {
          transform: translateX(5px);
          color: var(--color-primary);
        }
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
    transform: translateX(50px) scale(0.9);
    opacity: 0;
    animation: slideInLeft 0.8s ease forwards 1s;
    position: relative;
    z-index: 2;
    overflow: hidden;
    border-radius: 12px;
    transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:hover {
      transform: scale(1.02) translateY(-5px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }

    img {
      width: 416px;
      height: 399px;
      transition: transform 0.8s ease;

      &:hover {
        transform: scale(1.05);
      }
    }

    &::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -100%;
      width: 50%;
      height: 200%;
      background: rgba(255, 255, 255, 0.2);
      transform: rotate(30deg);
      animation: shineEffect 3s infinite ease-in-out;
      animation-delay: 2s;
    }
  }
}

/* Анимации */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slideInRight {
  0% {
    transform: translateX(-30px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInLeft {
  0% {
    transform: translateX(50px) scale(0.9);
    opacity: 0;
  }
  100% {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
}

@keyframes popIn {
  0% {
    transform: scale(0);
  }
  70% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes lineExpand {
  0% {
    width: 0;
  }
  100% {
    width: 80px;
  }
}

@keyframes shineEffect {
  0% {
    left: -100%;
  }
  20% {
    left: 120%;
  }
  100% {
    left: 120%;
  }
}

@keyframes pulse {
  0% {
    opacity: 0.2;
    transform: scale(0.95);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0.2;
    transform: scale(0.95);
  }
}
</style>
