<template>
  <div class="ticker-container" ref="tickerContainer">
    <div class="ticker-track" :style="trackStyle" ref="tickerTrack">
      <div
        v-for="(logo, index) in logosWithDuplicates"
        :key="index"
        class="ticker-item"
      >
        <img
          :src="logo"
          :alt="`Partner logo ${index}`"
          :class="{ 'grayscale': grayscale }"
          @mouseenter="hoverLogo(index)"
          @mouseleave="unhoverLogo(index)"
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';


const props = defineProps({
  logos: {
    type: Array as () => string[],
    required: true,
    default: () => []
  },
  speed: {
    type: Number,
    default: 50
  },
  direction: {
    type: String as () => 'left' | 'right',
    default: 'left'
  },
  grayscale: {
    type: Boolean,
    default: true
  },
  pauseOnHover: {
    type: Boolean,
    default: true
  }
});


const tickerContainer = ref<HTMLElement | null>(null);
const tickerTrack = ref<HTMLElement | null>(null);
const isPaused = ref(false);
const animationFrameId = ref<number | null>(null);
const lastTimestamp = ref<number | null>(null);
const position = ref(0);


const logosWithDuplicates = computed(() => [...props.logos, ...props.logos]);


const trackStyle = computed(() => ({
  transform: `translateX(${position.value}px)`,
  width: `${props.logos.length * 200}px`
}));


const animate = (timestamp: number) => {
  if (!lastTimestamp.value) lastTimestamp.value = timestamp;
  const delta = timestamp - lastTimestamp.value;
  lastTimestamp.value = timestamp;

  if (!isPaused.value) {
    const deltaPixels = (props.speed * delta) / 1000;
    position.value += props.direction === 'left' ? -deltaPixels : deltaPixels;


    if (Math.abs(position.value) >= tickerTrack.value!.scrollWidth / 2) {
      position.value = 0;
    }
  }

  animationFrameId.value = requestAnimationFrame(animate);
};


const hoverLogo = (index: number) => {
  if (props.pauseOnHover) isPaused.value = true;
};

const unhoverLogo = (index: number) => {
  if (props.pauseOnHover) isPaused.value = false;
};


onMounted(() => {
  if (props.logos.length > 0) {
    animationFrameId.value = requestAnimationFrame(animate);
  }
});


onBeforeUnmount(() => {
  if (animationFrameId.value) {
    cancelAnimationFrame(animationFrameId.value);
  }
});
</script>

<style scoped lang="scss">
.ticker-container {
  width: 100%;
  max-width: 1360px;
  justify-self: center;
  overflow: hidden;
  position: relative;
  padding: 20px 0;
  background: rgba(255, 255, 255, 0.75);
  border-left: 1px solid #9b2be5;
  border-right: 1px solid #9b2be5;
  border-radius: 10px;
}

.ticker-track {
  display: flex;
  will-change: transform;
}

.ticker-item {
  flex-shrink: 0;
  padding: 0 30px;
  display: flex;
  align-items: center;

  img {
    height: 60px;
    width: auto;
    max-width: 150px;
    object-fit: contain;
    transition:
      filter 0.3s ease,
      transform 0.3s ease;

    &.grayscale {
      filter: grayscale(100%) brightness(0.8);
      opacity: 0.7;
    }
  }

  &:hover img {
    filter: grayscale(0%) brightness(1);
    opacity: 1;
    transform: scale(1.4);
  }
}
</style>
