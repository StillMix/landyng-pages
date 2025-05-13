<template>
  <div class="section-contact" id="section-contact">
    <p class="section-title-dark">СВЯЗАТЬСЯ С НАМИ</p>
    <AnimatedView>
      <div class="section-contact__popup" data-animation="fade-in-up" style="animation-delay: 0.2s">
        <div class="section-contact__popup-left">
          <LogoIcon
            class="section-contact__popup-left__logo"
            data-animation="fade-in-up"
            style="animation-delay: 0.8s"
          />
          <p
            class="section-contact__popup-left__title"
            data-animation="fade-in-right"
            style="animation-delay: 1s"
          >
            Свяжитесь с нами
          </p>
          <p
            class="section-contact__popup-left__subtitle"
            data-animation="fade-in"
            style="animation-delay: 1.3s"
          >
            Заполните форму или свяжитесь с нами напрямую через один из контактных каналов ниже. Мы
            всегда рады обсудить ваши идеи и потребности.
          </p>
          <div class="section-contact__popup-left-cards">
            <div
              v-for="(i, index) in 3"
              :key="index"
              class="section-contact__popup-left-cards__card"
              :data-animation="'fade-in-right'"
              :style="`animation-delay: ${1.5 + index * 0.15}s`"
            >
              <div class="section-contact__popup-left-cards__card__img" v-if="index === 0">
                <PhoneIcon fill="#3B82F6" />
              </div>
              <div class="section-contact__popup-left-cards__card__img" v-if="index === 1">
                <EmailIcon fill="#3B82F6" />
              </div>
              <div class="section-contact__popup-left-cards__card__img" v-if="index === 2">
                <GPSIcon fill="#3B82F6" />
              </div>
              <div class="section-contact__popup-left-cards__card-con">
                <p class="section-contact__popup-left-cards__card-con__title" v-if="index === 0">
                  Телефон
                </p>
                <p class="section-contact__popup-left-cards__card-con__title" v-if="index === 1">
                  Электронная почта
                </p>
                <p class="section-contact__popup-left-cards__card-con__title" v-if="index === 2">
                  Адрес
                </p>
                <p class="section-contact__popup-left-cards__card-con__subtitle" v-if="index === 0">
                  +7 (904) 520-64-49
                </p>
                <p class="section-contact__popup-left-cards__card-con__subtitle" v-if="index === 1">
                  info@onr-kursk.ru
                </p>
                <p class="section-contact__popup-left-cards__card-con__subtitle" v-if="index === 2">
                  ул. Карла Маркса, 101А, Курск, 305514
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Форма успешно отправлена -->
        <div v-if="formState.submitted" class="section-contact__popup-success">
          <div class="section-contact__popup-success__icon">
            <CheckIcon :width="60" :height="60" fill="#3B82F6" />
          </div>
          <h3>Спасибо за ваше сообщение!</h3>
          <p>Мы получили ваш запрос и свяжемся с вами в ближайшее время.</p>
        </div>

        <!-- Форма -->
        <form
          v-else
          @submit="handleSubmit"
          class="section-contact__popup-right"
          data-animation="fade-in-left"
          style="animation-delay: 0.5s"
        >
          <p
            class="section-contact__popup-right__title"
            data-animation="fade-in"
            style="animation-delay: 1.2s"
          >
            Отправить сообщение
          </p>

          <div class="section-contact__popup-right-inputs">
            <!-- Имя -->
            <label
              class="section-contact__popup-right-inputs-label"
              :class="{ 'has-error': errors.name }"
              data-animation="fade-in-up"
              style="animation-delay: 1.3s"
            >
              <p class="section-contact__popup-right-inputs-label__title">Ваше имя*</p>
              <input
                v-model="formState.name"
                @blur="validateName"
                class="section-contact__popup-right-inputs-label__input"
              />
              <span v-if="errors.name" class="input-error">{{ errors.name }}</span>
            </label>

            <!-- Телефон -->
            <label
              class="section-contact__popup-right-inputs-label"
              :class="{ 'has-error': errors.phone }"
              data-animation="fade-in-up"
              style="animation-delay: 1.4s"
            >
              <p class="section-contact__popup-right-inputs-label__title">Телефон*</p>
              <input
                v-model="formState.phone"
                @blur="validatePhone"
                class="section-contact__popup-right-inputs-label__input"
                placeholder="+7 (XXX) XXX-XX-XX"
              />
              <span v-if="errors.phone" class="input-error">{{ errors.phone }}</span>
            </label>

            <!-- Email -->
            <label
              class="section-contact__popup-right-inputs-label"
              :class="{ 'has-error': errors.email }"
              data-animation="fade-in-up"
              style="animation-delay: 1.5s"
            >
              <p class="section-contact__popup-right-inputs-label__title">Email*</p>
              <input
                v-model="formState.email"
                @blur="validateEmail"
                class="section-contact__popup-right-inputs-label__input"
                type="email"
              />
              <span v-if="errors.email" class="input-error">{{ errors.email }}</span>
            </label>

            <!-- Сообщение -->
            <label
              class="section-contact__popup-right-inputs-label"
              data-animation="fade-in-up"
              style="animation-delay: 1.6s"
            >
              <p class="section-contact__popup-right-inputs-label__title">Сообщение</p>
              <textarea
                v-model="formState.message"
                class="section-contact__popup-right-inputs-label__inputtext"
              ></textarea>
            </label>
          </div>

          <!-- Согласие -->
          <div
            class="section-contact__popup-right-check"
            :class="{ 'has-error': errors.agreement }"
            data-animation="fade-in-up"
            style="animation-delay: 1.8s"
          >
            <label class="section-contact__popup-right-check-label">
              <input
                v-model="formState.agreement"
                @change="validateAgreement"
                class="section-contact__popup-right-check-label__input"
                type="checkbox"
              />
              <div class="section-contact__popup-right-check-label__checkbox"></div>
            </label>

            <p class="section-contact__popup-right-check__text">
              Я даю согласие на обработку персональных данных и ознакомлен(а) с политикой
              конфиденциальности
            </p>
          </div>

          <!-- Сообщение об ошибке -->
          <div v-if="submitError" class="form-error-message">
            Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.
          </div>

          <!-- Кнопка отправки -->
          <AppButon
            type="submit"
            class="section-contact__popup-right-check__btn"
            blue
            data-animation="fade-in-up"
            style="animation-delay: 2s"
            :disabled="isSubmitting || !isFormValid"
          >
            <span v-if="isSubmitting">Отправка...</span>
            <span v-else>Отправить <ArrowOneLine /></span>
          </AppButon>
        </form>
      </div>
    </AnimatedView>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import EmailIcon from '@/assets/icons/EmailIcon.vue'
