<script setup>

  const props = defineProps({
    image: String,
  })

</script>

<template>
  <div class=" mask max-w-md rounded shadow overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <img :src="props.image" alt="Aperçu de l'article"
      class="w-full h-full hover:transform hover:scale-95 rounded transition duration-300">
    <!-- <div class="px-4 py-4 mask mx-3">
      <h2 class="text-xl font-bold text-white">Titre de l'article</h2>
    </div> -->
    <!-- <div class="mask h-1 w-full transition-all duration-300"></div> -->
  </div>
</template>

<style>
 .mask {
    background-image: linear-gradient(91.18deg, #023E79 0%, #0E6258 100%);
    opacity: 0.8667689732142857;
  }
</style>