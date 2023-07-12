
<script lang="ts" setup>
 const props = defineProps({
   title: String,
 })

</script>

<template>

   <div class="container relative py-10 mx-auto w-full section">
      <!-- <span class="hidden absolute top-5 left-12 sm:text-8xl md:block fill-text text-finance-blue">  {{props.title }}   </span> -->
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="">
         <div class="flex flex-col justify-center px-5 w-full">
            <span class="text-3xl font-semibold sm:text-4xl text-finance-blue">
              {{props.title }}
            </span>
            <span class="mt-2 w-7 h-1 bg-finance-blue"></span>
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