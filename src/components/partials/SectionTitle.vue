
<script setup>
 import Footer from '../partials/Footer.vue'
 const props = defineProps({
   title: String,
 })

</script>

<template>

   <div class="w-full relative py-16 section container mx-auto">
      <span class=" fill-text hidden md:block absolute left-12 sm:text-8xl top-5 text-finance-blue">  {{props.title }}   </span>
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="">
         <div class="w-full flex flex-col justify-center px-5">
            <span class="text-3xl sm:text-4xl font-semibold text-finance-blue">
              {{props.title }}
            </span>
            <span class="h-1 mt-2 w-7 bg-finance-blue"></span>
         </div>
      </div>
   </div>


</template>


<style>

 .fill-text {
    opacity: 0.2;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-color: #0E406E;
    -webkit-text-stroke-width: 2px;
    -webkit-text-size-adjust: 100%;

 }

</style>