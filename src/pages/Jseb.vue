<script setup>
import { onMounted, ref } from 'vue';
import PageBanner from '../components/partials/PageBanner.vue';
import BiFileEarmarkArrowDownFill from '../components/icons/BiFileEarmarkArrowDownFill.vue';
import { useTitle } from '@vueuse/core';

const fakeArticle = ref([]);

const title = useTitle("DGE | JSEB");



function loadFakeArticles() {
  fetch('https://jsonplaceholder.typicode.com/photos?_start=6&_limit=6')
    .then((response) => response.json())
    .then((json) => fakeArticle.value = json);
}

onMounted(() => {
  loadFakeArticles()
})

</script>

<template>
  <PageBanner title="Publications JSEB" />

  <div class="flex flex-col px-3 my-10 mx-auto lg:flex-row lg:space-x-10 xl:container">

    <div class="w-full lg:w-4/12">

      <div class="py-4 px-4 w-full bg-finance-blue">
        <span class="text-lg font-extrabold text-white"> Filtre </span>
      </div>

      <form action="" class="flex flex-col py-5 space-y-3 w-full">

        <div class="">
          <label for="full-name" class="block text-sm font-semibold leading-6 text-gray-900"> Mots clés </label>
          <div class="mt-2">
            <input type="text" name="first-name"
              class="block py-2.5 px-3.5 w-full text-gray-900 border-0 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:bg-transparent focus:ring-1 focus:ring-inset placeholder:text-gray-400 bg-finance-gray focus:ring-finance-blue">
          </div>
        </div>

        <div class="">
          <label for="full-name" class="block text-sm font-semibold leading-6 text-gray-900"> Date de publication </label>
          <div class="mt-2">
            <input type="date" name="first-name"
              class="block py-2.5 px-3.5 w-full text-gray-900 border-0 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:bg-transparent focus:ring-1 focus:ring-inset placeholder:text-gray-400 bg-finance-gray focus:ring-finance-blue">
          </div>
        </div>


        <div class="w-full">
          <!-- <label for="full-name" class="block text-sm font-semibold leading-6 text-gray-900"> Date de publication </label> -->
          <div class="mt-2">
            <input type="submit" value="Rechercher"
              class="block py-2.5 px-3.5 text-sm font-extrabold text-white border-0 cursor-pointer sm:text-lg sm:leading-6 w-fit bg-bj-green">
          </div>
        </div>

      </form>

    </div>

    <div class="w-full lg:w-8/12">

      <div class="py-4 px-4 mb-5 w-full bg-finance-blue">
        <span class="text-lg font-extrabold text-white"> Liste des publications JSEB </span>
      </div>

      <table class="w-full bg-white border">
        <thead class="text-white mask">
          <tr>
            <th class="py-3 px-4 text-sm font-semibold text-left uppercase">Titre</th>
            <th class="py-3 px-4 w-5 text-sm font-semibold text-left uppercase"></th>
          </tr>
        </thead>
        <tbody class="text-gray-700">
          <tr v-for="i in 8" class="border-b border-b-gray-100">
            <td class="py-3 px-4 text-left">
              <p class="text-sm font-semibold text-finance-late line-clamp-3">
                Yves ESSEHOU & Charlemagne B. IGUE – Productivité sectorielle du travail, changement structurel et
                productivité totale du travail en Afrique Subsaharienne
              </p>
            </td>
            <td class="py-3 px-4 text-left">
              <a href="#"
                class="flex gap-2 items-center py-2 px-3 text-sm font-medium text-white rounded-md shadow bg-bj-green">
                <BiFileEarmarkArrowDownFill />
              </a>
            </td>
          </tr>

        </tbody>
      </table>

    </div>

  </div>

</template>

