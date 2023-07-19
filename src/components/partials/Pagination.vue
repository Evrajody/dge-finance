<script setup>
import IcRoundArrowForward from '../icons/IcRoundArrowForward.vue';
import IcBaselineArrowBack from '../icons/IcBaselineArrowBack.vue';

    
</script>

<template>

  <div class="container flex justify-between items-center py-5 mx-auto">

    <a href="" class="flex justify-between items-center py-2.5 px-3.5   text-sm font-semibold text-center bg-transparent border-2 transition-all hover:text-white border-finance-blue text-finance-blue hover:bg-finance-blue"> 
      <div>
        <IcBaselineArrowBack/>
      </div>
      <span class="px-2 hidden sm:block">Précédent</span>
    </a>


    <span class="block py-2 px-3 text-sm font-semibold text-center bg-transparent border-2 transition-all hover:text-white border-finance-blue text-finance-blue hover:bg-finance-blue"> 1 - 20 sur 45 </span>

    <a href="" class="flex justify-between items-center py-2.5 px-3.5  text-sm font-semibold text-center bg-transparent border-2 transition-all hover:text-white border-finance-blue text-finance-blue hover:bg-finance-blue"> 
      <span class="px-2 hidden sm:block">Suivant</span>
      <div>
        <IcRoundArrowForward/>
      </div>
    </a>

  </div>

</template>

<style>

</style>