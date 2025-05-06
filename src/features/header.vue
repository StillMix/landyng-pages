<template>
  <header class="header">
    <div class="header-wrapper">
      <div class="header-container">

        <div class="logo-section">
          <img
            src="/icons/logo2.png"
            alt="Логотип"
            class="logo"
            @click="scrollToSection('#home')"
          />
        </div>


        <div class="hamburger" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>


        <nav class="menu-section" :class="{ 'active': isMenuOpen }">
          <a
            v-for="(item, index) in menuItems"
            :key="index"
            href="#"
            class="menu-item"
            :style="{ animationDelay: `${index * 0.1}s` }"
            @click.prevent="scrollToSection(item.path)"
          >
            {{ item.text }}
          </a>
          <div class="contact-section" :class="{ 'active': isMenuOpen }">
            <div class="button__wrapper"><input
            type="button"
            value="Связаться с нами"
            class="button"
            @click.prevent="scrollToSection('#contact')"
            href="#"
          ></div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const scrollToSection = (selector: string) => {
  const element = document.querySelector(selector);
  if (element) {

    const headerHeight = document.querySelector('.header')?.clientHeight || 0;
    const offset = 20;

    window.scrollTo({
      top: element.getBoundingClientRect().top + window.pageYOffset - headerHeight - offset,
      behavior: 'smooth'
    });
  }
  closeMenu();
};

interface MenuItem {
  text: string;
  path: string;
}

const menuItems = ref<MenuItem[]>([
  { text: 'Главная', path: '#home' },
  { text: 'Решения', path: '#services' },
  { text: 'Партнеры', path: '#partners' },
  { text: 'О нас', path: '#aboutUS' },
]);
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px 0;
  margin-top: 10px;
  position: relative;
}

.header-wrapper {
  width: 100%;
  max-width: 1400px;
  border-radius: 20px;
  padding: 10px 20px;
  background-color: rgba(30, 29, 29, 0.8);
  backdrop-filter: blur(20px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.logo-section {
  flex: 1;
  display: flex;
  justify-content: flex-start;
  z-index: 11;
}

.logo {
  max-height: 80px;
  width: auto;
  transition: all 0.3s ease;
}

.menu-section {
  flex: 2;
  display: flex;
  justify-content: center;
  gap: 15px;
  transition: all 0.3s ease;
}

.menu-item {
  font-size: 26px;
  font-family: sans-serif;
  color: #e5e5e5;
  text-decoration: none;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease forwards;
  position: relative;
  padding-bottom: 5px;
  transition: 0.4s;
}

.menu-item::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: #7446f1;
  transition: all 0.6s ease;
  transform: translateX(-50%);
}

.menu-item:hover {
  transition: all 0.4s;
  color: #7446f1;
}

.menu-item:hover::after {
  width: 100%;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.contact-section {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  transition: all 0.3s ease;
}

.button__wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
}

.button {
  height: 40px;
  width: 180px;
  border-radius: 8px;
  border: var(--button-border);
  font-size: 1.1rem;
  background-color: var(--button-primary);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}
.button:hover {
  background-color: var(--button-hover);
  transform: scale(1.05);
  transition: 0.3s;
  cursor: pointer;
}

.button:active {
  background-color: var(--button-active);
  transform: scale(0.98);
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  cursor: pointer;
  z-index: 11;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 3px;
  background-color: #e5e5e5;
  transition: all 0.3s ease;
}

@media (max-width: 1525px) {
  .header-wrapper {
    width: 90%;
  }

  .menu-item {
    font-size: 23px;
  }
}


@media (max-width: 1120px) {
  .hamburger {
    display: flex;
  }

  .menu-section {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(30, 29, 29, 0.95);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    transform: translateY(-100%);
    opacity: 0;
    z-index: 10;
    transition: all 0.3s ease;
  }

  .menu-section.active {
    transform: translateY(0);
    opacity: 1;
  }

  .menu-item {
    font-size: 24px;
    opacity: 1;
    transform: translateY(0);
    animation: none;
  }

  .contact-section {
    position: fixed;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: all 0.3s ease;
    z-index: 10;
    justify-content: center;
  }

  .contact-section.active {
    opacity: 1;
  }

  .hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .hamburger.active span:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
}

@media (max-width: 480px) {
  .header-wrapper {
    padding: 10px 15px;
    border-radius: 15px;
  }

  .logo {
    max-height: 40px;
  }

}
</style>
