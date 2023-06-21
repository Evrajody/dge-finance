<script setup>
import { onMounted } from 'vue';


const props = defineProps({
  article: Object,
  image: String,
})

onMounted(() => {

})

</script>
<template>
  <div data-aos="fade-up" data-aos-anchor-placement="top-bottom"
    class="max-w-md self-stretch w-full card-finance rounded-md object-fill object-bottom shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <img :src="article.urlToImage" alt="Aperçu de l'article"
      class="w-full h-48 object-cover">
    <div class="px-4 py-4 mask flex h-full flex-col">
      <h2 class="text-xl font-bold text-white line-clamp-2" v-text="article.title"></h2>
      <p class="text-white text-sm leading-6 line-clamp-3 mt-2" v-text="article.description"></p>
      <p class="text-white text-sm italic mt-2"> 12 Juin 2023 </p>
      <div class="mt-4 flex justify-between items-center">
        <a href="#"
          class="bg-bj-yellow text-black text-sm font-medium px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors duration-300">Lire
          plus
        </a>

        <slot name="download" />

      </div>
    </div>
    <!-- <div class="mask h-1 w-full transition-all duration-300"></div> -->
  </div>
</template>

<style>
  .mask {
    background-image: linear-gradient(91.18deg, #023E79 0%, #0E6258 100%);
  }
</style>