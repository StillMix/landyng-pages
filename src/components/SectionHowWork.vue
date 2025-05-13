<template>
  <AppSection id="section-numbers" title="Как мы работаем" theme="light">
    <div class="section-howWork-cards">
      <img class="section-howWork-cards__img" src="../assets/images/SectionHowWorkImgBck.png" />
      <div class="section-howWork-cards-left">
        <AppCard
          v-for="(step, index) in workSteps"
          :key="index"
          theme="light"
          :icon="step.icon"
          :headerTitle="step.title"
          class="section-howWork-card"
        >
          <p class="section-howWork-card-text" v-html="step.text"></p>
        </AppCard>
      </div>
    </div>
    <p class="section-howWork__title">Готовы начать сотрудничество?</p>
    <AppButon @click="scrollToSection('section-contact')" blue class="section-howWork__btn"
      >Связаться с нами</AppButon
    >
    <ArrowTwoLine class="section-howWork__arrow" :width="41" :height="41" fill="#797B7D" />
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
      &__img {
        position: absolute;
        top: 0;
        z-index: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      &-left {
        position: absolute;
        justify-content: center;
        gap: 56px 80px;
        flex-shrink: 0;
        flex-wrap: wrap;
        display: flex;
        width: 868px;
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
    }

    &__btn {
      display: block;
      margin-top: 51px;
      margin-left: auto;
      margin-right: auto;
    }

    &__arrow {
      margin-top: 24px;
      display: block;
      transform: rotate(-90deg);
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>
