<template>
  <div class="section-companes">
    <p class="section-title-light">Нам доверяют</p>
    <p class="section-companes__subtitle">
      На протяжении 10+ лет мы создаем высокотехнологичные решения для организаций, где требования к
      надежности, безопасности и инновациям особенно высоки. Нашими клиентами становятся те, кто не
      может позволить себе компромиссов.
    </p>
    <div class="section-companes__marquee">
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
        <!-- Дубликат логотипов -->
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
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.section-companes {
  width: 100vw;
  height: 499px;
  background: var(--bg-light-section);
  position: relative;

  &__subtitle {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 22px;
    line-height: 141%;
    text-align: center;
    margin: 24px auto 0;
    color: #3b3b3b;
    width: 1032px;
  }

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

@keyframes scroll-marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
