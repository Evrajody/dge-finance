
<script setup>

  import $ from 'jquery'
  import orgchart from 'orgchart'
  import 'orgchart/dist/css/jquery.orgchart.min.css'
  import { computed, onMounted, ref } from "vue";
  import PageBanner from "../components/partials/PageBanner.vue";
  import { useTitle } from '@vueuse/core';

  var nodeTemplate = function (data) {
    return `
          <div class="relative z-10 content group" id="${data.sigle}">
            ${data.sigle}
            <div class="hidden absolute -bottom-6 z-50 px-3 w-max detail bg-finance-gray text-finance-blue"> 
              ${data.definition}
            </div>
          </div>
        `;
  };
  const title = useTitle("DGE | Organigramme");

const organigrammeDge = ref({
  sigle: 'DGE', 
  definition: 'Directeur Général de l’Économie',
  children: [
    {
      sigle: 'DGAE',
      hasConseille: true,
      definition: 'Directeur Général Adjoint de l’Économie',
      children: [
        // {
        //   sigle: 'Conseillers/DGE',
        //   definition: 'Conseiller du Directeur Général de l’Économie;',
        // },

        // {
        //   sigle: 'SP/DGE',
        //   definition: 'Secrétariat Particulier du Directeur Général de l’Économie;',
        // },
        {
          sigle: "DPC",
          definition: "Direction de la Prévision et de la Conjoncture",
          children: [
            {
              sigle: 'SPEF',
              definition: 'Service de la Programmation Économique et Financière',
              key: '2_1',

            },
            {
              sigle: 'SSBAC',
              definition: "Service du Suivi Budgétaire et de l’Analyse Conjoncturelle",
              key: '2_2',
            },
            {
              sigle: 'SSSSM',
              definition: "Service des Statistiques et du Suivi de la Surveillance Multilatérale",
              key: '2_2',
            }
          ]
        },
        {
          sigle: "DRES",
          definition: "Direction de la Recherche et des Études Stratégiques",

          children: [
            {
              sigle: 'SIEAR',
              definition: 'Service de l’Intelligence Économique et de l’Analyse des Risques',
              key: '2_1',
            },
            {
              sigle: 'SES',
              definition: 'Service des Études Stratégiques',
              key: '2_2',
            },
            {
              sigle: 'SMR',
              definition: "Service de la Modélisation et de la Recherche",
              key: '2_2',
            }
          ]
        },

        {
          sigle: "DSPSSEL",
          definition: "Direction du Suivi des Politiques Sectorielles, Sociales et des Économies Locales",
          children: [
            {
              sigle: 'SSAPS',
              definition: 'Service de Suivi et d’Analyse des Performances Sectorielles',
              key: '2_1',
            },
            {
              sigle: 'SSPS',
              definition: 'Service de Suivi des Politiques Sociales',
              key: '2_2',
            },
            {
              sigle: 'SSPEL',
              definition: 'Service de Suivi des Politiques Économiques Locales',
              key: '2_2',
            }
          ]
        },
        {
          sigle: "DPCE",
          definition: "Direction de la Promotion et de la Coopération Economiques",

          children: [
            {
              sigle: 'SSASP',
              definition: 'Service du Suivi et d’Accompagnement du Secteur Privé',
              key: '2_1',
            },
            {
              sigle: 'SRSAI',
              definition: 'Service de la Réglementation et du Suivi des Accords Internationaux',
              key: '2_2',
            },
            {
              sigle: 'SAPE',
              definition: 'Service des Actions de Promotion Économique',
              key: '2_2',
            }
          ]
        },

        {
          sigle: "DIER",
          definition: "Direction de l’Intégration Économique Régionale",

          children: [
            {
              sigle: 'SPSC',
              definition: 'Service des Politiques Sectorielles Communautaires',
              key: '2_1',
            },
            {
              sigle: 'SEC',
              definition: 'Service des Échanges Commerciaux',
              key: '2_2',
            },
            {
              sigle: 'SSIC',
              definition: 'Service de Suivi des Institutions Communautaires',
              key: '2_2',
            }
          ]

        },


        {
          sigle: "DGR",
          definition: "Direction de la Gestion des Ressources",

          children: [
            {
              sigle: 'SRH',
              definition: 'Service des Ressources Humaines',
              key: '2_1',
            },
            {
              sigle: 'SRFM',
              definition: 'Service des Ressources Financières et du Matériel',
              key: '2_2',
            },
            {
              sigle: 'SSI',
              definition: 'Service Systèmes d’Information',
              key: '2_2',
            }
          ]
        },

        // {
        //   sigle: 'SA/DGE',
        //   definition: 'Secrétariat Administratif du Directeur Général de l’Économie;',
        // },


        // {
        //   sigle: 'Assistant/DGE',
        //   definition: 'Assistant du Directeur Général de l’Économie;',
        // },
      ]
    },
  ]


})


