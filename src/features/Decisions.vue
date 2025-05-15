<template>
  <div class="inner-wrapper">
    <div class="slider-wrapper">
      <div class="tabs">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ 'tab-button': true, active: currentTab === index }"
          @click="setTab(index)"
        >
          <span class="tab-icon-placeholder"></span>
          {{ tab.title }}
        </button>
      </div>
      <div class="slider-content">
        <div v-for="(tab, index) in tabs" :key="index" class="slide-item" :class="{ active: currentTab === index }">
          <div class="slide-inner">
            <div class="image-content">
              <div class="image-placeholder">Image Placeholder</div>
              <!-- <img :src="tab.image" :alt="tab.title" class="slide-image" /> -->
              <p class="image-caption">{{ tab.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="button-block">
      <div class="ad-text">С полным списком предлагаемых услуг можно ознакомиться в презентации</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';


const emit = defineEmits<{
  (e: 'onClick', value: any): void
}>()

const handleClick = (event: any) => {
  emit('onClick', event)
    window.open('http://onr-kursk.ru/assets/PresONR.pdf')
}


interface Tab {
  title: string;
  description: string;
  image: string;
}


const tabs = ref<Tab[]>([
  {
    title: 'Системы управления и мониторинга',
    description: 'Специализированное программное обеспечение для автоматизации задач централизованного мониторинга, эксплуатации, поддержки и обслуживания информационной и телекоммуникационной инфраструктуры',
    image: '\\src\\assets\\slider\\image1.jpg',
  },
  {
    title: 'Вокодеры',
    description: 'Программный или программно-аппаратный комплекс, предназначенный для передачи потоковых данных по сети по протоколу UDP между двумя узлами связи, как в одностороннем (симплекс), так и двухстороннем (дуплекс) режиме',
    image: '/assets/images/fundraising.jpg',
  },
  {
    title: 'Системы видеонаблюдения',
    description: 'Специализированное программное обеспечение для организация видеонаблюдения с использованием видеокамер, размещенных на объектах наблюдения',
    image: '/assets/images/crm.jpg',
  },
  {
    title: 'Системы автоматизации тестирования',
    description: 'Специализированное программное обеспечение для проведения всех видов испытаний, тестирования и моделирования разрабатываемых средств и комплексов связи, телекоммуникационного оборудования и программного обеспечения',
    image: '/assets/images/investment-management.jpg',
  },
  {
    title: 'Системы управления БПЛА',
    description: 'Специализированное программное обеспечение для организации автоматического/автоматизированного взаимодействия с (группами) БПЛА по беспроводным каналам связи',
    image: '/assets/images/investor-reporting.jpg',
  },
  {
    title: 'Системы управления воздушным движением',
    description: 'Программный комплекс, предназначенный для мониторинга местоположения воздушных судов, геопривязки местоположения воздушных судов, а также для создания и редактирования полетных заданий и их маршрутов',
    image: '/assets/images/document-management.jpg',
  },
  {
    title: 'Системы информационной безопасности',
    description: 'Специальное программное обеспечение для экспертной поддержки, визуализации и прогнозирования (моделирования) компьютерных атак реального времени',
    image: '/assets/images/payments.jpg',
  },
  {
    title: 'Системы учета энергии',
    description: 'Для формирования помесячного физического и стоимостного баланса тепловой энергии в тепловом узле с детализацией продажи и покупки тепловой энергии необходимой и достаточной для формирования отчетности для загрузки в SAP',
    image: '',
  },
  {
    title: 'Блокчейн',
    description: 'Специализированное программное обеспечение, разрабатываемое в интересах контролирующей организации, поставщиков и потребителей продукции с целью учета движения каждой уникально маркированной единицы (партии) продукции и выявления попыток сбыта фальсифицированной и контрафактной продукции',
    image: '',
  },
  {
    title: 'Системы поиска, сбора, обработки и анализа информации',
    description: 'Специальное программное обеспечение, предназначенное для организации целенаправленного мониторинга, сбора, аналитической обработки и формализованной визуализации информации, представленной в электронном виде в открытых источниках',
    image: '',
  },
]);

const currentTab = ref(0);
let intervalId: number | null = null;

const setTab = (index: number) => {
  currentTab.value = index;
  resetInterval();
};

const nextTab = () => {
  currentTab.value = (currentTab.value + 1) % tabs.value.length;
};

const startInterval = () => {
  intervalId = window.setInterval(nextTab, 5000);
};

const resetInterval = () => {
  if (intervalId) {
    clearInterval(intervalId);
  }
  startInterval();
};

onMounted(() => {
  startInterval();
});

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<style lang="scss" scoped>
.inner-wrapper {
  height: auto;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-image: var(--bg-primary);
  padding: 20px 0;
  overflow-x: hidden;
  width: 100%;
}

.hat-wrapper{
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0 15px;

  .solution-text{
    max-width: 1360px;
    width: 100%;
    align-self: center;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    font-size: 1.8rem;
    color: var(--text-title);
    text-align: center;
  }
}

.button-block{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 15px;
  margin-top: 20px;

  .ad-text{
    font-family: 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    padding-bottom: 15px;
    color: white;
    text-align: center;
    max-width: 500px;
  }
}

.slider-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1360px;
  height: auto;
  padding: 0px 15px;
  box-sizing: border-box;
  background-color: white;
  box-shadow: 20px black;
}

.tabs {
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 100%;
  padding-right: 0;
  overflow-x: auto;
  padding-bottom: 15px;
  margin-bottom: 20px;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  .tab-button {
    background: none;
    border: none;
    font-size: 0.9rem;
    padding: 8px 12px;
    cursor: pointer;
    color: var(--text-main);
    display: flex;
    align-items: center;
    gap: 6px;
    transition: color 0.3s ease;
    text-align: left;
    border-radius: 8px;
    white-space: nowrap;
    flex-shrink: 0;

    &.active {
      color: #000;
      border-left: none;
      border-bottom: 2px solid #0000b8;
      background-color: #0011ff59;
      transition:
        color 0.7s ease,
        border-bottom 0.1s ease,
        background-color 0.7s ease;
    }

    &:hover {
      color: #000;
    }

    .tab-icon-placeholder {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #ccc;
      display: inline-block;
      flex-shrink: 0;
    }
  }
}

.slider-content {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
}

.slide-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  &.active {
    opacity: 1;
  }

  .slide-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    gap: 15px;

    .image-content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;

      .image-placeholder {
        width: 100%;
        height: 200px;
        background: #ddd;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #666;
        font-size: 1rem;
        border-radius: 8px;
      }

      .slide-image {
        width: 100%;
        max-height: 250px;
        object-fit: contain;
        border-radius: 8px;
      }

      .image-caption {
        font-size: 1rem;
        color: #333;
        text-align: center;
        margin: 0;
        line-height: 1.4;
        padding: 0 10px;
      }
    }
  }
}

