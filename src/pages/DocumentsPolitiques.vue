<script setup>
import PageBanner from '../components/partials/PageBanner.vue';
import MaterialSymbolsDownloadRounded from '../components/icons/MaterialSymbolsDownloadRounded.vue'
import Pagination from '../components/partials/Pagination.vue'
import { reactive } from 'vue';
import IcRoundRemoveRedEye from '../components/icons/IcRoundRemoveRedEye.vue';

const documents = reactive([
  {
    title: 'Transformation structurelle et emploi en ASS : une analyse par approche de seuil',
    auteur: 'Yves ESSEHOU & Charlemagne B. IGUE'
  },

  {
    title: 'Courbe environnementale de Kuznets : un réexamen des canaux de transmission dans les pays en développement',
    auteur: 'Rock VODA & Jude EGGOH'
  },

  {
    title: 'Effet des investissements directs étrangers sur les émissions du méthane dans les pays de l’Afrique de l’Ouest',
    auteur: 'Roch Edgard GBINLO'
  },

  {
    title: 'Efficacité énergétique et performance économique en Afrique : rôle des institutions',
    auteur: 'Alastaire S. ALINSATO & Madeleine ALLAKONON'
  },

  {
    title: 'L’accès au crédit explique-t-il l’adoption de la pluriactivité des agriculteurs au Bénin ?',
    auteur: 'Kolotioloman SORO & Ogounoké Marcel IFECRO'
  },

])


</script>

<template>
  <PageBanner title="Documents de Politiques Nationales (DPN)" />

  <div class="py-5 px-5 md:px-10 bg-finance-gray border-y border-y-gray-300">

    <div class="pb-3 mx-auto lg:container">

      <h3 class="py-3 text-xl font-extrabold text-bj-green"> Rechercher un document de Politiques Nationales </h3>

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

    <aside data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="flex relative flex-col items-start space-y-5 space-x-4 rounded-md lg:flex-row lg:items-center lg:space-y-0 mask"
      v-for="i in documents">

      <div class="grid place-content-center w-36 h-32 rounded-l-md bg-finance-late thumbs">
         <span class="px-3 font-bold text-center text-white uppercase">
           Documents Politique National
         </span>
      </div>

      <div class="flex self-stretch divide-y-4 divide-red-300">
        <div class="flex flex-col justify-center space-y-2 text-white">
          <span class="block text-xs"><b class="text-sm">694</b> ko</span>
          <span class="block text-xs"><b class="text-sm semibold">330</b> Lectures</span>
          <span class="block text-xs"><b class="text-sm semibold">2340</b> Téléchargements</span>
        </div>
      </div>

      <div class="flex flex-col flex-1 justify-center self-stretch space-y-2 tile">

        <div class="max-w-md font-extrabold leading-6 text-white line-clamp-4">
         {{ i.title }}
        </div>

        <div class="text-sm text-white">
          <span> Auteur: </span>
          <span class="text-sm italic font-semibold"> {{ i.auteur }} </span>
        </div>

      </div>

      <div class="flex justify-end self-end p-2 space-x-3">
        <a href="" class="flex items-center py-2 px-3 space-x-2 text-sm font-medium bg-opacity-5 rounded-md bg-bj-yellow">
          <IcRoundRemoveRedEye />
          <span>Lire le document</span>
        </a>

        <a href="#"
          class="flex items-center py-2 px-4 space-x-2 text-sm font-medium text-black bg-white rounded-md transition-colors duration-300 hover:bg-gray-50">
          <MaterialSymbolsDownloadRounded />
         <span>Télecharger</span>
        </a>

      </div>

      <span class="absolute top-3 right-3 px-3 text-sm font-medium rounded-md bg-finance-gray"> 12/12/2023 </span>

    </aside>

    <div class=''>
      <Pagination />
    </div>

  </div>
</template>


<style></style>