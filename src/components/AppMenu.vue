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
    // Вместо простого scrollIntoView вычислим позицию скролла вручную
    const sectionRect = section.getBoundingClientRect()
    const sectionTop = window.pageYOffset + sectionRect.top
    const windowHeight = window.innerHeight
    const sectionHeight = sectionRect.height

    // Вычисляем желаемую позицию:
    // Если секция меньше высоты окна - центрируем её
    // Если больше - позиционируем так, чтобы верх секции был немного ниже верха окна
    const scrollPosition =
      sectionHeight < windowHeight
        ? sectionTop - (windowHeight - sectionHeight) / 2 // центрируем по вертикали
        : sectionTop - 100 // отступ 100px от верха окна

    // Плавно скроллим к вычисленной позиции
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    })
  }
}

// Определяем текущую секцию и стиль меню в зависимости от положения скролла
const handleScroll = () => {
  const scrollPosition = window.scrollY + window.innerHeight / 2

  // Получаем все секции по их ID или классам
  const sections = [
    document.getElementById('section-about'),
    document.getElementById('section-numbers'),
    document.getElementById('section-howwork'),
    document.getElementById('section-contact'),
    document.querySelector('.section-companies'), // Используем класс вместо ID
    document.getElementById('section-decisions'),
    document.querySelector('.section-prezentation'), // Используем класс вместо ID
    document.querySelector('.section-main'), // Добавляем главную секцию
  ].filter(Boolean) // Фильтруем null значения

  // Проверяем, находимся ли мы в главной секции
  const mainSection = document.querySelector('.section-main')
  if (mainSection) {
    const mainSectionBottom = mainSection.getBoundingClientRect().bottom + window.scrollY
    isMainSection.value = scrollPosition < mainSectionBottom
  }

  // Определяем активную секцию
  let foundActiveSection = false

  // Перебираем секции в обратном порядке, чтобы найти ту, в которой мы находимся
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i]
    if (!section) continue

    const sectionTop = section.getBoundingClientRect().top + window.scrollY
    const sectionBottom = sectionTop + section.getBoundingClientRect().height

    if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
      // Определяем темная ли секция
      isDarkSection.value = isDarkBg(section)

      // Обновляем активный пункт меню
      if (!foundActiveSection) {
        menuItems.forEach((item, idx) => {
          // Проверяем ID секции или className на совпадение с item.section
          const sectionId = section.id || ''
          const sectionClass = section.className || ''

          if (sectionId.includes(item.section) || sectionClass.includes(item.section)) {
            activeIndex.value = idx
            foundActiveSection = true
          }
        })
      }

      break // Выходим из цикла, как только нашли активную секцию
    }
  }
}

// Измените функцию isDarkBg в AppMenu.vue
const isDarkBg = (element: Element): boolean => {
  // Проверяем секции, которые должны быть темными
  if (element.id) {
    return ['section-numbers', 'section-contact', 'section-decisions'].includes(element.id)
  }

  if (element.className && typeof element.className === 'string') {
    return (
      element.className.includes('section-dark') ||
      element.className.includes('section-contact') ||
      element.className.includes('section-numbers') ||
      element.className.includes('section-decisions') ||
      element.className.includes('section-main')
    )
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
  width: 62px;
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
    padding: 22px;
    position: relative;
    svg {
      flex-shrink: 0;
    }

    &:hover {
      transform: scale(1.2);
    }

    &--active {
      border-radius: 100%;
      width: 58px;
      height: 58px;

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
