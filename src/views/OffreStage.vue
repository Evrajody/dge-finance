<script setup>
import { ref } from 'vue';
import OcticonGoal16 from '../components/icons/OcticonGoal16.vue';
import PageBanner from '../components/partials/PageBanner.vue';
import OcticonQuote from '../components/icons/OcticonQuote.vue';
import Form1 from '../components/partials/stageInscription/form1.vue';

const mission = ref([

   { content: `D’un encadrant` },
   { content: `D’un encadrant` },
   { content: `D’une aide à l’acquisition des compétences professionnelles` }

])

</script>


<template>
   <main class="min-h-screen overflow-hidden">

      <PageBanner title="Offre de Stage" />

      <div class="row container mx-auto relative mt-20 overflow-hidden">
         <div class="w-full gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-8">
            <div class="b1">
               <div class="row container mx-auto mt-10">
                  <div class="bg-gray-900 rounded-none sm:rounded-lg px-5 sm:px-6 py-6 w-full">
                     <div class=" text-sm md:text-sm text-white font-semibold leading-normal text-justify">
                        La DGAE vous accueille afin de contribuer à votre formation. Elle souhaite que votre stage vous
                        soit bénéfique et que votre insertion dans ses équipes soit la meilleure possible. Aussi, votre
                        statut de stagiaire vous offre-t-il des droits. Il crée aussi des devoirs à la direction.
                        <div class="mt-3">Vous bénéficiez :</div>
                     </div>
                  </div>
               </div>

               <div class="mb-20">
                  <div class="container mx-auto">

                     <div class="flex justify-center">

                        <section class="bg-white w-full sm:w-[80%]">

                           <article class="" v-for="item in mission">
                              <div class="h-full transition relative mission-item">
                                 <header
                                    class="bg-white flex-col sm:flex-row sm:items-center p-5 px-8 py-4 cursor-pointer hover:bg-finance-gray transition">
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
            <div class="mt-10">
               <div class="container border">
                  <div class="row text-center py-3 bg-gray-900 text-white">
                     <h3>Formulaire d'Inscription au Stage</h3>
                  </div>
                  <p class="text-red-600 text-xs px-5 mt-4">
                     *Merci de choisir votre type de stage et de bien vouloir remplir ce formulaire dans son intégralité.
                  </p>
                  <form class="w-full p-5">
                     <Form1 />
                  </form>
               </div>
            </div>
         </div>
      </div>



</main></template>