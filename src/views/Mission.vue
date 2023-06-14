<script setup>
import { ref } from 'vue';
import OcticonGoal16 from '../components/icons/OcticonGoal16.vue';
import PageBanner from '../components/partials/PageBanner.vue';

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


    <div class="row">


    </div>


    <div class="container mx-auto">

      <div class="flex justify-center  my-10">

        <section class="shadow bg-white w-full sm:w-[80%]">

          <article class="border-b" v-for="item in mission">
            <div class="border-l-2 hover:border-finance-blue transition">
              <header
                class="flex flex-col sm:flex-row sm:items-center gap-3 items-start p-5 px-8 cursor-pointer select-none">
                <div
                  class="rounded-full text-finance-blue  border border-indigo w-7 h-7 flex items-center justify-center bg-indigo">
                  <OcticonGoal16 />
                </div>
                <span class="text-indigo text-justify font-medium text-md leading-normal">
                  {{ item.content }}
                </span>
              </header>

            </div>
          </article>

        </section>

      </div>

    </div>


  </main>
</template>