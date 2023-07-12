import { defineStore } from 'pinia'
import { reactive } from 'vue'
import router from '../router'

export const useNavigationStore = defineStore('navigation', {
  state: () => ({
    navigation: reactive([
      {
        label: 'Actualités',
        name: 'actualites',
        link: '',
        children: []
      },

      {
        label: 'Présentation',
        name: 'presentation',
        link: '',
        active: true,
        children: [
          {
            label: 'Mission',
            name: 'mission',
            link: '',
            children: []
          },

          {
            label: 'Directions',
            name: 'directions',
            link: '',
            children: []
          },

          {
            label: 'Organigramme',
            name: 'organigramme',
            link: '',
            children: []
          },

          {
            label: 'Anciens Directeurs',
            name: 'anciens-directeurs',
            link: '',
            children: []
          }
        ]
      },

      {
        label: 'Publications',
        name: 'publications',
        customclass: "w-max",
        link: '',
        children: [
          {
            label: 'Documents Budgétaires',
            name: 'documents-budgetaires',
            link: '',
            children: []
          },

          {
            label: 'Documents de Politiques Nationales (DPN)',
            name: 'documents-politiques-nationales',
            link: '',
            children: []
          },

          {
            label: 'Documents de travail',
            name: 'documents-travail',
            link: '',
            children: []
          },

          {
            label: 'Infra Annuels',
            name: 'infra-annuels',
            link: '',
            children: []
          }
        ]
      },

      {
        label: 'Séminaires & Conférences',
        name: 'seminaires-conferences',
        link: '',
        children: [
          {
            label: 'JSEB',
            name: 'jseb',
            link: '',
            children: []
          }
        ]
      },

      {
        label: 'RAPEF',
        name: 'rapef',
        link: '',
        children: [
          {
            label: 'Candidature',
            name: 'candidature',
            link: '',
            children: []
          },

          {
            label: 'Documents',
            name:  'documents',
            link: '',
            children: []
          }
        ]
      },

      {
        label: 'Contact',
        name: 'contact',
        customclass: '-translate-x-[70%] w-72',
        link: '',
        children: [
          {
            label: 'Contactez-nous',
            name: 'contactez-nous',
            link: '',
            children: []
          },
          {
            label: 'Ecrire au DG',
            name: 'ecrire',
            link: '',
            children: []
          }
        ]
      }
    ])
  }),

  getters: {
    getNavigation: (state) => {
      const routes = router.getRoutes()
      state.navigation.forEach((nav) => {
        const route = routes.find((route) => route.name === nav.name)

        if (route) {
          nav.link = route.path
        }

        nav.children.forEach((child) => {
          const childRoute = routes.find((route) => route.name === child.name)

          if (childRoute) {
            child.link = childRoute.path
          }
        })
      })

      return state.navigation
    }
  }
})
