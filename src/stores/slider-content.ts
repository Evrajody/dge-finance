import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useSliderContent = defineStore('SliderContent', {
  state: () => ({
    sliderContent: reactive([
      {
         text: `Notes de politiques économiques: Les options inévitables d'un changement de paradigme économique en Afrique.`,
         image: `https://www.dge.finances.bj/storage/2021/12/WhatsApp-Image-2021-12-15-at-18.23.07.jpeg`
      },
   
      {
         text: `Programme de l'economie scientifique des journées béninoises, Edition 2022`,
         image: `https://img.freepik.com/photos-gratuite/personne-recevant-nourriture-rue_23-2149004347.jpg`
      },
   
      {
         text: `La lettre de la DGE de avril 2020 : Comprendre la pression inflationniste post Covid 2019`,
         image:  `https://www.dge.finances.bj/storage/2022/05/WhatsApp-Image-2022-05-23-at-17.38.43.jpeg`
      },
   
      {
         text: "Note de conjecture du premier trimestre 2022", 
         image: 'https://www.dge.finances.bj/storage/2022/05/Image-1-1.jpg'
      }, 
   
      {
         text: "Crise russo-ukrainienne: enjeux et effets potentiels sur l’économie béninoise", 
         image: 'https://www.dge.finances.bj/storage/2022/04/UKRU.jpeg'
      }, 
   
      {
         text: "Document de programmation budgétaire et économique pluriannuelle 2023-2025", 
         image: 'https://www.dge.finances.bj/storage/2022/06/WhatsApp-Image-2022-06-30-at-11.20.28.jpeg'
      }, 
   
   ])
  }),
  getters: {
    getSliderContent: (state) => state.sliderContent
  }
})
