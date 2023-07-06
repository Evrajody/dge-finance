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

  <div class="fin-slider hidden">
    <Sliders />
  </div>

  <div class="fin-stats-sliders">
    <div class="bg-finance-blue bg-opacity-80 bg-blend-darken h-[500px]">

      <div class="flex mx-auto">

        <div class="stat bg-finance-blue bg-opacity-30 pt-4 w-full">
          <h2 class="text-2xl font-bold text-white p-3">Nos indicateurs clés</h2>

          <div class="flex space-y-4 flex-col py-3 px-3">

            <article v-for="i, index in indicateursCle" class="flex items-center gap-4 px-2 py-4 bg-white">
              <span class="rounded-full bg-blue-100 p-3 text-finance-blue font-semibold" v-html="i.icon"> 
              </span>

              <div>
                <p class="text-sm text-finance-plot"> {{ i.label }} </p>
                <p class="text-2xl font-semibold text-finance-plot"> {{ i.valeur }} </p>
              </div>
            </article>

          </div>

        </div>

        <div class="w-3/4 bg-green-800  h-full">
          <Sliders />
        </div>

      </div>

    </div>


  </div>

  <div class="fin-stats hidden overflow-x-hidden">

    <div class="flex -mx-3">

      <article v-for="i, index in indicateursCle" :class="`bg-opacity-${i.opacity}`"
        class=" flex items-center justify-center bg-finance-blue -skew-x-12 flex-1 space-x-4 px-5 py-4">
        <span class="rounded-full grid place-items-center skew-x-12 bg-white w-16 h-16 text-blue-600">
          <p class="text-md font-semibold">{{ i.valeur }}</p>
        </span>

        <div class="skew-x-12">
          <p class="text-sm text-white font-medium">{{ i.label }}</p>
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

