<script setup>
import SliderItem from '../partials/SliderItem.vue'
import InfoBanner from './InfoBanner.vue';
import { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { onMounted, ref } from 'vue';

const anime = ref('')

 // const swiperSlide = useSwiperSlide();

 function handleSlide(params) {
      // console.log(params);
 }

 onMounted(() => { })

const slidesContent = ref([
   {
      text: `Notes de politiques économiques: Les options inévitables d'un changement de paradigme économique en Afrique.`,
      image: `https://www.gouv.bj/upload/images/articles/0360417001686672069.jpeg`
   },

   {
      text: `Programme de l'economie scientifique des journées béninoises, Edition 2022`,
      image: `https://img.freepik.com/photos-gratuite/personne-recevant-nourriture-rue_23-2149004347.jpg`
   },

   {
      text: `La lettre de la DGE de avril 2020 : Comprendre la pression inflationniste post Covid 2019`,
      image:  `https://img.freepik.com/photos-gratuite/vue-frontale-femme-masque-facial-dans-marche_23-2148777462.jpg`
   },

   {
      text: "Sociale: L'action gouvernementale au services de la population", 
      image: 'https://img.freepik.com/photos-gratuite/belles-femmes-africaines-allant-chercher-eau-exterieur_23-2149021944.jpg'
   }, 

   {
      text: "Economie : Le Bénin révélé à travers le nouveau visage de nos amazones", 
      image: 'https://img.freepik.com/photos-gratuite/coup-moyen-femme-souriante-exterieur_23-2149351946.jpg'
   }, 

])

</script>

<template>
   <swiper  @slide-change-transition-end="handleSlide" effect="fade" :speed="300" loop auto-height navigation a11y pagination autoplay :modules="[Pagination, EffectFade, A11y, Autoplay, Navigation]"  set-wrapper-size :space-between="15">
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