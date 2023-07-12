<script setup>
import { onMounted } from 'vue'
import moment from 'moment'
import 'moment/locale/fr'

const props = defineProps({
  article: Object,
  image: String
})

onMounted(() => { })
</script>
<template>
  <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="rounded self-stretch w-full sm:max-w-md overflow-hidden mask shadow-md flex flex-col">
    <a href="#"></a>
    <div class="relative"><a href="#">
        <img :src="article.media" class="h-56 bg-white w-full" alt="Sunset in the mountains">
        <div
          class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
        </div>
      </a>
      <span class="absolute top-3 right-3 px-3 text-sm font-medium rounded-md bg-finance-plot uppercase text-white"
        v-text="article.topic">
      </span>
    </div>
    <div class="px-6 py-4 mb-auto">

      <p class="text-lg font-bold text-white line-clamp-3" v-text="article.title"></p>

    </div>
    <div class="px-6 py-3 flex flex-row items-center justify-between">

      <a href="/articles"
        class="py-2 px-4 text-sm w-fit font-medium text-black rounded-md transition-colors duration-300 hover:bg-yellow-600 bg-bj-yellow">
        Lire l'article
      </a>

      <span class="text-sm italic text-white" v-text="`${moment(article.published_date).format('DD MMM YYYY')} à ${moment(
        article.published_date
      ).format('HH:mm')}`
        "></span>
    </div>
  </div>
</template>

<style>
.mask {
  background-image: linear-gradient(91.18deg, #023e79 0%, #0e6258 100%);
}

.card-finance img {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
