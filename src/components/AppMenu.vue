<template>
  <div
    class="menu"
    :class="{
      'menu--hidden': isMainSection,
    }"
    :style="menuStyle"
  >
    <button
      v-for="(item, index) in menuItems"
      :key="index"
      class="menu__btn"
      :class="{
        'menu__btn--active': activeIndex === index,
      }"
      :style="buttonStyle"
      @click="scrollToSection(item.section)"
    >
      <component :is="item.icon" width="24" height="24" :fill="iconColor" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
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
const transitionProgress = ref(0) // 0 = светлый, 1 = темный

const menuItems = [
  { icon: WhyWeIcon, section: 'section-about' },
  { icon: NumberIcon, section: 'section-numbers' },
  { icon: HowWorkIcon, section: 'section-howwork' },
  { icon: ContactIcon, section: 'section-contact' },
  { icon: CompaniesIcon, section: 'section-companies' },
  { icon: DecisionsIcon, section: 'section-decisions' },
  { icon: PrezentationIcon, section: 'section-prezentation' },
]

const menuStyle = computed(() => {
  // Интерполируем цвета фона в зависимости от значения transitionProgress
  const darkBgOpacity = 0.8 * transitionProgress.value


  return {
    background: `rgba(15, 23, 42, ${darkBgOpacity})`,
    boxShadow: `0 4px 15px rgba(0, 0, 0, ${0.1 + 0.05 * transitionProgress.value})`,
    borderColor: `rgba(255, 255, 255, ${0.1 * transitionProgress.value})`,
  }
})

const buttonStyle = computed(() => {
  return {
    background:
      transitionProgress.value > 0.5 ? 'rgba(255, 255, 255, 0.9)' : 'rgba(15, 23, 42, 0.9)',
    boxShadow:
      transitionProgress.value > 0.5
        ? '0 2px 10px rgba(0, 0, 0, 0.1)'
        : '0 2px 8px rgba(0, 0, 0, 0.2)',
  }
})

const iconColor = computed(() => {
  return transitionProgress.value > 0.5 ? '#0f172a' : 'white'
})

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId)
  if (section) {
    // Вычисляем позицию для плавного скролла
    const sectionRect = section.getBoundingClientRect()
    const sectionTop = window.pageYOffset + sectionRect.top
    const windowHeight = window.innerHeight
    const sectionHeight = sectionRect.height

    // Позиционируем секцию в зависимости от её высоты
    const scrollPosition =
      sectionHeight < windowHeight
        ? sectionTop - (windowHeight - sectionHeight) / 2
        : sectionTop - 100

    // Плавно скроллим
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    })
  }
}

// Обновленная функция обработки скролла с плавным переходом
const handleScroll = () => {
  const scrollPosition = window.scrollY + window.innerHeight / 2

  // Получаем все секции
  const sections = [
    document.getElementById('section-about'),
    document.getElementById('section-numbers'),
    document.getElementById('section-howwork'),
    document.getElementById('section-contact'),
    document.querySelector('.section-companies'),
    document.getElementById('section-decisions'),
    document.querySelector('.section-prezentation'),
    document.querySelector('.section-main'),
  ].filter(Boolean) as Element[]

  // Проверяем, находимся ли в главной секции
  const mainSection = document.querySelector('.section-main')
  if (mainSection) {
    const mainSectionBottom = mainSection.getBoundingClientRect().bottom + window.scrollY
    isMainSection.value = scrollPosition < mainSectionBottom
  }

  // Определяем, в какой секции находимся и на каком расстоянии от границ
  for (let i = 0; i < sections.length - 1; i++) {
    const currentSection = sections[i]
    const nextSection = sections[i + 1]

    if (!currentSection || !nextSection) continue

    const currentSectionTop = currentSection.getBoundingClientRect().top + window.scrollY
    const currentSectionBottom = currentSectionTop + currentSection.getBoundingClientRect().height
    const nextSectionTop = nextSection.getBoundingClientRect().top + window.scrollY

    // Если мы находимся между двумя секциями (в зоне перехода)
    if (scrollPosition >= currentSectionBottom - 100 && scrollPosition <= nextSectionTop + 100) {
      const currentIsDark = isDarkBg(currentSection)
      const nextIsDark = isDarkBg(nextSection)

      // Если секции разного типа, рассчитываем прогресс перехода
      if (currentIsDark !== nextIsDark) {
        // Рассчитываем прогресс перехода (от 0 до 1)
        const transitionZone = 200 // 200px зона перехода
        const progress = (scrollPosition - (currentSectionBottom - 100)) / transitionZone

        // Устанавливаем прогресс перехода в зависимости от типа секций
        if (currentIsDark && !nextIsDark) {
          // Переход от темной к светлой
          transitionProgress.value = 1 - Math.max(0, Math.min(1, progress))
        } else {
          // Переход от светлой к темной
          transitionProgress.value = Math.max(0, Math.min(1, progress))
        }

        break // Нашли переход, выходим из цикла
      }
    }

    // Если находимся полностью внутри секции
    if (scrollPosition >= currentSectionTop + 100 && scrollPosition <= currentSectionBottom - 100) {
      isDarkSection.value = isDarkBg(currentSection)
      transitionProgress.value = isDarkSection.value ? 1 : 0

      // Определяем активный пункт меню
      menuItems.forEach((item, idx) => {
        const sectionId = currentSection.id || ''
        const sectionClass = currentSection.className || ''

        if (sectionId.includes(item.section) || sectionClass.includes(item.section)) {
          activeIndex.value = idx
        }
      })

      break
    }
  }
}

// Функция определения типа фона секции
const isDarkBg = (element: Element): boolean => {
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
  transition:
    background 0.4s ease,
    box-shadow 0.4s ease,
    border-color 0.4s ease,
    opacity 0.3s ease;
  backdrop-filter: blur(8px);
  border: 1px solid transparent;

  &--hidden {
    opacity: 0;
    pointer-events: none;
  }

  &__btn {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    transition:
      all 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      background-color 0.4s ease,
      box-shadow 0.4s ease;
    border-radius: 50%;
    padding: 22px;
    position: relative;

    svg {
      flex-shrink: 0;
      transition: fill 0.4s ease;
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
