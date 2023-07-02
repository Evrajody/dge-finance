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
    class="object-fill object-bottom overflow-hidden self-stretch w-full max-w-md rounded-md shadow-md transition-shadow duration-300 hover:shadow-lg card-finance">
    <img :src="article.media" alt="Aperçu de l'article"
      class="object-cover w-full h-48">
    <div class="flex flex-col py-4 px-4 h-full mask">
      <h2 class="text-lg font-bold text-white line-clamp-2" v-text="article.title"></h2>
      <p class="mt-2 text-sm leading-6 text-white line-clamp-3" v-text="article.summary"></p>
      <p class="mt-2 text-sm italic text-white"> 12 Juin 2023 </p>
      <div class="flex justify-between items-center mt-4">
        <a href="/articles"
          class="py-2 px-4 text-sm font-medium text-black rounded-md transition-colors duration-300 hover:bg-yellow-600 bg-bj-yellow">Lire
          plus
        </a>

        <slot name="download" />

      </div>
    </div>
    <!-- <div class="w-full h-1 transition-all duration-300 mask"></div> -->
  </div>
</template>

<style>
  .mask {
    background-image: linear-gradient(91.18deg, #023E79 0%, #0E6258 100%);
  }

  .card-finance img {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>