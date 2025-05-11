<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.66663 25.375H19.3333M14.5 20.5417V25.375M4.83329 3.625H24.1666C25.5013 3.625 26.5833 4.70698 26.5833 6.04167V18.125C26.5833 19.4597 25.5013 20.5417 24.1666 20.5417H4.83329C3.4986 20.5417 2.41663 19.4597 2.41663 18.125V6.04167C2.41663 4.70698 3.4986 3.625 4.83329 3.625Z"
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
