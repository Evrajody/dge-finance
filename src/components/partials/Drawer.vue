<script lang="ts" setup>
import { useNavigationStore } from '@/stores/navigation';
import LineMdRemove from '../icons/LineMdRemove.vue';
import { onClickOutside } from '@vueuse/core';
import { ref } from 'vue';

const props = defineProps({
  drawerState: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(["toggleDrawer"])
const navigation = useNavigationStore()
const drawer = ref(null);


function toogleDrawer() {
  emit("toggleDrawer", false)
}

onClickOutside(drawer, (e) => {
  emit("toggleDrawer", false)
})

// TODO: GERER UN COLLAPDED SUR LE DRAWER

</script>

<template>
  <Transition name="slide-right" :duration="{ enter: 500, leave: 800 }">
    <!-- drawer container -->
    <div v-if="props.drawerState" class="fixed top-0 left-0 z-50 w-full h-full">
      <!-- overlay -->
      <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 overlay z-[-1]"></div>
      <!-- end overlay -->

      <!-- side -->
      <div ref="drawer" class="overflow-y-auto fixed top-0 left-0 w-80 h-full bg-white drawer">

        <div class="flex justify-end items-center px-5 w-full h-20 sm:hidden">

          <button @click="toogleDrawer"
            class="flex justify-center items-center font-semibold transition-all cursor-pointer hover:bg-gray-100 official-logo">
            <LineMdRemove width="2em" height="2em" class="h-full" />
          </button>

        </div>

        <div class="w-full border-b-2" v-for="nav in navigation.getNavigation">
          <div class="py-3 text-black transition-all cursor-pointer hover:text-black">
            <span class="py-4 px-3 font-medium"> {{ nav.label }} </span>

            <div v-if="nav.children.length > 0" class="z-10 mt-3 bg-white transition-all group-hover:block">
              <a v-for="child, index in nav.children" :key="index" :href="child.link"
                class="block py-3 px-4 text-sm text-gray-700 hover:bg-gray-100">
                {{ child.label }}
              </a>
            </div>
          </div>
        </div>

      </div>
      <!-- end side -->
    </div>
    <!-- end drawer container -->
  </Transition>
</template>

<style></style>