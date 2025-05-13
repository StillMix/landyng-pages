<!-- src/components/SectionDecisions.vue -->
<template>
  <div class="section-decisions" id="section-decisions">
    <p class="section-title-dark">НАШИ РЕШЕНИЯ</p>
    <AnimatedView>
      <!-- Здесь будет содержимое секции -->
    </AnimatedView>
  </div>
</template>

<script setup lang="ts">
import AnimatedView from '@/components/AnimatedView.vue'
</script>

<style lang="scss" scoped>
@use '@/assets/styles/styles.scss';
.section {
  &-decisions {
    @include styles.section-dark;
    height: var(--section-decisions-height);
  }
}
</style>
