<!-- src/components/SectionDecisions.vue -->
<template>
  <div class="section-decisions" id="section-decisions">
    <p class="section-title-dark">НАШИ РЕШЕНИЯ</p>
    <AnimatedView>
      <Decisions />
      <ArrowTwoLine
        class="desicions__arrow"
        :width="41"
        :height="41"
        fill="#797B7D"
        data-animation="fade-in-up"
        style="animation-delay: 2s"
      />
    </AnimatedView>

  </div>
</template>

<script setup lang="ts">
import ArrowTwoLine from '@/assets/icons/ArrowTwoLine.vue';
import Decisions from '@/features/AppDecisions.vue';
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

.desicions__arrow{
      display: block;
      transform: rotate(-90deg) translateY(20px);
      margin-left: auto;
      margin-right: auto;
      opacity: 0;
      animation:
        floatArrow 0.6s ease forwards 2s,
        bounceArrow 2s infinite ease-in-out 2.6s;
}

@keyframes floatArrow {
  0% {
    opacity: 0;
    transform: rotate(-90deg) translateY(20px);
  }
  100% {
    opacity: 1;
    transform: rotate(-90deg) translateY(0);
  }
}

@keyframes bounceArrow {
  0%,
  100% {
    transform: rotate(-90deg) translateX(0);
  }
  50% {
    transform: rotate(-90deg) translateX(10px);
  }
}
</style>
