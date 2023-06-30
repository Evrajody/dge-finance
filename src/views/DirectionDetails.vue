<script setup>

  import DirecteurBox from '../components/partials/DirecteurBox.vue';
  import PageBanner from '../components/partials/PageBanner.vue';
  import OcticonQuote from '../components/icons/OcticonQuote.vue';
  import { directions }  from '../data/directions.js'
  import { onMounted } from 'vue';
  import { useRoute } from 'vue-router';

  const currentRoute = useRoute()

  const directionIndex = currentRoute.meta.directionIndex;

  onMounted(() => {
     // console.log(currentRoute.meta.directionIndex);
  });

</script>

<template>
  <main class="">

    <PageBanner :title="directions[directionIndex]?.nom" />

    <div class="container mx-auto flex flex-col justify-evenly items-center gap-10 lg:items-start lg:flex-row my-20">

      <DirecteurBox :directeur="directions[directionIndex]?.directeur" />

      <div class="w-full">

        <div class="row relative py-4 intro" v-if="directions[directionIndex]?.intro">

          <div class="absolute md:-top-6 -top-12 -left-7 md:-left-5 grid place-items-center h-16 w-16 bg-finance-blue text-white rounded-full">
            <OcticonQuote />
          </div>

          <div class="bg-finance-gray rounded-none sm:rounded-lg px-5 sm:px-12 py-10 w-full">
            <span class="text-base font-semibold leading-normal" v-html="directions[directionIndex]?.intro"></span>
          </div>

        </div>

        <div class="annonce-attributions">
          <div class="bg-finance-blue rounded-none sm:rounded-lg px-5 sm:px-10 py-3 w-full">
            <span class="text-base text-white font-semibold leading-normal" v-html="directions[directionIndex]?.annonce"></span>
          </div>
          <div class="flex justify-center">

            <section class="bg-white">

              <article class="" v-for="i in directions[directionIndex]?.attributions">
                <div class="h-full transition relative mission-item">
                  <header
                    class="bg-white flex-col sm:flex-row sm:items-center p-5 px-8 cursor-pointer hover:bg-finance-gray transition">
                    <span class="text-sm text-finance-plot text-justify font-medium text-md">
                      {{ i.content }}
                    </span>
                  </header>

                </div>
              </article>

            </section>

          </div>
        </div>

        <div class="mt-5 annonce-services" v-if="directions[directionIndex]?.annonceServices">
          <div class="bg-finance-blue rounded-none sm:rounded-lg px-5 sm:px-10 py-5 w-full">
            <span class="text-base text-white font-semibold leading-normal" v-html="directions[directionIndex]?.annonceServices"></span>
          </div>
          <div class="">

            <section class="bg-white">

              <article class="" v-for="i in directions[directionIndex]?.services">
                <div class="h-full transition relative mission-item">

                  <header
                    class="bg-white flex-col sm:flex-row sm:items-center p-5 px-8 cursor-pointer hover:bg-finance-gray transition">
                    <span class="text-sm text-finance-plot text-justify font-medium">
                      {{ i.content }}
                    </span>
                  </header>

                </div>
              </article>

            </section>

          </div>
        </div>

        <div class="outro mt-5" v-if="directions[directionIndex]?.outro">
          <p class="text-sm text-finance-plot text-justify font-medium leading-5" v-html="directions[directionIndex]?.outro"></p>
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