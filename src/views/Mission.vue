<script setup>
import { ref } from 'vue';
import OcticonGoal16 from '../components/icons/OcticonGoal16.vue';
import PageBanner from '../components/partials/PageBanner.vue';
import OcticonQuote from '../components/icons/OcticonQuote.vue';

const mission = ref([

  { content: `de proposer au gouvernement les mesures de politique économique à court et moyen termes, d’évaluer leurs effets sur les principales variables macroéconomiques et monétaires et de suivre leur mise en c:euvre ;` },
  { content: `d’élaborer des rapports périodiques sur la conjoncture économique ainsi que des informations prévisionnelles sur !’évolution économique et financière du Benin ;` },
  { content: `d’assurer !’analyse des implications à court terme des politiques socio­ économiques et sectorielles ` },
  { content: `de faire de la recherche et exploiter les données statistiques y relatives en vue d’une meilleure connaissance de la situation économique, financière et sociale du Benin;` },
  { content: `de suivre !’évolution du secteur prive en procédant spécifiquement à des analyses de son PIB et de sa structure ;` },
  { content: `d’assurer les fonctions d’antenne nationale de la Communauté Economique des Etats de l’Afrique de l’Ouest, de !’Union Economique et Monétaire  Ouest Africaine et de tous les autres organismes  d’intégration régionale, d’une part, et de celles de courroie de transmission entre leurs organes exécutifs et les administrations de la République du Benin, d’autre part ;` },
  { content: `de définir et de mettre en c:euvre des actions requ1ses en vue de tirer les avantages liés à l’appartenance du Benin aux organismes d’intégration` },
  { content: `de mener des réflexions sur les voies et moyens pour accélérer le processus d’intégration économique régionale ;` },
  { content: `d’analyser les répercussions des activités des différents secteurs de la vie économique sur les actions, projets et programmes communautaires et vice­ versa;` },
  { content: `d’assurer la surveillance multilatérale des politiques économiques pour le compte des institutions régionales notamment de l’UEMOA et de la CEDEAO ;` },

])

</script>


<template>
  <main class="min-h-screen">

    <PageBanner title="Mission" />


    <div class="row container mx-auto relative mt-20">

      <div
        class="absolute md:-top-6 -top-12 -left-7 md:-left-5 grid place-items-center h-20 w-20 bg-finance-gray rounded-full">
        <OcticonQuote />
      </div>

      <div class="bg-gray-900 rounded-none sm:rounded-lg px-5 sm:px-12 py-10 w-full">
        <span class=" text-sm md:text-lg text-white font-semibold leading-normal">
          Conformément aux dispositions de l’article n°24 du décret n° 2021-757 du 09 juin 2021 portant attributions,
          organisation et fonctionnement du Ministère de l’Economie et des Finances , la Direction Générale de l’Economie
          (DGE) est chargée :
        </span>
      </div>

    </div>


    <div class="mb-20">
      <div class="container mx-auto">
  
        <div class="flex justify-center">
  
          <section class="bg-white w-full sm:w-[80%]">
  
            <article class="" v-for="item in mission">
              <div class="h-full transition relative mission-item">
  
                <header
                  class="bg-white flex-col sm:flex-row sm:items-center p-5 px-8 cursor-pointer hover:bg-finance-gray transition">
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




</main>

</template>

<style>
 .mission-item::before{
  content: "";
  width: 15px;
  height: 50%;
  position: absolute;
  border-left: 2.5px solid rgb(17, 26, 39);
  border-bottom: 2.5px solid rgb(17, 26, 39);
  border-bottom-left-radius: 4px;
 }

 .mission-item::after{
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 15px;
  height: 52%;
  border-left: 2.5px solid rgb(17, 26, 39);
 }

 .mission-item:first {
  background-color: red;
 }

</style>