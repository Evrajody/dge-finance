<script setup >
import { onMounted, ref, watch } from 'vue'
import { useTitle, useWindowScroll } from '@vueuse/core'
import Drawer from '@/components/partials/Drawer.vue'
import Navbar from '@/components/partials/Navbar.vue'
import Footer from '@/components/partials/Footer.vue'

import { onClickOutside } from '@vueuse/core'
import AOS from 'aos'
import 'aos/dist/aos.css'
import MaterialSymbolsArrowUpward from './components/icons/MaterialSymbolsArrowUpward.vue'
import Recherche from './components/partials/Recherche.vue'

const title = useTitle("Direction Générale de l'Economie et des Finances")

const { x, y } = useWindowScroll()

const showTopBtn = ref(false)

const openDrawer = ref(false)

const openSearch = ref(false);

const drawer = ref(null);

onClickOutside(drawer, (e) => {
  openDrawer.value = false
})

function toogleDrawer(drawerState) {
  openDrawer.value = drawerState
}

function toogleSearch(searchState) {
  openSearch.value = searchState
}

watch(y, (v) => (showTopBtn.value = y.value > 800))

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  // console.log(showTopBtn.value, y.value)
  AOS.init({
      // Global settings:
      offset: 200, // offset (in px) from the original trigger point
      delay: 15, // values from 0 to 3000, with step 50ms
      duration: 700, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
   })
})
</script>

<template>
  <div class="page-wrapper">
    <div class="fin-navbar">
      <Navbar @toggle-drawer="toogleDrawer" @open-search="toogleSearch" />
    </div>

    <main class="pt-20 lg:pt-32">
      <RouterView />
    </main>

    <div id="scrollbtn" v-if="showTopBtn"
      class="flex fixed right-0 bottom-0 z-10 justify-end items-end mr-4 mb-4 transition-all">
      <div>
         <a @click.prevent="scrollToTop" href="#"
            class="grid place-items-center w-12 h-12 text-white rounded-full shadow transition-all transform hover:shadow-lg hover:scale-110 bg-bj-green y">
            <MaterialSymbolsArrowUpward />
         </a>
      </div>
   </div>

    <!-- Menu responsive sur les petits ecrans -->
    <Drawer @toggle-drawer="toogleDrawer" :drawer-state="openDrawer" />

    <!-- Interfaces de recherches globales -->

    <Recherche @toggle-search="toogleSearch" :search-state="openSearch" />

    <Footer />

  </div>
</template>
