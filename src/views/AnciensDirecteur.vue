<script setup>
import ArticleBox from '../components/partials/ArticleBox.vue';
import PageBanner from '../components/partials/PageBanner.vue';
import DirecteurBox from '../components/partials/DirecteurBox.vue';



</script>

<template>
  <main class="min-h-screen overflow-hidden">

    <PageBanner title="Anciens Directeurs" />

    <div class="container mx-auto">

      <div class="w-full gap-8 grid grid-cols-1 items-center place-items-center md:grid-cols-2 lg:grid-cols-3 mt-12 py-5 px-8">

        <DirecteurBox image="https://www.dge.finances.bj/storage/2021/05/WhatsApp-Image-2019-02-25-at-09.51.49-300x300-1.jpeg" v-for="i in 3" />

      </div>

    </div>

  </main>
</template>