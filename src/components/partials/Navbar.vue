<script setup>
import RiMenu3Line from '../icons/RiMenu3Line.vue'
import ClaritySearchLine from '../icons/ClaritySearchLine.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import ResponsiveMenu from './ResponsiveMenu.vue';
const route = useRouter()

const showMenu = ref(false)

function toogleMenu() {
  showMenu.value = !showMenu.value
}

</script>


<template>
  <header class="navbar transition-all duration-150 w-full">

    <div class="xl:container mx-auto">

      <div class="flex items-center justify-between px-5">

        <a href="/" class="hidden lg:block">
          <div class="official-logo w-60 py-2">
            <img src="@/assets/images/official_logo.png" alt="" class="h-15" srcset="">
          </div>
        </a>

        <a href="/" class="block lg:hidden">
          <div class="official-logo w-60 py-2">
            <img src="@/assets/images/logo_dge_benin.png" alt="" class="h-12" srcset="">
          </div>
        </a>

        <div class="simple-menu hidden lg:flex justify-center gap-3">
          <div class="text-xs hover:underline font-medium text-white">
            <a href=""> Services </a>
          </div>

          <div class="text-xs hover:underline font-medium text-white">
            <a href=""> Actions </a>
          </div>

          <div class="text-xs hover:underline font-medium text-white">
            <a href=""> Newletters </a>
          </div>

          <div class="text-xs hover:underline font-medium text-white">
            <a href=""> A la une </a>
          </div>

          <div class="text-xs hover:underline font-medium text-white">
            <a href=""> Marchés Publics </a>
          </div>

          <div class="text-xs hover:underline font-medium text-white">
            <a href=""> Contactez-nous </a>
          </div>

          <div class="text-xs hover:underline font-medium text-white">
            <a href=""> Francais </a>
          </div>

        </div>

        <a href="/" class="hidden md:block">
          <div class="official-logo w-60 py-2">
            <img src="@/assets/images/logo_dge_benin.png" class="h-15" alt="" srcset="">
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
      <nav class="flex flex-1 items-center justify-end">

        <div class="relative group">
          <div class="group-hover:bg-bj-yellow text-white transition-all hover:text-black cursor-pointer py-3 px-3">
            <a href="/" class="font-medium">Accueil</a>
          </div>
        </div>

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
              <a href="/publications/documents-budgetaires"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Documents budgétaires </a>
              <a href="/publications/documents-politiques-nationales"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Documents
                Politiques Nationales
                (DPN)
              </a>
              <a href="/publications/documents-de-travail" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Documents de travail </a>
              <a href="/publications/infra-annuels" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Infra
                annuels </a>
              <a href="/publications/rapef" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> RAPEF </a>
            </div>
          </div>
        </div>

        <div class="relative group">
          <div class="group-hover:bg-bj-yellow text-white text-center md:text-left transition-all hover:text-black cursor-pointer py-3 px-2">
            <a href="" class="font-medium">Séminaires et Conférences</a>
            <div
              class="hidden absolute group-hover:block mt-3 -ml-2 py-2 w-72 bg-white shadow-lg z-10 transition-all opacity-0 group-hover:opacity-100">
              <a href="/seminaire-conference/jseb" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> JSEB
              </a>
            </div>
          </div>
        </div>

        <div class="relative group">
          <div class="group-hover:bg-bj-yellow text-white transition-all hover:text-black cursor-pointer py-3 px-2">
            <a href="#" class="font-medium">Opportunités</a>
            <div
              class="hidden absolute group-hover:block mt-3 -ml-2 py-2 w-72 -translate-x-[57%] bg-white shadow-lg z-10 transition-all opacity-0 group-hover:opacity-100">
              <a href="/opportunites/offre-de-stage" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Offre de stage </a>
              <a href="/opportunites/appel-a-candidature" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Appel à candidature </a>
            </div>
          </div>
        </div>

        <div class="relative group">
          <div class="group-hover:bg-bj-yellow text-white transition-all hover:text-black cursor-pointer py-3 px-2">
            <a href="/contact" class="font-medium">Contact</a>
            <div
              class="hidden absolute group-hover:block mt-3 -ml-2 py-2 w-72 -translate-x-[72%] bg-white shadow-lg z-10 transition-all opacity-0 group-hover:opacity-100">
              <a href="/contact/ecrire-dg" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
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

  <ResponsiveMenu :menu-state="showMenu" />

</template>

<style>
.navbar {
  @apply bg-white bg-center lg:bg-black lg:bg-opacity-30 bg-no-repeat bg-blend-overlay bg-cover lg:bg-[url(https://finances.bj/wp-content/themes/theme-ministere-finances/img/ODD-728_156-modif.png)]
}
</style>