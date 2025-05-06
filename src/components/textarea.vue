<template>
  <div class="component-container textbox-field" :class="{ none_margin: customStyle }">
    <div :class="['field-label', 'bottom5', { bold: isBoldTitle }]">
      {{ title }}
      <span v-if="isRequired" class="required">*</span>
    </div>

    <div class="field-input">
      <DxTextArea
        ref="dxtextarea"
        v-model:value="inputData_"
        :spellcheck="false"
        styling-mode="filled"
        :read-only="isReadOnly"
        :disabled="disabled"
        :height="height"
      >
        <DxValidator v-if="isRequired">
          <DxRequiredRule :message="`Поле обязательно: ${title}`" />
        </DxValidator>
      </DxTextArea>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DxTextArea } from 'devextreme-vue/ui/text-area'
import { DxValidator, DxRequiredRule } from 'devextreme-vue/validator'

import { ref, toRefs, watch, computed } from 'vue'

const props = withDefaults(
  defineProps<{
    inputData: string
    title?: string
    height?: number | string | null
    isRequired?: boolean
    isReadOnly?: boolean
    disabled?: boolean
    customStyle?: boolean
    isBoldTitle?: boolean
  }>(),
  {
    inputData: '',
    title: '',
    isRequired: false,
    isReadOnly: false,
    disabled: false,
    height: null,
    customStyle: false,
    isBoldTitle: false,
  },
)

const emit = defineEmits<{
  (e: 'update:inputData', payload: string): void
}>()

const inputData_ = computed({
  get() {
    return props.inputData
  },
  set(newValue: string) {
    emit('update:inputData', newValue)
  },
})

const dxtextarea = ref()

function getInputInstance(): HTMLInputElement | null {
  const container = dxtextarea.value.instance.element() as HTMLElement
  const inputs = container.getElementsByTagName('input')
  return inputs ? inputs[0] : null
}
</script>

<style lang="scss" scoped>
.component-container {
  margin: 5px 0;
}
.bold {
  font-weight: bold;
}
.bottom5 {
  margin-bottom: 5px;
}
</style>
