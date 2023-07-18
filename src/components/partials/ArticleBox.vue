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
  <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="flex overflow-hidden flex-col self-stretch w-full rounded shadow-md sm:max-w-md mask">
    <a href="#"></a>
    <div class="relative"><a href="#">
        <img :src="article.media" class="w-full h-56 bg-white" alt="Sunset in the mountains">
        <div
          class="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-25 transition duration-300 hover:bg-transparent">
        </div>
      </a>
      <span class="absolute top-3 right-3 px-3 text-sm font-medium text-white uppercase rounded-md bg-finance-plot"
        v-text="article.topic">
      </span>
    </div>
    <div class="py-2 px-4 mb-auto md:py-4">

      <p class="text-sm font-bold text-white md:text-xl line-clamp-3" v-text="article.title"></p>

    </div>
    <div class="flex flex-row justify-between items-center py-2 px-4">

      <a href="/articles"
        class="py-2 px-4 text-sm font-medium text-black rounded-md transition-colors duration-300 hover:bg-yellow-600 w-fit bg-bj-yellow">
        Lire l'article
      </a>

      <span class="text-base italic text-white" v-text="`${moment(article.published_date).format('DD MMM YYYY')} à ${moment(
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
