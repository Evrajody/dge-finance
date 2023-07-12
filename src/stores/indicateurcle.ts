import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useIndicateurCle = defineStore('indicateurCle', {
  state: () => ({
    indicateurCle: reactive([
      {
        label: 'Taux de croissance 2021',
        valeur: 7.2,
        opacity: 75,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 3.5h4v4"/><path d="M13.5 3.5L7.85 9.15a.5.5 0 0 1-.7 0l-2.3-2.3a.5.5 0 0 0-.7 0L.5 10.5"/></g></svg>`
      },

      {
        label: "Taux d'inflation 2021",
        valeur: 1.7,
        opacity: 80,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m1.24 6.54l11.5-5.23M10.59.5l2.15.81l-.8 2.15m1.31 10.05h-2.5h0v-7a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 .5.5v7h0Zm-5 0h-2.5h0v-5.5a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 .5.5v5.5h0Zm-5 0H.75h0v-4a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 .5.5v4h0Z"/></svg>`
      },

      {
        label: 'Déficit budgétaire du PIB 2021',
        valeur: 5.7,
        opacity: 90,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect width="13" height="7" x=".5" y="6.5" rx="1"/><path d="M3.5 2v2M7 .5V4m3.5-2v2"/><circle cx="7" cy="10" r="1.5"/></g></svg>`
      },
      {
        label: 'Taux d’endettement du PIB 2021',
        valeur: 49.7,
        opacity: 100,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7.5v-2a1 1 0 0 0-1-1H1.5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1H11a1 1 0 0 0 1-1V10M3.84 2L9.51.52a.49.49 0 0 1 .61.36L10.4 2"/><rect width="3.5" height="2.5" x="10" y="7.5" rx=".5"/></g></svg>`
      }
    ])
  }),
  getters: {
    getIndicateurCle: (state) => state.indicateurCle
  }
})
