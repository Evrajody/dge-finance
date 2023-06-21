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
      name: "detail",
      component: ArticleDetail,
    },

    {
      path: "/direction-details",
      name: "detail-direction",
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
      path: "/opportunites",
      name: "opportunites",
      children: [
        {
          path: "offre-stage",
          name: "offre-stage",
          component: Accualite,
        },

        {
          path: "appel-candidature",
          name: "appel-candidature",
          component: Accualite,
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
          component: Mission,
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