.glow-button {
  display: flex;
  justify-content: center;
  color: white;
  border: none;
  border-radius: 7px;
  animation: gradientFlow 3s linear infinite;
  transition: transform 0.3s ease;
  width: 100%;
  max-width: 300px;
}

.glow-button:hover {
  transform: scale(1.05);
}


@media (min-width: 768px) {
  .inner-wrapper {
    height: 1000px;
    padding: 40px 0;
  }

  .hat-wrapper {
    height: 13%;
    margin-bottom: 0;

    .solution-text {
      font-size: 2.5rem;
      text-align: left;
    }
  }

  .slider-wrapper {
    flex-direction: row;
    height: auto;
    max-height: 900px;
    padding: 45px 25px;
    border-radius: 17px;
    box-shadow: 0 8px 26px rgba(0, 0, 0, 0.1);
  }

  .tabs {
    flex-direction: column;
    gap: 15px;
    width: 30%;
    padding-right: 10px;
    overflow-y: auto;
    overflow-x: hidden;
    margin-bottom: 0;
    padding-bottom: 0;
    border-right: 1px solid rgba(128, 128, 128, 0.462);

    .tab-button {
      font-size: 1.1rem;
      padding: 10px 15px;
      white-space: normal;
      text-align: left;

      &.active {
        border-left: 2px solid #0000b8;
        border-bottom: none;
      }
    }
  }

  .slider-content {
    width: 70%;
    min-height: 500px;
  }

  .slide-item {
    .slide-inner {
      .image-content {
        padding-left: 20px;
        .image-placeholder {
          height: 350px;
        }

        .image-caption {
          font-size: 1.1rem;
          padding: 0;
        }
      }
    }
  }

  .button-block {
    margin-top: 40px;

    .ad-text {
      font-size: 19px;
      max-width: none;
    }
  }
}

@media (min-width: 1024px) {
  .slider-wrapper{
    border-radius: 17px;
  }
  .hat-wrapper {
    .solution-text {
      font-size: 3rem;
    }
  }

  .slide-item {
    .slide-inner {
      .image-content {
        .image-placeholder {
          height: 400px;
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .tabs{
    padding-top: 15px;
    border: 1px solid rgba(17, 14, 187, 0.214);
    border-radius: 8px;
  }

  body {
    overflow-x: hidden;
  }

  .slider-wrapper{
    border-radius: 17px;
  }

  .inner-wrapper,
  .hat-wrapper,
  .slider-wrapper,
  .slider-content,
  .slide-item,
  .slide-inner,
  .image-content {
    max-width: 100vw;
  }
}
</style>
