<template>
  <AppSection id="section-numbers" title="В ЦИФРАХ" theme="dark">
    <AnimatedView>
      <p class="section-number__subtitle" data-animation="fade-in-up">
        Преобразуем идеи в цифровые решения
      </p>

      <div class="section-number__cards">
        <AppCard
          v-for="(stat, index) in stats"
          :key="index"
          theme="dark"
          :icon="stat.icon"
          centered
          contentCentered
          size="default"
          :data-animation="`fade-in`"
          :style="`animation-delay: ${0.3 + index * 0.2}s`"
        >
          <p class="stat-number">
            {{ stat.number }}<span>{{ stat.suffix }}</span>
          </p>
          <p class="stat-description">{{ stat.description }}</p>
        </AppCard>
      </div>
    </AnimatedView>
  </AppSection>
</template>

<script setup lang="ts">
import AppSection from '@/components/UI/AppSection.vue'
import AppCard from '@/components/UI/AppCard.vue'
import AnimatedView from '@/components/AnimatedView.vue'
import TimeIcon from '@/assets/icons/TimeIcon.vue'
import BagIcon from '@/assets/icons/BagIcon.vue'
import PeplesIcon from '@/assets/icons/PeplesIcon.vue'
import RealeseProjectIcon from '@/assets/icons/RealeseProjectIcon.vue'

const stats = [
  {
    icon: TimeIcon,
    number: '10',
    suffix: '+',
    description: 'лет в IT-разработке',
  },
  {
    icon: RealeseProjectIcon,
    number: '50',
    suffix: '+',
    description: 'реализованных проектов',
  },
  {
    icon: PeplesIcon,
    number: '18',
    suffix: '+',
    description: 'экспертов в штате',
  },
  {
    icon: BagIcon,
    number: '15',
    suffix: '+',
    description: 'госструктур и компаний среди заказчиков',
  },
]
</script>

<style lang="scss" scoped>
.section-number {
  &__subtitle {
    font-size: var(--font-size-number-subtitle);
    color: var(--section-white-color);
    font-weight: var(--font-weight-medium);
    margin-top: var(--section-subtitle-top);
    width: var(--width-number-subtitle);
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.8s ease forwards 0.2s;
  }

  &__cards {
    display: flex;
    justify-content: center;
    gap: var(--section-number-gap-card);
    margin-top: var(--section-number-top-card);
    perspective: 1000px;

    .app-card {
      box-shadow: 0 15px 35px rgba(59, 130, 246, 0);
      opacity: 0;
      transform: translateY(30px) rotateY(15deg) scale(0.9);
      animation: cardAppear 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
      &:nth-child(1) {
        animation-delay: 0.3s;
      }
      &:nth-child(2) {
        animation-delay: 0.5s;
      }
      &:nth-child(3) {
        animation-delay: 0.7s;
      }
      &:nth-child(4) {
        animation-delay: 0.9s;
      }
      &:hover {
        transform: translateY(-10px) scale(1.02);
        box-shadow: 0 15px 35px rgba(59, 130, 246, 0.2);
        transition:
          transform 0.4s ease,
          box-shadow 0.4s ease;
      }

      transition:
        transform 0.4s ease,
        box-shadow 0.4s ease;
    }
  }
}

.stat-number {
  font-family: var(--font-family);
  font-weight: var(--font-weight-bold);
  font-size: 42px;
  color: #fff;
  margin-top: 46px;
  text-align: center;
  position: relative;
  transition: color 0.4s ease;

  span {
    font-family: var(--font-family);
    font-weight: var(--font-weight-bold);
    font-size: 31px;
    text-align: center;
    color: var(--color-primary);
    transition: color 0.4s ease;
    display: inline-block;
    transform: translateY(0);
  }
}

.stat-description {
  text-align: center;
  margin-top: 10px;
  font-family: var(--font-family);
  font-weight: var(--font-weight-bold);
  font-size: 19px;
  color: #f8fafc;
  opacity: 0;
  transform: translateY(15px);
  animation: fadeInUp 0.5s ease forwards 1.2s;
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
    transform: translateY(30px) rotateY(15deg) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotateY(0) scale(1);
  }
}

@keyframes pulse {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(-3px);
    opacity: 0.8;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes count-up {
  from {
    opacity: 0.5;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
