<script setup>

import Sliders from '../components/partials/Sliders.vue'
import SectionTitle from '../components/partials/SectionTitle.vue'
import FlashInfos from '../components/partials/FlashInfos.vue';
import NewletterAction from '../components/partials/NewletterAction.vue';
import ArticleBox from '../components/partials/ArticleBox.vue';
import Partenaire from '../components/partials/Partenaire.vue';
import { fakeArticle } from '../data/article'
import Mesure from '../components/partials/Mesure.vue';

</script>


<template>

  <!-- ENVISAGER UN RETRAIT DU SLIDER -->

  <div class="fin-slider">
    <Sliders />
  </div>

  <div class="fin-section">
    <SectionTitle title="Les Mesures Covid 19" />
  </div>

  <div class="fin-mesure">
    <Mesure/>
  </div>


  <div class="fin-section">
    <SectionTitle title="Nos Actualités" />
  </div>

  <div class="fin-actualites bg-finance-gray">
    <div
      class="grid grid-cols-1 gap-8 items-center place-items-center py-5 px-4 mx-auto w-full sm:container md:grid-cols-2 lg:grid-cols-3">
      <ArticleBox :article="item" v-for="item, index  in fakeArticle.filter((a) => a._score < 8 )" />
    </div>
  </div>

  <div class="fin-section">
    <SectionTitle title="Nos Publications" />
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

