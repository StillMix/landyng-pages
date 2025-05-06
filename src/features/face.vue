<template>
  <div>
    <div class="page-background">
        <Background />
      </div>
      <div class="page-header">
        <Header />
      </div>
      <div class="page-slogan">
        <Slogan />
      </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/features/header.vue';
import Background from '@/features/background.vue';
import Slogan from '@/features/slogan.vue';
</script>

<style scoped>
.page-background {
  z-index: 0;
}

.page-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}

.page-slogan {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}
</style>
