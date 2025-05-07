<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 31 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.5 28.4166C22.6337 28.4166 28.4167 22.6336 28.4167 15.4999C28.4167 8.36624 22.6337 2.58325 15.5 2.58325C8.36633 2.58325 2.58334 8.36624 2.58334 15.4999C2.58334 22.6336 8.36633 28.4166 15.5 28.4166Z"
      :stroke="fill"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.5 7.75V15.5L20.6667 18.0833"
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
