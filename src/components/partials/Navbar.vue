<script setup>
import RiMenu3Line from '../icons/RiMenu3Line.vue'
import ClaritySearchLine from '../icons/ClaritySearchLine.vue';
import { useRouter } from 'vue-router';
const route = useRouter()

</script>


<template>
  <header class="bg-white transition-all duration-150 w-full border-b border-slate-100">
    <div class="xl:container mx-auto">

      <div class="flex items-center justify-between gap-4 px-5">

        <a href="/">
          <div class="official-logo hidden lg:block w-60">
            <img src="@/assets/images/official_logo.png" alt="" class="h-15" srcset="">
          </div>
        </a>

        <a href="/">
          <div class="official-logo block lg:hidden w-60">
            <img src="@/assets/images/logo_dge_benin.png" alt="" class="h-12" srcset="">
          </div>
        </a>

        <a href="/">
          <div class="official-logo hidden lg:block w-60">
            <img src="@/assets/images/logo_dge_benin.png" class="h-15" alt="" srcset="">
          </div>
        </a>

        <div class="mobile-toogle flex lg:hidden items-center gap-3">

          <div class="official-logo cursor-pointer flex items-center justify-center h-16 w-16">
            <ClaritySearchLine width="2em" height="2em" class="h-full" />
          </div>

          <div class="official-logo cursor-pointer flex items-center justify-center h-16 w-16">
            <RiMenu3Line width="2em" height="2em" class="h-full" />
          </div>

        </div>

      </div>

    </div>

  </header>

  <div class="hidden md:flex bg-finance-blue px-5">
    <div class="container mx-auto flex justify-between items-center text-white">
      <nav class="flex flex-1 items-center justify-start">
        <div class="relative group">
          <div class="group-hover:bg-bj-yellow text-white transition-all hover:text-black cursor-pointer py-3 px-2">
            <a href="" class="font-medium">Présentation</a>
            <div class="hidden absolute group-hover:block mt-3 -ml-2 py-2 w-72 bg-white shadow-lg z-10 transition-all">
              <a href="/presentation/actualites" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Actualités </a>
              <a href="/presentation/mission" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Mission
              </a>
              <a href="/presentation/organigramme" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Organigramme </a>
              <a href="/presentation/anciens-directeurs" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Anciens Directeurs </a>
              <a href="/presentation/directions" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Directions </a>
            </div>
          </div>
        </div>


        <div class="relative group">
          <div class="group-hover:bg-bj-yellow text-white transition-all hover:text-black cursor-pointer py-3 px-2">
            <a href="" class="font-medium">Publications</a>
            <div class="hidden absolute group-hover:block mt-3 -ml-2 py-2 w-72 bg-white shadow-lg z-10 transition-all">
              <a href="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Documents budgétaires </a>
              <a href="/articles-details" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Documents
                Politiques Nationales
                (DPN) </a>
              <a href="" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Documents de travail </a>
              <a href="" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Infra annuels </a>
              <a href="" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> RAPEF </a>
            </div>
          </div>
        </div>

        <div class="relative group">
          <div class="group-hover:bg-bj-yellow text-white transition-all hover:text-black cursor-pointer py-3 px-2">
            <a href="" class="font-medium">Séminaires et Conférences</a>
            <div class="hidden absolute group-hover:block mt-3 -ml-2 py-2 w-72 bg-white shadow-lg z-10 transition-all opacity-0 group-hover:opacity-100">
              <a href="/seminaire-conference/jseb" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> JSEB </a>
            </div>
          </div>
        </div>

        <div class="relative group">
          <div class="group-hover:bg-bj-yellow text-white transition-all hover:text-black cursor-pointer py-3 px-2">
            <a href="" class="font-medium">Opportunités</a>
            <div
              class="hidden absolute group-hover:block mt-3 -ml-2 py-2 w-72 bg-white shadow-lg z-10 transition-all opacity-0 group-hover:opacity-100">
              <a href="/opportunites/offre-de-stage" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Offre de stage </a>
              <a href="" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Appel à candidature </a>
            </div>
          </div>
        </div>

      </nav>
      <span class="cursor-pointer">
        <ClaritySearchLine class="h-5 w-5" />
      </span>
    </div>
  </div>
  
</template>