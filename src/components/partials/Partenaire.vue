<script setup>
import pnud from '../../assets/images/pnud.jpg'
import bceao from '../../assets/images/bceao.png'
import fmi from '../../assets/images/logo-fmi.png'
import giz from '../../assets/images/giz.jpg'


import { Navigation, Autoplay, A11y, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { ref } from 'vue';

const partenaires = ref([
  { image: pnud },
  { image: bceao },
  { image: fmi },
  { image: giz },
])

</script>

<template>
  <div class="partner bg-finance-gray py-20 lg:px-10 px-5" data-aos="fade-up" data-aos-anchor-placement="top-bottom">

    <swiper :loop="true" auto-height :speed="300" a11y autoplay :breakpoints="{ 200: { slidesPerView: 3  }, 600: { slidesPerView: 4  } }" :modules="[A11y, Autoplay]"
        :slides-per-view="4" :space-between="10">
        <swiper-slide v-for="item, index in partenaires" :key="index">
            <img :src="item.image" alt="" class="h-20 mx-auto" srcset="">
        </swiper-slide>
      </swiper>

  </div>
</template>

<style>
  .partner .swiper-wrapper {
    @apply h-44
  }
</style>