<script lang="ts" setup>
import Sliders from '@/components/partials/Sliders.vue'
import SectionTitle from '@/components/partials/SectionTitle.vue'
import Mesure from '@/components/partials/Mesure.vue'
import FlashInfos from '@/components/partials/FlashInfos.vue'
import Partenaire from '@/components/partials/Partenaire.vue'
import NewletterAction from '@/components/partials/NewletterAction.vue'

import { useIndicateurCle } from '@/stores/indicateurcle'
import { useArticlesStore } from '@/stores/articles';
import ArticleBox from '@/components/partials/ArticleBox.vue';
import { useTitle } from '@vueuse/core'
const store = useIndicateurCle()
const articleStore = useArticlesStore()
const title = useTitle("DGE | Accueil");

</script>

<template>

  <!-- DEBUT DU SLIDERS -->
  <div class="fin-stats-sliders">
    <div class="h-full bg-opacity-80 bg-finance-gray bg-blend-darken xl:h-[500px]">
      <div class="flex flex-col-reverse 2xl:container mx-auto xl:flex-row">
        <div class="pt-4 w-full bg-opacity-80 stat bg-finance-blue">
          <h2 class="p-3 text-xl md:text-2xl font-bold text-white">Nos indicateurs clés</h2>

          <div class="flex flex-col py-3 px-3 space-y-4">
            <article
              v-for="(i, index) in store.getIndicateurCle"
              class="flex gap-4 items-center py-4 px-2 bg-white">
              <span
                class="p-3 font-semibold bg-blue-100 rounded-full text-finance-blue"
                v-html="i.icon">
              </span>

              <div>
                <p class="text-sm text-finance-plot">{{ i.label }}</p>
               <p class="text-lg md:text-2xl font-semibold text-finance-plot">
                 <vue3-autocounter ref='counter' :startAmount='0' :endAmount='i.valeur' :duration='5' suffix='%' decimalSeparator=',' :decimals='1' :autoinit='true'/>
                </p>
              </div>
            </article>
          </div>
        </div>

        <div class="w-full h-full bg-green-800 xl:w-3/4">
          <Sliders />
        </div>
      </div>
    </div>
  </div>

  <!-- ALTERNATIVE PRESENTATION DES INDICATEURS CLES -->
  <div class="hidden overflow-x-hidden fin-stats">
    <div class="flex -mx-3">
      <article
        v-for="(i, index) in store.getIndicateurCle"
        :class="`bg-opacity-${i.opacity}`"
        class="flex flex-1 justify-center items-center py-4 px-5 space-x-4 -skew-x-12 bg-finance-blue"
      >
        <span class="grid place-items-center w-16 h-16 text-blue-600 bg-white rounded-full skew-x-12"
        >
          <p class="font-semibold text-md">{{ i.valeur }}</p>
        </span>

        <div class="skew-x-12">
          <p class="text-sm font-medium text-white">{{ i.label }}</p>
        </div>
      </article>
    </div>
  </div>

  <div class="fin-section">
    <SectionTitle title="Les Mesures Covid 19" />
  </div>

  <!-- PRESENTATION DES MESURES COVID 19 -->
  <div class="fin-mesure">
    <Mesure />
  </div>

  <div class="fin-section">
    <SectionTitle title="Nos Actualités" />
  </div>

  <!-- PRESENTATION DES ACTUALITES -->

  <div class="fin-actualites bg-finance-gray">
    <div
      class="grid grid-cols-1 gap-8 items-center place-items-center py-5 px-4 mx-auto w-full sm:container md:grid-cols-2 lg:grid-cols-3">
      <ArticleBox :article="item" v-for="item, index  in articleStore.getArticles.filter((a) => a._score < 8)" />
    </div>
  </div>

  <div class="fin-section">
    <SectionTitle title="Nos Publications" />
  </div>

  <!-- PRESENTATION DES PUBLICATION -->

  <div class="flash">
    <FlashInfos />
  </div>

  <div class="fin-section">
    <SectionTitle title="Nos Partenaires" />
  </div>

  <!-- PRESENTATION DES PARTENAIRES -->

  <div class="fin-partenaires">
    <Partenaire />
  </div>

  <div class="fin-newletter">
    <NewletterAction />
  </div>


</template>

<style>
</style>
