<template>
  <AppSection id="section-numbers" title="Как мы работаем" theme="light">
    <div class="section-howWork-cards">
      <div class="section-howWork-cards-left">
        <div class="section-howWork-cards-left-card">
          <div class="section-howWork-cards-left-card-header">
            <div class="section-howWork-cards-left-card-header__img">
              <SearchIcon :width="29" :height="29" fill="#3B82F6" />
            </div>
            <p class="section-howWork-cards-left-card-header__title">Погружаемся в ваши задачи</p>
          </div>
          <p class="section-howWork-cards-left-card__text">
            Не просто собираем требования,а
            <span>ананализируем вашу аудиторию и конкурентов</span>, чтобы решение было точно «под
            вас»
          </p>
        </div>

        <div class="section-howWork-cards-left-card">
          <div class="section-howWork-cards-left-card-header">
            <div class="section-howWork-cards-left-card-header__img">
              <PenIcon :width="29" :height="29" fill="#3B82F6" />
            </div>
            <p class="section-howWork-cards-left-card-header__title">Создаём понятный прототип</p>
          </div>
          <p class="section-howWork-cards-left-card__text">
            Вы <span>видите структуру будущего продукта</span>до начала разработки — можно внести
            правки без лишних затрат.
          </p>
        </div>

        <div class="section-howWork-cards-left-card">
          <div class="section-howWork-cards-left-card-header">
            <div class="section-howWork-cards-left-card-header__img">
              <MonitorIcon :width="29" :height="29" fill="#3B82F6" />
            </div>
            <p class="section-howWork-cards-left-card-header__title">
              Разрабатываем с прозрачностью
            </p>
          </div>
          <p class="section-howWork-cards-left-card__text">
            Вы получаете <span>регулярные отчеты и тестируете промежуточные версии</span> — всё под
            контролем.
          </p>
        </div>

        <div class="section-howWork-cards-left-card">
          <div class="section-howWork-cards-left-card-header">
            <div class="section-howWork-cards-left-card-header__img">
              <CheckIcon :width="29" :height="29" fill="#3B82F6" />
            </div>
            <p class="section-howWork-cards-left-card-header__title">Запускаем и поддерживаем</p>
          </div>
          <p class="section-howWork-cards-left-card__text">
            Мы не просто сдаём проект, а <span>гарантируем стабильную работу</span> и помогаем с
            обновлениями.
          </p>
        </div>
      </div>
      <div class="section-howWork-cards-right">
        <img src="../assets/images/SectionHowWorkImg.png" />
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
import CheckIcon from '@/assets/icons/CheckIcon.vue'
import MonitorIcon from '@/assets/icons/MonitorIcon.vue'
import PenIcon from '@/assets/icons/PenIcon.vue'
import SearchIcon from '@/assets/icons/SearchIcon.vue'
import AppButon from './UI/AppButon.vue'
import ArrowTwoLine from '@/assets/icons/ArrowTwoLine.vue'
const stats = [
  {
    icon: SearchIcon,
    header: '10',
    span: '+',
    description: 'лет в IT-разработке',
  },
  {
    icon: PenIcon,
    header: '50',
    span: '+',
    description: 'реализованных проектов',
  },
  {
    icon: MonitorIcon,
    header: '18',
    span: '+',
    description: 'экспертов в штате',
  },
  {
    icon: CheckIcon,
    header: 'Погружаемся в ваши задачи',
    span: '+',
    description: 'госструктур и компаний среди заказчиков',
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
    @include styles.section-light;
    height: var(--section-howwork-height);

    &-cards {
      display: flex;
      align-items: center;
      width: 1195px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 7px;
      justify-content: space-between;

      &-left {
        justify-content: center;
        gap: 22px;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;

        &-card {
          @include styles.card-light;
          width: 394px;
          height: 143px;
          padding: 5px 28px 23px 16px;

          &-header {
            display: flex;
            align-items: center;
            gap: 10px;
            padding-bottom: 5px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.06);

            &__img {
              @include styles.icon-container-primary;
              width: 40px;
              height: 40px;
              border-radius: 6px;
            }

            &__title {
              font-family: var(--font-family);
              font-weight: var(--font-weight-semibold);
              font-size: var(--font-size-regular);
              color: var(--color-text-dark);
            }
          }

          &__text {
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
      }

      &-right {
        flex-shrink: 0;
        width: 690px;
        height: 690px;
        border-radius: 100%;
        background: rgba(255, 255, 255, 0.4);
        box-shadow: var(--all-box-shadow);
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 690px;
          height: 632px;
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
