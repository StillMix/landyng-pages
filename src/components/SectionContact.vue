<template>
  <div class="section-contact">
    <p class="section-title-dark">СВЯЗАТЬСЯ С НАМИ</p>
    <div class="section-contact__popup">
      <div class="section-contact__popup-left">
        <LogoIcon class="section-contact__popup-left__logo" />
        <p class="section-contact__popup-left__title">Свяжитесь с нами</p>
        <p class="section-contact__popup-left__subtitle">
          Заполните форму или свяжитесь с нами напрямую через один из контактных каналов ниже. Мы
          всегда рады обсудить ваши идеи и потребности.
        </p>
        <div class="section-contact__popup-left-cards">
          <div class="section-contact__popup-left-cards__card">
            <div class="section-contact__popup-left-cards__card__img">
              <PhoneIcon fill="#3B82F6" />
            </div>
            <div class="section-contact__popup-left-cards__card-con">
              <p class="section-contact__popup-left-cards__card-con__title">Телефон</p>
              <p class="section-contact__popup-left-cards__card-con__subtitle">
                +7 (904) 520-64-49
              </p>
            </div>
          </div>
          <div class="section-contact__popup-left-cards__card">
            <div class="section-contact__popup-left-cards__card__img">
              <EmailIcon fill="#3B82F6" />
            </div>
            <div class="section-contact__popup-left-cards__card-con">
              <p class="section-contact__popup-left-cards__card-con__title">Электронная почта</p>
              <p class="section-contact__popup-left-cards__card-con__subtitle">info@onr-kursk.ru</p>
            </div>
          </div>
          <div class="section-contact__popup-left-cards__card">
            <div class="section-contact__popup-left-cards__card__img">
              <GPSIcon fill="#3B82F6" />
            </div>
            <div class="section-contact__popup-left-cards__card-con">
              <p class="section-contact__popup-left-cards__card-con__title">Адрес</p>
              <p class="section-contact__popup-left-cards__card-con__subtitle">
                ул. Карла Маркса, 101А, Курск, 305514
              </p>
            </div>
          </div>
        </div>
      </div>
      <form class="section-contact__popup-right">
        <p class="section-contact__popup-right__title">Отправить сообщение</p>
        <div class="section-contact__popup-right-inputs">
          <label class="section-contact__popup-right-inputs-label">
            <p class="section-contact__popup-right-inputs-label__title">Ваше имя*</p>
            <input class="section-contact__popup-right-inputs-label__input" />
          </label>
          <label class="section-contact__popup-right-inputs-label">
            <p class="section-contact__popup-right-inputs-label__title">Телефон*</p>
            <input class="section-contact__popup-right-inputs-label__input" />
          </label>
          <label class="section-contact__popup-right-inputs-label">
            <p class="section-contact__popup-right-inputs-label__title">Email*</p>
            <input class="section-contact__popup-right-inputs-label__input" />
          </label>
          <label class="section-contact__popup-right-inputs-label">
            <p class="section-contact__popup-right-inputs-label__title">Сообщение</p>
            <textarea class="section-contact__popup-right-inputs-label__inputtext" />
          </label>
        </div>
        <div class="section-contact__popup-right-check">
          <label class="section-contact__popup-right-check-label">
            <input class="section-contact__popup-right-check-label__input" type="checkbox" />
            <div class="section-contact__popup-right-check-label__checkbox"></div>
          </label>

          <p class="section-contact__popup-right-check__text">
            Я даю согласие на обработку персональных данных и ознакомлен(а) с политикой
            конфиденциальности
          </p>
        </div>
        <AppButon type="submit" class="section-contact__popup-right-check__btn" blue
          >Отправить <ArrowOneLine />
        </AppButon>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import EmailIcon from '@/assets/icons/EmailIcon.vue'
import GPSIcon from '@/assets/icons/GPSIcon.vue'
import LogoIcon from '@/assets/icons/LogoIcon.vue'
import PhoneIcon from '@/assets/icons/PhoneIcon.vue'
import AppButon from './UI/AppButon.vue'
import ArrowOneLine from '@/assets/icons/ArrowOneLine.vue'
</script>

