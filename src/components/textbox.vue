<template>
  <div class="component-container textbox-field" :class="{ none_margin: customStyle }">
    <div :class="['field-label', 'bottom5', { bold: isBoldTitle }]">
      {{ title }}
      <span v-if="isRequired" class="required">*</span>
    </div>

    <div class="field-input w100" :class="{ custom_style: customStyle }">
      <DxTextBox
        ref="dxtextbox"
        v-model:value="inputData_"
        :read-only="isReadOnly"
        :mode="textboxMode"
        :style="stylingMode"
        :disabled="disabled"
        :placeholder="placeholder"
        :show-clear-button="showClearButton"
        :input-attr="{ autocomplete: 'new-password' }"
        value-change-event="keyup"
        @value-changed="(e: any) => emit('value-changed', e)"
        @input="(e: any) => emit('input', e)"
        @focus-out="(e: any) => emit('focus-out', e)"
        @enter-key="(e: any) => emit('enter-key', e)"
      >
        <DxValidator>
          <DxRequiredRule v-if="isRequired" :message="`Обязательное поле: ${title}`" />
          <DxEmailRule v-if="isEmail" message="Введите корректный email" />
          <DxStringLengthRule
            v-if="minLength"
            :min="minLength"
            :message="`Минимальная длинна: ${(title, minLength)} символов`"
          />
          <DxPatternRule
            v-if="regularExpression"
            :pattern="regularExpression"
            :message="
              regexValidationError ? regexValidationError : `Некорректный формат: ${title} `
            "
          />
          <dx-custom-rule
            v-if="isCustom"
            :validation-callback="customRule"
            :message="customMessage"
          />
        </DxValidator>
      </DxTextBox>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DxTextBox } from 'devextreme-vue/ui/text-box'
import {
  DxValidator,
  DxRequiredRule,
  DxEmailRule,
  DxStringLengthRule,
  DxPatternRule,
  DxCustomRule,
} from 'devextreme-vue/validator'

import { ref, toRefs, watch, computed } from 'vue'

const props = withDefaults(
  defineProps<{
    inputData?: string | null
    title?: string | null
    textboxMode?: string
    stylingMode?: string
    isRequired?: boolean
    isEmail?: boolean
    isReadOnly?: boolean
    disabled?: boolean
    minLength?: number | null
    regularExpression?: RegExp | null
    regexValidationError?: string
    placeholder?: string
    showClearButton?: boolean
    isCustom?: boolean
    customMessage?: string
    customRule?: Function
    customStyle?: boolean
    isBoldTitle?: boolean
  }>(),
  {
    inputData: '',
    title: '',
    textboxMode: 'text',
    stylingMode: 'underlined',
    isRequired: false,
    isEmail: false,
    isReadOnly: false,
    disabled: false,
    regexValidationError: '',
    placeholder: '',
    showClearButton: false,
    minLength: null,
    regularExpression: null,
    isCustom: false,
    customRule: () => {},
    customMessage: '',
    customStyle: false,
    isBoldTitle: false,
  },
)

const emit = defineEmits<{
  (e: 'input', value: any): void
  (e: 'value-changed', value: any): void
  (e: 'focus-out', value: any): void
  (e: 'enter-key', value: any): void
  (e: 'update:inputData', payload: string | null): void
}>()

const dxtextbox = ref()

const { disabled } = toRefs(props)

// let testValue = ref(props.inputData)

const inputData_ = computed({
  get() {
    return props.inputData
  },
  set(newValue: string | null) {
    emit('update:inputData', newValue)
  },
})

function focus(): void {
  dxtextbox.value.instance.focus()
}

function getInputInstance(): HTMLInputElement | null {
  const container = dxtextbox.value.element() as HTMLElement
  const inputs = container.getElementsByTagName('input')
  return inputs ? inputs[0] : null
}

const empty = (e: any) => {
  // console.log(e.value)
}
</script>

<style lang="scss" scoped>
.component-container {
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
  .custom_style {
    .dx-texteditor.dx-editor-filled::after {
      border-bottom-color: #1e98c9;
    }

    .dx-texteditor.dx-editor-filled {
      background: none;
    }

    .dx-texteditor.dx-state-focused::before {
      border-bottom-color: #154ec1;
    }
  }
}

.bold {
  font-weight: bold;
}
.bottom5 {
  margin-bottom: 5px;
}

.none_margin {
  margin: 0;
}
</style>
