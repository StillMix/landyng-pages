<template>
  <div class="slider">
      <div class="slides">
          <img src="\src\assets\image1.jpg" alt="Slide 1" class="active">
          <img src="\src\assets\image2.jpg" alt="Slide 2">
          <img src="\src\assets\image3.jpg" alt="Slide 3">
      </div>
  </div>
  </template>

  <script setup lang="ts">
  class Slider {
      private slides: NodeListOf<HTMLImageElement>;
      private currentIndex: number = 0;
      private intervalId: number = 0;

      constructor() {
          this.slides = document.querySelectorAll('.slides img');
          this.applyBlurAfterDelay();
          this.startAutoSlide();
      }

      private applyBlurAfterDelay(): void {
        setTimeout(() => {
            this.slides.forEach(slide => {
                slide.classList.add('blur-effect');
            });
        }, 2000);
      }

      private showSlide(index: number): void {
          // Убираем класс active со всех слайдов
          this.slides.forEach(slide => slide.classList.remove('active'));
          // Добавляем класс active текущему слайду
          this.slides[index].classList.add('active');
      }

      private nextSlide(): void {
          this.currentIndex++;
          if (this.currentIndex >= this.slides.length) {
              this.currentIndex = 0;
          }
          this.showSlide(this.currentIndex);
      }

      private startAutoSlide(): void {
          this.intervalId = window.setInterval(() => {
              this.nextSlide();
          }, 10000);
      }

      public stopAutoSlide(): void {
          clearInterval(this.intervalId);
      }
  }

  window.addEventListener('load', () => {
      const slider = new Slider();
  });
  </script>

  <style scoped lang="scss">
  .slider {
      height: 100vh;
      position: relative;
      overflow: hidden;
  }

  .slides {
      position: relative;
      height: 100vh;
  }

  .slides img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 1.5s ease-in-out, filter 1.5s ease-in-out;
  }

  .slides img.active {
      opacity: 1;
  }

  .blur-effect {
    filter: blur(5px);
  }
  </style>
