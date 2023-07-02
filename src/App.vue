<script setup>

import Navbar from './components/partials/Navbar.vue';
import Footer from './components/partials/Footer.vue';
import MaterialSymbolsArrowUpward from './components/icons/MaterialSymbolsArrowUpward.vue';
import {onMounted, ref } from 'vue';
import AOS from 'aos'
import 'aos/dist/aos.css'

const showTopBtn = ref(false)

function scrollToTop() {
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   });
}

function handleBtn(e) {
  showTopBtn.value = document.body.scrollTop > 800 || document.documentElement.scrollTop > 800;
}

onMounted(() => {

   window.onscroll = function (e) { handleBtn(e) }

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
   <div class="fin-navbar">
      <Navbar />
   </div>

   <main>
      <div class="py-8 md:py-16 lg:py-14"></div>
      <RouterView></RouterView>
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

   <Footer />
</template>