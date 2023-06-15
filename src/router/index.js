import { createRouter, createWebHistory } from "vue-router";
import DgfAcceuil from "../views/DgfAcceuil.vue";
import ArticleDetail from "../views/ArticleDetail.vue";
import Mission from "../views/Mission.vue";
import Accualite from "../views/Actualite.vue";
import ComingSoon from "../views/ComingSoon.vue";
import Organigramme from "../views/Organigramme.vue";
import AnciensDirecteur from "../views/AnciensDirecteur.vue";
import Direction from "../views/Direction.vue";
import OffreStage from "../views/OffreStage.vue";

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
          component: Direction,
        },
      ],
    },

    {
      path: "/publication",
      name: "publication",
      children: [
        {
          path: "documents-budgetaires",
          name: "documents-budgetaires",
          component: Accualite,
        },

        {
          path: "documents-politique-nationale",
          name: "dpn",
          component: Mission,
        },

        {
          path: "documents-travails",
          name: "documents-travails",
          component: Mission,
        },

        {
          path: "infra-annuels",
          name: "infra-annuel",
          component: Mission,
        },

        {
          path: "rapef",
          name: "rapef",
          component: Mission,
        },
      ],
    },

    {
      path: "/seminaire-conference",
      name: "seminaire-conference",
      children: [
        {
          path: "jseb",
          name: "jseb",
          component: Accualite,
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
  ],
});

export default router;
