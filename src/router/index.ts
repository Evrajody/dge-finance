import { createRouter, createWebHistory } from 'vue-router'
import ComingSoon from '../pages/ComingSoon.vue'
import Index from '../pages/Index.vue'
import Actualites from '../pages/Actualites.vue'
import Directions from '../pages/Directions.vue'

import Mission from '../pages/Mission.vue'

import DirectionDetails from '../pages/DirectionDetails.vue'
import AnciensDirecteur from '../pages/AnciensDirecteur.vue'
import Organigramme from "../pages/Organigramme.vue";
import DocumentsBudgetaires from "../pages/DocumentsBudgetaires.vue";
import DocumentsPolitiques from "../pages/DocumentsPolitiques.vue";
import DocumentsTravail from "../pages/DocumentsTravail.vue";
import InfraAnnuel from "../pages/InfraAnnuel.vue";
import Jseb from "../pages/Jseb.vue";

import Contact from '../pages/Contact.vue';
import ContactDirecteur from '../pages/ContactDirecteur.vue';
import AppelCandidature from '../pages/AppelCandidature.vue';
import Postulation from '../pages/Postulation.vue';
import ArticleDetail from '../pages/ArticleDetail.vue';

// LIST OF ROUTES

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: "/:pathMatch(.*)*",
      name: "ComingSoon",
      component: ComingSoon,
    },

    {
      path: "/",
      name: "home",
      component: Index,
    },


    {
      path: "/articles",
      name: "articles",
      component: ArticleDetail,
    },

    {
      path: "/postuler",
      name: "postuler",
      component: Postulation,
    },

    {
      path: "/actualites",
      name: "actualites",
      component: Actualites,
    },

    {
      path: "/presentation",
      name: "presentation",
      children: [

        {
          path: "mission",
          name: "mission",
          component: Mission,
        },

        {
          path: "organigramme",
          name: "organigramme",
          component: Organigramme,
        },

        {
          path: "anciens-directeurs",
          name: "anciens-directeurs",
          component: AnciensDirecteur,
        },

        {
          path: "directions",
          name: "directions",
          component: Directions,
        },
      ],
    },


    {
      path: "/directeur-general",
      name: "detail-direction",
      meta: { directionIndex: 0 }, 
      component: DirectionDetails,
    },

    {
      path: "/directeur-general-adjoint",
      name: "directeur-general-adjoint",
      meta: { directionIndex: 1 },
      component: DirectionDetails,
    },

    {
      path: "/direction-integration-economique-regional",
      name: "direction-integration-economique-regional",
      meta: { directionIndex: 2 },
      component: DirectionDetails,
    },

    {
      path: "/direction-prevision-conjoncture",
      name: "direction-prevision-conjoncture",
      meta: { directionIndex: 3 },
      component: DirectionDetails,
    },

    {
      path: "/direction-spssel",
      name: "direction-spssel",
      meta: { directionIndex: 4 },
      component: DirectionDetails,
    },

    {
      path: "/direction-promotion-coop-economique",
      name: "direction-promotion-coop-economique",
      meta: { directionIndex: 5 },
      component: DirectionDetails,
    },

    {
      path: "/publications",
      name: "publications",
      // component: ComingSoon,
      children: [
        {
          path: "documents-budgetaires",
          name: "documents-budgetaires",
          component: DocumentsBudgetaires,
        },

        {
          path: "documents-politiques-nationales",
          name: "documents-politiques-nationales",
          component: DocumentsPolitiques,
        },

        {
          path: "documents-de-travail",
          name: "documents-travail",
          component: DocumentsTravail,
        },

      ],
    },

    {
      path: "/seminaires-conferences",
      name: "seminaires-conferences",
      children: [
        {
          path: 'jseb',
          name: 'jseb',
          component: AppelCandidature,
        },
      ],
    },

    {
      path: "/rapef",
      name: "rapef",
      component: ComingSoon,
      children: [
        {
          path: "candidature",
          name: "candidature",
          component: AppelCandidature,
        },

        {
          path: "documents",
          name: "documents",
          component: Actualites,
        },
      ],
    },

    {
      path: "/contact",
      name: "contact",
      children: [
        {
          path: "ecrire-dg",
          name: "ecrire",
          component: ContactDirecteur,
        },

        {
          path: "contactez-nous",
          name: "contactez-nous",
          component: Contact,
        },
      ],
    },

  ]
})

export default router 