import GPSIcon from '@/assets/icons/GPSIcon.vue'
import LogoIcon from '@/assets/icons/LogoIcon.vue'
import PhoneIcon from '@/assets/icons/PhoneIcon.vue'
import AppButon from './UI/AppButon.vue'
import ArrowOneLine from '@/assets/icons/ArrowOneLine.vue'
import AnimatedView from '@/components/AnimatedView.vue'
import CheckIcon from '@/assets/icons/CheckIcon.vue'

// Состояние формы
const formState = reactive({
  name: '',
  phone: '',
  email: '',
  message: '',
  agreement: false,
  submitted: false,
})

// Ошибки
const errors = reactive({
  name: '',
  phone: '',
  email: '',
  message: '',
  agreement: '',
})

// Статус формы
const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref(false)

// Проверка валидности формы
const isFormValid = computed(() => {
  return (
    formState.name.trim() !== '' &&
    formState.phone.trim() !== '' &&
    formState.email.trim() !== '' &&
    formState.agreement
  )
})

// Валидация полей
const validateName = () => {
  errors.name = ''
  if (!formState.name.trim()) {
    errors.name = 'Пожалуйста, введите ваше имя'
    return false
  }
  return true
}

const validatePhone = () => {
  errors.phone = ''
  const phoneRegex = /^(\+7|8)[- ]?\(?[0-9]{3}\)?[- ]?[0-9]{3}[- ]?[0-9]{2}[- ]?[0-9]{2}$/
  if (!formState.phone.trim()) {
    errors.phone = 'Пожалуйста, введите номер телефона'
    return false
  } else if (!phoneRegex.test(formState.phone)) {
    errors.phone = 'Пожалуйста, введите корректный номер телефона'
    return false
  }
  return true
}

const validateEmail = () => {
  errors.email = ''
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!formState.email.trim()) {
    errors.email = 'Пожалуйста, введите email'
    return false
  } else if (!emailRegex.test(formState.email)) {
    errors.email = 'Пожалуйста, введите корректный email'
    return false
  }
  return true
}

const validateAgreement = () => {
  errors.agreement = ''
  if (!formState.agreement) {
    errors.agreement = 'Необходимо согласие на обработку персональных данных'
    return false
  }
  return true
}

