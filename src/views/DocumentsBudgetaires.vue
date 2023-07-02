<script setup>
import PageBanner from '../components/partials/PageBanner.vue';
import MaterialSymbolsDownloadRounded from '../components/icons/MaterialSymbolsDownloadRounded.vue'


</script>

<template>
  <PageBanner title="Documents Budgetaires" />

  <div class="py-5 px-5 md:px-10 bg-finance-gray border-y border-y-gray-300">

    <div class="pb-3 mx-auto lg:container">

      <h3 class="py-3 text-xl font-extrabold text-bj-green"> Rechercher un document budgétaire </h3>

      <form action="" class="flex flex-col space-y-3 space-x-0 md:flex-row md:space-y-0 md:space-x-5">

        <div class="w-full">
          <label for="full-name" class="block text-sm font-semibold leading-6 text-gray-900"> Mots clés </label>
          <div class="mt-2.5">
            <input type="text" name="first-name"
              class="block py-2.5 px-3.5 w-full text-gray-900 border-0 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:bg-transparent focus:ring-1 focus:ring-inset placeholder:text-gray-400 bg-finance-gray focus:ring-finance-blue">
          </div>
        </div>

        <div class="w-full">
          <label for="full-name" class="block text-sm font-semibold leading-6 text-gray-900"> Catégories </label>
          <div class="mt-2.5">
            <input type="text" name="first-name"
              class="block py-2.5 px-3.5 w-full text-gray-900 border-0 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:bg-transparent focus:ring-1 focus:ring-inset placeholder:text-gray-400 bg-finance-gray focus:ring-finance-blue">
          </div>
        </div>

        <div class="w-full">
          <label for="full-name" class="block text-sm font-semibold leading-6 text-gray-900"> Date de publication </label>
          <div class="mt-2.5">
            <input type="date" name="first-name"
              class="block py-2.5 px-3.5 w-full text-gray-900 border-0 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:bg-transparent focus:ring-1 focus:ring-inset placeholder:text-gray-400 bg-finance-gray focus:ring-finance-blue">
          </div>
        </div>

      </form>
    </div>


  </div>

  <div class="container px-5 my-20 mx-auto space-y-5 lg:px-20">

    <aside class="flex flex-col justify-evenly items-start p-3 space-y-5 rounded-md lg:flex-row lg:items-center lg:space-y-0 mask"
      v-for="i in 10">

      <div class="w-20 h-20 bg-white thumbs">
        <img class="w-full h-full" src="https://api.iconify.design/mdi:file-download-outline.svg?color=%23888888" alt="">
      </div>

      <div class="flex justify-end">
        <div class="flex flex-col gap-1 justify-end text-white">
          <span class="text-xs">Publié le 17.01.2023</span>
          <span class="block text-sm"><b class="">694 Ko</b></span>
          <span class="block text-sm"><b class="text-sm semibold">330</b> Lectures</span>
          <span class="block text-sm"><b class="text-sm semibold">2340</b> Téléchargements</span>
        </div>
      </div>

      <div class="tile">
        <span class="max-w-md font-extrabold leading-6 text-white line-clamp-5">
          Randis DEGBESSOU & Rose FIAMOHE – Déterminants de la volatilité des prix agricoles dans l’espace UEMOA
        </span>
      </div>

      <div class="flex gap-5 justify-end leading">
        <a href=""
          class="grid place-items-center py-2 px-3 text-sm font-medium bg-opacity-5 rounded-md bg-bj-yellow">
          Lire le document
        </a>

        <a href="#"
          class="flex gap-2 items-center py-2 px-4 text-sm font-medium text-black bg-white rounded-md transition-colors duration-300 hover:bg-gray-50">
          <MaterialSymbolsDownloadRounded />
          Télecharger
        </a>

      </div>

    </aside>

  </div>
</template>


<style>
</style>