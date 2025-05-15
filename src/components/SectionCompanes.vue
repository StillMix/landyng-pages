<!-- src/components/SectionCompanes.vue -->
<template>
  <div class="section-companes">
    <p class="section-title-light">Нам доверяют</p>
    <p class="section-subtitle">
      На протяжении 10+ лет мы создаем высокотехнологичные решения для организаций, где требования к
      надежности, безопасности и инновациям особенно высоки. Нашими клиентами становятся те, кто не
      может позволить себе компромиссов.
    </p>
    <AnimatedView>
      <div class="section-companes__marquee" data-animation="fade-in">
        <div class="section-companes__track">
          <div class="section-companes__logos">
            <img src="../assets/images/LogoCompanes/01.png" />
            <img src="../assets/images/LogoCompanes/02.png" />
            <img src="../assets/images/LogoCompanes/03.png" />
            <img src="../assets/images/LogoCompanes/04.png" />
            <img src="../assets/images/LogoCompanes/05.png" />
            <img src="../assets/images/LogoCompanes/06.png" />
            <img src="../assets/images/LogoCompanes/07.png" />
            <img src="../assets/images/LogoCompanes/08.png" />
            <img src="../assets/images/LogoCompanes/09.png" />
            <img src="../assets/images/LogoCompanes/10.png" />
            <img src="../assets/images/LogoCompanes/11.png" />
            <img src="../assets/images/LogoCompanes/12.png" />
            <img src="../assets/images/LogoCompanes/13.png" />
          </div>
          <div class="section-companes__logos">
            <img src="../assets/images/LogoCompanes/01.png" />
            <img src="../assets/images/LogoCompanes/02.png" />
            <img src="../assets/images/LogoCompanes/03.png" />
            <img src="../assets/images/LogoCompanes/04.png" />
            <img src="../assets/images/LogoCompanes/05.png" />
            <img src="../assets/images/LogoCompanes/06.png" />
            <img src="../assets/images/LogoCompanes/07.png" />
            <img src="../assets/images/LogoCompanes/08.png" />
            <img src="../assets/images/LogoCompanes/09.png" />
            <img src="../assets/images/LogoCompanes/10.png" />
            <img src="../assets/images/LogoCompanes/11.png" />
            <img src="../assets/images/LogoCompanes/12.png" />
            <img src="../assets/images/LogoCompanes/13.png" />
          </div>
          <div class="section-companes__logos">
            <img src="../assets/images/LogoCompanes/01.png" />
            <img src="../assets/images/LogoCompanes/02.png" />
            <img src="../assets/images/LogoCompanes/03.png" />
            <img src="../assets/images/LogoCompanes/04.png" />
            <img src="../assets/images/LogoCompanes/05.png" />
            <img src="../assets/images/LogoCompanes/06.png" />
            <img src="../assets/images/LogoCompanes/07.png" />
            <img src="../assets/images/LogoCompanes/08.png" />
            <img src="../assets/images/LogoCompanes/09.png" />
            <img src="../assets/images/LogoCompanes/10.png" />
            <img src="../assets/images/LogoCompanes/11.png" />
            <img src="../assets/images/LogoCompanes/12.png" />
            <img src="../assets/images/LogoCompanes/13.png" />
          </div>
        </div>
      </div>
    </AnimatedView>
  </div>
</template>

<script setup lang="ts">
import AnimatedView from '@/components/AnimatedView.vue'
</script>

<style lang="scss" scoped>
@use '@/assets/styles/styles.scss';
.section-companes {
  @include styles.section-light;
  height: var(--section-companes-height);

  &__marquee {
    margin-top: 51px;
    height: 100px;
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
    background: #fff;
  }

  &__track {
    display: flex;
    width: fit-content;
    animation: scroll-marquee 40s linear infinite;
    gap: 30px;
  }

  &__logos {
    display: flex;
    align-items: center;
    gap: 30px;

    img {
      flex-shrink: 0;
      height: 53px;
    }
  }
}
</style>
