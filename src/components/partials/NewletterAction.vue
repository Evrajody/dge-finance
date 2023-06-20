<script setup>
import MaterialSymbolsArrowUpward from '../icons/MaterialSymbolsArrowUpward.vue';

// background: #d9d9d9;
    /* box-shadow: 0 4px 8px rgba(0,0,0,.25); */

</script>


<template>
  <div class="bg-bj-green">

    <div class="w-full 2xl:container mx-auto">

      <div
        class="text-white w-full px-5 2xl:px-0 py-8 flex flex-col md:flex-row space-between items-center justify-between relative overflow-hidden">

        <div class="flex flex-col space-y-4 lg:max-w-xl z-10 md:pl-10 2xl:pl-0">
          <h4 class="text-4xl text-center md:text-left font-bold leading-normal text-white md:pb-2">
            Restez à l'afflut de l'information
          </h4>
          <p class="text-center md:text-left font-medium text-white opacity-70 md:pb-6">
            Entrez votre addresse email pour être au parfum des actualités de la Direction Générale de l'Economie
          </p>

        </div>

        <div data-aos="fade-left" data-duration="2000"
          class="pt-8 md:pt-0 flex flex-col lg:flex-row gap-3 lg:gap-0 items-center justify-center lg:justify-end lg:ml-auto z-10 w-full">

          <input placeholder="Entrez votre address mail" type="text"
            class="rounded text-black w-full lg:w-1/2 py-3 font-medium">
          <a href="" class="py-3 bg-red-600 px-4 font-bold rounded-r w-full lg:w-fit"> Souscrire </a>

        </div>

        <div
          class="absolute bg-finance-blue  border border-l-8 border-l-yellow-400 w-96 h-96 -top-32 left-[80%] md:w-[800px] md:h-[800px] md:left-[50%] md:top-[-150%] rounded-full shadow-2xl z-0">
        </div>

      </div>

    </div>

</div></template>