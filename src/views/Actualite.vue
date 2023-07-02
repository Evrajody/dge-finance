<script setup>
  import ArticleBox from '../components/partials/ArticleBox.vue';
  import PageBanner from '../components/partials/PageBanner.vue';
  import { fakeArticle } from '../data/article'


</script>

<template>
  <div class="">

    <PageBanner title="Actualités"/>

    <div class="container mx-auto">

      <div class="grid grid-cols-1 gap-8 items-center place-items-center py-5 px-4 mt-12 w-full md:grid-cols-2 lg:grid-cols-3">

          <ArticleBox :article="item" v-for="item, index in fakeArticle" />

      </div>

    </div>

  </div>

</template>

<style>
 
</style>