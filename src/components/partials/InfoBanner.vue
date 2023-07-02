<script setup>

import ClaritySearchLine from '../icons/ClaritySearchLine.vue';

</script>


<template>

  <div class="flex gap-4 justify-end items-center py-2 px-4 w-full text-white content bg-finance-blue">

    <div class="flex gap-5 items">
        <a href="" class="text-sm text-white hover:underline"> Services </a>
        <a href="" class="text-sm text-white hover:underline"> A la une </a>
        <a href="" class="text-sm text-white hover:underline"> Communiqués </a>
        <a href="" class="text-sm text-white hover:underline"> Marchés publics </a>
        <a href="" class="text-sm text-white hover:underline"> JSEB </a>
        <a href="" class="text-sm text-white hover:underline"> Contactez-nous </a>
        <a href="" class="text-sm text-white hover:underline"> Francais </a>
    </div>
    
    <span class="cursor-pointer"> 
      <ClaritySearchLine class="w-5 h-5"/>
    </span>

  </div>

</template>