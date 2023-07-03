<script setup>
import { ref } from 'vue';
import RiMenu3Line from '../icons/RiMenu3Line.vue'
import ClaritySearchLine from '../icons/ClaritySearchLine.vue';
import ResponsiveMenu from './ResponsiveMenu.vue';
const showMenu = ref(false)

function toogleMenu() {
  showMenu.value = !showMenu.value
}

</script>


<template>
  <div class="fixed inset-x-0 z-50 shadow">
    <header class="w-full bg-white transition-all duration-150">

      <div class="mx-auto xl:container">

        <div class="flex justify-between items-center px-5">

          <a href="https://finances.bj" class="hidden lg:block" rel="noreferrer" target="_blank">
            <div class="py-2 official-logo">
              <img src="@/assets/images/official_logo.png" alt="" class="h-16" srcset="">
            </div>
          </a>

          <a href="/" class="block lg:hidden">
            <div class="py-2 official-logo">
              <img src="@/assets/images/logo_dge_benin.png" alt="" class="h-16" srcset="">
            </div>
          </a>

          <div class="hidden flex-col flex-1 justify-center self-stretch px-5 space-y-3 lg:flex simple-menu">

            <!-- <div class="flex justify-end items-center self-stretch space-x-3 divide-x divide-finance-late">

              <div class="text-xs font-medium hover:underline">
                <a href="/presentation/actualites" class="uppercase"> Actualités </a>
              </div>


              <div class="pl-3 text-xs font-medium hover:underline">
                <a href="/contact/ecrire-dg" class="uppercase"> Ecrire au DG </a>
              </div>

            </div> -->

            <div class="flex justify-end self-stretch space-x-5 divide-x divide-finance-late">


              <div class="text-xs font-medium">
                <span class=""> info@dgae.finances.bj </span>
              </div>

              <div class="pl-3 text-xs font-medium">
                <span class="uppercase"> T. (+229) 21 30 37 67 </span>
              </div>

              <div class="pl-3 text-xs font-medium">
                <span class="font-semibold text-red-400"> Certifiée ISO 9001-2015</span>
              </div>

            </div>

            <!-- <div class="text-xs font-medium hover:underline">
              <a href="/opportunites/appel-a-candidature"> Marchés Publics </a>
            </div> -->

            <!-- <div class="text-xs font-medium hover:underline">
              <a href="https://finances.bj"> Ministère </a>
            </div> -->

          </div>

          <a href="/" class="hidden md:block" rel="noreferrer" target="_blank">
            <div class="py-2 official-logo">
              <img src="@/assets/images/logo_dge_benin.png"  class="h-16" alt="" srcset="">
            </div>
          </a>

          <div class="flex items-center space-x-5 md:hidden mobile-toogle">

            <div class="flex justify-center items-center cursor-pointer official-logo">
              <ClaritySearchLine width="1.5em" height="1.5em" class="h-full" />
            </div>

            <div @click="toogleMenu" class="flex justify-center items-center cursor-pointer official-logo">
              <RiMenu3Line width="1.5em" height="1.5em" class="h-full" />
            </div>

          </div>

        </div>

      </div>

    </header>

    <div class="hidden px-5 md:flex bg-finance-blue">
      <div class="container flex justify-between items-center mx-auto text-white">
        <nav class="flex flex-1 justify-center items-center">

          <div class="relative items-stretch group">
            <div class="py-3 px-3 text-white transition-all cursor-pointer hover:text-black group-hover:bg-bj-yellow">
              <a href="/presentation/actualites" class="font-medium">Actualités</a>
            </div>
          </div>

          <div class="relative group">
            <div class="py-3 px-3 text-white transition-all cursor-pointer hover:text-black group-hover:bg-bj-yellow">
              <span class="font-medium">Présentation</span>
              <div class="hidden absolute z-10 mt-3 -ml-3 w-72 bg-white shadow transition-all group-hover:block">
                <!-- <a href="/presentation/actualites" class="block py-3 px-4 text-sm text-gray-700 hover:bg-gray-100">
                  Actualités </a> -->
                <a href="/presentation/mission" class="block py-3 px-4 text-sm text-gray-700 hover:bg-gray-100"> 
                  Mission
                </a>
                <a href="/presentation/directions" class="block py-3 px-4 text-sm text-gray-700 hover:bg-gray-100">
                  Directions 
                </a>
                <a href="/presentation/organigramme" class="block py-3 px-4 text-sm text-gray-700 hover:bg-gray-100">
                  Organigramme 
                </a>
                <a href="/presentation/anciens-directeurs"
                  class="block py-3 px-4 text-sm text-gray-700 hover:bg-gray-100">
                  Anciens Directeurs </a>
              </div>
            </div>
          </div>

          <div class="relative group">
            <div class="py-3 px-3 text-white transition-all cursor-pointer hover:text-black group-hover:bg-bj-yellow">
              <span class="font-medium">Publications</span>
              <div class="hidden absolute z-10 mt-3 -ml-3 w-max bg-white shadow transition-all group-hover:block">
                <a href="/publications/documents-budgetaires"
                  class="block py-3 px-4 text-sm text-gray-700 hover:bg-gray-100"> Documents budgétaires </a>
                <a href="/publications/documents-politiques-nationales"
                  class="block py-3 px-4 text-sm text-gray-700 hover:bg-gray-100"> Documents
                  Politiques Nationales
                  (DPN)
                </a>
                <a href="/publications/documents-de-travail"
                  class="block py-3 px-4 text-sm text-gray-700 hover:bg-gray-100">
                  Documents de travail </a>
                <a href="/publications/infra-annuels" class="block py-3 px-4 text-sm text-gray-700 hover:bg-gray-100">
                  Infra
                  annuels </a>
                <a href="/publications/rapef" class="block py-3 px-4 text-sm text-gray-700 hover:bg-gray-100"> RAPEF </a>
              </div>
            </div>
          </div>

          <div class="relative group">
            <div
              class="py-3 px-3 text-center text-white transition-all cursor-pointer md:text-left hover:text-black group-hover:bg-bj-yellow">
              <span class="font-medium">Séminaires et Conférences</span>
              <div
                class="hidden absolute z-10 mt-3 -ml-3 w-72 bg-white shadow opacity-0 transition-all group-hover:block group-hover:opacity-100">
                <a href="/seminaire-conference/jseb" class="block py-3 px-4 text-sm text-gray-700 hover:bg-gray-100"> JSEB
                </a>
              </div>
            </div>
          </div>

          <div class="relative group">
            <div class="py-3 px-3 text-white transition-all cursor-pointer hover:text-black group-hover:bg-bj-yellow">
              <span class="font-medium">Candidature</span>
              <div
                class="hidden absolute group-hover:block mt-3 -ml-2 w-72 -translate-x-[57.5%] bg-white shadow z-10 transition-all opacity-0 group-hover:opacity-100">
                <a href="" class="block py-3 px-4 text-sm text-gray-700 hover:bg-gray-100">
                 Candidature JSEB 
                </a>
                <a href="/opportunites/appel-a-candidature"
                  class="block py-3 px-4 text-sm text-gray-700 hover:bg-gray-100">
                  Candidature RAPEF 
                </a>
              </div>
            </div>
          </div>

          <div class="relative group">
            <div class="py-3 px-3 text-white transition-all cursor-pointer hover:text-black group-hover:bg-bj-yellow">
              <span class="font-medium">Contact</span>
              <div
                class="hidden absolute group-hover:block mt-3 -ml-2 w-72 -translate-x-[70.5%] bg-white shadow z-10 transition-all opacity-0 group-hover:opacity-100">
                <a href="/contact" class="block py-3 px-4 text-sm text-gray-700 hover:bg-gray-100">
                  Contatez-nous
                </a>
                <a href="/contact/ecrire-dg" class="block py-3 px-4 text-sm text-gray-700 hover:bg-gray-100">
                  Ecrire au DG
                </a>
              </div>

            </div>
          </div>

        </nav>
        <span class="cursor-pointer">
          <ClaritySearchLine class="w-5 h-5" />
        </span>
      </div>
    </div>

  </div>

  <div class="fixed max-h-screen pinset-y-0 z-[80]">
    <ResponsiveMenu :menu-state="showMenu" />
  </div>
</template>

<style>
.navbar {
  @apply bg-white bg-center lg:bg-black lg:bg-opacity-30 bg-no-repeat bg-blend-overlay bg-cover lg:bg-[url(https://finances.bj/wp-content/themes/theme-ministere-finances/img/ODD-728_156-modif.png)]
}
</style>