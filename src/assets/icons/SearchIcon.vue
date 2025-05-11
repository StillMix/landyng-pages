<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25.375 25.375L20.1188 20.1188M22.9583 13.2917C22.9583 18.6304 18.6304 22.9583 13.2917 22.9583C7.95291 22.9583 3.625 18.6304 3.625 13.2917C3.625 7.95291 7.95291 3.625 13.2917 3.625C18.6304 3.625 22.9583 7.95291 22.9583 13.2917Z"
      :stroke="fill"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
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
