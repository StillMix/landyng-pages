<template>

    <div class="section" id="home">
      <face />
    </div>
    <div class="divider"></div>

    <div class="section" id="aboutUS">
      <aboutUs />
    </div>
    <div class="divider"></div>

    <div class="section">
      <numbers />
    </div>
    <div class="divider"></div>

    <div class="section">
      <Tech />
    </div>
    <div class="divider"></div>

    <div class="section" id="contact">
      <Userform />
    </div>
    <div class="divider"></div>

    <div class="section" id="partners">
      <partners />
      <div class="divider"></div>
      <div class="ticker">
        <Ticker
        :logos="Logos"
        :speed="50"
        direction="left"
        :grayscale="false"
        />
      </div>
    </div>
    <div class="divider"></div>


    <div class="section" id="services">
      <Product />
    </div>
    <div class="divider"></div>

    <div class="section">
      <Footer />
    </div>

</template>

<script setup lang="ts">
import face from '@/features/face.vue';
import aboutUs from '@/features/aboutUs.vue';
import partners from '@/features/partners.vue';
import Product from '@/features/Product.vue';
import Ticker from '@/features/ticker.vue';
import numbers from '@/features/numbers.vue';
import Tech from '@/features/tech.vue';
import Userform from '@/features/userform.vue';
import Footer from '@/features/footer.vue';

const Logos = [
  '\src\\assets\\partnerlogos\\01.png',
  '\src\\assets\\partnerlogos\\02.png',
  '\src\\assets\\partnerlogos\\03.png',
  '\src\\assets\\partnerlogos\\04.png',
  '\src\\assets\\partnerlogos\\06.png',
  '\src\\assets\\partnerlogos\\07.png',
  '\src\\assets\\partnerlogos\\08.png',
  '\src\\assets\\partnerlogos\\09.png',
  '\src\\assets\\partnerlogos\\10.png',
  '\src\\assets\\partnerlogos\\11.png',
  '\src\\assets\\partnerlogos\\12.png',
  '\src\\assets\\partnerlogos\\13.png',
  '\src\\assets\\partnerlogos\\14.png',
]
</script>

<style lang="scss" scoped>

.section {
  position: relative;
  margin-bottom: 0px;

}

.divider{
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, #9b2be5 50%, transparent 100%);
}

.ticker{
  background-color: white;
}
</style>
