<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.5 6.6665L9.075 11.0498C9.34888 11.2326 9.67075 11.3301 10 11.3301C10.3292 11.3301 10.6511 11.2326 10.925 11.0498L17.5 6.6665M4.16667 15.8332H15.8333C16.2754 15.8332 16.6993 15.6576 17.0118 15.345C17.3244 15.0325 17.5 14.6085 17.5 14.1665V5.83317C17.5 5.39114 17.3244 4.96722 17.0118 4.65466C16.6993 4.3421 16.2754 4.1665 15.8333 4.1665H4.16667C3.72464 4.1665 3.30072 4.3421 2.98816 4.65466C2.67559 4.96722 2.5 5.39114 2.5 5.83317V14.1665C2.5 14.6085 2.67559 15.0325 2.98816 15.345C3.30072 15.6576 3.72464 15.8332 4.16667 15.8332Z"
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
