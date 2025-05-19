<template>
  <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-column logo-column">
        <img src="@/assets/icons/logo2.png" alt="ONR Курск" class="footer-logo" />
        <p class="company-description">
          ООО "Оперативные и надежные решения" - разработка сложных IT-решений с 2022 года
        </p>
      </div>

      <div class="footer-column contacts-column">
        <h3 class="footer-title">Контакты</h3>
        <div class="contact-item">
          <img src="@/assets/icons/maps.png" alt="Адрес" />
          <span>305014, г. Курск, ул. Карла Маркса, 101 А</span>
        </div>
        <div class="contact-item">
          <img src="@/assets/icons/telephone.png" alt="Телефон" />
          <a href="tel:+79045206449">+7-904-520-64-49</a>
        </div>
        <div class="contact-item">
          <img src="@/assets/icons/mail.png" alt="Email" />
          <a href="mailto:info@onr-kursk.ru">info@onr-kursk.ru</a>
        </div>
        <div class="contact-item">
          <img src="@/assets/icons/mail2.png" alt="Email" />
          <a href="mailto:mirgaleev@onr-kursk.ru">mirgaleev@onr-kursk.ru</a>
        </div>
      </div>

      <div class="footer-column map-column">
        <h3 class="footer-title">Мы на карте</h3>
        <div id="yandex-map" ref="mapContainer" class="map-container"></div>
      </div>

      <div class="footer-column">
        <h3 class="footer-title">Мы работаем</h3>
        <p class="working-hours">Пн-Пт: 9:00 - 18:00</p>
        <p class="working-hours">Сб-Вс: выходной</p>
      </div>
    </div>

    <div class="copyright">
      <p>&copy; ООО "Оперативные и надежные решения", Курск 2025. Все права защищены.</p>
      <div class="legal-links">
        <a href="#">Политика конфиденциальности</a>
        <a href="#">Пользовательское соглашение</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

// Определяем типы для Яндекс.Карт без использования namespace
export interface MapState {
  center: number[]
  zoom: number
  controls?: string[]
}

export interface PlacemarkProperties {
  hintContent?: string
  balloonContent?: string
}

export interface PlacemarkOptions {
  iconLayout?: string
  iconImageHref?: string
  iconImageSize?: number[]
  iconImageOffset?: number[]
}

export interface GeoObjectCollection {
  add(object: unknown): void
}

export interface YMap {
  geoObjects: GeoObjectCollection
}

export interface YMaps {
  ready(handler: () => void): void
  Map: new (element: string | HTMLElement, state: MapState) => YMap
  Placemark: new (
    geometry: number[],
    properties?: PlacemarkProperties,
    options?: PlacemarkOptions,
  ) => unknown
}

// Расширяем глобальный интерфейс Window
declare global {
  interface Window {
    ymaps: YMaps
  }
}

const mapContainer = ref<HTMLElement | null>(null)

const loadYandexMap = () => {
  if (window.ymaps) {
    initMap()
    return
  }

  const script = document.createElement('script')
  script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU'
  script.onload = () => {
    window.ymaps.ready(initMap)
  }
  document.head.appendChild(script)
}

const initMap = () => {
  if (!mapContainer.value) return

  const officeCoordinates: [number, number] = [51.79246, 36.165958]

  const map = new window.ymaps.Map(mapContainer.value, {
    center: officeCoordinates,
    zoom: 16,
    controls: ['zoomControl'],
  })

  const placemark = new window.ymaps.Placemark(
    officeCoordinates,
    {
      hintContent: 'ООО "Оперативные и надежные решения"',
      balloonContent: '305014, г. Курск, ул. Карла Маркса, 101 А',
    },
    {
      iconLayout: 'default#image',
      iconImageHref: new URL('@/assets/icons/Yandex_Maps.png', import.meta.url).href,
      iconImageSize: [30, 30],
      iconImageOffset: [-15, -42],
    },
  )

  map.geoObjects.add(placemark)
}

onMounted(() => {
  loadYandexMap()
})
</script>

<style scoped lang="scss">
@use '@/assets/styles/styles.scss';
.site-footer {
  background: var(--bg-dark-section);
  color: var(--color-text-white);
  padding: 60px 0 20px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

.footer-container {
  max-width: 1660px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.footer-column {
  margin-bottom: 30px;
}

.footer-title {
  color: var(--text-footer);
  font-size: 1.2rem;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background: var(--text-footer);
  }
}

.footer-logo {
  width: 180px;
  margin-bottom: 20px;
}

.company-description {
  line-height: 1.6;
  opacity: 0.8;
  margin-bottom: 20px;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  gap: 10px;

  img {
    width: 20px;
    opacity: 0.7;
  }

  a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--text-footer);
    }
  }
}

.working-hours {
  margin-bottom: 10px;
  opacity: 0.8;
}

.copyright {
  text-align: center;
  padding-top: 30px;
  margin-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  opacity: 0.7;
}

.legal-links {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 20px;

  a {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.8rem;
    transition: color 0.3s ease;

    &:hover {
      color: var(--text-footer);
    }
  }
}

/* Стили для карты */
.map-column {
  min-height: 300px;
}

.map-container {
  width: 100%;
  height: 250px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .footer-container {
    grid-template-columns: 1fr;
  }

  .copyright {
    text-align: left;
  }

  .legal-links {
    flex-direction: column;
    gap: 5px;
    align-items: flex-start;
  }
}
</style>
