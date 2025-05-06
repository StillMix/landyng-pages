<template>
  <div class="partners">
    <div class="partners__text">
      <div class="partners__text__title">Нам доверяют</div>
      <div class="partners__text__intro-text-block">На протяжении 10+ лет мы создаем высокотехнологичные решения для организаций, где требования к надежности, безопасности и инновациям особенно высоки. Нашими клиентами становятся те, кто не может позволить себе компромиссов — государственные структуры, оборонные предприятия, телекоммуникационные гиганты и энергетические холдинги. Мы работаем с организациями, где требования к надежности, безопасности и инновационности особенно высоки:</div>
    </div>

    <div class="partners__content">
      <div class="partners__content__block">
        <div class="partners__content__block__img"> <img src="@/assets/sozvezdie.png" alt=""></div>
        <div class="partners__content__block__text">
          <div class="partners__content__block__text__A">Для оборонных предприятий</div>
          <div class="partners__content__block__text__a">Реализовали систему управления БПЛА с защищенным каналом связи для АО «Концерн Созвездие» — контроль 50+ дронов одновременно</div>
        </div>
      </div>
      <div class="partners__content__block">
        <div class="partners__content__block__text">
          <div class="partners__content__block__text__A">Для госструктур</div>
          <div class="partners__content__block__text__a">Разработали блокчейн-платформу отслеживания продукции для Минпромторга РФ — снижение контрафакта на 27%</div>
        </div>
        <div class="partners__content__block__img2"> <img src="@/assets/minpromtorg.png" alt=""></div>
      </div>
      <div class="partners__content__block">
        <div class="partners__content__block__img"> <img src="@/assets/rostelekom.png" alt=""></div>
        <div class="partners__content__block__text">
          <div class="partners__content__block__text__A">Для бизнеса</div>
          <div class="partners__content__block__text__a">Автоматизировали тестирование оборудования ПАО «Ростелеком» — ускорение процессов на 40%</div>
        </div>
      </div>
    </div>
    <div class="partners__text__outro">Среди наших партнеров</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

onMounted(() => {
  const observerOptions = {
    threshold: 0.8,
  }

  const animateOnScroll = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('--animated')
      }
    })
  }

  const observer = new IntersectionObserver(animateOnScroll, observerOptions)

  document.querySelectorAll('.partners__content__block__img, .partners__content__block__img2').forEach((el) => {
    observer.observe(el);
  });
})
</script>

<style scoped lang="scss">
.partners {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 60px 20px;
  background: var(--bg-primary);
  overflow-x: hidden; 
  width: 100%;
  box-sizing: border-box;
}

.partners__text {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1360px;
  width: 100%;
  margin: 0 auto 40px;

  &__title {
    width: 100%;
    margin: 0 0 20px;
    font-weight: 600;
    font-size: clamp(2rem, 5vw, 2.5rem);
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: var(--text-title);
    text-align: center;
  }

  &__intro-text-block {
    font-size: clamp(1.1rem, 2vw, 1.5rem);
    line-height: 1.6;
    color: var(--text-main);
    text-align: center;
  }

  &__outro {
    width: 100%;
    max-width: 1360px;
    margin: 40px auto 0;
    font-weight: 300;
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: var(--text-title);
    text-align: center;
  }
}

.partners__content {
  display: flex;
  flex-direction: column;
  gap: 60px;
  max-width: 1360px;
  width: 100%;
  margin: 0 auto;
}

.partners__content__block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  min-height: 350px;
}

.partners__content__block__img,
.partners__content__block__img2 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  opacity: 0;
  transition: all 0.6s ease;

  &.--animated {
    opacity: 1;
  }

  & img {
    width: 100%;
    height: auto;
    max-height: 300px;
    object-fit: contain;
  }
}

.partners__content__block__img {
  transform: translateX(-2rem);

  &.--animated {
    transform: translateX(0);
  }
}

.partners__content__block__img2 {
  transform: translateX(2rem);

  &.--animated {
    transform: translateX(0);
  }
}

.partners__content__block__text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 45%;

  &__A {
    margin-bottom: 20px;
    font-size: clamp(1.3rem, 2.5vw, 1.8rem);
    font-weight: 700;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: var(--text-title);
  }

  &__a {
    font-size: clamp(1rem, 1.8vw, 1.2rem);
    line-height: 1.6;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: var(--text-main);
  }
}

@media (max-width: 1024px) {
  .partners {
    padding: 40px 20px;
  }

  .partners__content {
    gap: 40px;
  }

  .partners__content__block {
    min-height: 300px;
  }
}

@media (max-width: 768px) {
  .partners__content__block {
    flex-direction: column;
    gap: 30px;
    min-height: auto;
    width: 100%;
  }

  .partners__content__block__img,
  .partners__content__block__img2,
  .partners__content__block__text {
    width: 100%;
    text-align: center;
  }

  .partners__content__block:nth-child(2) {
    flex-direction: column-reverse;
  }
}

@media (max-width: 480px) {
  .partners {
    padding: 30px 15px;
  }


  body {
    overflow-x: hidden;
  }

  .partners__content__block__img,
  .partners__content__block__img2 {
    max-width: 100%;
    padding: 0 10px;
    box-sizing: border-box;

    & img {
      max-width: 100%;
    }
  }
}
</style>
