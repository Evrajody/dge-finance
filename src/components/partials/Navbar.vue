<script lang="ts" setup>
import { onMounted, ref } from "vue";
import RiMenu3Line from '@/components/icons/RiMenu3Line.vue'
import ClaritySearchLine from '@/components/icons/ClaritySearchLine.vue';
import { useNavigationStore } from '@/stores/navigation';

const emit = defineEmits(["toggleDrawer", "openSearch"])


const navigation = useNavigationStore()

function toogleDrawer() {
  emit("toggleDrawer", true)
}

function openSearch() {
  emit("openSearch", true)
}

onMounted(() => { })


</script>

<template>
  <header class="fixed bg-white inset-x-0 z-50 shadow">
    <div class="h-20 w-full px-3 sm:px-5 xl:container xl:mx-auto">
      <div class="header-top h-full flex items-center justify-between">
        <a href="/" class="h-full w-auto">
          <img src="@/assets/images/logo_dge_benin.png"
            class="max-w-full min-w-[10rem] w-[12rem] sm:w-[14rem] h-full object-contain m-auto" alt="" srcset="" />
        </a>

        <div class="hidden flex-col flex-1 justify-center self-stretch px-5 space-y-3 lg:flex simple-menu">
          <div class="flex justify-center self-stretch space-x-5 divide-x divide-finance-late">
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
        </div>

        <a href="/" class="hidden lg:block h-full w-auto">
          <img src="@/assets/images/official_logo.png"
            class="max-w-full min-w-[10rem] w-[14rem] h-full object-contain m-auto" alt="" srcset="" />
        </a>

        <div class="flex items-center space-x-5 lg:hidden mobile-toogle">

          <button @click="openSearch" class="flex justify-center items-center cursor-pointer official-logo">
            <ClaritySearchLine width="1.5em" height="1.5em" class="h-full" />
          </button>

          <button @click="toogleDrawer" class="flex hover:bg-gray-100  transition-all justify-center items-center cursor-pointer official-logo">
            <RiMenu3Line width="1.5em" height="1.5em" class="h-full" />
          </button>

        </div>

      </div>
    </div>

    <div class="header-nav hidden lg:block h-12 bg-finance-blue w-full">
      <div class="container flex justify-between items-center mx-auto text-white">
        <nav class="flex flex-1 justify-center items-center">
          <div class="relative group" v-for="nav in navigation.getNavigation">
            <div class="py-3 px-3 text-white transition-all cursor-pointer hover:text-black group-hover:bg-bj-yellow">

              <a v-if="nav.children.length == 0" :href="nav.link" class="font-medium"> {{ nav.label }} </a>
              <span v-else class="font-medium"> {{ nav.label }} </span>

              <div v-if="nav.children.length > 0"
                class="hidden absolute z-10 mt-3 -ml-3 bg-white shadow transition-all group-hover:block" :class="nav.customclass ? nav.customclass : 'w-72'">
                <a v-for="child, index in nav.children" :key="index" :href="child.link"
                  class="block py-3 px-4 text-sm text-gray-700 hover:bg-gray-100">
                  {{ child.label }}
                </a>
              </div>
            </div>
          </div>

        </nav>
        <button @click="openSearch" class="cursor-pointer">
          <ClaritySearchLine class="w-5 h-5" />
        </button>
      </div>
    </div>
    
  </header>
</template>

<style></style>
