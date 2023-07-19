<script setup>
import { ref } from 'vue';
import PageBanner from '../components/partials/PageBanner.vue';
import OcticonQuote from '../components/icons/OcticonQuote.vue';
import { useTitle } from '@vueuse/core';

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

const title = useTitle("DGE | Mission");


</script>


<template>
  <main class="">

    <PageBanner title="Mission" />


    <div class="container relative mx-auto mt-20 row" data-aos="fade-up" data-aos-anchor-placement="top-bottom">

      <div class="grid absolute -left-7 -top-12 place-items-center w-20 h-20 rounded-full md:-left-5 md:-top-6 bg-finance-gray">
        <OcticonQuote />
      </div>

      <div class="py-10 px-5 w-full rounded-none sm:px-12 sm:rounded-lg bg-finance-blue">
        <span class="text-sm font-semibold leading-normal text-white md:text-lg">
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




</main>

</template>

<style >
 /* .mission-item::before{
  content: "";
  width: 15px;
  height: 50%;
  position: absolute;
  border-left: 2.5px solid #0E406E;

  border-bottom-left-radius: 4px;
 } */
 
 .mission-item::after{
  content: "";
  background-image: url(https://api.iconify.design/octicon:goal-24.svg);
  background-repeat: no-repeat;
  position: absolute;
  background-size: 25%;
  left: -2px;
  bottom: 2px;
  width: 80px;
  height: 60%;

 }

</style>