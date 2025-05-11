<template>
  <AppSection id="section-numbers" title="В ЦИФРАХ" theme="dark">
    <p class="section-number__subtitle">Преобразуем идеи в цифровые решения</p>

    <div class="section-number__cards">
      <AppCard
        v-for="(stat, index) in stats"
        :key="index"
        theme="dark"
        :icon="stat.icon"
        centered
        contentCentered
        size="default"
      >
        <p class="stat-number">
          {{ stat.number }}<span>{{ stat.suffix }}</span>
        </p>
        <p class="stat-description">{{ stat.description }}</p>
      </AppCard>
    </div>
  </AppSection>
</template>

<script setup lang="ts">
import AppSection from '@/components/UI/AppSection.vue'
import AppCard from '@/components/UI/AppCard.vue'
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
  }

  &__cards {
    display: flex;
    justify-content: center;
    gap: var(--section-number-gap-card);
    margin-top: var(--section-number-top-card);
  }
}

.stat-number {
  font-family: var(--font-family);
  font-weight: var(--font-weight-bold);
  font-size: 42px;
  color: #fff;
  margin-top: 46px;
  text-align: center;

  span {
    font-family: var(--font-family);
    font-weight: var(--font-weight-bold);
    font-size: 31px;
    text-align: center;
    color: var(--color-primary);
  }
}

.stat-description {
  text-align: center;
  margin-top: 10px;
  font-family: var(--font-family);
  font-weight: var(--font-weight-bold);
  font-size: 19px;
  color: #f8fafc;
}
</style>
