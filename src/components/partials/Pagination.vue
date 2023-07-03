<script setup>
import IcRoundArrowForward from '../icons/IcRoundArrowForward.vue';
import IcBaselineArrowBack from '../icons/IcBaselineArrowBack.vue';

    
</script>

<template>

  <div class="container flex justify-between items-center py-5 mx-auto">

    <a href="" class="flex justify-between items-center py-2.5 px-3.5 space-x-4 w-32 text-sm font-semibold text-center bg-transparent border-2 transition-all hover:text-white border-finance-blue text-finance-blue hover:bg-finance-blue"> 
      <IcBaselineArrowBack/>
      Précédent
    </a>


    <span class="block py-2.5 px-3.5 w-32 text-sm font-semibold text-center bg-transparent border-2 transition-all hover:text-white border-finance-blue text-finance-blue hover:bg-finance-blue"> 1 - 20 sur 45 </span>

    <a href="" class="flex justify-between items-center py-2.5 px-3.5 space-x-4 w-32 text-sm font-semibold text-center bg-transparent border-2 transition-all hover:text-white border-finance-blue text-finance-blue hover:bg-finance-blue"> 
      Suivant
      <IcRoundArrowForward/>
    </a>

  </div>

</template>

<style>

</style>