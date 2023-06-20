<script setup>
import ArticleBox from '../components/partials/ArticleBox.vue';
import PageBanner from '../components/partials/PageBanner.vue';
import DirecteurBox from '../components/partials/DirecteurBox.vue';
import { ref } from 'vue';

const anciensDirecteur = ref([
  {
    nom: 'ASSOGBA',
    prenom: 'Innocent',
    titre: 'Directeur central de l\'Economie',
    periode: '1985-1986',
    image: "https://www.dge.finances.bj/storage/2021/05/WhatsApp-Image-2019-02-25-at-09.51.49-300x300-1.jpeg"
  },

  {
    nom: 'BADA',
    prenom: 'Francois-Xavier',
    titre: 'Directeur de l\'économie Générale',
    periode: '1986-1987',
    image: "https://www.dge.finances.bj/storage/2021/05/WhatsApp-Image-2019-02-25-at-09.51.49-300x300-1.jpeg"

  },

  {
    nom: 'BANKOLE',
    prenom: 'Victor',
    titre: 'Directeur de l\'économie Générale',
    periode: 'Juillet 1987 - Juillet 1990',
    image: "https://www.dge.finances.bj/storage/2021/05/WhatsApp-Image-2019-02-25-at-09.51.49-300x300-1.jpeg"
  },

  {
    nom: 'DASSI',
    prenom: 'Michel',
    titre: 'Directeur de l\'économie Générale',
    periode: 'Juillet 1990 - Janvier 1993',
    image: "https://www.dge.finances.bj/storage/2021/05/WhatsApp-Image-2019-02-25-at-09.51.49-300x300-1.jpeg"
  },

  {
    nom: 'KANGNI',
    prenom: 'Ekue',
    titre: 'Directeur Général des Affaires Economiques',
    periode: 'Janvier 1993 - Décembre 1995',
    image: "https://www.dge.finances.bj/storage/2021/05/WhatsApp-Image-2019-02-25-at-09.51.49-300x300-1.jpeg"
  },

  {
    nom: 'HOUESSOU',
    prenom: 'Eloge',
    titre: 'Directeur Général des Affaires Economiques par intérim',
    periode: 'avril 1995 - Février 1998',
    image: "https://www.dge.finances.bj/storage/2021/05/WhatsApp-Image-2019-02-25-at-09.51.49-300x300-1.jpeg"
  },

  {
    nom: 'AZOKRY DEGNON',
    prenom: 'Agathe',
    titre: 'Directeur Général des Affaires Economiques par intérim',
    periode: 'Février 1998 - Octobre 1998',
    image: "https://www.dge.finances.bj/storage/2021/05/WhatsApp-Image-2019-02-25-at-09.51.49-300x300-1.jpeg"
  },

  {
    nom: 'DJOSSOU',
    prenom: 'Justin',
    titre: 'Directeur Général des Affaires Economiques par intérim',
    periode: 'Octobre 1998 - Juillet 1998',
    image: "https://www.dge.finances.bj/storage/2021/05/WhatsApp-Image-2019-02-25-at-09.51.49-300x300-1.jpeg"
  },

  {
    nom: 'ARIGBO',
    prenom: 'Félicien',
    titre: 'Directeur Général des Affaires Economiques par intérim',
    periode: 'Juillet 1998 - Décembre 1999',
    image: "https://www.dge.finances.bj/storage/2021/05/WhatsApp-Image-2019-02-25-at-09.51.49-300x300-1.jpeg"
  },


  {
    nom: 'DAHOUN',
    prenom: 'Dieudonné Bleossi',
    titre: 'Directeur Général des Affaires Economiques',
    periode: 'Février 2000 - Octobre 2003',
    image: "https://www.dge.finances.bj/storage/2021/05/WhatsApp-Image-2019-02-25-at-09.51.49-300x300-1.jpeg"
  },


  {
    nom: 'ADJOVI',
    prenom: 'Epiphane',
    titre: 'Directeur Général des Affaires Economiques',
    periode: 'Octobre 2003 - Novembre 2006',
    image: "https://www.dge.finances.bj/storage/2021/05/WhatsApp-Image-2019-02-25-at-09.51.49-300x300-1.jpeg"
  },


  {
    nom: 'BAGUIDI',
    prenom: 'Boko',
    titre: 'Directeur Général des Affaires Economiques',
    periode: 'Novembre 2006 - Janvier 2012',
    image: "https://www.dge.finances.bj/storage/2021/05/WhatsApp-Image-2019-02-25-at-09.51.49-300x300-1.jpeg"
  },

  {
    nom: 'SOUBEROU',
    prenom: 'Bachir',
    titre: 'Directeur Général des Affaires Economiques par interim',
    periode: 'Janvier 2012 - Octobre 2012',
    image: "https://www.dge.finances.bj/storage/2021/05/WhatsApp-Image-2019-02-25-at-09.51.49-300x300-1.jpeg"
  },

  {
    nom: 'HOUENOU',
    prenom: 'Appolinaire',
    titre: 'Directeur Général des Affaires Economiques',
    periode: 'Octobre 2012 - Novembre 2014',
    image: "https://www.dge.finances.bj/storage/2021/05/WhatsApp-Image-2019-02-25-at-09.51.49-300x300-1.jpeg"
  },


])



</script>

<template>
  <main class="min-h-screen overflow-hidden">

    <PageBanner title="Anciens Directeurs" />

    <div class="container mx-auto">

      <div
        class="w-full gap-8 grid grid-cols-1 items-center place-items-center md:grid-cols-2 lg:grid-cols-3 mt-12 py-5 px-8 md:px-2">

        <DirecteurBox class="self-stretch" data-aos="fade-up" data-aos-anchor-placement="top-bottom" :directeur="item"
          v-for="item in anciensDirecteur" />

      </div>

    </div>

  </main>
</template>