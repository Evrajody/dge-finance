<script setup>
import PageBanner from '../components/partials/PageBanner.vue';
import MaterialSymbolsDownloadRounded from '../components/icons/MaterialSymbolsDownloadRounded.vue'


</script>

<template>
  <PageBanner title="Documents Budgetaires" />

  <div class="py-5 px-5 md:px-10 bg-finance-gray border-y border-y-gray-300">

    <div class="pb-3 lg:container mx-auto">

      <h3 class="text-xl font-extrabold text-bj-green py-3"> Rechercher un document budgétaire </h3>

      <form action="" class="flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-5 space-x-0">

        <div class="w-full">
          <label for="full-name" class="block text-sm font-semibold leading-6 text-gray-900"> Mots clés </label>
          <div class="mt-2.5">
            <input type="text" name="first-name"
              class="block w-full border-0 px-3.5 py-2.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset bg-finance-gray focus:bg-transparent  focus:ring-finance-blue sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="w-full">
          <label for="full-name" class="block text-sm font-semibold leading-6 text-gray-900"> Catégories </label>
          <div class="mt-2.5">
            <input type="text" name="first-name"
              class="block w-full  border-0 px-3.5 py-2.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset bg-finance-gray focus:bg-transparent  focus:ring-finance-blue sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="w-full">
          <label for="full-name" class="block text-sm font-semibold leading-6 text-gray-900"> Date de publication </label>
          <div class="mt-2.5">
            <input type="date" name="first-name"
              class="block w-full  border-0 px-3.5 py-2.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset bg-finance-gray focus:bg-transparent  focus:ring-finance-blue sm:text-sm sm:leading-6">
          </div>
        </div>

      </form>
    </div>


  </div>

  <div class="space-y-5 px-5 lg:px-20 my-20 container mx-auto">

    <aside class="flex flex-col space-y-5 lg:space-y-0 lg:flex-row items-start lg:items-center justify-evenly mask p-3 rounded-md"
      v-for="i in 10">

      <div class="thumbs h-20 w-20 bg-white">
        <img class="h-full w-full" src="https://api.iconify.design/mdi:file-download-outline.svg?color=%23888888" alt="">
      </div>

      <div class="flex justify-end">
        <div class="text-white flex justify-end flex-col gap-1">
          <span class="text-xs">Publié le 17.01.2023</span>
          <span class="block text-sm"><b class="">694 Ko</b></span>
          <span class="block text-sm"><b class="semibold text-sm">330</b> Lectures</span>
          <span class="block text-sm"><b class="semibold text-sm">2340</b> Téléchargements</span>
        </div>
      </div>

      <div class="tile">
        <span class="max-w-md text-white font-extrabold leading-6 line-clamp-5">
          Randis DEGBESSOU & Rose FIAMOHE – Déterminants de la volatilité des prix agricoles dans l’espace UEMOA
        </span>
      </div>

      <div class="leading flex gap-5  justify-end">
        <a href=""
          class="bg-bj-yellow grid place-items-center bg-opacity-5 text-sm font-medium py-2 px-3 rounded-md">
          Lire le document
        </a>

        <a href="#"
          class="bg-white flex items-center gap-2 text-black text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-50 transition-colors duration-300">
          <MaterialSymbolsDownloadRounded />
          Télecharger
        </a>

      </div>

    </aside>

  </div>
</template>


<style>
</style>