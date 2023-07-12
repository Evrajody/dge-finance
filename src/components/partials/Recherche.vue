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
    <div v-if="searchState" class="fixed h-full w-full z-50 left-0 top-0">
      <!-- overlay -->
      <div class="fixed overlay h-full w-full left-0 top-0 bg-black bg-opacity-60 z-[-1]"></div>
      <!-- end overlay -->

      <!-- side -->
      <div ref="search" class='relative h-[90%] w-[90%] md:w-[60%] md:h-[50%] px-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white drawer'>

         <button @click="toogleSearch" class="cancel bg-red-500 absolute right-0 grid place-content-center text-white font-bold cursor-pointer w-16 h-16">
          <LineMdRemove width="2em" height="2em" class="h-full" />
         </button>

         <div class="w-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h2 class="text-3xl font-semibold text-finance-blue">Faire une recherche</h2>

            <p class="text-sm text-finance-late font-semibold mt-4">Actualités, Documents, Publications, Appel d'offre etc ...</p>

            <input type="search" class="block mt-4 h-12 w-full text-gray-900 border-0 focus:ring-0 bg-slate-200 rounded-md">

           <button type="submit" class="block py-2.5 px-3.5 w-32 mt-4 text-sm font-semibold text-center bg-transparent border-2 transition-all hover:text-white border-finance-blue text-finance-blue hover:bg-finance-blue"> 
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