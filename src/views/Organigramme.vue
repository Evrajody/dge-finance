
<script setup>

import { ref } from "vue";
import PageBanner from "../components/partials/PageBanner.vue";
import IcOutlineFileDownload from "../assets/images/IcOutlineFileDownload.vue";
import organigramme from "../assets/images/organigramme.pdf";

const sigles = ref([
  {
    abbr: "DGE",
    definition: "Directeur Général de l’Économie;"
  },

  {
    abbr: "DGAE",
    definition: "Directeur Général Adjoint de l’Économie;"
  },


  {
    abbr: "SP/DGE",
    definition: "Secrétariat Particulier du Directeur Général de l’Économie;"
  },

  {
    abbr: "SA/DGE",
    definition: "Secrétariat Administratif du Directeur Général de l’Économie;"
  },

  {
    abbr: "DGAE",
    definition: "Directeur Général Adjoint de l’Économie;"
  },

  {
    abbr: "DIER",
    definition: "Direction de l’Intégration Économique Régionale;"
  },

  {
    abbr: "DSPSSEL",
    definition: "Direction du Suivi des Politiques Sectorielles, Sociales et des Économies Locales;"
  },

  {
    abbr: "DPC",
    definition: "Direction de la Prévision et de la Conjoncture;"
  },

  {
    abbr: "DPCE",
    definition: "Direction de la Promotion et de la Coopération Economiques;"
  },

  {
    abbr: "DRES",
    definition: "Direction de la Recherche et des Études Stratégiques;"
  },

  {
    abbr: "DGR",
    definition: "Direction de la Gestion des Ressources;"
  },
  {
    abbr: "SES",
    definition: "Service des Études Stratégiques;"
  },
  {
    abbr: "SMR",
    definition: "Service de la Modélisation et de la Recherche;"
  },

  {
    abbr: "SSAPS",
    definition: "Service de Suivi et d’Analyse des Performances Sectorielles;"
  },

  {
    abbr: "SSPEL",
    definition: "Service de Suivi des politiques Économiques Locales;"
  },

  {
    abbr: "SSPS",
    definition: "Service de Suivi des Politiques Sociales;"
  },

  {
    abbr: "SPSC",
    definition: "Service des Politiques Sectorielles Communautaires;"
  },

  {
    abbr: "SEC",
    definition: "Service des Échanges Commerciaux;"
  },
  {
    abbr: "SSIC",
    definition: "Service de Suivi des Institutions Communautaires;"
  },

  {
    abbr: "SRH",
    definition: "Service des Ressources Humaines"
  },
  {
    abbr: "SRFM",
    definition: "Service des Ressources Financières et du Matériel;"
  },
  {
    abbr: "SSI",
    definition: "Services des Systèmes de l’Information;"
  },
  {
    abbr: "SPEF",
    definition: "Service de la Programmation Économique et Financière;"
  },
  {
    abbr: "SSBAC",
    definition: "Service du Suivi Budgétaire et de l’Analyse Conjoncturelle;"
  },
  {
    abbr: "SSSSM",
    definition: "Service des Statistiques et du Suivi de la Surveillance Multilatérale;"
  },
  {
    abbr: "SSASP",
    definition: "Service du Suivi et d’Accompagnement du Secteur Privé;"
  },
  {
    abbr: "SRSAI",
    definition: "Service de la Réglementation et du Suivi des Accords Internationaux;"
  },
  {
    abbr: "SAPE",
    definition: "Service des Actions de Promotion Économique;"
  }
])

