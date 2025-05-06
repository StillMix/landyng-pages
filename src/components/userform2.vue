<template>
  <DxValidationGroup ref="validationGroup" class="validationgroup">
    <div class="user-form-wrapper">
      <div class="user-form-container">
        <div class="content-section">

          <div class="personal-details-container">
            <div class="pd-title">
              <span>Личные данные</span>
            </div>

            <div class="pd-fields">
              <div class="pd-content-box">
                <textbox
                  v-model:inputData="userData.fullName"
                  :is-required="true"
                  title="ФИО"
                  :is-bold-title="true"
                  :placeholder="'Фамилия Имя Отчество'"
                />
              </div>
              <div class="pd-content-box">
                <textbox
                  v-model:inputData="userData.email"
                  :is-email="true"
                  :is-required="true"
                  title="Email"
                  :is-bold-title="true"
                  :placeholder="'Email'"
                />
              </div>
              <div class="pd-content-box">
                <textbox
                  v-model:inputData="userData.phone"
                  title="Номер телефона"
                  :is-bold-title="true"
                  :regular-expression="/^\+?\d{10,15}$/"
                  placeholder="+7 123 456-78-90"
                />
              </div>
              <div class="pd-content-box">
                <datebox
                  v-model:inputData="userData.birthDate"
                  title="Дата Рождения"
                  :is-bold-title="true"
                  placeholder="месяц/день/год"
                />
              </div>
            </div>

            <div class="pd-textarea">
              <dtextarea
                v-model:inputData="userData.info"
                title="Информация"
                :is-bold-title="true"
                height="100px"
              />
            </div>
          </div>
        </div>

        <div class="buttons">
          <div class="button"><dbutton :btn-text="'Сохранить'" @on-click="validateAndSave" /></div>
        </div>
      </div>
    </div>
  </DxValidationGroup>
</template>

<script setup lang="ts">
import { ref, type Ref, computed } from 'vue'
import dbutton from './button.vue'
import dtextarea from './textarea.vue'
import datebox from './datebox.vue'
import textbox from './textbox.vue'
import type { User } from '@/services/user-service'
import { DxValidationGroup } from 'devextreme-vue'
import { alert } from 'devextreme/ui/dialog'

const props = defineProps<{
  userData: User
}>()

const emit = defineEmits<{
  (e: 'update:user-data', value: User): void
  (e: 'close-popup'): void
}>()

const userData: Ref<User> = ref({
  ...props.userData,
})

const uploadAvatar = () => {}

const avatarUrl = computed(() => {
  return userData.value.avatar
    ? userData.value.avatar
    : '/images/default-avatar.jpg'
})
const newPassword = ref('')
const confirmPassword = ref('')
const validationGroup = ref<InstanceType<typeof DxValidationGroup>>()
const showResetPassword = ref(false)

const validatePasswords = (): boolean => {
  if (!newPassword.value) {
    return true
  }

  const passwordRegex = /^[a-zA-Z0-9]{8,}$/
  if (!passwordRegex.test(newPassword.value)) {
    alert(
      'Пароль должен содержать не менее 8 символов и состоять только из латинских букв и цифр.',
      'Ошибка',
    )
    return false
  }

  if (newPassword.value !== confirmPassword.value) {
    alert('Новый пароль и подтверждение не совпадают.', 'Ошибка')
    return false
  }

  if (newPassword.value === userData.value.password) {
    alert('Новый пароль не должен совпадать с текущим паролем.', 'Ошибка')
    return false
  }

  return true
}

const validateAndSave = () => {
  if (!validatePasswords()) {
    return
  }

  const validationResult = validationGroup.value?.instance.validate()
  if (validationResult.isValid) {
    saveForm()
  } else {
    alert('Пожалуйста, заполните все обязательные поля корректно.', 'Ошибка ')
  }
}

const resetForm = () => {
  userData.value = {
    fullName: '',
    email: '',
    phone: '',
    birthDate: null,
    info: '',
    password: userData.value.password,
    avatar: '',
  }
  newPassword.value = ''
  confirmPassword.value = ''
}

const saveForm = () => {
  if (newPassword.value) {
    userData.value.password = newPassword.value
    newPassword.value = ''
    confirmPassword.value = ''
  }
  showResetPassword.value = false
  emit('update:user-data', userData.value)
  emit('close-popup')
  alert('Данные успешно сохранены!', 'Сохранено')
}
</script>

<style lang="scss" scoped>
.validationgroup {
  height: 100%;
}

.user-form-wrapper {
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
}

.user-form-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 20px;
  margin: 10px;
  padding: 10px;
}

.avatar-section {
  padding: 15px;
  display: flex;
  flex-direction: column;
  width: 20vw;

  border: 1px solid gray;
  background-color: rgb(225, 225, 225);
  padding: 5px 10px;

  .avatar-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .avatar-container {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    border: 1px solid gray;
    border-radius: 50%;
    overflow: hidden;

  }

  .dl-btn{
    display: flex;
    justify-content: center;
  }
}

.content-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.personal-details-container {
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 15px;
  padding: 15px;
  width: 55vw;

  border: 1px solid gray;
  background-color: rgb(225, 225, 225);
  padding: 5px 10px;

  .pd-title {
    font-size: 18px;
    font-weight: bold;
  }

  .pd-fields {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;

    .pd-content-box {
      width: 100%;
      height: 100px;
    }
  }

  .pd-textarea {
    width: 100%;
  }
}

.reset-password-section{
  display: flex;
  justify-content: center;
  width: 25vw;

  border: 1px solid gray;
  background-color: rgb(225, 225, 225);
  padding: 5px 10px;

}

.show-reset-password-button {
  display: flex;
  align-self: center;
}

.reset-password-container {
  padding: 15px;
  width: 100%;
  .rp-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
  }
}

.buttons {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 10px;
}
</style>
