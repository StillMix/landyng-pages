<template>
  <div class="userform">
    <div class="userform__content">
      <div class="userform__content__info">
        <div class="userform__content__info__logo">
          <img class="logo_img" src="@/assets/logo2.png" alt="">
        </div>
        <div class="userform__content__text__callus">Свяжитесь с нами</div>
        <div class="userform__content__text__howto">Заполните форму либо позвоните по телефону
          +7-904-520-64-49 или отправьте письмо на наш e-mail: info@onr-kursk.ru</div>
      </div>
      <div class="userform__content__boxes">
        <div class="userform__content__boxes__text">Ответим на все ваши вопросы</div>
        <div class="inputs-wrapper">
          <input
            id="name"
            v-model="formData.name"
            type="text"
            class="input"
            placeholder="Как к вам обращаться? *"
            :class="{ 'input-error': errors.name }"
            @input="clearNameError"
          >
          <div v-if="errors.name" class="error-message">{{ errors.name }}</div>

          <input
            id="phone"
            v-model="formData.phone"
            type="text"
            class="input"
            placeholder="Телефон для связи *"
            :class="{ 'input-error': errors.phone }"
            @blur="validatePhone"
            @input="clearPhoneError"
          >
          <div v-if="errors.phone" class="error-message">{{ errors.phone }}</div>

          <input
            id="email"
            v-model="formData.email"
            type="text"
            class="input"
            placeholder="Ваш e-mail *"
            :class="{ 'input-error': errors.email }"
            @blur="validateEmail"
            @input="clearEmailError"
          >
          <div v-if="errors.email" class="error-message">{{ errors.email }}</div>
        </div>
        <div class="term__case">
          <div class="agreement__box">
            <div class="term__info">Все поля со звездочкой (*) - обязательны к заполнению.</div>
            <div class="policy">
              <input
                v-model="formData.agreement"
                type="checkbox"
                class="checkbox"
                :class="{ 'input-error': errors.agreement }"
                @change="clearAgreementError"
              >
              Я даю согласие на обработку персональных данных и ознакомлен(а) с политикой конфиденциальности
            </div>
            <div v-if="errors.agreement" class="error-message">{{ errors.agreement }}</div>
          </div>
          <div class="button__wrapper"><input
            type="button"
            value="Отправить"
            class="button"
            @click="submitForm"
          ></div>
        </div>
      </div>
      <div v-if="isSubmitted" class="success-message">
        Форма успешно отправлена! Мы свяжемся с вами в ближайшее время.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isSubmitted = ref(false);

const emit = defineEmits(['submit']);

const formData = ref({
  name: '',
  phone: '',
  email: '',
  agreement: false
});

const errors = ref({
  name: '',
  phone: '',
  email: '',
  agreement: ''
});

const validatePhone = () => {
  const phoneRegex = /^(\+7|8)[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
  if (!formData.value.phone) {
    errors.value.phone = 'Поле телефона обязательно';
  } else if (!phoneRegex.test(formData.value.phone)) {
    errors.value.phone = 'Введите корректный номер телефона';
  } else {
    errors.value.phone = '';
  }
};

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.value.email) {
    errors.value.email = 'Поле email обязательно';
  } else if (!emailRegex.test(formData.value.email)) {
    errors.value.email = 'Введите корректный email';
  } else {
    errors.value.email = '';
  }
};

const clearNameError = () => {
  if (errors.value.name && formData.value.name.trim()) {
    errors.value.name = '';
  }
};

const clearPhoneError = () => {
  if (errors.value.phone && formData.value.phone) {
    errors.value.phone = '';
  }
};

const clearEmailError = () => {
  if (errors.value.email && formData.value.email) {
    errors.value.email = '';
  }
};

const clearAgreementError = () => {
  if (errors.value.agreement && formData.value.agreement) {
    errors.value.agreement = '';
  }
};

const validateForm = () => {
  let isValid = true;

  if (!formData.value.name.trim()) {
    errors.value.name = 'Поле имени обязательно';
    isValid = false;
  } else {
    errors.value.name = '';
  }

  validatePhone();
  validateEmail();

  if (!formData.value.agreement) {
    errors.value.agreement = 'Необходимо дать согласие';
    isValid = false;
  } else {
    errors.value.agreement = '';
  }

  return isValid;
};

const submitForm = () => {
  if (validateForm()) {
    emit('submit', formData.value);
    formData.value = {
      name: '',
      phone: '',
      email: '',
      agreement: false
    };
    isSubmitted.value = true;
    setTimeout(() => {
      isSubmitted.value = false;
    }, 3000);
  }
};
</script>

