<script setup>
import { ref } from 'vue';
import DirecteurBox from '../components/partials/DirecteurBox.vue';
import PageBanner from '../components/partials/PageBanner.vue';


const directeur = ref({
  nom: 'DJOSSOU',
  prenom: 'Justin',
  titre: 'Directeur Général l\'Economie',
  image: "https://www.dge.finances.bj/storage/2022/07/IMG-20220721-WA0055.jpg"
})

const attributions = ref([

  { content: `d’analyser l’évolution de l’environnement des entreprises sur le territoire national et de proposer, au besoin, des solutions correctives ;` },
  { content: `de centraliser et de fournir au secteur privé, les informations nécessaires à la décision d’investir au Bénin et relevant des attributions du Ministère de l’Économie et des Finances ;` },
  { content: `de procéder à l’étude des doléances adressées par les opérateurs économiques au Ministre de l’Économie et des Finances et de formuler des propositions de mesures à lui soumettre ;` },
  { content: `de contribuer à l’élaboration de la stratégie de mobilisation des ressources financières ;` },
  { content: `de suivre le processus de ratification des conventions et traités ;` },
  { content: `d’appeler l’attention du ministre chargé de l’économie et des finances sur les faits susceptibles de perturber l’activité économique ou de ralentir l’investissement privé ;` },
  { content: `d’examiner toutes autres questions relevant du domaine de la réglementation et de l’information économique et de faire par voie hiérarchique, des propositions au Ministre, en liaison avec les autres directions techniques des Ministères compétents ;` },
  { content: `d’organiser et de participer, en relation avec d’autres structures, aux actions de promotion de l’économie béninoise ;` },
  { content: `d’étudier les accords que le Bénin pourrait être amené à signer avec ses partenaires bilatéraux, multilatéraux et autres acteurs non étatiques et de participer au suivi de leur mise en application en collaboration avec les directions techniques des ministères concernés.` },
])

const services = ref([
  { content: 'le Secrétariat ;' },
  { content: 'le Service du Suivi et de l’Accompagnement du Secteur Privé ;' },
  { content: 'le Service de la Réglementation et du Suivi des Accords Internationaux ;' },
  { content: 'le Service des Actions de Promotion Économique.' },
])



</script>

<template>
  <main class="">

    <PageBanner title="Direction des Ressources humaines" />

    <div class="container mx-auto flex flex-col justify-evenly items-center gap-10 lg:items-start lg:flex-row my-20">

      <DirecteurBox :directeur="directeur" />

      <div class="w-full">

        <div class="">
          <div class="bg-finance-blue rounded-none sm:rounded-lg px-5 sm:px-10 py-5 w-full">
            <span class=" text-sm md:text-lg text-white font-semibold leading-normal">
              La Direction de la Promotion et de la Coopération Économiques (DPCE) est chargée :
            </span>
          </div>
          <div class="flex justify-center">

            <section class="bg-white">

              <article class="" v-for="i in attributions">
                <div class="h-full transition relative mission-item">

                  <header
                    class="bg-white flex-col sm:flex-row sm:items-center p-5 px-8 cursor-pointer hover:bg-finance-gray transition">
                    <span class="text-indigo text-sm text-finance-plot text-justify font-medium text-md">
                      {{ i.content }}
                    </span>
                  </header>

                </div>
              </article>

            </section>

          </div>
        </div>

        <div class="mt-5">
          <div class="bg-finance-blue rounded-none sm:rounded-lg px-5 sm:px-10 py-5 w-full">
            <span class=" text-sm md:text-lg text-white font-semibold leading-normal">
              La Direction de la Promotion et de la Coopération Économique comprend :
            </span>
          </div>
          <div class="">

            <section class="bg-white">

              <article class="" v-for="i in services">
                <div class="h-full transition relative mission-item">

                  <header
                    class="bg-white flex-col sm:flex-row sm:items-center p-5 px-8 cursor-pointer hover:bg-finance-gray transition">
                    <span class="text-indigo text-sm text-finance-plot text-justify font-medium text-md">
                      {{ i.content }}
                    </span>
                  </header>

                </div>
              </article>

            </section>

          </div>
        </div>

      </div>

    </div>

  </main>
</template>

