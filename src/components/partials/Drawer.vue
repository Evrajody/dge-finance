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
    <div v-if="props.drawerState" class="fixed h-full w-full z-50 left-0 top-0">
      <!-- overlay -->
      <div class="fixed overlay h-full w-full left-0 top-0 bg-black bg-opacity-60 z-[-1]"></div>
      <!-- end overlay -->

      <!-- side -->
      <div ref="drawer" class="fixed h-full w-80 left-0 top-0 bg-white drawer overflow-y-auto">

        <div class="h-20 px-5 flex sm:hidden items-center justify-end w-full">

          <button @click="toogleDrawer"
            class="flex  font-semibold hover:bg-gray-100 transition-all justify-center items-center cursor-pointer official-logo">
            <LineMdRemove width="2em" height="2em" class="h-full" />
          </button>

        </div>

        <div class="w-full border-b-2" v-for="nav in navigation.getNavigation">
          <div class="py-3 text-black transition-all cursor-pointer hover:text-black">
            <span class="font-medium px-3 py-4"> {{ nav.label }} </span>

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