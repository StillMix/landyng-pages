<template>
  <div
    class="menu"
    :class="{
      'menu--dark': isDarkSection,
      'menu--light': !isDarkSection,
      'menu--hidden': isMainSection,
    }"
  >
    <button
      v-for="(item, index) in menuItems"
      :key="index"
      class="menu__btn"
      :class="{
        'menu__btn--active': activeIndex === index,
        'menu__btn--dark': !isDarkSection,
        'menu__btn--light': isDarkSection,
      }"
      @click="scrollToSection(item.section)"
    >
      <component
        :is="item.icon"
        width="24"
        height="24"
        :fill="isDarkSection ? '#0f172a' : 'white'"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import CompaniesIcon from '@/assets/icons/MenuIcon/CompaniesIcon.vue'
import ContactIcon from '@/assets/icons/MenuIcon/ContactIcon.vue'
import DecisionsIcon from '@/assets/icons/MenuIcon/DecisionsIcon.vue'
import HowWorkIcon from '@/assets/icons/MenuIcon/HowWorkIcon.vue'
import NumberIcon from '@/assets/icons/MenuIcon/NumberIcon.vue'
import PrezentationIcon from '@/assets/icons/MenuIcon/PrezentationIcon.vue'
import WhyWeIcon from '@/assets/icons/MenuIcon/WhyWeIcon.vue'

const activeIndex = ref(0)
const isDarkSection = ref(false)
const isMainSection = ref(true)

const menuItems = [
  { icon: WhyWeIcon, section: 'section-about' },
  { icon: NumberIcon, section: 'section-numbers' },
  { icon: HowWorkIcon, section: 'section-howwork' },
  { icon: ContactIcon, section: 'section-contact' },
  { icon: CompaniesIcon, section: 'section-companies' },
  { icon: DecisionsIcon, section: 'section-decisions' },
  { icon: PrezentationIcon, section: 'section-prezentation' },
]

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}

// Определяем текущую секцию и стиль меню в зависимости от положения скролла
const handleScroll = () => {
  const scrollPosition = window.scrollY + window.innerHeight / 2
  const sections = document.querySelectorAll(
    'section, .section-main, .section-contact, .section-decisions, .section-prezentation, .section-companes',
  )

  // Проверяем, находимся ли мы в главной секции
  const mainSection = document.querySelector('.section-main')
  if (mainSection) {
    const mainSectionBottom = mainSection.getBoundingClientRect().bottom + window.scrollY
    isMainSection.value = scrollPosition < mainSectionBottom
  }

  // Определяем активную секцию
  let foundActiveSection = false
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top + window.scrollY
    const sectionBottom = sectionTop + section.getBoundingClientRect().height
    console.log('section: ', section)
    console.log('sectionTop: ', sectionTop)
    console.log('sectionBottom: ', sectionBottom)

    if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
      // Определяем цвет фона текущей секции
      const computedStyle = window.getComputedStyle(section)
      const backgroundColor = computedStyle.backgroundColor
      console.log('computedStyle: ', computedStyle)
      console.log('backgroundColor: ', backgroundColor)
      console.log('isDarkSection.value : ', isDarkSection.value)
      // Проверяем, является ли секция темной
      isDarkSection.value = isDarkBg(backgroundColor, section)
      console.log('isDarkSection.value: ', isDarkSection.value)
      // Обновляем активный пункт меню
      if (!foundActiveSection) {
        const sectionId = section.id || ''
        menuItems.forEach((item, idx) => {
          if (sectionId.includes(item.section)) {
            activeIndex.value = idx
            foundActiveSection = true
          }
        })
      }
    }
  })
}

// Функция для определения тёмного фона
const isDarkBg = (bgColor: string, element: Element): boolean => {
  // Проверяем наличие класса, указывающего на тёмный фон
  if (
    element.classList.contains('section-dark') ||
    element.classList.contains('section-contact') ||
    element.classList.contains('section-numbers') ||
    element.classList.contains('section-decisions')
  ) {
    return true
  }

  // Проверяем по цвету фона
  if (bgColor.includes('rgba(30, 41, 59') || bgColor.includes('rgb(15, 23, 42)')) {
    return true
  }

  return false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Инициализация при монтировании
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.menu {
  z-index: 10;
  border-radius: 52px;
  width: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding-top: 13px;
  padding-bottom: 13px;
  position: fixed;
  left: 30px;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.3s ease;

  &--hidden {
    opacity: 0;
    pointer-events: none;
  }

  &--light {
    background: rgba(15, 23, 42, 0.8); // Тёмный фон с прозрачностью
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  &--dark {
    background: rgba(255, 255, 255, 0.8); // Светлый фон с прозрачностью
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  }

  &__btn {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 50%;
    padding: 0;
    position: relative;

    &:hover {
      transform: scale(1.2);
    }

    &--active {
      border-radius: 100%;
      width: 44px;
      height: 44px;

      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: rgba(59, 130, 246, 0.3);
        animation: pulse 1.5s infinite;
      }
    }

    &--light {
      background: rgba(255, 255, 255, 0.9);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    &--dark {
      background: rgba(15, 23, 42, 0.9);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
  }
}

// Анимация пульсации для активной кнопки
@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.15);
    opacity: 0.3;
  }
  100% {
    transform: scale(1);
    opacity: 0.7;
  }
}

// Медиа-запрос для мобильных устройств
@media (max-width: 768px) {
  .menu {
    left: 10px;
    width: 40px;

    &__btn {
      width: 20px;
      height: 20px;

      &--active {
        width: 36px;
        height: 36px;
      }
    }
  }
}

// Для очень маленьких экранов - скрываем меню
@media (max-width: 480px) {
  .menu {
    display: none;
  }
}
</style>
