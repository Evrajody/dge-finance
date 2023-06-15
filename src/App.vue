<script setup>
  import Navbar from './components/partials/Navbar.vue';
 import Footer from './components/partials/Footer.vue';



</script>

<template>
   <div class="fin-navbar">
      <Navbar />
   </div>

   <main class="w-full">
      <RouterView></RouterView>
   </main>

  <Footer />


</template>