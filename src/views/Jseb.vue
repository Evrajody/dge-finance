<script setup>
import IcOutlineFileDownload from '../assets/images/IcOutlineFileDownload.vue';
import ArticleBox from '../components/partials/ArticleBox.vue';
import PageBanner from '../components/partials/PageBanner.vue';
import VueMultiselect from 'vue-multiselect'

</script>

<template>
  <div class="overflow-hidden">

    <PageBanner title="Publications Jseb" />


    <div class="py-5 bg-finance-gray mt-16">
      <div class="container mx-auto">

        <div class="flex items-center justify-end">
          <div class="w-1/3 pr-8">
            <VueMultiselect :options="['data', 'options']" placeholder="Filtrer par année" />
          </div>
        </div>

      </div>
    </div>

    <div class="container mx-auto ">


      <div class="w-full gap-8 grid grid-cols-1 items-center place-items-center md:grid-cols-2 lg:grid-cols-3 py-5 px-8">

        <ArticleBox v-for="i in 6">

          <template #download>
            <a href="#"
              class="bg-white flex items-center gap-2 text-black text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-50 transition-colors duration-300">
              <IcOutlineFileDownload />
              Télecharger
            </a>
          </template>


        </ArticleBox>

      </div>

    </div>

  </div>
</template>

