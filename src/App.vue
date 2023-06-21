<script setup>

import Navbar from './components/partials/Navbar.vue';
import Footer from './components/partials/Footer.vue';
import MaterialSymbolsArrowUpward from './components/icons/MaterialSymbolsArrowUpward.vue';
import { computed, onMounted, ref, watch } from 'vue';
import AOS from 'aos'
import 'aos/dist/aos.css'
import ResponsiveMenu from './components/partials/ResponsiveMenu.vue';


const showTopBtn = ref(false)

function scrollToTop() {
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   });
}



function handleBtn(e) {
   if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
      showTopBtn.value = true
   } else {
      showTopBtn.value = false
   }
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


   <main class="w-full">
      <div class="py-8 md:py-16 lg:py-14"></div>
      <RouterView></RouterView>
   </main>

   <div id="scrollbtn" v-if="showTopBtn"
      class="flex transition-all items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
      <div>
         <a @click.prevent="scrollToTop" href="#"
            class="grid place-items-center text-white bg-bj-green y h-12 w-12 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110">
            <MaterialSymbolsArrowUpward />
         </a>
      </div>
   </div>

   <Footer />
</template>