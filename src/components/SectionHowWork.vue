<!-- src/components/SectionHowWork.vue -->
<template>
  <AppSection id="section-howwork" title="Как мы работаем" theme="light">
    <AnimatedView>
      <div class="section-howWork-cards" data-animation="fade-in-up">
        <img class="section-howWork-cards__img" src="../assets/images/SectionHowWorkImgBck.png" />
        <div class="section-howWork-cards-left">
          <AppCard
            v-for="(step, index) in workSteps"
            :key="index"
            theme="light"
            :icon="step.icon"
            :headerTitle="step.title"
            class="section-howWork-card"
            :data-animation="'fade-in-up'"
            :style="`animation-delay: ${0.3 + index * 0.2}s`"
          >
            <p class="section-howWork-card-text" v-html="step.text"></p>
          </AppCard>
        </div>
      </div>
      <p class="section-howWork__title" data-animation="fade-in-up" style="animation-delay: 1.5s">
        Готовы начать сотрудничество?
      </p>
      <AppButon
        @click="scrollToSection('section-contact')"
        blue
        class="section-howWork__btn"
        data-animation="fade-in-up"
        style="animation-delay: 1.8s"
        >Связаться с нами</AppButon
      >
      <ArrowTwoLine
        class="section-howWork__arrow"
        :width="41"
        :height="41"
        fill="#797B7D"
        data-animation="fade-in-up"
        style="animation-delay: 2s"
      />
    </AnimatedView>
  </AppSection>
</template>

<script setup lang="ts">
import AppSection from './UI/AppSection.vue'
import AppCard from './UI/AppCard.vue'
import CheckIcon from '@/assets/icons/CheckIcon.vue'
import MonitorIcon from '@/assets/icons/MonitorIcon.vue'
import PenIcon from '@/assets/icons/PenIcon.vue'
import SearchIcon from '@/assets/icons/SearchIcon.vue'
import AppButon from './UI/AppButon.vue'
import ArrowTwoLine from '@/assets/icons/ArrowTwoLine.vue'
import AnimatedView from '@/components/AnimatedView.vue'

const workSteps = [
  {
    icon: SearchIcon,
    title: 'Погружаемся в ваши задачи',
    text: 'Не просто собираем требования,а <span>ананализируем вашу аудиторию и конкурентов</span>, чтобы решение было точно «под вас»',
  },
  {
    icon: PenIcon,
    title: 'Создаём понятный прототип',
    text: 'Вы <span>видите структуру будущего продукта</span>до начала разработки — можно внести правки без лишних затрат.',
  },
  {
    icon: MonitorIcon,
    title: 'Разрабатываем с прозрачностью',
    text: 'Вы получаете <span>регулярные отчеты и тестируете промежуточные версии</span> — всё под контролем.',
  },
  {
    icon: CheckIcon,
    title: 'Запускаем и поддерживаем',
    text: 'Мы не просто сдаём проект, а <span>гарантируем стабильную работу</span> и помогаем с обновлениями.',
  },
]

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/styles.scss';
.section {
  &-howWork {
    &-cards {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1032px;
      height: 762px;
      border-radius: 25px;
      box-shadow: 0 25px 19px 0 rgba(0, 0, 0, 0.08);
      background: #fff;
      margin-left: auto;
      margin-right: auto;
      margin-top: 7px;
      position: relative;
      overflow: hidden;
      animation: fadeInUp 0.8s ease-out forwards;

      &__img {
        position: absolute;
        top: 0;
        z-index: 0;
        left: 0;
        width: 100%;
        height: 100%;
        animation: slowZoom 30s infinite alternate ease-in-out;
      }

      &-left {
        position: absolute;
        justify-content: center;
        gap: 56px 80px;
        flex-shrink: 0;
        flex-wrap: wrap;
        display: flex;
        width: 868px;
        z-index: 2;
        perspective: 1000px;
      }
    }

    &-card {
      flex-shrink: 0;
      width: 394px !important;
      height: 143px !important;
      padding: 5px 28px 23px 16px !important;
      border-radius: 12px !important;
      box-shadow: var(--all-box-shadow) !important;
      background: #fff !important;
      display: flex !important;
      flex-direction: column !important;
      opacity: 0;
      transform: translateY(30px) rotateX(10deg);
      position: relative;

      /* Анимация появления карточек с задержкой */
      @for $i from 1 through 4 {
        &:nth-child(#{$i}) {
          animation: cardAppear
            0.8s
            cubic-bezier(0.175, 0.885, 0.32, 1.275)
            forwards
            #{0.3 +
            $i *
            0.2}s;
        }
      }

      /* Синий кружок, который появляется при наведении */
      &::after {
        content: '';
        position: absolute;
        right: -20px;
        top: 50%;
        transform: translateY(-50%);
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: var(--color-primary);
        opacity: 0;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        box-shadow: 0 0 8px rgba(59, 130, 246, 0.5);
      }

      /* Эффект при наведении - ТОЛЬКО появление кружка без поднятия карточки */
      &:hover {
        &::after {
          opacity: 1;
          right: 10px;
        }
      }

      &-title {
        font-family: var(--font-family);
        font-weight: var(--font-weight-semibold);
        font-size: var(--font-size-regular);
        color: var(--color-text-dark);
        margin-top: 8px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        padding-bottom: 5px;
      }

      &-text {
        font-family: var(--font-family);
        font-weight: var(--font-weight-light);
        font-size: 15px;
        color: var(--color-text-dark);
        margin-top: 8px;

        span {
          font-weight: var(--font-weight-semibold);
          color: var(--color-primary);
          position: relative;
          display: inline-block;

          &::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 1px;
            background: var(--color-primary);
            transition: width 0.3s ease;
          }
        }

        &:hover span::after {
          width: 100%;
        }
      }
    }

    &__title {
      font-family: var(--font-family);
      font-weight: var(--font-weight-semibold);
      font-size: 36px;
      color: var(--color-text-dark);
      text-align: center;
      margin-top: 35px;
      opacity: 0;
      transform: translateY(20px);
      animation: fadeInUp 0.7s ease forwards 1.5s;
    }

    &__btn {
      display: block;
      margin-top: 51px;
      margin-left: auto;
      margin-right: auto;
      opacity: 0;
      transform: translateY(15px);
      animation: fadeInUp 0.6s ease forwards 1.8s;
    }

    &__arrow {
      margin-top: 24px;
      display: block;
      transform: rotate(-90deg) translateY(20px);
      margin-left: auto;
      margin-right: auto;
      opacity: 0;
      animation:
        floatArrow 0.6s ease forwards 2s,
        bounceArrow 2s infinite ease-in-out 2.6s;
    }
  }
}

/* Анимации */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes cardAppear {
  0% {
    opacity: 0;
    transform: translateY(30px) rotateX(10deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotateX(0);
  }
}

@keyframes floatArrow {
  0% {
    opacity: 0;
    transform: rotate(-90deg) translateY(20px);
  }
  100% {
    opacity: 1;
    transform: rotate(-90deg) translateY(0);
  }
}

@keyframes bounceArrow {
  0%,
  100% {
    transform: rotate(-90deg) translateX(0);
  }
  50% {
    transform: rotate(-90deg) translateX(10px);
  }
}

@keyframes slowZoom {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
}
</style>
