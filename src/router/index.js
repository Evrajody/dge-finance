import { createRouter, createWebHistory } from 'vue-router'
import DgfAcceuil from '../views/DgfAcceuil.vue'
import ArticleDetail from '../views/ArticleDetail.vue'
import Mission from '../views/Mission.vue'
import Accualite from '../views/Actualite.vue'
import ComingSoon from '../views/ComingSoon.vue'
import Organigramme from '../views/Organigramme.vue'
import AnciensDirecteur from '../views/AnciensDirecteur.vue'
import Directions from '../views/Directions.vue'
import Jseb from '../views/Jseb.vue'
import OffreStage from "../views/OffreStage.vue";
import DocumentsBudgetaires from "../views/DocumentsBudgetaires.vue";
import DocumentsPolitiques from "../views/DocumentsPolitiques.vue";
import DocumentsTravail from "../views/DocumentsTravail.vue";
import Rapef from "../views/Rapef.vue";
import InfraAnnuel from "../views/InfraAnnuel.vue"
import Contact from '../views/Contact.vue';
import ContactDirecteur from '../views/ContactDirecteur.vue';
import DirectionDetails from '../views/DirectionDetails.vue'
import AppelCandidature from '../views/AppelCandidature.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: DgfAcceuil,
    },

    {
      path: "/articles",
      name: "articles",
      component: ArticleDetail,
    },
    {
      path: "/contact",
      name: "detail",
      component: Contact,
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

    // {
    //   path: "/direction-recherche-etudes-strategiques",
    //   name: "direction-recherche-etudes-strategiques",
    //   meta: { directionIndex: 6 },
    //   component: DirectionDetails,
    // },

    {
      path: "/direction-gestion-ressources",
      name: "direction-gestion-ressources",
      meta: { directionIndex: 7 },
      component: DirectionDetails,
    },

    {
      path: "/presentation",
      name: "presentation",
      children: [
        {
          path: "actualites",
          name: "actualites",
          component: Accualite,
        },

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
      path: "/publications",
      name: "publications",
      children: [
        {
          path: "documents-budgetaires",
          name: "documents-budgetaires",
          component: DocumentsBudgetaires,
        },

        {
          path: "documents-politiques-nationales",
          name: "dpn",
          component: DocumentsPolitiques,
        },

        {
          path: "documents-de-travail",
          name: "documents-de-travail",
          component: DocumentsTravail,
        },

        {
          path: "infra-annuels",
          name: "infra-annuel",
          component: InfraAnnuel,
        },

        {
          path: "rapef",
          name: "rapef",
          component: Rapef,
        },
      ],
    },

    {
      path: "/seminaire-conference",
      name: "seminaire-conference",
      children: [
        {
          path: 'jseb',
          name: 'jseb',
          component: Jseb,
        },
      ],
    },


    {
      path: "/:pathMatch(.*)*",
      name: "ComingSoon",
      component: ComingSoon,
    },

    {
      path: "/opportunites",
      name: "opportunites",
      children: [
        {
          path: "offre-de-stage",
          name: "offre-de-stage",
          component: OffreStage,
        },

        {
          path: "appel-a-candidature",
          name: "appel-a-candidature",
          component: AppelCandidature,
        },
      ],
    },

    {
      path: "/contact",
      name: "contact",
      component: ContactDirecteur,
      children: [
        {
          path: "ecrire-dg",
          name: "contact-directeur",
          component: ContactDirecteur,
        },
      ],
    },
  ],
});

export default router;