const orgData = ref({
  label: 'DGE',
  expand: false,
  some_id: 1,
  children: [
    {
      label: 'DGAE',
      key: '1_1',
      children: [
        {
          label: 'DPC',
          key: 2,
          children: [
            {
              label: 'SPEC',
              key: '2_1',
            },
            {
              label: 'SSBAC',
              key: '2_2',
            },
            {
              label: 'SSSSM',
              key: '2_2',
            }
          ]
        },
        {
          label: 'DRES',
          key: 2,
          children: [
            {
              label: 'SIEAR',
              key: '2_1',
            },
            {
              label: 'SES',
              key: '2_2',
            },
            {
              label: 'SMR',
              key: '2_2',
            }
          ]
        },
        {
          label: 'DSPSSEL',
          key: 2,
          children: [
            {
              label: 'SSAPS',
              key: '2_1',
            },
            {
              label: 'SSPS',
              key: '2_2',
            },
            {
              label: 'SSPEL',
              key: '2_2',
            }
          ]
        },
        {
          label: 'DPCE',
          key: 2,
          children: [
            {
              label: 'SSAPS',
              key: '2_1',
            },
            {
              label: 'SRSAI',
              key: '2_2',
            },
            {
              label: 'SAPE',
              key: '2_2',
            }
          ]
        },
        {
          label: 'DIER',
          key: 2,
          children: [
            {
              label: 'SPSC',
              key: '2_1',
            },
            {
              label: 'SEC',
              key: '2_2',
            },
            {
              label: 'SSIC',
              key: '2_2',
            }
          ]
        },
        {
          label: 'DGR',
          key: 2,
          children: [
            {
              label: 'SRH',
              key: '2_1',
            },
            {
              label: 'SRFM',
              key: '2_2',
            },
            {
              label: 'SIA',
              key: '2_2',
            }
          ]
        },

      ]
    }
  ]
})



</script>

<template>
  <main class="overflow-hidden ">

    <PageBanner title="Organigramme" />

    <div class="mx-auto container">
      <div class="flex flex-col items-center justify-center py-28">
        
        <div class="card w-full grid place-content-center ">
          <img src="@/assets/images/organigramme.png"  class="" alt="" srcset="">
        </div>

        <div class=" grid place-content-center pb-3 w-full rounded">
           <a download :href="organigramme" class="bg-finance-blue items-center font-medium rounded flex gap-3 text-white p-3">
              <IcOutlineFileDownload/>
              <span class="text-sm">Télecharger l'organigramme</span>
           </a>
        </div>

    
        <div class="organigramme-legend h-full bg-finance-gray w-full mt-8 lg:mt-0 py-4 px-5 rounded">

          <h3 class="text-lg lg:text-2xl font-semibold text-finance-blue "> Légendes </h3>

          <div class="w-full h-0.5 my-3 bg-finance-blue"></div>

          <div class="legends-item">
            <ol class="gradient-list" v-for="item in sigles">
              <li class="flex items-center gap-4 lg:gap-5">
                <span class="w-36 text-xs items-stretch sm:text-sm md:text-lg font-medium text-white mask py-2 px-5"> {{ item.abbr }}
                </span>
                <span class="flex-1 font-medium text-xs sm:text-sm md:text-lg leading-normal text-finance-late"> {{ item.definition }} </span>
              </li>
            </ol>
          </div>

          <hr>

        </div>

      </div>
    </div>


  </main>
</template>

<style>
ol.gradient-list {
  list-style: none;
  margin: 1rem 0;

}

ol.gradient-list>li {
  background: white;
  border-radius: 0 0.5rem 0.5rem 0.5rem;
  /* margin-top: 1rem;
  min-height: 3rem; */
  /* padding: 1rem 1rem 1rem 3rem; */
  position: relative;
}

/* ol.gradient-list > span {
  background: linear-gradient(135deg, #83e4e2 0%, #a2ed56 100%);
  border-radius: 1rem 1rem 0 1rem;
  content: "";
  height: 3rem;
  left: -1rem;
  overflow: hidden;
  position: absolute;
  top: -1rem;
  width: 3rem;
}
ol.gradient-list > li::before {
  align-items: flex-end;
  content: "counter(gradient-counter)";
  color: #1d1f20;
  display: flex;
  font: 900 1.5em/1 "Montserrat";
  justify-content: flex-end;
  padding: 0.125em 0.25em;
  z-index: 1;
} */
</style>

