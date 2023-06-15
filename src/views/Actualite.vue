<script setup>
import { onMounted, ref } from 'vue';
import ArticleBox from '../components/partials/ArticleBox.vue';
import PageBanner from '../components/partials/PageBanner.vue';

const fakeArticle = ref([]);

function loadFakeArticles(params) {
  fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=6')
  .then((response) => response.json())
  .then((json) => fakeArticle.value = json);
}

onMounted(() => {
  loadFakeArticles()
})


</script>

<template>
  <div class="min-h-screen">

    <PageBanner title="Actualités"/>

    <div class="container mx-auto">

      <div class="w-full gap-8 grid grid-cols-1 items-center place-items-center md:grid-cols-2 lg:grid-cols-3 mt-12 py-5 px-8">

          <ArticleBox :article="item" v-for="item in fakeArticle" />

      </div>

    </div>

  </div>

</template>

<style>
 
</style>