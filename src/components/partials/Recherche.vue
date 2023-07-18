<script lang="ts" setup>
import { useNavigationStore } from '@/stores/navigation';
import LineMdRemove from '../icons/LineMdRemove.vue';
import { onClickOutside } from '@vueuse/core';
import { ref } from 'vue';

const props = defineProps({
  searchState: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(["toggleSearch"])

const search = ref(null);


function toogleSearch() {
  emit("toggleSearch", false)
}

onClickOutside(search, (e) => {
  emit("toggleSearch", false)
})

// TODO: GERER UN COLLAPDED SUR LE DRAWER

</script>

<template>
  <Transition name="scale" :duration="{ enter: 500, leave: 800 }">
    <!-- drawer container -->
    <div v-if="searchState" class="fixed top-0 left-0 z-50 w-full h-full">
      <!-- overlay -->
      <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 overlay z-[-1]"></div>
      <!-- end overlay -->

      <!-- side -->
      <div ref="search" class='relative h-[90%] w-[90%] md:w-[60%] md:h-[50%] px-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white drawer'>

         <button @click="toogleSearch" class="grid absolute right-0 place-content-center w-16 h-16 font-bold text-white bg-red-500 cursor-pointer cancel">
          <LineMdRemove width="2em" height="2em" class="h-full" />
         </button>

         <div class="w-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h2 class="text-3xl font-semibold text-finance-blue">Faire une recherche</h2>

            <p class="mt-4 text-sm font-semibold text-finance-late">Actualités, Documents, Publications, Appel d'offre etc ...</p>

            <input type="search" class="block mt-4 w-full h-12 text-gray-900 rounded-md border-0 focus:ring-0 bg-slate-200">

           <button type="submit" class="block py-2.5 px-3.5 mt-4 w-32 text-sm font-semibold text-center bg-transparent border-2 transition-all hover:text-white border-finance-blue text-finance-blue hover:bg-finance-blue"> 
            Rechercher
          </button>

         </div>

      </div>
      <!-- end side -->
    </div>
    <!-- end drawer container -->
  </Transition>
</template>

<style>

</style>