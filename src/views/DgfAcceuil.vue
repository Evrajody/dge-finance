<script setup>

import Sliders from '../components/partials/Sliders.vue'
import SectionTitle from '../components/partials/SectionTitle.vue'
import FlashInfos from '../components/partials/FlashInfos.vue';
import NewletterAction from '../components/partials/NewletterAction.vue';
import ArticleBox from '../components/partials/ArticleBox.vue';
import Partenaire from '../components/partials/Partenaire.vue';
import { fakeArticle } from '../data/article'
import Mesure from '../components/partials/Mesure.vue';
import { reactive } from 'vue';


const indicateursCle = reactive([
  {
    label: "Taux de croissance 2021",
    valeur: "7.2%",
    opacity: 75,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 3.5h4v4"/><path d="M13.5 3.5L7.85 9.15a.5.5 0 0 1-.7 0l-2.3-2.3a.5.5 0 0 0-.7 0L.5 10.5"/></g></svg>`
  },

  {
    label: "Taux d'inflation 2021",
    valeur: "1.7%",
    opacity: 80,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m1.24 6.54l11.5-5.23M10.59.5l2.15.81l-.8 2.15m1.31 10.05h-2.5h0v-7a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 .5.5v7h0Zm-5 0h-2.5h0v-5.5a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 .5.5v5.5h0Zm-5 0H.75h0v-4a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 .5.5v4h0Z"/></svg>`
  },

  {
    label: "Déficit budgétaire du PIB 2021",
    valeur: "5.7%",
    opacity: 90,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect width="13" height="7" x=".5" y="6.5" rx="1"/><path d="M3.5 2v2M7 .5V4m3.5-2v2"/><circle cx="7" cy="10" r="1.5"/></g></svg>`
  },
  {
    label: "Taux d’endettement du PIB 2021",
    valeur: "49.7%",
    opacity: 100,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7.5v-2a1 1 0 0 0-1-1H1.5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1H11a1 1 0 0 0 1-1V10M3.84 2L9.51.52a.49.49 0 0 1 .61.36L10.4 2"/><rect width="3.5" height="2.5" x="10" y="7.5" rx=".5"/></g></svg>`
  },
])


</script>


<template>
  <!-- ENVISAGER UN RETRAIT DU SLIDER -->

  <div class="hidden fin-slider">
    <Sliders />
  </div>

  <div class="fin-stats-sliders">
    <div class="h-full bg-opacity-80 bg-finance-blue bg-blend-darken xl:h-[500px]">

      <div class="flex flex-col-reverse mx-auto xl:flex-row">

        <div class="pt-4 w-full bg-opacity-30 stat bg-finance-blue">
          <h2 class="p-3 text-2xl font-bold text-white">Nos indicateurs clés</h2>

          <div class="flex flex-col py-3 px-3 space-y-4">

            <article v-for="i, index in indicateursCle" class="flex gap-4 items-center py-4 px-2 bg-white">
              <span class="p-3 font-semibold bg-blue-100 rounded-full text-finance-blue" v-html="i.icon">
              </span>

              <div>
                <p class="text-sm text-finance-plot"> {{ i.label }} </p>
                <p class="text-2xl font-semibold text-finance-plot"> {{ i.valeur }} </p>
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

  <div class="hidden overflow-x-hidden fin-stats">

    <div class="flex -mx-3">

      <article v-for="i, index in indicateursCle" :class="`bg-opacity-${i.opacity}`"
        class="flex flex-1 justify-center items-center py-4 px-5 space-x-4 -skew-x-12 bg-finance-blue">
        <span class="grid place-items-center w-16 h-16 text-blue-600 bg-white rounded-full skew-x-12">
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

  <div class="fin-mesure">
    <Mesure />
  </div>


  <div class="fin-section">
    <SectionTitle title="Nos Actualités" />
  </div>

  <div class="fin-actualites bg-finance-gray">
    <div
      class="grid grid-cols-1 gap-8 items-center place-items-center py-5 px-4 mx-auto w-full sm:container md:grid-cols-2 lg:grid-cols-3">
      <ArticleBox :article="item" v-for="item, index  in fakeArticle.filter((a) => a._score < 8)" />
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

