<script setup>
import ArticleBox from '../components/partials/ArticleBox.vue';


</script>

<template>
  <div class="min-h-screen">

    <div
      class="w-full bg-center bg-black bg-opacity-30 bg-blend-overlay bg-cover bg-no-repeat bg-[url('https://presidence.bj/upload/images/articles/473860782565001684770264.jpeg')] ">
      <div class="flex flex-col justify-center container mx-auto py-10 px-2">
        <p class="text-sm font-semibold text-white">
            présentation >> Actualités
          </p>
        </div>
      </div>


    <div class="container mx-auto">
      <div class="w-full gap-8 flex flex-col space-y-4 sm:flex-row justify-between sm:space-y-0 py-5">
        <ArticleBox/>
        <ArticleBox/>
        <ArticleBox/>
      </div>
    </div>

  </div>
</template>

<style>
.mask {
  background-image: linear-gradient(91.18deg, #023E79 0%, #0E6258 100%);
  opacity: 0.8667689732142857;
}</style>