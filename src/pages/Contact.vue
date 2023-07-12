<script setup>
import ContactForm from '../components/partials/ContactForm.vue';
import PageBanner from '../components/partials/PageBanner.vue';


</script>

<template>
  <PageBanner title="Contact" />

  <div class="flex flex-col my-20 mx-auto lg:container lg:flex-row lg:px-16 lg:space-x-12">

    <ContactForm />

    <div class="px-5 md:px-0 informations">

      <div class="addr">
        <h3 class="py-10 text-lg font-semibold text-finance-late"> Adresse : </h3>

        <p class="flex flex-col space-y-6 w-full">

          <span class="font-medium text-finance-late"> 302 Route de l’Aéroport </span>

          <span class="font-medium text-finance-late"> Cotonou – Bénin </span>

        </p>

      </div>

      <div class="contact">

        <h3 class="py-10 text-lg font-semibold text-finance-late"> Contact : </h3>

        <div class="flex flex-col space-y-6 w-full">

          <div class="font-medium text-finance-late">
            <span> Téléphone : </span>
            <span class="font-medium text-red-500"> (+229) 21 30 37 67 </span>
          </div>

          <div class="font-medium text-finance-late">
            <span > Email : </span>
            <span class="font-medium text-red-500"> info@dgae.finances.bj </span>
          </div>

          <span class="font-medium text-finance-late"> Du Lundi au Vendredi à partir de <br> 8h à 12h / 14h à 17h30 </span>

        </div>
    </div>

  </div>

  </div>



  <div class="maps">


  </div>
</template>