<!-- src/components/SectionCompanes.vue -->
<template>
  <div class="section-companies" id="section-companies">
    <p class="section-title-light">Нам доверяют</p>
    <p class="section-subtitle">
      На протяжении 10+ лет мы создаем высокотехнологичные решения для организаций, где требования к
      надежности, безопасности и инновациям особенно высоки. Нашими клиентами становятся те, кто не
      может позволить себе компромиссов.
    </p>
    <AnimatedView>
      <div class="ticker__wrapper">
        <AppTicker :logos="logos" :speed="80" direction="left" :grayscale="false" />
      </div>
    </AnimatedView>
  </div>
</template>

<script setup lang="ts">
import AnimatedView from '@/components/AnimatedView.vue'
import AppTicker from '@/features/AppTicker.vue'

// Правильно импортируем изображения как модули
import logo01 from '@/assets/images/LogoCompanes/01.png'
import logo02 from '@/assets/images/LogoCompanes/02.png'
import logo03 from '@/assets/images/LogoCompanes/03.png'
import logo04 from '@/assets/images/LogoCompanes/04.png'
import logo05 from '@/assets/images/LogoCompanes/05.png'
import logo06 from '@/assets/images/LogoCompanes/06.png'
import logo07 from '@/assets/images/LogoCompanes/07.png'
import logo08 from '@/assets/images/LogoCompanes/08.png'
import logo09 from '@/assets/images/LogoCompanes/09.png'
import logo10 from '@/assets/images/LogoCompanes/10.png'
import logo11 from '@/assets/images/LogoCompanes/11.png'
import logo12 from '@/assets/images/LogoCompanes/12.png'
import logo13 from '@/assets/images/LogoCompanes/13.png'

// Массив с импортированными изображениями
const logos = [
  logo01,
  logo02,
  logo03,
  logo04,
  logo05,
  logo06,
  logo07,
  logo08,
  logo09,
  logo10,
  logo11,
  logo12,
  logo13,
]
</script>

<style lang="scss" scoped>
@use '@/assets/styles/styles.scss';
.section-companies {
  @include styles.section-light;
  height: var(--section-companes-height);
}

.ticker__wrapper {
  margin-top: 60px;
}
</style>
