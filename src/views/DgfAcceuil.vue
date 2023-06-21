<script setup>

import Sliders from '../components/partials/Sliders.vue'
import SectionTitle from '../components/partials/SectionTitle.vue'
import FlashInfos from '../components/partials/FlashInfos.vue';
import NewletterAction from '../components/partials/NewletterAction.vue';
import ArticleBox from '../components/partials/ArticleBox.vue';
import Partenaire from '../components/partials/Partenaire.vue';
import { fakeArticle } from '../data/article'


</script>


<template>

  <!-- ENVISAGER UN RETRAIT DU SLIDER -->

  <div class="fin-slider">
    <Sliders />
  </div>

  <div class="fin-section">
    <SectionTitle title="Nos Actualités" />
  </div>

  <div class="fin-actualites bg-finance-gray">
    <div
      class="sm:container mx-auto w-full gap-8 grid grid-cols-1 items-center place-items-center md:grid-cols-2 lg:grid-cols-3 py-5 px-4">
      <ArticleBox :article="item" v-for="item, index  in fakeArticle.filter((a) => a._score < 8 )" />
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
    <Partenaire />
  </div>

  <div class="fin-newletter">
    <NewletterAction />
  </div>
</template>

