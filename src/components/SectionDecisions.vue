<template>
  <div class="section-decisions">
    <p class="section-title-dark">НАШИ РЕШЕНИЯ</p>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import '@/assets/styles/styles.scss';
.section {
  &-decisions {
    @include section-dark;
    height: var(--section-decisions-height);
  }
}
</style>
