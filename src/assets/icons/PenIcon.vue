<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_2055_2169)">
      <path
        d="M20.5416 3.62504C20.859 3.30768 21.2358 3.05593 21.6504 2.88418C22.0651 2.71242 22.5095 2.62402 22.9583 2.62402C23.4071 2.62402 23.8515 2.71242 24.2662 2.88418C24.6808 3.05593 25.0576 3.30768 25.375 3.62504C25.6923 3.9424 25.9441 4.31916 26.1158 4.73382C26.2876 5.14847 26.376 5.59289 26.376 6.04171C26.376 6.49052 26.2876 6.93494 26.1158 7.3496C25.9441 7.76425 25.6923 8.14101 25.375 8.45837L9.06246 24.7709L2.41663 26.5834L4.22913 19.9375L20.5416 3.62504Z"
        :stroke="fill"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_2055_2169">
        <rect :width="width" :height="height" fill="white" />
      </clipPath>
    </defs>
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
