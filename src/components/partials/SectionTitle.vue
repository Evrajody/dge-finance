
<script setup>
 import Footer from '../partials/Footer.vue'
 const props = defineProps({
   title: String,
 })

</script>

<template>
   <div class="py-8 section container mx-auto">
      <div class="w-full flex flex-col justify-center px-5">
         <span class="text-3xl sm:text-4xl font-semibold text-finance-blue">
           {{props.title }}
         </span>
         <span class="h-1 mt-2 w-7 bg-finance-blue"></span>
      </div>
   </div>
</template>

