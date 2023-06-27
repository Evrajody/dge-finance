<script setup>
import RiMenu3Line from '../icons/RiMenu3Line.vue'
import ClaritySearchLine from '../icons/ClaritySearchLine.vue';
import { ref } from 'vue';
import ResponsiveMenu from './ResponsiveMenu.vue';

const showMenu = ref(false)

function toogleMenu() {
  showMenu.value = !showMenu.value
}

</script>


<template>
  <div class="fixed inset-x-0 shadow z-50">
    <header class="bg-white transition-all duration-150 w-full">

      <div class="xl:container mx-auto">

        <div class="flex items-center justify-between px-5">

          <a href="https://finances.bj" class="hidden lg:block">
            <div class="official-logo  py-2">
              <img src="@/assets/images/official_logo.png" alt="" class="h-16" srcset="">
            </div>
          </a>

          <a href="/" class="block lg:hidden">
            <div class="official-logo  py-2">
              <img src="@/assets/images/logo_dge_benin.png" alt="" class="h-16" srcset="">
            </div>
          </a>

          <div class="simple-menu hidden px-5 lg:flex flex-col justify-center gap-3 flex-1  self-stretch">

            <div class="flex gap-5 self-stretch justify-end items-center divide-x divide-finance-late">

              <div class="text-xs hover:underline font-medium">
                <a href="/presentation/actualites" class="uppercase"> Actualités </a>
              </div>

              <div class="text-xs hover:underline font-medium pl-3">
                <a href="/contact/ecrire-dg" class="uppercase"> Ecrire au DG </a>
              </div>

            </div>

            <div class="flex gap-5 self-stretch justify-end divide-x divide-finance-late">


              <div class="text-xs font-medium">
                <span class=""> info@dgae.finances.bj </span>
              </div>

              <div class="text-xs font-medium pl-3">
                <span class="uppercase"> T. (+229) 21 30 37 67 </span>
              </div>

              <div class="text-xs font-medium pl-3">
                <span class="text-red-400 font-semibold"> Certifiée ISO 9001-2015</span>
              </div>

            </div>

            <!-- <div class="text-xs hover:underline font-medium">
              <a href="/opportunites/appel-a-candidature"> Marchés Publics </a>
            </div> -->

            <!-- <div class="text-xs hover:underline font-medium">
              <a href="https://finances.bj"> Ministère </a>
            </div> -->

          </div>

          <a href="/" class="hidden md:block">
            <div class="official-logo  py-2">
              <img src="@/assets/images/logo_dge_benin.png" class="h-16" alt="" srcset="">
            </div>
          </a>

          <div class="mobile-toogle flex md:hidden items-center gap-5">

            <div class="official-logo cursor-pointer flex items-center justify-center">
              <ClaritySearchLine width="1.5em" height="1.5em" class="h-full" />
            </div>

            <div @click="toogleMenu" class="official-logo cursor-pointer flex items-center justify-center">
              <RiMenu3Line width="1.5em" height="1.5em" class="h-full" />
            </div>

          </div>

        </div>

      </div>

    </header>

    <div class="hidden md:flex bg-finance-blue px-5">
      <div class="container mx-auto flex justify-between gap-3 items-center text-white">
        <nav class="flex flex-1 items-center justify-center">

          <div class="relative group">
            <div class="group-hover:bg-bj-yellow text-white transition-all hover:text-black cursor-pointer py-3 px-2">
              <span class="font-medium">Présentation</span>
              <div class="hidden absolute group-hover:block mt-3 -ml-2 w-72 bg-white shadow z-10 transition-all">
                <!-- <a href="/presentation/actualites" class="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">
                  Actualités </a> -->
                <a href="/presentation/mission" class="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"> 
                  Mission
                </a>
                <a href="/presentation/directions" class="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">
                  Directions 
                </a>
                <a href="/presentation/organigramme" class="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">
                  Organigramme 
                </a>
                <a href="/presentation/anciens-directeurs"
                  class="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">
                  Anciens Directeurs </a>
              </div>
            </div>
          </div>

          <div class="relative group">
            <div class="group-hover:bg-bj-yellow text-white transition-all hover:text-black cursor-pointer py-3 px-2">
              <span class="font-medium">Publications</span>
              <div class="hidden absolute group-hover:block mt-3 -ml-2 w-max bg-white shadow z-10 transition-all">
                <a href="/publications/documents-budgetaires"
                  class="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"> Documents budgétaires </a>
                <a href="/publications/documents-politiques-nationales"
                  class="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"> Documents
                  Politiques Nationales
                  (DPN)
                </a>
                <a href="/publications/documents-de-travail"
                  class="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">
                  Documents de travail </a>
                <a href="/publications/infra-annuels" class="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">
                  Infra
                  annuels </a>
                <a href="/publications/rapef" class="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"> RAPEF </a>
              </div>
            </div>
          </div>

          <div class="relative group">
            <div
              class="group-hover:bg-bj-yellow text-white text-center md:text-left transition-all hover:text-black cursor-pointer py-3 px-2">
              <span class="font-medium">Séminaires et Conférences</span>
              <div
                class="hidden absolute group-hover:block mt-3 -ml-2 w-72 bg-white shadow z-10 transition-all opacity-0 group-hover:opacity-100">
                <a href="/seminaire-conference/jseb" class="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"> JSEB
                </a>
              </div>
            </div>
          </div>

          <div class="relative group">
            <div class="group-hover:bg-bj-yellow text-white transition-all hover:text-black cursor-pointer py-3 px-2">
              <span class="font-medium">Opportunités</span>
              <div
                class="hidden absolute group-hover:block mt-3 -ml-2 w-72 -translate-x-[57%] bg-white shadow z-10 transition-all opacity-0 group-hover:opacity-100">
                <a href="/opportunites/offre-de-stage" class="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">
                  Offre de stage </a>
                <a href="/opportunites/appel-a-candidature"
                  class="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">
                  Appel à candidature </a>
              </div>
            </div>
          </div>

          <div class="relative group">
            <div class="group-hover:bg-bj-yellow text-white transition-all hover:text-black cursor-pointer py-3 px-2">
              <span class="font-medium">Contact</span>
              <div
                class="hidden absolute group-hover:block mt-3 -ml-2 w-72 -translate-x-[72%] bg-white shadow z-10 transition-all opacity-0 group-hover:opacity-100">
                <a href="/contact" class="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">
                  Contatez-nous
                </a>
                <a href="/contact/ecrire-dg" class="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">
                  Ecrire au DG
                </a>
              </div>

            </div>
          </div>

        </nav>
        <span class="cursor-pointer">
          <ClaritySearchLine class="h-5 w-5" />
        </span>
      </div>
    </div>

  </div>

  <div class="fixed pinset-y-0 max-h-screen z-[80]">
    <ResponsiveMenu :menu-state="showMenu" />
  </div>
</template>

<style>
.navbar {
  @apply bg-white bg-center lg:bg-black lg:bg-opacity-30 bg-no-repeat bg-blend-overlay bg-cover lg:bg-[url(https://finances.bj/wp-content/themes/theme-ministere-finances/img/ODD-728_156-modif.png)]
}
</style>