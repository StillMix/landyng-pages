<template>
  <section class="presentation">
    <h2 class="presentation__title">Делаем быстро и качественно</h2>

    <div class="presentation__content">
      <ul class="advantages">
        <li
          v-for="(advantage, idx) in advantages"
          :key="idx"
          class="advantage"
          ref="advantageItems"
          :style="{ '--delay': `${idx * 0.1}s` }"
        >
          <span class="advantage__marker"></span>
          {{ advantage }}
        </li>
      </ul>

      <div class="presentation__image-wrapper">
        <div class="presentation__image" ref="imageContainer">
          <img
            src="@/assets/digital.png"
            alt="Наши технологии"
            class="image"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const advantages = [
  'Предпроектное обследование и определение путей решения проблем заказчиков',
  'Разработка технических заданий на создание программного обеспечения',
  'Проведение научных исследований по тематике заказчика',
  'Разработка программного обеспечения',
  'Тестирование программного обеспечения',
  'Разработка программной документации',
  'Обучение персонала заказчика'
]

const advantageItems = ref<HTMLElement[]>([])
const imageContainer = ref<HTMLElement | null>(null)

onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -20px 0px'
  }

  const animateOnScroll = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('--animated')
      }
    })
  }

  const observer = new IntersectionObserver(animateOnScroll, observerOptions)

  advantageItems.value.forEach(el => observer.observe(el))
  if (imageContainer.value) observer.observe(imageContainer.value)
})
</script>

<style scoped lang="scss">
@import '@/assets/style/global.scss';

.presentation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 30px 20px;
  border-radius: 20px;
  @include glass;

  &__title {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    align-self: center;
    text-align: center;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: var(--text-title);
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}

.advantages {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0;
  list-style: none;
  order: 2;
}

.advantage {
  position: relative;
  padding-left: 2rem;
  font-size: 1.1rem;
  font-family: 'Roboto', 'Arial', sans-serif;
  color: var(--text-main);
  line-height: 1.5;
  opacity: 0;
  transform: translateX(-2rem);
  transition: all 0.6s ease;
  transition-delay: var(--delay, 0s);

  &.--animated {
    opacity: 1;
    transform: translateX(0);
  }

  &__marker {
    position: absolute;
    left: 0;
    top: 0.5rem;
    width: 0.75rem;
    height: 0.75rem;
    background: var(--mark-one);
    border-radius: 50%;
  }
}

.presentation__image {
  flex: 1;
  opacity: 0;
  transform: translateY(2rem);
  transition: all 0.8s ease 0.3s;
  order: 1;
  margin-bottom: 2rem;

  &.--animated {
    opacity: 1;
    transform: translateY(0);
  }
}

.image {
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  max-width: 500px;
  margin: 0 auto;
  display: block;
}

@media (min-width: 768px) {
  .presentation {
    padding: 40px;
    border-radius: 25px;

    &__title {
      font-size: 2.2rem;
      margin-bottom: 3rem;
      text-align: left;
      margin-left: 0;
    }

    &__content {
      flex-direction: row;
      gap: 3rem;
    }
  }

  .advantages {
    order: 1;
  }

  .advantage {
    font-size: 1.25rem;
  }

  .presentation__image {
    order: 2;
    transform: translateX(2rem);
    margin-bottom: 0;

    &.--animated {
      transform: translateX(0);
    }
  }
}

@media (min-width: 992px) {
  .presentation {
    padding: 50px 60px;

    &__title {
      font-size: 2.5rem;
    }
  }
}
</style>
