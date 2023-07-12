<script setup>
import PageBanner from '@/components/partials/PageBanner.vue';


</script>

<template>
  <PageBanner title="Formulaire de soumission" />

  <div class="w-full mx-auto container my-10">
    <div class="flex flex-col mx-auto px-5 space-y-10 w-full sm:w-[80%] lg:px-0 lg:w-[70%] xl:w-[60%]">
      <div class="py-5 bg-finance-blue bg-opacity-10 px-3">
        <h3 class="text-sm font-medium text-finance-plot"> Avez - vous une préoccupations ? Ecrivez-nous ! </h3>
      </div>

      <form action="#" method="POST" class="">
        <div class="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">

          <div class="col-span-2 md:col-span-1">
            <label for="full-name" class="block text-sm font-semibold leading-6 text-gray-900"> Nom</label>
            <div class="mt-2.5">
              <input type="text" name=""
                class="block py-2.5 px-3.5 w-full text-gray-900 border-0 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:bg-transparent focus:ring-1 focus:ring-inset placeholder:text-gray-400 bg-finance-gray focus:ring-finance-blue">
            </div>
          </div>

          <div class="col-span-2 md:col-span-1">
            <label for="email" class="block text-sm font-semibold leading-6 text-gray-900"> Prénom </label>
            <div class="mt-2.5">
              <input type="text" name=""
                class="block py-2.5 px-3.5 w-full text-gray-900 border-0 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:bg-transparent focus:ring-1 focus:ring-inset placeholder:text-gray-400 bg-finance-gray focus:ring-finance-blue">
            </div>
          </div>

          <div class="col-span-2">
            <label for="subject" class="block text-sm font-semibold leading-6 text-gray-900"> Email </label>
            <div class="mt-2.5">
              <input type="text" name=""
                class="block py-2.5 px-3.5 w-full text-gray-900 border-0 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:bg-transparent focus:ring-1 focus:ring-inset placeholder:text-gray-400 bg-finance-gray focus:ring-finance-blue">
            </div>
          </div>

          <div class="col-span-2">
            <label for="subject" class="block text-sm font-semibold leading-6 text-gray-900"> Contact </label>
            <div class="mt-2.5">
              <input type="tel" name=""
                class="block py-2.5 px-3.5 w-full text-gray-900 border-0 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:bg-transparent focus:ring-1 focus:ring-inset placeholder:text-gray-400 bg-finance-gray focus:ring-finance-blue">
            </div>
          </div>


          <div class="col-span-2">
            <label for="subject" class="block text-sm font-semibold leading-6 text-gray-900"> Fichier </label>
            <div class="mt-2.5">
              <input type="file" name="first-name"
                class="block py-2.5 px-3.5 w-full text-gray-900 border-0 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:bg-transparent focus:ring-1 focus:ring-inset placeholder:text-gray-400 bg-finance-gray focus:ring-finance-blue">
            </div>
          </div>

        </div>
        <div class="mt-10">
          <button type="submit"
            class="block py-2.5 px-3.5 w-32 text-sm font-semibold text-center bg-transparent border-2 transition-all hover:text-white border-finance-blue text-finance-blue hover:bg-finance-blue">
            Postuler 
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style></style>