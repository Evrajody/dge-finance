<script setup>

import InfoBanner from '../components/partials/InfoBanner.vue';
import Navbar from '../components/partials/Navbar.vue';
import Sliders from '../components/partials/Sliders.vue'
import SectionTitle from '../components/partials/SectionTitle.vue'
import FlashInfos from '../components/partials/FlashInfos.vue';
import NewletterAction from '../components/partials/NewletterAction.vue';
import ArticleBox from '../components/partials/ArticleBox.vue';
import Partenaire from '../components/partials/Partenaire.vue';
import { onMounted, ref } from 'vue';

const fakeArticle = ref([])

function loadFakeArticles(params) {
  fetch('https://jsonplaceholder.typicode.com/photos?_start=13&_limit=3')
  .then((response) => response.json())
  .then((json) => fakeArticle.value = json);
}

onMounted(() => {
  loadFakeArticles()
})

</script>


<template>
  <div class="fin-slider">
    <Sliders />
  </div>

  <div class="fin-section">
    <SectionTitle title="Nos Actualités" />
  </div>

  <div class="fin-actualites bg-finance-gray py-8">
    <div class="sm:container mx-auto w-full gap-8 grid grid-cols-1 items-center place-items-center md:grid-cols-2 lg:grid-cols-3 mt-12 py-5 px-8">
      <ArticleBox :article="item" v-for="item in fakeArticle" />
    </div>
  </div>

  <div class="fin-section">
    <SectionTitle title="Nos Services en ligne" />
  </div>

  <div class="flash">
    <FlashInfos />
  </div>

  <div class="fin-section">
    <SectionTitle title="Nos Partenaires" />
  </div>

  <div class="fin-partenaires">
    <Partenaire/>
  </div>

  <div class="fin-newletter">
    <NewletterAction />
  </div>
</template>

