<script setup>
  import ArticleBox from '../components/partials/ArticleBox.vue';
  import PageBanner from '../components/partials/PageBanner.vue';
  import Pagination from '../components/partials/Pagination.vue';
import { useArticlesStore } from '@/stores/articles';

  const fakeArticle = useArticlesStore()

</script>

<template>
  <div class="">

    <PageBanner title="Actualités"/>

    <div class="container mx-auto">

      <div class="grid grid-cols-1 gap-8 items-center place-items-center py-5 px-4 mt-12 w-full md:grid-cols-2 lg:grid-cols-3">

          <ArticleBox :article="item" v-for="item, index in fakeArticle.getArticles" />

      </div>

      <div class="px-4">
        <Pagination/>
      </div>

    </div>

  </div>

</template>

<style>
 
</style>