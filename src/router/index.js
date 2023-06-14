import { createRouter, createWebHistory } from 'vue-router'
import DgfAcceuil from '../views/DgfAcceuil.vue'
import ArticleDetail from '../views/ArticleDetail.vue'
import Mission from '../views/Mission.vue'
import Accualite from '../views/Actualite.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DgfAcceuil
    },

    {
      path: '/articles',
      name: 'detail',
      component: ArticleDetail
    },


    {
      path: '/presentation',
      name: 'presentation',
      children: [
        {
          path: 'actualites',
          name: 'actualites',
          component: Accualite,
        },

        {
          path: 'mission',
          name: 'mission',
          component: Mission
        },

        // {
        //   path: 'organigramme',
        //   name: 'organigamme',
        //   component: Mission
        // },

        // {
        //   path: 'anciens-directeurs',
        //   name: 'anciens-directeurs',
        //   component: Mission
        // },
      ]
    },


    {
      path: '/publication',
      name: 'publication',
      children: [
        {
          path: 'documents-budgetaires',
          name: 'documents-budgetaires',
          component: Accualite,
        },

        {
          path: 'documents-politique-nationale',
          name: 'dpn',
          component: Mission
        },

        {
          path: 'documents-travails',
          name: 'documents-travails',
          component: Mission
        },

        {
          path: 'infra-annuels',
          name: 'infra-annuel',
          component: Mission
        },

        {
          path: 'rapef',
          name: 'rapef',
          component: Mission
        },
      ]
    },

    {
      path: '/seminaire-conference',
      name: 'seminaire-conference',
      children: [
        {
          path: 'jseb',
          name: 'jseb',
          component: Accualite,
        },
      ]
    },


    {
      path: '/opportunites',
      name: 'opportunites',
      children: [
        {
          path: 'offre-stage',
          name: 'offre-stage',
          component: Accualite,
        },

        {
          path: 'appel-candidature',
          name: 'appel-candidature',
          component: Accualite,
        },

      ]
    },


  ]
})

export default router
