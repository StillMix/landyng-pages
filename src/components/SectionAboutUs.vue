<template>
  <div class="section-aboutUs">
    <p class="section-title-light">Почему мы?</p>
    <p class="section-subtitle">
      Мы — команда профессионалов с большим опытом научно-исследовательской работы в области
      создания информационных управляющих и аналитических систем. На протяжении многих лет мы
      успешно занимаемся программированием веб-приложений, разработкой распределённых
      информационно-аналитических, мониторинговых и управляющих систем, а также созданием
      программной и конструкторской документации в рамках НИОКР по ГОСТ.
    </p>
    <div class="section-aboutUs-popup">
      <div class="section-aboutUs-popup-info">
        <p class="section-aboutUs-popup-info__title">Делаем быстро и качественно</p>
        <div class="section-aboutUs-popup-info-u">
          <div class="section-aboutUs-popup-info-u__ul"></div>
          <p class="section-aboutUs-popup-info-u__text">
            Предпроектное обследование и определение путей решения проблем заказчиков
          </p>
        </div>
        <div class="section-aboutUs-popup-info-u">
          <div class="section-aboutUs-popup-info-u__ul"></div>
          <p class="section-aboutUs-popup-info-u__text">
            Разработка технических заданий на создание программного обеспечения
          </p>
        </div>
        <div class="section-aboutUs-popup-info-u">
          <div class="section-aboutUs-popup-info-u__ul"></div>
          <p class="section-aboutUs-popup-info-u__text">
            Проведение научных исследований по тематике заказчика
          </p>
        </div>
        <div class="section-aboutUs-popup-info-u">
          <div class="section-aboutUs-popup-info-u__ul"></div>
          <p class="section-aboutUs-popup-info-u__text">Разработка программного обеспечения</p>
        </div>
        <div class="section-aboutUs-popup-info-u">
          <div class="section-aboutUs-popup-info-u__ul"></div>
          <p class="section-aboutUs-popup-info-u__text">Тестирование программного обеспечения</p>
        </div>
        <div class="section-aboutUs-popup-info-u">
          <div class="section-aboutUs-popup-info-u__ul"></div>
          <p class="section-aboutUs-popup-info-u__text">Разработка программной документации</p>
        </div>
      </div>
      <div class="section-aboutUs-popup__img">
        <img src="../assets/images/SectionAboutUs.png" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.section {
  &-aboutUs {
    @extend .section-light;
    height: var(--section-aboutus-height);

    &-popup {
      padding-left: 59px;
      gap: 30px;
      align-items: center;
      display: flex;
      border-radius: 13px;
      width: var(--section-content-width);
      height: 526px;
      box-shadow: var(--card-box-shadow);
      background: #fff;
      margin-left: auto;
      margin-top: 28px;
      margin-right: auto;

      &-info {
        flex-shrink: 0;
        width: 494px;
        display: flex;
        flex-direction: column;
        gap: 33px;

        &__title {
          font-family: var(--font-family);
          font-weight: var(--font-weight-medium);
          font-size: var(--font-size-xl);
          color: var(--color-text-dark);
          width: 100%;
        }

        &-u {
          display: flex;
          width: 100%;
          gap: 7px;

          &__ul {
            border-radius: 100%;
            background: var(--color-primary);
            width: 14px;
            flex-shrink: 0;
            height: 14px;
          }

          &__text {
            font-family: var(--font-family);
            font-weight: var(--font-weight-light);
            font-size: 20px;
            line-height: 105%;
            color: var(--color-text-gray);
          }
        }
      }

      &__img {
        flex-shrink: 0;
        width: 432px;
        height: 415px;
        box-shadow: var(--all-box-shadow);
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;

        img {
          width: 416px;
          height: 399px;
        }
      }
    }
  }
}
</style>
