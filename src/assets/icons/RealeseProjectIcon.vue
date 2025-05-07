<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 31 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28.4167 14.3117V15.5C28.4151 18.2854 27.5131 20.9956 25.8454 23.2265C24.1776 25.4574 21.8334 27.0894 19.1623 27.8792C16.4912 28.6689 13.6364 28.5741 11.0237 27.6088C8.4109 26.6435 6.18016 24.8595 4.66414 22.5229C3.14812 20.1862 2.42804 17.4221 2.61131 14.6427C2.79458 11.8634 3.87137 9.21774 5.68109 7.10037C7.49081 4.983 9.93649 3.50736 12.6534 2.89351C15.3703 2.27966 18.2128 2.56051 20.7571 3.69415"
      :stroke="fill"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M28.4167 5.16675L15.5 18.0963L11.625 14.2213"
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
