<script setup>
import ContactForm from '../components/partials/ContactForm.vue';
import PageBanner from '../components/partials/PageBanner.vue';


</script>

<template>
  <PageBanner title="Contact" />

  <div class="flex flex-col lg:flex-row gap-12 my-20 lg:container mx-auto lg:px-16">

    <ContactForm />

    <div class="informations px-5 md:px-0">

      <div class="addr">
        <h3 class="text-lg font-semibold text-finance-late py-10"> Adresse : </h3>

        <p class="flex w-full flex-col space-y-6">

          <span class="font-medium text-finance-late"> 302 Route de l’Aéroport </span>

          <span class="font-medium text-finance-late"> Cotonou – Bénin </span>

        </p>

      </div>

      <div class="contact">

        <h3 class="text-lg font-semibold text-finance-late py-10"> Contact : </h3>

        <div class="flex w-full flex-col space-y-6">

          <div class="font-medium text-finance-late">
            <span> Téléphone : </span>
            <span class="text-red-500 font-medium"> (+229) 21 30 37 67 </span>
          </div>

          <div class="font-medium text-finance-late">
            <span > Email : </span>
            <span class="text-red-500 font-medium"> info@dgae.finances.bj </span>
          </div>

          <span class="font-medium text-finance-late"> Du Lundi au Vendredi à partir de 8h </span>


        </div>
    </div>

  </div>

  </div>



  <div class="maps">


  </div>
</template>