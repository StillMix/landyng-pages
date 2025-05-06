<template>
  <DxPopup
    v-model:visible="isVisible"
    :width="width"
    :height="height"
    :show-close-button="showCloseButton"
    :show-title="showTitle"
    :hide-on-outside-click="hideOnOutsideClick"
    :title="title"
    :resize-enabled="resizeEnable"
    :min-width="minWidth"
    :max-width="maxWidth"
    :min-height="minHeight"
    :max-height="maxHeight"
  >
    <userform @close-popup="closePopup" />
  </DxPopup>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { DxPopup } from 'devextreme-vue/popup'

const props = withDefaults(
  defineProps<{
    modelValue: boolean
    height?: string | number
    width?: string | number
    showCloseButton?: boolean
    showTitle?: boolean
    hideOnOutsideClick?: boolean
    title?: string
    resizeEnable?: boolean
    minWidth?: number | string
    maxWidth?: number | string
    minHeight?: number | string
    maxHeight?: number | string
  }>(),
  {
    height: '800',
    width: '1500',
    showCloseButton: true,
    showTitle: true,
    hideOnOutsideClick: true,
    title: '',
    resizeEnable: true,
    minWidth: '',
    maxWidth: '',
    minHeight: '',
    maxHeight: '',
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const isVisible = ref(props.modelValue)


const closePopup = () => {
  isVisible.value = false
}

watch(
  () => props.modelValue,
  (newValue: boolean) => {
    isVisible.value = newValue
  },
)

watch(isVisible, (newValue: boolean) => {
  emit('update:modelValue', newValue)
})

onMounted(() => {
  isVisible.value = props.modelValue
})


</script>

<style scoped lang="scss"></style>
