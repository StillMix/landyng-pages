<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 31 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.9584 27.125V24.5417C21.9584 23.1714 21.414 21.8572 20.4451 20.8883C19.4761 19.9193 18.162 19.375 16.7917 19.375H6.45835C5.08807 19.375 3.77391 19.9193 2.80497 20.8883C1.83603 21.8572 1.29169 23.1714 1.29169 24.5417V27.125"
      :stroke="fill"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.625 14.2083C14.4785 14.2083 16.7916 11.8951 16.7916 9.04167C16.7916 6.1882 14.4785 3.875 11.625 3.875C8.77151 3.875 6.45831 6.1882 6.45831 9.04167C6.45831 11.8951 8.77151 14.2083 11.625 14.2083Z"
      :stroke="fill"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M29.7083 27.1251V24.5417C29.7075 23.397 29.3264 22.2849 28.6251 21.3801C27.9237 20.4754 26.9417 19.8292 25.8333 19.543"
      :stroke="fill"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20.6667 4.04297C21.7781 4.32752 22.7631 4.97387 23.4666 5.88012C24.17 6.78636 24.5518 7.90096 24.5518 9.04818C24.5518 10.1954 24.17 11.31 23.4666 12.2162C22.7631 13.1225 21.7781 13.7688 20.6667 14.0534"
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