<style lang="scss" scoped>
@use '@/assets/styles/styles.scss';
.section {
  &-contact {
    @include styles.section-dark;
    height: var(--section-contact-height);
    flex-direction: column;

    &__popup {
      margin-top: 59px;
      margin-left: auto;
      margin-right: auto;
      border-radius: 17px;
      width: var(--section-content-width);
      height: 652px;
      box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.1);
      display: flex;
      overflow: hidden;

      &-left {
        flex-shrink: 0;
        background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
        height: 100%;
        width: 426px;
        padding-left: 36px;

        &__logo {
          margin-top: 51px;
        }

        &__title {
          margin-top: 85px;
          font-family: var(--font-family);
          font-weight: var(--font-weight-regular);
          font-size: 28px;
          color: #fff;
        }

        &__subtitle {
          margin-top: 53px;
          font-family: var(--font-family);
          font-weight: var(--font-weight-regular);
          font-size: 13px;
          color: var(--color-text-light-gray);
          line-height: 185%;
          width: 363px;
        }

        &-cards {
          display: flex;
          flex-direction: column;
          margin-top: 50px;
          gap: 42px;

          &__card {
            display: flex;
            width: 363px;
            align-items: center;
            gap: 13px;

            &__img {
              @include styles.icon-container-light;
              flex-shrink: 0;
              width: 40px;
              height: 40px;
            }

            &-con {
              flex-shrink: 0;
              display: flex;
              flex-direction: column;
              width: 100%;
              height: 100%;
              justify-content: space-between;

              &__title {
                font-family: var(--font-family);
                font-weight: var(--font-weight-regular);
                font-size: var(--font-size-regular);
                line-height: 100%;
                color: #fff;
              }

              &__subtitle {
                font-family: var(--font-family);
                font-weight: var(--font-weight-regular);
                font-size: var(--font-size-medium);
                line-height: 100%;
                color: #6b7280;
              }
            }
          }
        }
      }

      &-right {
        width: 100%;
        background: #fff;

        &__title {
          text-align: center;
          margin-top: 82px;
          font-family: var(--font-family);
          font-weight: var(--font-weight-bold);
          font-size: 22px;
          line-height: 100%;
          color: #000;
        }

        &-inputs {
          padding-left: 35px;
          margin-top: 34px;
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          gap: 23px 14px;

          &-label {
            display: flex;
            flex-direction: column;
            gap: 13px;

            &__title {
              font-family: var(--font-family);
              font-weight: var(--font-weight-light);
              font-size: var(--font-size-small);
              line-height: 100%;
              color: #000;
            }

            &__input {
              padding-left: 10px;
              border: 1px solid #e2e8f0;
              border-radius: 5px;
              width: 260px;
              height: 44px;
            }

            &__inputtext {
              padding: 10px;
              border: 1px solid #e2e8f0;
              border-radius: 5px;
              width: 537px;
              height: 118px;
              resize: none;
            }
          }
        }

        &-check {
          display: flex;
          align-items: center;
          margin-left: auto;
          margin-right: auto;
          width: 533px;
          gap: 15px;
          margin-top: 35px;

          &-label {
            width: 17px;
            height: 17px;
            overflow: hidden;
            position: relative;

            input[type='checkbox'] {
              position: absolute;
              width: 100%;
              height: 100%;
              opacity: 0;
              cursor: pointer;
              z-index: 2;
            }

            &__checkbox {
              width: 17px;
              height: 17px;
              border: 1px solid #e2e8f0;
              border-radius: 2px;
              z-index: 1;
              transition: background 0.3s ease;
              position: relative;
              overflow: hidden;

              &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: var(--bg-dark-section);
                transform: scale(0);
                transition: transform 0.3s ease;
                z-index: 0;
              }
            }

            input[type='checkbox']:checked
              + .section-contact__popup-right-check-label__checkbox::before {
              transform: scale(1);
            }

            &__input {
              position: absolute;
              width: 100%;
              height: 100%;
              opacity: 0;
            }
          }

          &__text {
            font-family: var(--font-family);
            font-weight: var(--font-weight-light);
            font-size: 11px;
            line-height: 118%;
            color: #000;
          }

          &__btn {
            display: block;
            margin-top: 38px;
            margin-left: auto;
            margin-right: auto;
          }
        }
      }
    }
  }
}
</style>
