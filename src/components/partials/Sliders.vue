<script setup>
import SliderItem from '../partials/SliderItem.vue'
import { Navigation, Pagination, Autoplay, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'
import 'swiper/css/navigation';

import { onMounted, ref } from 'vue';
import SliderItemMini from './SliderItemMini.vue';

 onMounted(() => { })

const slidesContent = ref([
   {
      text: `Notes de politiques économiques: Les options inévitables d'un changement de paradigme économique en Afrique.`,
      image: `https://www.dge.finances.bj/storage/2021/12/WhatsApp-Image-2021-12-15-at-18.23.07.jpeg`
   },

   {
      text: `Programme de l'economie scientifique des journées béninoises, Edition 2022`,
      image: `https://img.freepik.com/photos-gratuite/personne-recevant-nourriture-rue_23-2149004347.jpg`
   },

   {
      text: `La lettre de la DGE de avril 2020 : Comprendre la pression inflationniste post Covid 2019`,
      image:  `https://www.dge.finances.bj/storage/2022/05/WhatsApp-Image-2022-05-23-at-17.38.43.jpeg`
   },

   {
      text: "Note de conjecture du premier trimestre 2022", 
      image: 'https://www.dge.finances.bj/storage/2022/05/Image-1-1.jpg'
   }, 

   {
      text: "Crise russo-ukrainienne: enjeux et effets potentiels sur l’économie béninoise", 
      image: 'https://www.dge.finances.bj/storage/2022/04/UKRU.jpeg'
   }, 

   {
      text: "Document de programmation budgétaire et économique pluriannuelle 2023-2025", 
      image: 'https://www.dge.finances.bj/storage/2022/06/WhatsApp-Image-2022-06-30-at-11.20.28.jpeg'
   }, 

])

</script>

<template>
   <swiper @slide-next-transition-end="handleSlide" :speed="300" loop navigation a11y pagination autoplay :modules="[Pagination, A11y, Autoplay, Navigation]"  set-wrapper-size :space-between="15">
      <swiper-slide v-for="item, index in slidesContent" :key="index">
         <SliderItem :slide-image="item.image" :silde-text="item.text" />
      </swiper-slide>
   </swiper>
</template> 

<style>

   .swiper-button-prev, 
   .swiper-button-next {
      @apply text-white
   }

   .swiper-button-prev::after, 
   .swiper-button-next::after {
      @apply text-xl
   }

   .slide-title {
      /* transform: translateY(115px);
      transition: transform .2s; */
      -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
       clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
   }

   /* .swiper-slide-active * {
      opacity: 1;
      transform: none;

      @for $i from 0 to 15 {
        &:nth-child(#{$i + 1}) {
          transition-delay: $i * 0.1 + 0.3s;
        }
      }
   }

   .swiper {
      opacity: 0;
      transform: translateY(50px);
      transition: all .4s;
   } */

</style>