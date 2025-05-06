<template>
  <div class="tech__wrapper">
  <div class="technologies" ref="technologiesContainer">
    <h3 class="technologies__title">Используемые технологии</h3>

    <div class="technologies__grid">
      <div
        v-for="(category, index) in categories"
        :key="index"
        class="technologies__category"
        :class="{ 'active': activeCategory === index }"
        @click="toggleCategory(index)"
        ref="categoryItems"
      >
        <div class="category__header">
          <div class="category__icon">
            <img :src="getIconPath(category.icon)" :alt="category.title">
          </div>
          <h4>{{ category.title }}</h4>
          <div class="category__arrow">
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </div>
        </div>

        <div class="category__content">
          <ul>
            <li
              v-for="(item, itemIndex) in category.items"
              :key="itemIndex"

            >
              {{ item.name }}
             <!--<span v-if="item.hot" class="hot-badge">HOT</span> -->
              <!--<span v-if="item.new" class="new-badge">NEW</span> -->
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

import codeIcon from '@/assets/icons/code.png';
import paletteIcon from '@/assets/icons/palette.png';
import databaseIcon from '@/assets/icons/database.png';
import globeIcon from '@/assets/icons/globe.png';
import cpuIcon from '@/assets/icons/cpu.png';
import networkIcon from '@/assets/icons/network.png';
import usersIcon from '@/assets/icons/users.png';
import serverIcon from '@/assets/icons/server.png';



const categories = ref([
  {
    title: 'Языки программирования',
    icon: codeIcon,
    items: [
      { name: 'Python', description: 'Основной язык для бэкенд разработки и анализа данных' },
      { name: 'C++', description: 'Для высокопроизводительных вычислений' },
      { name: 'C#', description: 'Разработка под платформу .NET' },
      { name: 'Java', description: 'Корпоративные решения' },
      { name: 'JavaScript/TypeScript', description: 'Фронтенд разработка' }
    ]
  },
  {
    title: 'Языки разметки, стилизация',
    icon: paletteIcon,
    items: [
      { name: 'HTML5', description: 'Семантическая верстка' },
      { name: 'CSS3', description: 'Стилизация и анимации' },
      { name: 'LESS/SASS', description: 'Препроцессоры CSS' },
      { name: 'Tailwind', description: 'Utility-first CSS фреймворк' }
    ]
  },
  {
    title: 'СУБД',
    icon: databaseIcon,
    items: [
      { name: 'PostgreSQL', description: 'Реляционная база данных' },
      { name: 'MongoDB', description: 'Документо-ориентированная NoSQL' },
      { name: 'Redis', description: 'In-memory key-value хранилище' },
      { name: 'MS SQL', description: 'Корпоративная СУБД от Microsoft' }
    ]
  },
  {
    title: 'WEB-технологии',
    icon: globeIcon,
    items: [
      { name: 'Angular', description: 'Фреймворк от Google' },
      { name: 'Vue.js', description: 'Прогрессивный фреймворк' },
      { name: 'ReactJS', description: 'Библиотека от Facebook' },
      { name: 'NodeJS', description: 'JavaScript на сервере' },
      { name: 'ExpressJS', description: 'Фреймворк для Node.js' },
      { name: 'Webpack', description: 'Сборка фронтенда' },
      { name: 'Django/Flask', description: 'Python фреймворки' }
    ]
  },
  {
    title: 'Технологии',
    icon: cpuIcon,
    items: [
      { name: 'REST API', description: 'Архитектура веб-сервисов' },
      { name: 'GraphQL', description: 'Альтернатива REST' },
      { name: '.NET', description: 'Платформа от Microsoft' },
      { name: 'Docker', description: 'Контейнеризация' },
      { name: 'Kubernetes', description: 'Оркестрация контейнеров' },
      { name: 'NGINX', description: 'Веб-сервер и прокси' }
    ]
  },
  {
    title: 'Сетевые технологии',
    icon: networkIcon,
    items: [
      { name: 'HTTP/HTTPS', description: 'Протоколы прикладного уровня' },
      { name: 'TCP/IP', description: 'Базовые сетевые протоколы' },
      { name: 'VLAN', description: 'Виртуальные локальные сети' },
      { name: 'GRE', description: 'Инкапсуляция сетевых пакетов' }
    ]
  },
  {
    title: 'Командная разработка',
    icon: usersIcon,
    items: [
      { name: 'Git', description: 'Система контроля версий' },
      { name: 'GitLab CI/CD', description: 'Непрерывная интеграция' },
      { name: 'Jenkins', description: 'Сервер автоматизации' },
      { name: 'Jira', description: 'Трекинг задач' },
      { name: 'Confluence', description: 'Документирование' }
    ]
  },
  {
    title: 'Операционные системы',
    icon: serverIcon,
    items: [
      { name: 'Astra Linux', description: 'Российский защищенный дистрибутив' },
      { name: 'Ubuntu/Debian', description: 'Популярные Linux дистрибутивы' },
      { name: 'Windows Server', description: 'Серверная ОС от Microsoft' },
      { name: 'macOS', description: 'Для разработки под экосистему Apple' }
    ]
  }
]);

