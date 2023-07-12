<script setup>
import { ref } from 'vue';
import PageBanner from '../components/partials/PageBanner.vue';
import MaterialSymbolsDownloadRounded from '../components/icons/MaterialSymbolsDownloadRounded.vue';
import FluentShare20Regular from '../components/icons/FluentShare20Regular.vue'
import TablerCalendarCheck from '../components/icons/TablerCalendarCheck.vue'
import { useTitle } from '@vueuse/core';
import IcRoundRemoveRedEye from '@/components/icons/IcRoundRemoveRedEye.vue';
import Pagination from '@/components/partials/Pagination.vue';

const title = useTitle("DGE | Appel Candidature");



</script>

<template>
  <PageBanner title="Appel à Candidature" />

  <div class="flex flex-col px-3 my-10 mx-auto lg:flex-row lg:space-x-10 xl:container">

    <div class="w-full lg:w-4/12">

      <div class="py-4 px-4 w-full bg-finance-blue">
        <span class="text-lg font-extrabold text-white"> Filtre </span>
      </div>

      <form action="" class="flex flex-col py-5 space-y-3 w-full">

        <div class="">
          <label for="full-name" class="block text-sm font-semibold leading-6 text-gray-900"> Mots clés </label>
          <div class="mt-2">
            <input type="text" name="first-name"
              class="block py-2.5 px-3.5 w-full text-gray-900 border-0 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:bg-transparent focus:ring-1 focus:ring-inset placeholder:text-gray-400 bg-finance-gray focus:ring-finance-blue">
          </div>
        </div>

        <div class="">
          <label for="full-name" class="block text-sm font-semibold leading-6 text-gray-900"> Date de publication </label>
          <div class="mt-2">
            <input type="date" name="first-name"
              class="block py-2.5 px-3.5 w-full text-gray-900 border-0 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:bg-transparent focus:ring-1 focus:ring-inset placeholder:text-gray-400 bg-finance-gray focus:ring-finance-blue">
          </div>
        </div>

        <div class="">
          <label for="full-name" class="block text-sm font-semibold leading-6 text-gray-900"> Date limite de dépot
          </label>
          <div class="mt-2">
            <input type="date" name="first-name"
              class="block py-2.5 px-3.5 w-full text-gray-900 border-0 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:bg-transparent focus:ring-1 focus:ring-inset placeholder:text-gray-400 bg-finance-gray focus:ring-finance-blue">
          </div>
        </div>

        <div class="w-full">
          <div class="mt-2">
            <input type="submit" value="Rechercher"
              class="block py-2.5 px-3.5 text-sm font-extrabold text-white border-0 cursor-pointer sm:text-lg sm:leading-6 w-fit bg-bj-green">
          </div>
        </div>

      </form>

    </div>

    <div class="w-full lg:w-8/12">

      <div class="py-4 px-4 mb-5 w-full bg-finance-blue">
        <span class="text-lg font-extrabold text-white"> Liste des appels à candidature </span>
      </div>

      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom"
        class="flex flex-col pb-5 mb-6 space-y-3 shadow bg-finance-gray" v-for="i in 5">

        <div class="py-2 px-4 text-sm font-semibold text-white mask">
          <div class="flex items-center space-x-3">
            <TablerCalendarCheck />
           <span>Lundi 12 Mai 2023 </span>
          </div>
        </div>

        <div class="px-4 content">

          <span class="font-semibold leading-7 text-finance-late line-clamp-3">
            Travaux de mise en œuvre des plans d'aménagement de gestion simplifiée (PAGS) ABOMEY PARAKOU
          </span>

        </div>

        <div class="flex flex-col justify-end py-3 px-4 space-y-5">

          <div class="flex flex-1 infos">

            <div class="flex flex-col space-y-2 w-full">
              <span class="text-xs font-semibold"> Référence: </span>
              <span class="text-xs font-semibold text-bj-green"> T_PAGEFCOM_55261 </span>

            </div>

            <div class="flex flex-col space-y-2 w-full">
              <span class="text-xs font-semibold"> Date limite de dépot: </span>
              <span class="text-xs font-semibold text-bj-green"> 20/12/2023 </span>
            </div>

          </div>

          <div class="flex flex-1 space-x-3 infos">

            <a href="" class="flex gap-2 items-center py-2 px-3 text-sm font-medium bg-opacity-5 text-white rounded-md bg-bj-green w-fit">
              <IcRoundRemoveRedEye />
              <span>Détails</span>
            </a>

            <a href="/postuler" class="flex gap-2 items-center py-2 px-3 text-sm font-medium bg-opacity-5 rounded-md bg-bj-yellow w-fit">
              <FluentShare20Regular />
              <span>Postuler</span>
            </a>

            <a href="#"
              class="flex gap-2 items-center py-2 px-3 text-sm font-medium text-black bg-white rounded-md transition-colors duration-300 hover:bg-gray-50 w-fit">
              <MaterialSymbolsDownloadRounded />
              <span>Télecharger</span>
            </a>

          </div>

        </div>

      </div>


      <div class="">
        <Pagination/>
      </div>

    </div>

  </div>
</template>