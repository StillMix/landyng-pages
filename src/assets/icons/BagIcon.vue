<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 31 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25.8334 9.04175H5.16671C3.73997 9.04175 2.58337 10.1983 2.58337 11.6251V24.5417C2.58337 25.9685 3.73997 27.1251 5.16671 27.1251H25.8334C27.2601 27.1251 28.4167 25.9685 28.4167 24.5417V11.6251C28.4167 10.1983 27.2601 9.04175 25.8334 9.04175Z"
      :stroke="fill"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20.6667 27.125V6.45833C20.6667 5.77319 20.3945 5.11611 19.9101 4.63164C19.4256 4.14717 18.7685 3.875 18.0834 3.875H12.9167C12.2316 3.875 11.5745 4.14717 11.09 4.63164C10.6055 5.11611 10.3334 5.77319 10.3334 6.45833V27.125"
      :stroke="fill"
      stroke-width="2.5"
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