<style scoped lang="scss">
.userform {
  min-height: 700px;
  height: auto;
  background: var(--bg-secondary);
  display: flex;
  padding: 20px;
  overflow-x: hidden;
  box-sizing: border-box;
}

.userform__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1380px;
  min-height: 500px;
  margin: auto;
  border-radius: 25px;
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(166, 115, 254, 0.3);
  font-family: 'Helvetica Neue', Arial, sans-serif;
  padding: 20px;
  box-sizing: border-box;
}

.userform__content__info {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  text-align: center;
}

.userform__content__info__logo {
  width: 100%;
  max-width: 530px;
  .logo_img {
    width: 100%;
    max-width: 300px;
  }
}

.userform__content__text__callus {
  width: 100%;
  max-width: 530px;
  color: var(--text-secondary);
  font-size: 2rem;
  margin-top: 15px;
}

.userform__content__text__howto {
  width: 100%;
  max-width: 530px;
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin: 15px 0;
}

.userform__content__boxes {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
}

.userform__content__boxes__text {
  color: var(--text-secondary);
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 15px;
}

.inputs-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 530px;
  margin: 0 auto;
  margin-top: 15px;
}

.input {
  padding: 12px 15px;
  border: 0px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  color: #333;
  background-color: #ffffff9d;
  transition: all 0.3s ease;
  margin: 8px 0px;
  width: 100%;
}

.input:focus {
  border-color: #6c5ce7;
  box-shadow: 0 0 0 3px rgba(108, 92, 231, 0.2);
  outline: none;
  background-color: rgb(153, 153, 153)
}

.input-error {
  border: 1px solid #ff4444;
  background-color: rgba(255, 68, 68, 0.1);
  color: rgb(255, 255, 255);
}

.error-message {
  color: #ff4444;
  font-size: 0.9rem;
  margin-top: -5px;
  margin-bottom: 5px;
}

.term__case {
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  width: 100%;
  max-width: 530px;
  align-self: center;
}

.agreement__box {
  width: 100%;
  color: var(--text-secondary);
  margin-bottom: 15px;
}

.checkbox {
  margin-left: 0px;
  &:hover {
    cursor: pointer;
  }
}

.policy {
  margin-top: 10px;
  margin-bottom: 7px;
  font-size: 0.9rem;
}

.button__wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
}

.button {
  height: 40px;
  width: 130px;
  border-radius: 13px;
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

.success-message {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #4CAF50;
  color: white;
  padding: 15px 25px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  z-index: 1000;
  animation: fadeInOut 3s ease-in-out;
}

@keyframes fadeInOut {
  0% { opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { opacity: 0; }
}


@media (min-width: 768px) {
  .userform__content {
    flex-direction: row;
    padding: 30px;
  }

  .userform__content__info,
  .userform__content__boxes {
    width: 50%;
    text-align: left;
  }

  .term__case {
    flex-direction: row;
    justify-content: space-between;
  }

  .agreement__box {
    max-width: 370px;
  }

  .button__wrapper {
    justify-content: flex-end;
  }
}

@media (min-width: 992px) {
  .userform__content__text__callus {
    font-size: 3rem;
  }


  .userform__content__text__howto {
    font-size: 1.4rem;
  }

  .userform__content__boxes__text {
    font-size: 2rem;
  }

  .policy {
    font-size: 1rem;
  }
}

@media (max-width: 767px) {
  .userform {
    padding: 15px;
    min-height: auto;
  }

  .userform__content {
    padding: 15px;
    width: 100%;
  }

  .userform__content__info,
  .userform__content__boxes {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
  }

  .inputs-wrapper,
  .term__case {
    width: 100%;
    max-width: 100%;
    padding: 0 5px;
    box-sizing: border-box;
  }

  .input {
    width: calc(100% - 24px);
    margin: 8px 0;
  }

  .userform__content__text__callus {
    font-size: 1.5rem;
    max-width: 100%;
  }

  .userform__content__text__howto {
    font-size: 1rem;
    max-width: 100%;
  }

  .userform__content__boxes__text {
    font-size: 1.2rem;
  }

  .policy {
    font-size: 0.8rem;
    line-height: 1.4;
  }

  .button {
    width: 100%;
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .userform {
    padding: 10px;
  }

  .userform__content {
    padding: 10px;
  }

  .userform__content__text__callus {
    font-size: 1.5rem;
  }

  .userform__content__text__howto {
    font-size: 1rem;
  }

  .userform__content__boxes__text {
    font-size: 1.2rem;
  }

  .input {
    padding: 8px 10px;
    font-size: 14px;
  }

  .button {
    width: 100%;
  }

  .userform__content__text__callus {
    font-size: 1.3rem;
  }
}
</style>
