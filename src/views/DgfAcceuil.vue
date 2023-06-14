<script setup>

import InfoBanner from '../components/partials/InfoBanner.vue';
import Navbar from '../components/partials/Navbar.vue';
import Sliders from '../components/partials/Sliders.vue'
import SectionTitle from '../components/partials/SectionTitle.vue'
import FlashInfos from '../components/partials/FlashInfos.vue';
import NewletterAction from '../components/partials/NewletterAction.vue';
import ArticleBox from '../components/partials/ArticleBox.vue';
import Partenaire from '../components/partials/Partenaire.vue';


</script>


<template>
  <div class="fin-slider">
    <Sliders />
  </div>

  <div class="fin-section">
    <SectionTitle title="Nos Actualités" />
  </div>

  <div class="fin-actualites bg-finance-gray py-8">
    <div class="sm:container mx-auto flex flex-col px-3 md:flex-row gap-5">
      <ArticleBox />
      <ArticleBox />
      <ArticleBox />
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

