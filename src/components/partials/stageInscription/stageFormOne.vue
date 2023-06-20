<script>
import { ref } from 'vue';


</script>
<template>
   <!-- <div class="form1">
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
   </div> -->



  <div class="w-full">
    <form action="#" method="POST" class="">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

        <div class="col-span-2 md:col-span-1">
          <label for="full-name" class="block text-sm font-semibold leading-6 text-gray-900"> Nom & Prénom </label>
          <div class="mt-2.5">
            <input type="text" name="first-name" class="block w-full border-0 px-3.5 py-2.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset bg-finance-gray focus:bg-transparent  focus:ring-finance-blue sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="col-span-2 md:col-span-1">
          <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Adresse Email</label>
          <div class="mt-2.5">
            <input type="text" name="first-name" class="block w-full border-0 px-3.5 py-2.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset bg-finance-gray focus:bg-transparent focus:ring-finance-blue sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="col-span-2">
          <label for="subject" class="block text-sm font-semibold leading-6 text-gray-900"> Sujet </label>
          <div class="mt-2.5">
            <input type="text" name="first-name" class="block w-full border-0 px-3.5 py-2.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset bg-finance-gray focus:bg-transparent focus:ring-finance-blue sm:text-sm sm:leading-6">
          </div>
        </div>

 
        <div class="col-span-2">
          <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
          <div class="mt-2.5">
            <textarea name="message" id="message" rows="4" class="block w-full border-0 px-3.5 py-2.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset bg-finance-gray focus:bg-transparent focus:ring-finance-blue sm:text-sm sm:leading-6"></textarea>
          </div>
        </div>

      </div>
      <div class="mt-10">
        <button type="submit" class="block w-32 bg-transparent border-2 border-finance-blue px-3.5 py-2.5 text-center text-sm font-semibold hover:bg-finance-blue hover:text-white transition-all text-finance-blue"> Envoyer </button>
      </div>
    </form>
  </div>




</template>

<style>
label {
   @apply after:content-["*"] after:text-red-500 after:ml-1
}
</style>