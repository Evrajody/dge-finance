<script setup>
import DirecteurBox from '../components/partials/DirecteurBox.vue';
import PageBanner from '../components/partials/PageBanner.vue';



</script>

<template>
  <main class="min-h-screen">

    <PageBanner title="Direction des Ressources humaines" />


    <div class="flex flex-col justify-center items-center lg:flex-row lg:items-start gap-12 my-20 lg:container mx-auto px-6 md:p-8 lg:px-12">

           
      <div class="w-full lg:w-1/2 grid place-items-center ">
        <DirecteurBox class="" />
      </div>


      <div class="">
        <div class="">
          <div class="bg-gray-900 rounded-none sm:rounded-lg px-5 sm:px-10 py-5 w-full">
            <span class=" text-sm md:text-lg text-white font-semibold leading-normal">
              La Direction de la Promotion et de la Coopération Économiques est chargée :
            </span>
          </div>
        </div>


        <div class="">
          
          <div class="">

            <div class="flex justify-center">

              <section class="bg-white w-full">

                <article class="" v-for="i in 8">
                  <div class="h-full transition relative mission-item">

                    <header
                      class="bg-white flex-col sm:flex-row sm:items-center p-5 px-8 cursor-pointer hover:bg-finance-gray transition">
                      <span class="text-indigo text-sm text-finance-plot text-justify font-medium text-md">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet cum incidunt ipsa debitis optio aspernatur assumenda fugit, quidem odio tempora dicta consectetur inventore dolores blanditiis vel aliquid, officiis voluptatibus. Corporis!
                      </span>
                    </header>

                  </div>
                </article>

              </section>

            </div>

          </div>

        </div>
      </div>



    </div>


  </main>
</template>