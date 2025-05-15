<!-- src/components/SectionCompanes.vue -->
<template>
  <div class="menu menu--dark">
    <button class="menu__btn menu__btn--active menu__btn--dark">
      <WhyWeIcon width="24" height="24" fill="white" />
    </button>
    <button class="menu__btn">
      <NumberIcon width="24" height="24" fill="white" />
    </button>
    <button class="menu__btn">
      <HowWorkIcon width="24" height="24" fill="white" />
    </button>
    <button class="menu__btn">
      <ContactIcon width="24" height="24" fill="white" />
    </button>
    <button class="menu__btn">
      <CompaniesIcon width="24" height="24" fill="white" />
    </button>
    <button class="menu__btn">
      <DecisionsIcon width="24" height="24" fill="white" />
    </button>
    <button class="menu__btn">
      <PrezentationIcon width="24" height="24" fill="white" />
    </button>
  </div>
</template>

<script setup lang="ts">
import CompaniesIcon from '@/assets/icons/MenuIcon/CompaniesIcon.vue'
import ContactIcon from '@/assets/icons/MenuIcon/ContactIcon.vue'
import DecisionsIcon from '@/assets/icons/MenuIcon/DecisionsIcon.vue'
import HowWorkIcon from '@/assets/icons/MenuIcon/HowWorkIcon.vue'
import NumberIcon from '@/assets/icons/MenuIcon/NumberIcon.vue'
import PrezentationIcon from '@/assets/icons/MenuIcon/PrezentationIcon.vue'
import WhyWeIcon from '@/assets/icons/MenuIcon/WhyWeIcon.vue'
</script>

<style lang="scss" scoped>
.menu {
  z-index: 1;
  border-radius: 52px;
  width: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding-top: 13px;
  padding-bottom: 13px;

  position: fixed;
  left: 30px;
  &--light {
    background: var(--bg-dark-section);
  }
  &--dark {
    background: var(--bg-light-section);
  }
  &__btn {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    &--active {
      border-radius: 100%;
      width: 44px;
      height: 44px;
    }
    &--light {
      background: var(--bg-light-section);
    }
    &--dark {
      background: var(--bg-dark-section);
    }
  }
}
</style>
