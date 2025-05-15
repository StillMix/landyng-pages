<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 1V5H12L8 1L4 5H2V1H1V5C1 5.5515 1.4485 6 2 6H4L7.5 9.5V13.086L6.207 11.793L5.5 12.5L8 15L10.5 12.5L9.793 11.793L8.5 13.086V9.5L12 6H14C14.5515 6 15 5.5515 15 5V1H14ZM8 8.5855L4.9145 5.5L8 2.4145L11.0855 5.5L8 8.5855Z"
      :fill="fill"
    />
  </svg>
</template>

<script setup lang="ts">
defineProps({
  width: {
    type: [String, Number],
    default: 21,
  },
  height: {
    type: [String, Number],
    default: 21,
  },
  fill: {
    type: String,
    default: 'white',
  },
})
</script>
