<template>
  <div :class="'component-container' + (cssClass ? ' ' + cssClass : '')">
    <dx-button
      ref="button_ref"
      :type="props.btnType"
      :styling-mode="stylingMode"
      :icon="icon"
      :text="btnText"
      :disabled="disabled"
      :use-submit-behavior="useSubmiteBehavior"
      :width="width"
      :hint="hint"
      :style="elemStyle"
      :height="height"
      @click="emit('onClick', $event)"
    >
      <slot name="default"></slot>
    </dx-button>
  </div>
</template>

<script setup lang="ts">
import { DxButton } from 'devextreme-vue/ui/button'
import { ref, toRefs, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    btnType?: string
    btnText?: string
    stylingMode?: string
    icon?: string
    disabled?: boolean
    useSubmiteBehavior?: boolean
    width?: string | number
    cssClass?: string
    hint?: string
    height?: string
    elemStyle?: string
  }>(),
  {
    btnType: 'success',
    btnText: '',
    stylingMode: 'contained',
    icon: '',
    disabled: false,
    useSubmiteBehavior: false,
    width: 'auto',
    cssClass: '',
    height: '28px',
    elemStyle: '',
    hint: '',
  },
)

const emit = defineEmits<{
  (e: 'onClick', value: any): void
}>()

const button_ref = ref()

const { disabled } = toRefs(props)

watch(disabled, (newValue: boolean, oldValue: boolean) => {
  if (newValue || !oldValue) {
    return
  }
  // if (button_ref.value) {
  //   button_ref.value.repaint()
  // }
})
</script>

<style lang="scss" scoped>
.component-container {
  margin: 5px;
}
</style>
