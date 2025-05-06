<template>
  <div class="component-container textbox-field" :class="{ none_margin: customStyle }">
    <div :class="['field-label', 'bottom5', { bold: isBoldTitle }]">
      {{ title }}
      <span v-if="isRequired" class="required">*</span>
    </div>

    <div class="field-input w100">
      <DxDateBox
        ref="dxdatebox"
        v-model:value="inputData_"
        width="100%"
        :type="type"
        :read-only="isReadOnly"
        :styling-mode="stylingMode"
        :show-clear-button="showClearButton"
        :interval="interval"
        :placeholder="placeholder"
        :on-value-changed="(e: any) => $emit('on-value-changed', e)"
        validation-message-position="bottom"
        @opened="onOpened"
        @closed="onClosed"
      >
        <DxValidator v-if="isRequired || isCustom" ref="validator">
          <DxRequiredRule v-if="isRequired" message="Обязательное поле для заполнения" />
          <DxCustomRule
            v-if="isCustom"
            :message="message"
            :validation-callback="doCustomValidation"
          />
          <DxCompareRule
            v-if="isComparison"
            :message="message"
            :comparison-target="doComparisonValidation"
          />
        </DxValidator>
      </DxDateBox>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DxDateBox } from 'devextreme-vue'
import {
  DxValidator,
  DxRequiredRule,
  DxCustomRule,
  DxCompareRule,
  DxRangeRule,
} from 'devextreme-vue/validator'

import { ref, toRefs, watch, computed } from 'vue'

const props = withDefaults(
  defineProps<{
    inputData: any
    title?: string
    stylingMode?: string
    isRequired?: boolean
    isReadOnly?: boolean
    disabled?: boolean
    showClearButton?: boolean
    isCustom?: boolean
    isComparison?: boolean
    interval?: number
    type?: string
    message?: string
    placeholder?: string
    customStyle?: boolean
    isBoldTitle?: boolean
    customValidationCallback?: Function
    valueChangedCallback?: Function
    comparisonValidationCallback?: Function
  }>(),
  {
    inputData: null,
    title: '',
    stylingMode: 'filled',
    isRequired: false,
    isReadOnly: false,
    disabled: false,
    showClearButton: false,
    type: 'date',
    interval: 30,
    message: '',
    placeholder: '',
    isCustom: false,
    isComparison: false,
    customValidationCallback: undefined,
    valueChangedCallback: undefined,
    comparisonValidationCallback: undefined,
    customStyle: false,
    isBoldTitle: false,
  },
)

const emit = defineEmits<{
  (e: 'opened', payload: any): void
  (e: 'closed', payload: any): void
  (e: 'checkDate'): void
  (e: 'on-value-changed', payload: string): void
  (e: 'update:inputData', payload: string): void
}>()

const dxdatebox = ref()
const validator = ref()

const inputData_ = computed({
  get() {
    return props.inputData
  },
  set(newValue: string) {
    emit('update:inputData', newValue)
  },
})

const empty = (e: any) => {
  // console.log(e.value)
}

const onOpened = (e: any) => {
  emit('opened', e)
}

const onClosed = (e: any) => {
  emit('closed', e)
}

const doComparisonValidation = (): boolean => {
  console.log('do comparison validation')
  if (props.comparisonValidationCallback) {
    console.log('call comparisonCallback')
    return props.comparisonValidationCallback()
  }

  return false
}

const doCustomValidation = (e: any): boolean => {
  console.log('do custom validation')
  if (props.isCustom) {
    if (props.customValidationCallback) {
      return props.customValidationCallback(e)
    }
  }

  return true
}

const doValidation = () => {
  if (validator.value?.instance) {
    console.log('call validate')
    validator.value.instance.validate()
    console.log(validator.value.instance.validationRules)
  } else {
    console.log('not call validate')
  }
}

defineExpose({ doValidation, validator })
</script>

<style lang="scss" scoped>
.component-container {
  width: calc(100% - 5px);
  margin: 5px 0;

  &.horizontal {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .field-label:not(:empty) {
      margin-right: 10px;

      &::after {
        content: ':';
      }
    }
  }
}
.bold {
  font-weight: bold;
}
.bottom5 {
  margin-bottom: 5px;
}
</style>