onMounted(() => {


  $('#organigramme').orgchart({
    'data': organigrammeDge.value,
    'verticalLevel': 4,
    'nodeTitle': 'sigle',
    'exportButton': true,
    'nodeTemplate': nodeTemplate,
    'exportButtonName': 'Télécharger l\'organigramme',
    'exportFilename' : 'organigramme-dge-finance',
    // 'toggleSiblingsResp': true,
    // 'zoom': true,
    // 'zoomoutLimit': 0.1,
    // 'zoominLimit': 1,
    'pan': true,
    // 'initCompleted': function () {
    //     $('.orgchart').css('transform','matrix(0.884736, 0, 0, 0.884736, -2, -2) scale(0.85)');
    // },
    'createNode': function (node, data) {

      var conseillerNode = `
          <div class="relative left-44 z-30 conseillers-node content group" id="${data.sigle}">
            Conseillers/DGE
            <div class="hidden absolute -bottom-6 z-30 px-3 w-max detail bg-finance-gray text-finance-blue"> 
              Conseillers du Directeur Général de l’Économie
            </div>
          </div>
        `;

      if (data.hasConseille) {
        node.css({ 

         });

        node.append(conseillerNode)

      }

      if (data.levelOffset) {
        node.css({
          'padding-top': (data.levelOffset * 70) + 'px',
          '--top': (-11 - data.levelOffset * 70) + 'px',
          '--height': (9 + data.levelOffset * 70) + 'px',
          '--top-cross-point': (-13 - data.levelOffset * 70) + 'px',
          '--height-cross-point': (11 + data.levelOffset * 70) + 'px'
        });
      }
    }
  });
})


</script>

<template>
  <main class="">
    <PageBanner title="Organigramme" />

    <div class="container mx-auto" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <div class="flex overflow-hidden flex-col justify-center items-center pb-14">
        <div class="grid place-content-center mt-3" id="organigramme"></div>
      </div>
    </div>

  </main>
</template>

<style>

.orgchart {
  background-image: none;
}

.nodes {
  @apply text-center
}

.orgchart .node {
  box-sizing: border-box;
  display: inline-block;
  position: relative;


  border: 2px dashed transparent;
  text-align: center;
}

.orgchart .node .toggleBtn::before {
  background-color: rgba(68, 157, 68, 0.6);
  position: absolute;
  left: 0;
  bottom: 0;
}

.orgchart .node .toggleBtn:hover::before {
  background-color: #449d44;
}

.oc-export-btn {
  @apply bg-finance-blue items-center font-medium rounded mt-4 flex gap-3 text-sm text-white p-3 
}

.orgchart ul li .node:hover {
  background-color: transparent;
}


.orgchart .node .content {
  border: 1px solid transparent;
  box-sizing: border-box;
  cursor: pointer;
  width: 150px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  height: 50px;
  background-image: linear-gradient(91.18deg, #023E79 0%, #0E6258 100%);
  color: #fff;
  border-radius: 4px ;
}

.content:hover .detail  {
  @apply block transition-all duration-75 !important
}

.conseillers-node::after { 
  content: "";
  position: absolute;
  left: calc(-68% - 1px);
  height: 2px;
  width: 100px;
  background-color: rgba(217,83,79,.8);
}

.orgchart .node:not(:only-child)::after {
  height: 60px !important;
}

</style>
