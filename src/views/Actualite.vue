<script setup>
  import ArticleBox from '../components/partials/ArticleBox.vue';
  import PageBanner from '../components/partials/PageBanner.vue';
  import { fakeArticle } from '../data/article'


</script>

<template>
  <div class="">

    <PageBanner title="Actualités"/>

    <div class="container mx-auto">

      <div class="w-full gap-8 grid grid-cols-1 items-center place-items-center md:grid-cols-2 lg:grid-cols-3 mt-12 py-5 px-4">

          <ArticleBox :article="item" v-for="item, index in fakeArticle" />

      </div>

    </div>

  </div>

</template>

<style>
 
</style>