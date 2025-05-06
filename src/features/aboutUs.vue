<template>
  <div class="AboutUs">
    <h3 class="AboutUs__title">Почему мы?</h3>
    <div class="AboutUs__content">
      <div class="content__title">
        Мы — команда профессионалов с большим опытом научно-исследовательской работы в области создания информационных управляющих и аналитических систем. На протяжении многих лет мы успешно занимаемся программированием веб-приложений, разработкой распределённых информационно-аналитических, мониторинговых и управляющих систем, а также созданием программной и конструкторской документации в рамках НИОКР по ГОСТ.
      </div>
      <div class="content__topblocks__wrapper">
        <presentation />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import presentation from './presentation.vue';
</script>

<style scoped lang="scss">
.AboutUs {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 40px 20px;
  background: var(--bg-primary);

  &__title {
    text-align: center;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    font-size: 2rem;
    color: var(--text-title);
    margin-bottom: 30px;
  }
}

.AboutUs__content {
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1360px;
  margin: 0 auto;
  width: 100%;
}

.content__title {
  font-family: 'Roboto', 'Arial', sans-serif;
  font-size: 1.2rem;
  line-height: 1.6;
  color: var(--text-main);
  text-align: center;
}

.content__topblocks__wrapper {
  display: flex;
  justify-content: center;
}

@media (min-width: 768px) {
  .AboutUs {
    padding: 60px 40px;

    &__title {
      font-size: 2.5rem;
      margin-bottom: 50px;
    }
  }

  .content__title {
    font-size: 1.5rem;
    padding: 0 20px;
  }
}

@media (min-width: 1200px) {
  .AboutUs {
    padding: 80px 60px;
  }
}
</style>
