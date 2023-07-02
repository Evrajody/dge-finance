<script setup>
import { ref } from 'vue';
import PageBanner from '../components/partials/PageBanner.vue';
import stageFormOne from '../components/partials/stageInscription/stageFormOne.vue';


const mission = ref([

   { content: `D’un encadrant` },
   { content: `D’un accueil et d’une aide pour atteindre vos objectifs` },
   { content: `D’une aide à l’acquisition des compétences professionnelles` }

])

</script>


<template>
   <PageBanner title="Offre de Stage" />

   <div class="container overflow-hidden relative mx-auto mt-20 row">

      <div class="py-5 px-6 font-medium leading-normal text-justify text-finance-plot">
         La DGAE vous accueille afin de contribuer à votre formation. Elle souhaite que votre stage vous
         soit bénéfique et que votre insertion dans ses équipes soit la meilleure possible. Aussi, votre
         statut de stagiaire vous offre-t-il des droits. Il crée aussi des devoirs à la direction.
      </div>

      <div class="grid grid-cols-1 gap-8 px-3 w-full md:grid-cols-2 md:px-5">

         <div class="">
            <div class="container mx-auto row">

               <div class="py-4 px-5 w-full rounded-none sm:px-6 sm:rounded-lg bg-finance-blue">

                  <div class="text-sm font-semibold leading-normal text-white md:text-lg">

                     <div class="">Vous bénéficiez :</div>
                  </div>
               </div>
            </div>

            <div class="mb-20">

               <div class="container mx-auto">

                  <div class="flex justify-start">

                     <section class="w-full bg-white">

                        <article class="" v-for="item in mission">
                           <div class="relative h-full transition mission-item">
                              <header
                                 class="flex-col p-5 px-8 bg-white transition cursor-pointer sm:flex-row sm:items-center hover:bg-finance-gray">
                                 <span class="text-sm font-medium text-justify text-indigo text-finance-plot text-md">
                                    {{ item.content }}
                                 </span>
                              </header>
                           </div>
                        </article>

                     </section>

                  </div>

               </div>

            </div>
         </div>

         <div class="pb-5">
            <div class="container">
               <div
                  class="py-4 px-5 font-semibold text-center text-white rounded-none sm:px-6 sm:rounded-lg md:text-lg row bg-finance-blue">
                  <h3>Formulaire d'Inscription au Stage</h3>
               </div>
               <p class="mt-4 text-xs text-red-600">
                  * Merci de choisir votre type de stage et de bien vouloir remplir ce formulaire dans son intégralité.
               </p>

               <div class="mt-4">
                  <stageFormOne />
               </div>

            </div>
         </div>

      </div>
   </div>
</template>


<style></style>