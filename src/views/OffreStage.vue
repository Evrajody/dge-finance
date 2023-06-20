<script setup>
import { ref } from 'vue';
import PageBanner from '../components/partials/PageBanner.vue';
import stageFormOne from '../components/partials/stageInscription/stageFormOne.vue';
import ContactForm from '../components/partials/ContactForm.vue';

const mission = ref([

   { content: `D’un encadrant` },
   { content: `D’un accueil et d’une aide pour atteindre vos objectifs` },
   { content: `D’une aide à l’acquisition des compétences professionnelles` }

])

</script>


<template>
   <PageBanner title="Offre de Stage" />

   <div class="row container mx-auto relative mt-20 overflow-hidden">

      <div class="text-finance-plot leading-normal font-medium py-5 px-6 text-justify">
         La DGAE vous accueille afin de contribuer à votre formation. Elle souhaite que votre stage vous
         soit bénéfique et que votre insertion dans ses équipes soit la meilleure possible. Aussi, votre
         statut de stagiaire vous offre-t-il des droits. Il crée aussi des devoirs à la direction.
      </div>

      <div class="w-full gap-8 grid grid-cols-1 md:grid-cols-2 px-3 md:px-5">

         <div class="">
            <div class="row container mx-auto">

               <div class="bg-finance-blue rounded-none sm:rounded-lg px-5 sm:px-6 py-4 w-full">

                  <div class=" text-sm md:text-lg text-white font-semibold leading-normal">

                     <div class="">Vous bénéficiez :</div>
                  </div>
               </div>
            </div>

            <div class="mb-20">

               <div class="container mx-auto">

                  <div class="flex justify-start">

                     <section class="bg-white w-full">

                        <article class="" v-for="item in mission">
                           <div class="h-full transition relative mission-item">
                              <header
                                 class="bg-white flex-col sm:flex-row sm:items-center p-5 px-8  cursor-pointer hover:bg-finance-gray transition">
                                 <span class="text-indigo text-sm text-finance-plot text-justify font-medium text-md">
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
               <div class="row text-center px-5 sm:px-6 py-4 rounded-none sm:rounded-lg bg-finance-blue text-white">
                  <h3>Formulaire d'Inscription au Stage</h3>
               </div>
               <p class="text-red-600 text-xs px-5 mt-4">
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