// Обработка отправки формы
const handleSubmit = async (e: Event) => {
  e.preventDefault()

  // Валидируем все поля
  const isNameValid = validateName()
  const isPhoneValid = validatePhone()
  const isEmailValid = validateEmail()
  const isAgreementValid = validateAgreement()

  // Если есть ошибки, прерываем отправку
  if (!isNameValid || !isPhoneValid || !isEmailValid || !isAgreementValid) {
    return
  }

  try {
    isSubmitting.value = true

    // Имитация отправки формы
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Успешная отправка
    submitSuccess.value = true
    formState.submitted = true

    // Сбрасываем форму после успешной отправки
    setTimeout(() => {
      formState.name = ''
      formState.phone = ''
      formState.email = ''
      formState.message = ''
      formState.agreement = false
      formState.submitted = false
      submitSuccess.value = false
    }, 3000)
  } catch (error) {
    console.error('Ошибка при отправке формы:', error)
    submitError.value = true

    // Сбрасываем ошибку через некоторое время
    setTimeout(() => {
      submitError.value = false
    }, 3000)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/styles.scss';
.section {
  &-contact {
    @include styles.section-dark;
    height: var(--section-contact-height);
    flex-direction: column;
    position: relative;
    overflow: hidden;

    /* Фоновый эффект "звездного неба" */
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image:
        radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 25%),
        radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.1) 0%, transparent 20%);
      opacity: 0;
      animation: fadeIn 1.5s ease-in forwards 0.5s;
    }

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
      opacity: 0;
      transform: translateY(30px);
      animation: fadeInUp 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards 0.2s;
      position: relative;

      /* Эффект свечения при появлении */
      &::after {
        content: '';
        position: absolute;
        top: -100%;
        left: -100%;
        width: 300%;
        height: 200%;
        background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
        opacity: 0;
        animation: pulseGlow 3s ease-out forwards 1s;
      }

      /* Состояние успешной отправки */
      &-success {
        flex: 1;
        background: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 30px;
        animation: fadeIn 0.6s ease-in-out;

        &__icon {
          background: rgba(59, 130, 246, 0.1);
          border-radius: 50%;
          width: 100px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          animation: scaleIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        h3 {
          font-size: 24px;
          color: #0f172a;
          margin-bottom: 10px;
          font-weight: 600;
        }

        p {
          color: #64748b;
          font-size: 16px;
          max-width: 70%;
        }
      }

      &-left {
        flex-shrink: 0;
        background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
        height: 100%;
        width: 426px;
        padding-left: 36px;
        position: relative;
        z-index: 2;

        /* Подстветка контура границы */
        &::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 1px;
          height: 0;
          background: linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.5), transparent);
          animation: borderGlow 1.5s ease forwards 1.2s;
        }

        &__logo {
          margin-top: 51px;
          opacity: 0;
          transform: translateY(15px);
          animation: fadeInUp 0.6s ease forwards 0.8s;
        }

        &__title {
          margin-top: 85px;
          font-family: var(--font-family);
          font-weight: var(--font-weight-regular);
          font-size: 28px;
          color: #fff;
          opacity: 0;
          transform: translateX(-20px);
          animation: fadeInRight 0.7s ease forwards 1s;
          position: relative;

          /* Подчеркивание заголовка */
          &::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--color-primary);
            animation: lineExpand 0.8s ease forwards 1.5s;
          }
        }

        &__subtitle {
          margin-top: 53px;
          font-family: var(--font-family);
          font-weight: var(--font-weight-regular);
          font-size: 13px;
          color: var(--color-text-light-gray);
          line-height: 185%;
          width: 363px;
          opacity: 0;
          animation: fadeIn 0.8s ease forwards 1.3s;
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
            opacity: 0;
            transform: translateX(-15px);

            /* Появление карточек с интервалом */
            @for $i from 1 through 3 {
              &:nth-child(#{$i}) {
                animation: fadeInRight 0.7s ease forwards #{1.5 + $i * 0.15}s;
              }
            }

            &:hover {
              .section-contact__popup-left-cards__card__img {
                background: rgba(59, 130, 246, 0.2);
                transform: scale(1.08);
              }

              .section-contact__popup-left-cards__card-con__subtitle {
                color: rgba(255, 255, 255, 0.7);
              }
            }

            &__img {
              @include styles.icon-container-light;
              flex-shrink: 0;
              width: 40px;
              height: 40px;
              transition: all 0.3s ease;
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
                transition: color 0.3s ease;
              }
            }
          }
        }
      }

      &-right {
        width: 100%;
        background: #fff;
        position: relative;
        z-index: 2;
        transform: translateX(30px);
        opacity: 0;
        animation: fadeInLeft 0.7s ease forwards 0.5s;

        &__title {
          text-align: center;
          margin-top: 82px;
          font-family: var(--font-family);
          font-weight: var(--font-weight-bold);
          font-size: 22px;
          line-height: 100%;
          color: #000;
          opacity: 0;
          animation: fadeIn 0.6s ease forwards 1.2s;
        }

        &-inputs {
          padding-left: 35px;
          margin-top: 34px;
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          gap: 8px 14px;

          &-label {
            display: flex;
            flex-direction: column;
            gap: 10px;
            opacity: 0;
            transform: translateY(15px);
            position: relative;
            min-height: 87px;

            /* Появление полей формы с задержкой */
            @for $i from 1 through 4 {
              &:nth-child(#{$i}) {
                animation: fadeInUp 0.5s ease forwards #{1.3 + $i * 0.1}s;
              }
            }

            /* Состояние ошибки */
            &.has-error {
              .section-contact__popup-right-inputs-label__input,
              .section-contact__popup-right-inputs-label__inputtext {
                border-color: #ef4444;
                background-color: rgba(239, 68, 68, 0.05);
              }
            }

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
              transition:
                border 0.3s ease,
                box-shadow 0.3s ease,
                background-color 0.3s ease;

              &:focus {
                border-color: var(--color-primary);
                box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
                outline: none;
              }

              &:hover {
                border-color: #cbd5e1;
              }
            }

            &__inputtext {
              padding: 10px;
              border: 1px solid #e2e8f0;
              border-radius: 5px;
              width: 537px;
              height: 118px;
              resize: none;
              transition:
                border 0.3s ease,
                box-shadow 0.3s ease,
                background-color 0.3s ease;

              &:focus {
                border-color: var(--color-primary);
                box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
                outline: none;
              }

              &:hover {
                border-color: #cbd5e1;
              }
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
          opacity: 0;
          transform: translateY(10px);
          animation: fadeInUp 0.5s ease forwards 1.8s;

          /* Состояние ошибки */
          &.has-error {
            .section-contact__popup-right-check-label__checkbox {
              border-color: #ef4444;
              background-color: rgba(239, 68, 68, 0.05);
            }
          }

          &-label {
            flex-shrink: 0;
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
              border: 1px solid #a5bad5;
              border-radius: 2px;
              z-index: 1;
              transition:
                background 0.3s ease,
                border 0.3s ease,
                background-color 0.3s ease;
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
                transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                z-index: 0;
              }

              &:hover {
                border-color: var(--color-primary);
              }
            }

            input[type='checkbox']:checked
              + .section-contact__popup-right-check-label__checkbox::before {
              transform: scale(1);
            }

            input[type='checkbox']:checked + .section-contact__popup-right-check-label__checkbox {
              border-color: var(--color-primary);
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
            opacity: 0;
            transform: translateY(15px);
            animation: fadeInUp 0.6s ease forwards 2s;

            span {
              display: flex;
              align-items: center;
              gap: 5px;
            }
            &:disabled {
              background: #c3c3c3;
              opacity: 0.7;
              cursor: not-allowed;
            }
          }
        }
      }
    }
  }
}

/* Стили для сообщений об ошибках */
.input-error {
  color: #ef4444;
  font-size: 12px;
  margin-top: -5px;
  font-weight: 500;
  animation: fadeIn 0.3s ease-in-out;
}

.agreement-error {
  color: #ef4444;
  font-size: 12px;
  display: block;
  text-align: center;
  margin-top: 5px;
  font-weight: 500;
  animation: fadeIn 0.3s ease-in-out;
}

.form-error-message {
  background-color: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 4px;
  padding: 10px;
  text-align: center;
  margin: 15px auto;
  width: 80%;
  font-size: 14px;
  animation: shake 0.5s ease-in-out;
}

/* Дополнительные анимации */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes lineExpand {
  0% {
    width: 0;
  }
  100% {
    width: 60px;
  }
}

@keyframes borderGlow {
  0% {
    height: 0;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    height: 100%;
    opacity: 0;
  }
}

@keyframes pulseGlow {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
}

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(-5px);
  }
  20%,
  40%,
  60%,
  80% {
    transform: translateX(5px);
  }
}

@keyframes scaleIn {
  0% {
    transform: scale(0);
  }
  70% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
