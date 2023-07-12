<script setup>

  import DirecteurBox from '../components/partials/DirecteurBox.vue';
  import PageBanner from '../components/partials/PageBanner.vue';
  import OcticonQuote from '../components/icons/OcticonQuote.vue';
  import { onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { useDirectionStore } from '@/stores/directions';
import { useTitle } from '@vueuse/core';

  const currentRoute = useRoute()

  const directionIndex = currentRoute.meta.directionIndex;

  const directions = useDirectionStore().directions

  const title = useTitle(`DGE | Detail ${directions[directionIndex]?.nom}`);


  onMounted(() => {  });

</script>

<template>
  <main class="">

    <PageBanner :title="directions[directionIndex]?.nom" />

    <div class="container flex flex-col gap-10 justify-evenly items-center my-20 mx-auto lg:flex-row lg:items-start">

      <DirecteurBox :directeur="directions[directionIndex]?.directeur" />

      <div class="w-full">

        <div class="relative py-4 row intro" v-if="directions[directionIndex]?.intro">

          <div class="grid absolute -left-7 -top-12 place-items-center w-16 h-16 text-white rounded-full md:-left-5 md:-top-6 bg-finance-blue">
            <OcticonQuote />
          </div>

          <div class="py-10 px-5 w-full rounded-none sm:px-12 sm:rounded-lg bg-finance-gray">
            <span class="text-base font-semibold leading-normal" v-html="directions[directionIndex]?.intro"></span>
          </div>

        </div>

        <div class="annonce-attributions">
          <div class="py-3 px-5 w-full rounded-none sm:px-10 sm:rounded-lg bg-finance-blue">
            <span class="text-base font-semibold leading-normal text-white" v-html="directions[directionIndex]?.annonce"></span>
          </div>
          <div class="flex justify-center">

            <section class="bg-white">

              <article class="" v-for="i in directions[directionIndex]?.attributions">
                <div class="relative h-full transition mission-item">
                  <header
                    class="flex-col p-5 px-8 bg-white transition cursor-pointer sm:flex-row sm:items-center hover:bg-finance-gray">
                    <span class="text-sm font-medium text-justify text-finance-plot text-md">
                      {{ i.content }}
                    </span>
                  </header>

                </div>
              </article>

            </section>

          </div>
        </div>

        <div class="mt-5 annonce-services" v-if="directions[directionIndex]?.annonceServices">
          <div class="py-5 px-5 w-full rounded-none sm:px-10 sm:rounded-lg bg-finance-blue">
            <span class="text-base font-semibold leading-normal text-white" v-html="directions[directionIndex]?.annonceServices"></span>
          </div>
          <div class="">

            <section class="bg-white">

              <article class="" v-for="i in directions[directionIndex]?.services">
                <div class="relative h-full transition mission-item">

                  <header
                    class="flex-col p-5 px-8 bg-white transition cursor-pointer sm:flex-row sm:items-center hover:bg-finance-gray">
                    <span class="text-sm font-medium text-justify text-finance-plot">
                      {{ i.content }}
                    </span>
                  </header>

                </div>
              </article>

            </section>

          </div>
        </div>

        <div class="mt-5 outro" v-if="directions[directionIndex]?.outro">
          <p class="text-sm font-medium leading-5 text-justify text-finance-plot" v-html="directions[directionIndex]?.outro"></p>
        </div>

      </div>

    </div>

  </main>
</template>


<style scoped>
.mission-item::before {
  content: "";
  width: 15px;
  height: 50%;
  position: absolute;
  border-left: 2.5px solid #0E406E;
  border-bottom: 2.5px solid #0E406E;
  border-bottom-left-radius: 4px;
}

.mission-item::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 15px;
  height: 52%;
  border-left: 2.5px solid #0E406E;
}

</style>