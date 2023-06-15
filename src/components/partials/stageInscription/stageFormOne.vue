<script>
import { ref } from 'vue';


</script>
<template>
   <div class="form1">
      <div class="flex flex-wrap -mx-3 mb-6">
         <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block tracking-wide text-gray-700 text-sm mb-2" for="">
               Nom
            </label>
            <input
               class="appearance-none block w-full bg-gray-200 text-gray-700  border-gray-200   rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
               id="5" type="text" placeholder="">
         </div>
         <div class="w-full md:w-1/2 px-3">
            <label class="block tracking-wide text-gray-700 text-sm mb-2" for="">
               Prénoms
            </label>
            <input
               class="appearance-none block w-full bg-gray-200 text-gray-700  border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
               id="4" type="text" placeholder="">
         </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
         <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block tracking-wide text-gray-700 text-sm mb-2" for="">
               Contact
            </label>
            <input
               class="appearance-none block w-full bg-gray-200 text-gray-700 border-gray-200   rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
               id="3" type="text">
         </div>
         <div class="w-full md:w-1/2 px-3">
            <label class="block tracking-wide text-gray-700 text-sm mb-2" for="">
               Email
            </label>
            <input
               class="appearance-none block w-full bg-gray-200 text-gray-700 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
               id="2" type="email">
         </div>
      </div>
      <h4 class="mb-5 text-center">Type de stage</h4>
      <div class="flex flex-wrap -mx-3">
         <div class="w-full md:w-1/2 px-3">
            <a href=""
               class="block border rounded py-2 pr-3 bg-finance-blue text-white hover:bg-finance-plot text-center">Stage
               Académique</a>
         </div>
         <div class="w-full md:w-1/2 px-3">
            <a href=""
               class="block border rounded py-2 pr-3 bg-finance-blue text-white hover:bg-finance-plot text-center">Stage
               Professionnelle</a>
         </div>
      </div>
   </div>
</template>

<style>
label {
   @apply after:content-["*"] after:text-red-500 after:ml-1
}
</style>