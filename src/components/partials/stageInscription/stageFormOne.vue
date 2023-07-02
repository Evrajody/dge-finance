<script>
import { ref } from 'vue';


</script>
<template>
   <!-- <div class="form1">
      <div class="flex flex-wrap -mx-3 mb-6">
         <div class="px-3 mb-6 w-full md:mb-0 md:w-1/2">
            <label class="block mb-2 text-sm tracking-wide text-gray-700" for="">
               Nom
            </label>
            <input
               class="block py-3 px-4 mb-3 w-full leading-tight text-gray-700 bg-gray-200 rounded border-gray-200 appearance-none focus:bg-white focus:outline-none"
               id="5" type="text" placeholder="">
         </div>
         <div class="px-3 w-full md:w-1/2">
            <label class="block mb-2 text-sm tracking-wide text-gray-700" for="">
               Prénoms
            </label>
            <input
               class="block py-3 px-4 w-full leading-tight text-gray-700 bg-gray-200 rounded border-gray-200 appearance-none focus:bg-white focus:border-gray-500 focus:outline-none"
               id="4" type="text" placeholder="">
         </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
         <div class="px-3 mb-6 w-full md:mb-0 md:w-1/2">
            <label class="block mb-2 text-sm tracking-wide text-gray-700" for="">
               Contact
            </label>
            <input
               class="block py-3 px-4 mb-3 w-full leading-tight text-gray-700 bg-gray-200 rounded border-gray-200 appearance-none focus:bg-white focus:outline-none"
               id="3" type="text">
         </div>
         <div class="px-3 w-full md:w-1/2">
            <label class="block mb-2 text-sm tracking-wide text-gray-700" for="">
               Email
            </label>
            <input
               class="block py-3 px-4 w-full leading-tight text-gray-700 bg-gray-200 rounded border-gray-200 appearance-none focus:bg-white focus:border-gray-500 focus:outline-none"
               id="2" type="email">
         </div>
      </div>
      <h4 class="mb-5 text-center">Type de stage</h4>
      <div class="flex flex-wrap -mx-3">
         <div class="px-3 w-full md:w-1/2">
            <a href=""
               class="block py-2 pr-3 text-center text-white rounded border bg-finance-blue hover:bg-finance-plot">Stage
               Académique</a>
         </div>
         <div class="px-3 w-full md:w-1/2">
            <a href=""
               class="block py-2 pr-3 text-center text-white rounded border bg-finance-blue hover:bg-finance-plot">Stage
               Professionnelle</a>
         </div>
      </div>
   </div> -->

  <div class="w-full">
    <form action="#" method="POST" class="">
      <div class="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">

        <div class="col-span-2 md:col-span-1">
          <label for="full-name" class="block text-sm font-semibold leading-6 text-gray-900"> Nom & Prénom </label>
          <div class="mt-2.5">
            <input type="text" name="first-name" class="block py-2.5 px-3.5 w-full text-gray-900 border-0 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:bg-transparent focus:ring-1 focus:ring-inset placeholder:text-gray-400 bg-finance-gray focus:ring-finance-blue">
          </div>
        </div>

        <div class="col-span-2 md:col-span-1">
          <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Adresse Email</label>
          <div class="mt-2.5">
            <input type="text" name="first-name" class="block py-2.5 px-3.5 w-full text-gray-900 border-0 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:bg-transparent focus:ring-1 focus:ring-inset placeholder:text-gray-400 bg-finance-gray focus:ring-finance-blue">
          </div>
        </div>

        <div class="col-span-2">
          <label for="subject" class="block text-sm font-semibold leading-6 text-gray-900"> Sujet </label>
          <div class="mt-2.5">
            <input type="text" name="first-name" class="block py-2.5 px-3.5 w-full text-gray-900 border-0 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:bg-transparent focus:ring-1 focus:ring-inset placeholder:text-gray-400 bg-finance-gray focus:ring-finance-blue">
          </div>
        </div>

 
        <div class="col-span-2">
          <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
          <div class="mt-2.5">
            <textarea name="message" id="message" rows="4" class="block py-2.5 px-3.5 w-full text-gray-900 border-0 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:bg-transparent focus:ring-1 focus:ring-inset placeholder:text-gray-400 bg-finance-gray focus:ring-finance-blue"></textarea>
          </div>
        </div>

      </div>
      <div class="mt-10">
        <button type="submit" class="block py-2.5 px-3.5 w-32 text-sm font-semibold text-center bg-transparent border-2 transition-all hover:text-white border-finance-blue text-finance-blue hover:bg-finance-blue"> Envoyer </button>
      </div>
    </form>
  </div>




</template>

<style scoped>
label {
   @apply after:content-["*"] after:text-red-500 after:ml-1
}
</style>