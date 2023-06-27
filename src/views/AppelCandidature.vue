<script setup>
import { ref } from 'vue';
import PageBanner from '../components/partials/PageBanner.vue';
import MaterialSymbolsDownloadRounded from '../components/icons/MaterialSymbolsDownloadRounded.vue';
import FluentShare20Regular from '../components/icons/FluentShare20Regular.vue'
import TablerCalendarCheck from '../components/icons/TablerCalendarCheck.vue'


</script>

<template>
  <PageBanner title="Appel à Candidature" />

  <!-- -->

  <div class="flex flex-col px-3 my-10 xl:container mx-auto lg:flex-row lg:space-x-10">

    <div class="w-full lg:w-4/12">

      <div class="py-4 px-4 bg-finance-blue w-full">
        <span class="text-lg font-extrabold text-white"> Filtre </span>
      </div>

      <form action="" class="w-full py-5 flex flex-col space-y-3">

        <div class="">
          <label for="full-name" class="block text-sm font-semibold leading-6 text-gray-900"> Mots clés </label>
          <div class="mt-2">
            <input type="text" name="first-name"
              class="block w-full border-0 px-3.5 py-2.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset bg-finance-gray focus:bg-transparent  focus:ring-finance-blue sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="">
          <label for="full-name" class="block text-sm font-semibold leading-6 text-gray-900"> Date de publication </label>
          <div class="mt-2">
            <input type="date" name="first-name"
              class="block w-full border-0 px-3.5 py-2.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset bg-finance-gray focus:bg-transparent  focus:ring-finance-blue sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="">
          <label for="full-name" class="block text-sm font-semibold leading-6 text-gray-900"> Date limite de dépot
          </label>
          <div class="mt-2">
            <input type="date" name="first-name"
              class="block w-full border-0 px-3.5 py-2.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset bg-finance-gray focus:bg-transparent  focus:ring-finance-blue sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="w-full">
          <div class="mt-2">
            <input type="submit" value="Rechercher"
              class="block w-fit border-0 px-3.5 py-2.5 cursor-pointer text-white bg-bj-green font-extrabold text-sm sm:text-lg sm:leading-6">
          </div>
        </div>

      </form>

    </div>

    <div class="w-full lg:w-8/12">

      <div class="px-4 py-4 mb-5 bg-finance-blue w-full">
        <span class="text-lg font-extrabold text-white"> Liste des appels à candidature </span>
      </div>

      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom"
        class="pb-5 flex flex-col space-y-3 mb-6 bg-finance-gray shadow" v-for="i in 5">

        <div class="py-2 mask px-4 text-white text-sm font-semibold">
          <div class="flex items-center space-x-3">
            <TablerCalendarCheck />
           <span>Lundi 12 Mai 2023 </span>
          </div>
        </div>

        <div class="content px-4">

          <span class="font-semibold text-sm text-finance-late leading-5 line-clamp-3">
            Travaux de mise en œuvre des plans d'aménagement de gestion simplifiée (PAGS) ABOMEY PARAKOU
          </span>

        </div>

        <div class="flex flex-col space-y-5 py-3 justify-end px-4">

          <div class="infos flex flex-1">

            <div class="flex flex-col space-y-2 w-full">
              <span class="text-xs font-semibold"> Référence: </span>
              <span class="text-xs font-semibold text-bj-green"> T_PAGEFCOM_55261 </span>

            </div>

            <div class="flex flex-col space-y-2 w-full">
              <span class="text-xs font-semibold"> Date limite de dépot: </span>
              <span class="text-xs font-semibold text-bj-green"> 20/12/2023 </span>
            </div>

          </div>

          <div class="infos flex space-x-3 justify-end flex-1">

            <a href="" class="bg-bj-yellow flex w-fit items-center gap-2 bg-opacity-5 text-sm font-medium py-2 px-3 rounded-md">
              <FluentShare20Regular />
              Partager
            </a>

            <a href="#"
              class="bg-white flex items-center w-fit gap-2 text-black text-sm font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition-colors duration-300">
              <MaterialSymbolsDownloadRounded />
              Télecharger
            </a>

          </div>

        </div>

      </div>
    </div>

  </div>
</template>