<script setup>
import { onMounted, ref } from 'vue';
import PageBanner from '../components/partials/PageBanner.vue';
import BiFileEarmarkArrowDownFill from '../components/icons/BiFileEarmarkArrowDownFill.vue';

const fakeArticle = ref([]);


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

  <div class="flex flex-col px-3 my-10 xl:container mx-auto lg:flex-row lg:space-x-10">

    <div class="w-full lg:w-4/12">

      <div class="py-4 px-4 bg-finance-blue w-full">
        <span class="text-lg font-extrabold text-white"> Filtre </span>
      </div>

      <form action="" class="w-full py-5 flex flex-col space-y-3">

        <div class="">
          <label for="full-name" class="block text-sm font-semibold leading-6 text-gray-900"> Mots clés </label>
          <div class="mt-2">
            <input type="text" name="first-name"
              class="block w-full border-0 px-3.5 py-2.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset bg-finance-gray focus:bg-transparent  focus:ring-finance-blue sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="">
          <label for="full-name" class="block text-sm font-semibold leading-6 text-gray-900"> Date de publication </label>
          <div class="mt-2">
            <input type="date" name="first-name"
              class="block w-full border-0 px-3.5 py-2.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset bg-finance-gray focus:bg-transparent  focus:ring-finance-blue sm:text-sm sm:leading-6">
          </div>
        </div>


        <div class="w-full">
          <!-- <label for="full-name" class="block text-sm font-semibold leading-6 text-gray-900"> Date de publication </label> -->
          <div class="mt-2">
            <input type="submit" value="Rechercher"
              class="block w-fit border-0 px-3.5 py-2.5 cursor-pointer text-white bg-bj-green font-extrabold text-sm sm:text-lg sm:leading-6">
          </div>
        </div>

      </form>

    </div>

    <div class="w-full lg:w-8/12">

      <div class="px-4 py-4 mb-5 bg-finance-blue w-full">
        <span class="text-lg font-extrabold text-white"> Liste des publications JSEB </span>
      </div>

      <table class=" w-full bg-white border">
        <thead class="mask text-white">
          <tr>
            <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Titre</th>
            <th class="w-5 text-left py-3 px-4 uppercase font-semibold text-sm"></th>
          </tr>
        </thead>
        <tbody class="text-gray-700">
          <tr v-for="i in 8" class="border-b border-b-gray-100">
            <td class="text-left py-3 px-4">
              <p class="text-finance-late font-semibold text-sm line-clamp-3">
                Yves ESSEHOU & Charlemagne B. IGUE – Productivité sectorielle du travail, changement structurel et
                productivité totale du travail en Afrique Subsaharienne
              </p>
            </td>
            <td class=" text-left py-3 px-4">
              <a href="#"
                class="bg-bj-green shadow flex items-center gap-2 text-white text-sm font-medium px-3 py-2 rounded-md">
                <BiFileEarmarkArrowDownFill />
              </a>
            </td>
          </tr>

        </tbody>
      </table>

    </div>

  </div>

</template>

