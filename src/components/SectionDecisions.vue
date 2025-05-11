<template>
  <div class="section-decisions" id="section-decisions">
    <p class="section-title-dark">НАШИ РЕШЕНИЯ</p>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@use '@/assets/styles/styles.scss';
.section {
  &-decisions {
    @include styles.section-dark;
    height: var(--section-decisions-height);
  }
}
</style>
