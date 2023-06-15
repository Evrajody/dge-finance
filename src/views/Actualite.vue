<script setup>
import ArticleBox from '../components/partials/ArticleBox.vue';
import PageBanner from '../components/partials/PageBanner.vue';


</script>

<template>
  <div class="min-h-screen">

    <PageBanner title="Actualités"/>

    <div class="container mx-auto">

      <div class="w-full gap-8 grid grid-cols-1 items-center place-items-center md:grid-cols-2 lg:grid-cols-3 mt-12 py-5 px-8">

          <ArticleBox  v-for="i in 6" />

      </div>

    </div>

  </div>

</template>

<style>
 
</style>