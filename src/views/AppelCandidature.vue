<script setup>
import ContactForm from '../components/partials/ContactForm.vue';
import PageBanner from '../components/partials/PageBanner.vue';

import DirecteurBox from '../components/partials/DirecteurBox.vue';
import { ref } from 'vue';
import MaterialSymbolsDownloadRounded from '../components/icons/MaterialSymbolsDownloadRounded.vue';
import FluentShare20Regular from '../components/icons/FluentShare20Regular.vue'
import TablerCalendarCheck from '../components/icons/TablerCalendarCheck.vue'

const directeur = ref({
  nom: 'DJOSSOU',
  prenom: 'Justin',
  titre: 'Directeur Général l\'Economie',
  image: "https://www.dge.finances.bj/storage/2021/05/DGAE.jpg"
})

</script>

<template>
  <PageBanner title="Appel à Candidature" />

  <div class="flex flex-col lg:flex-row gap-12 my-20 lg:container mx-auto md:px-3 lg:px-16">


    <div class="filtre-form w-full lg:w-1/3 px-3 sm:px-0">

      <div class="py-4 grid place-items-center bg-finance-blue w-full">
        <span class="text-lg font-extrabold text-white"> Filtre </span>
      </div>

      <form action="" class="w-full py-5 flex flex-col space-y-3">

        <div class="">
          <label for="full-name" class="block text-sm font-semibold leading-6 text-gray-900"> Status </label>
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
          <label for="full-name" class="block text-sm font-semibold leading-6 text-gray-900"> Date limite de dépot </label>
          <div class="mt-2">
            <input type="date" name="first-name"
              class="block w-full border-0 px-3.5 py-2.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset bg-finance-gray focus:bg-transparent  focus:ring-finance-blue sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="w-full">
          <!-- <label for="full-name" class="block text-sm font-semibold leading-6 text-gray-900"> Date de publication </label> -->
          <div class="mt-2">
            <input type="submit" value="Rechercher"
              class="block w-fit md:w-full border-0 px-3.5 py-2.5 cursor-pointer text-white bg-bj-green font-extrabold text-sm sm:text-lg sm:leading-6">
          </div>
        </div>

      </form>




    </div>


    <div class="appel-list w-full lg:w-2/3 px-3 sm:px-0">

      <div class="px-4 py-4 mb-5 bg-finance-blue w-full">
        <span class="text-lg font-extrabold text-white"> Liste des appels à candidature </span>
      </div>

      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="pb-5 flex flex-col  gap-3 mb-6 bg-finance-gray shadow" v-for="i in 5">

        <div class="py-2 mask px-4 text-white text-sm font-semibold">
           <div class="flex items-center gap-2">
            <TablerCalendarCheck/>
             Lundi 12 Mai 2023
           </div>
        </div>

        <div class="content flex flex-col px-4">

          <span class="font-semibold text-sm text-finance-late leading-5 line-clamp-3">
            Travaux de mise en œuvre des plans d'aménagement de gestion simplifiée (PAGS) ABOMEY PARAKOU
          </span>

        </div>

      <div class=" flex flex-col gap-2 space-y-1 justify-end px-4">

        <div class="infos flex flex-1">

           <div class="flex flex-col gap-2 w-full">
             <span class="text-xs font-semibold"> Référence:  </span>
             <span class="text-xs font-semibold text-bj-green"> T_PAGEFCOM_55261 </span>

           </div>

           <div class="flex flex-col gap-2 w-full">
             <span class="text-xs font-semibold"> Date limite de dépot:  </span>
             <span class="text-xs font-semibold text-bj-green"> 20/12/2023 </span>

           </div>

        </div>

        <div class="infos flex gap-2 justify-end flex-1">

          <a href=""
          class="bg-bj-yellow flex w-fit items-center gap-2 bg-opacity-5 text-sm font-medium py-2 px-3 rounded-md">
          <FluentShare20Regular/>
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