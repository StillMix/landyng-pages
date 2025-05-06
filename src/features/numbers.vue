<template>
  <section class="numbers-section">
    <div class="container">
      <h2 class="section-title">В ЦИФРАХ</h2>
      <p class="section-subtitle">Преобразуем идеи в цифровые решения</p>

      <div class="stats-grid">
        <div class="stat-card" ref="counterBlock1">
          <div class="stat-value">{{ animatedValue1 }}+</div>
          <div class="stat-label">лет в IT-разработке</div>
        </div>

        <div class="stat-card" ref="counterBlock2">
          <div class="stat-value">{{ animatedValue2 }}+</div>
          <div class="stat-label">реализованных проектов</div>
        </div>

        <div class="stat-card" ref="counterBlock3">
          <div class="stat-value">{{ animatedValue3 }}</div>
          <div class="stat-label">экспертов в штате</div>
        </div>

        <div class="stat-card"  ref="counterBlock4">
          <div class="stat-value">{{ animatedValue4 }}+</div>
          <div class="stat-label">госструктур и компаний среди заказчиков</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const animatedValue1 = ref(0);
const animatedValue2 = ref(0);
const animatedValue3 = ref(0);
const animatedValue4 = ref(0);
const counterBlock1 = ref<HTMLElement | null>(null);
const counterBlock2 = ref<HTMLElement | null>(null);
const counterBlock3 = ref<HTMLElement | null>(null);
const counterBlock4 = ref<HTMLElement | null>(null);

const animateCounter = (targetValue: number, duration: number, updateFn: (value: number) => void) => {
  const startTime = performance.now();
  const endTime = startTime + duration * 1000;

  const updateCounter = (currentTime: number) => {
    const progress = Math.min(1, (currentTime - startTime) / (duration * 1000));
    const currentValue = Math.floor(progress * targetValue);
    updateFn(currentValue);

    if (currentTime < endTime) {
      requestAnimationFrame(updateCounter);
    } else {
      updateFn(targetValue);
    }
  };

  requestAnimationFrame(updateCounter);
};

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;

        if (target === counterBlock1.value) {
          animateCounter(10, 2, (value) => { animatedValue1.value = value; });
        } else if (target === counterBlock2.value) {
          animateCounter(50, 1.5, (value) => { animatedValue2.value = value; });
        } else if (target === counterBlock3.value) {
          animateCounter(18, 2.2, (value) => { animatedValue3.value = value; });
        } else if (target === counterBlock4.value) {
          animateCounter(15, 2.2, (value) => { animatedValue4.value = value; });
        }

        observer.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  if (counterBlock1.value) observer.observe(counterBlock1.value);
  if (counterBlock2.value) observer.observe(counterBlock2.value);
  if (counterBlock3.value) observer.observe(counterBlock3.value);
  if (counterBlock4.value) observer.observe(counterBlock4.value);
});
</script>

<style scoped lang="scss">
.numbers-section {
  background: var(--bg-secondary);
  color: var(--text-secondary);
  padding: 80px 20px;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 1.8rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 15px;
  color: var(--text-other);
}

.section-subtitle {
  font-size: 2.2rem;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-weight: 600;
  margin-bottom: 60px;
  color: var(--text-white);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 50px;
}

.stat-card {
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 40px 20px;
  border: 1px solid rgba(255,255,255,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.3);
}

.stat-value {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 15px;
  background: var(--text-numbers);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-label {
  font-family: 'Roboto', 'Arial', sans-serif;
  font-size: 1.2rem;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }

  .stat-value {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .section-subtitle {
    font-size: 1.8rem;
  }
}
</style>