const getIconPath = (icon: string) => {
  return icon;
};
const activeCategory = ref<number | null>(null);
const technologiesContainer = ref<HTMLElement | null>(null);
const categoryItems = ref<HTMLElement[]>([]);

const toggleCategory = (index: number) => {


  if (activeCategory.value === index) {
    activeCategory.value = null;
  } else {
    activeCategory.value = index;
  }
};


onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  if (technologiesContainer.value) {
    observer.observe(technologiesContainer.value);
  }
});
</script>

<style scoped lang="scss">
@import '@/assets/style/global.scss';


.tech__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary);
  min-height: 100vh;
  padding: 40px 20px;
  box-sizing: border-box;
}

.technologies {
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
  padding: 40px;
  @include glass;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;

  &.animate-in {
    opacity: 1;
    transform: translateY(0);
  }

  &__title {
    text-align: center;
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    margin-bottom: 40px;
    color: var(--text-title);
    position: relative;
    padding-bottom: 15px;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 3px;
      background: linear-gradient(90deg, #4a6cf7 0%, #a34cfd 100%);
      border-radius: 3px;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
  }

  &__category {
    background: rgba(255, 255, 255, 0.3);
    padding: 20px;
    border-radius: 12px;
    transition: all 0.3s ease;
    cursor: pointer;
    overflow: hidden;
    border: 1px solid rgba(149, 155, 253, 0.3);

    .category__header {
      display: flex;
      align-items: center;
      margin-bottom: 15px;

      .category__icon {
        margin-right: 12px;
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(74, 108, 247, 0.1);
        border-radius: 8px;

        img {
          width: 24px;
          height: 24px;
          object-fit: contain;
        }
      }

      h4 {
        margin: 0;
        flex: 1;
        font-size: clamp(1rem, 1.5vw, 1.2rem);
        color: var(--text-title);
        transition: color 0.3s ease;
      }

      .category__arrow {
        transition: transform 0.3s ease;
        display: block;

        svg {
          fill: #7f88a1;
        }
      }
    }

    .category__content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;

      ul {
        padding-left: 20px;
        margin: 0;
        list-style-type: none;

        li {
          position: relative;
          margin-bottom: 8px;
          padding-left: 20px;
          line-height: 1.5;
          color: var(--text-main);
          transition: color 0.2s ease;
          font-size: clamp(0.9rem, 1.2vw, 1rem);

          &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 8px;
            width: 8px;
            height: 8px;
            background: var(--mark-one);
            border-radius: 50%;
            opacity: 0.6;
          }

          &:hover {
            color: #2c3e50;

            &::before {
              opacity: 1;
            }
          }
        }
      }
    }

    &.active {
      background: rgba(255, 255, 255, 0.4);

      .category__header {
        .category__arrow {
          transform: rotate(180deg);
        }
      }

      .category__content {
        max-height: 500px;
      }
    }
  }
}


@media (max-width: 1024px) {
  .technologies {
    padding: 30px;

    &__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}


@media (max-width: 768px) {
  .tech__wrapper {
    padding: 20px;
    align-items: flex-start;
  }

  .technologies {
    padding: 25px 20px;

    &__grid {
      grid-template-columns: 1fr;
    }

    &__category {
      padding: 15px;
    }
  }
}


@media (min-width: 769px) {
  .technologies__category .category__content {
    max-height: none !important;
    overflow: visible;
  }

  .category__arrow {
    display: none !important;
  }
}
</style>
