<script setup>
import { useSliderContent } from '@/stores/slider-content'
import { Navigation, Pagination, Autoplay, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SlidersItem from './SlidersItem.vue'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'

const store = useSliderContent()
</script>

<template>
  <Swiper
    :speed="200"
    loop
    navigation
    a11y
    pagination
    :autoplay="{ delay: 8000 }"
    :modules="[Pagination, A11y, Autoplay, Navigation]"
    set-wrapper-size
    :space-between="15"
  >
    <swiper-slide v-for="(item, index) in store.getSliderContent" :key="index">
      <SlidersItem :slide-image="item.image" :silde-text="item.text" />
    </swiper-slide>
  </Swiper>
</template>

<style>
.swiper-button-prev,
.swiper-button-next {
  @apply text-white;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  @apply text-xl;
}
</style>
