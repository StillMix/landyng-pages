<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.33337 3.33311V7.49978H3.81837M3.81837 7.49978C4.37158 6.13155 5.36311 4.98553 6.63756 4.24133C7.91202 3.49712 9.39738 3.19679 10.8608 3.38739C12.3243 3.578 13.6832 4.24877 14.7245 5.29459C15.7658 6.34041 16.4307 7.70216 16.615 9.16644M3.81837 7.49978H7.50004M16.6667 16.6664V12.4998H16.1825M16.1825 12.4998C15.6285 13.8672 14.6367 15.0123 13.3624 15.7559C12.0881 16.4994 10.6032 16.7994 9.14012 16.6088C7.67709 16.4183 6.31854 15.748 5.27715 14.7029C4.23577 13.6578 3.57034 12.2968 3.38504 10.8331M16.1825 12.4998H12.5"
      :stroke="fill"
      stroke-width="2"
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
