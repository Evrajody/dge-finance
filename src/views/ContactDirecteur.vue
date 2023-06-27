<script setup>
import ContactForm from '../components/partials/ContactForm.vue';
import PageBanner from '../components/partials/PageBanner.vue';

import DirecteurBox from '../components/partials/DirecteurBox.vue';
import { ref } from 'vue';


const directeur = ref({
  nom: 'DJOSSOU',
  prenom: 'Justin',
  titre: 'Directeur Général l\'Economie',
  image: "https://www.dge.finances.bj/storage/2021/05/DGAE.jpg"
})

</script>

<template>
  <PageBanner title="Ecrire au DG" />

  <div class="flex flex-col-reverse lg:flex-row items-start justify-center lg:space-y-12 my-20 lg:container mx-auto md:px-3 lg:px-16">

    <ContactForm />

    <div class="informations flex items-center justify-center w-full mx-auto px-6 sm:px-0 sm:w-[50%] lg:w-[50%] xl:w-[30%]">

      <DirecteurBox :directeur="directeur" />

    </div>

  </div>


  <div class="maps">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.318099040194!2d2.3950034647400935!3d6.352849445402793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10235436c0e69307%3A0x51fea42ac1509f63!2sMinist%C3%A8re%20des%20Finances%2C%20Cotonou!5e0!3m2!1sfr!2sbj!4v1619367648837!5m2!1sfr!2sbj" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
  </div>


</template>