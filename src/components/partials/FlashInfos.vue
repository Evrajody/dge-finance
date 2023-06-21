<script setup>

import SliderItem from '../partials/SliderItem.vue'
import InfoBanner from './InfoBanner.vue';
import { Navigation, Pagination, Autoplay, Mousewheel, Thumbs, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { ref } from 'vue';

const services = ref([
  { title: "Offre de stage" },
  { title: "Appel à candidature" },
  { title: "Cycle de formation en assurance" },
  { title: "Documents qualités" },
])

</script>
<template>
  <div class="container mx-auto pb-5" id="services">

    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="flex">
      <a href="#" class="group w-full relative block bg-black">
        <img alt="Developer" src="https://img.freepik.com/photos-gratuite/deux-femmes-visionnant-du-contenu-telephone-dans-marche-africain-local_181624-35124.jpg"
          class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />

        <div class="relative p-4 sm:p-6 lg:p-8">
          <p class="text-sm font-medium uppercase tracking-widest text-white">
            Services
          </p>

          <p class="text-xl font-bold text-white sm:text-2xl"> Déterminant de la pérénité sociale </p>

          <div class="mt-32 sm:mt-48 lg:mt-64">
            <!-- translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 :breakpoints="[{ width: '1380' }]" -->
            <div class="">

              <swiper loop navigation a11y autoplay set-wrapper-size :breakpoints="{ 200: { slidesPerView: 1  }, 750: { slidesPerView: 2  }, 1024: { slidesPerView: 3  }, 1380: { slidesPerView: 4  } }" :modules="[A11y, Autoplay, Navigation]"
                :slides-per-view="3" :space-between="15">
                <swiper-slide v-for="item, index in services" :key="index">
                  <div class="c-services__item self-stretch h-full w-full">
                    <h3> {{ item.title }} </h3>
                    <p>To reach more customers and the goals of your business, a mobile application is necessary these
                      days.
                      We will work on the app design from scratch to final tested prototype.
                    </p>
                  </div>
                </swiper-slide>
              </swiper>

            </div>
          </div>
        </div>
      </a>
    </div>

  </div>
</template>


<style>
.c-services__item {
  background: #fff;
  padding: 1.5rem 1rem;
  border-radius: 10px;
  box-shadow: 0 7px 20px rgba(100, 28, 2, 0.135);
  transition: all 300ms ease, transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  z-index: 1;
}

.c-services__item h3 {
  color: #0E406E;
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 1.2;
  overflow: hidden;
}

.c-services__item:after {
  content: "";
  display: block;
  position: absolute;
  bottom: -5px;
  right: -2px;
  width: 50px;
  overflow: hidden;
  height: 50px;
  border-radius: 20px 0;
  cursor: pointer;
  transition: inherit;
  background-color: #0E406E;
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHg9IjBweCIgeT0iMHB4Ij48dGl0bGU+NTI8L3RpdGxlPjxwYXRoIGQ9Ik04MS4zMDMyOSwzOC41MjkzOUExNC4wMTgsMTQuMDE4LDAsMSwwLDYxLjQ3NywxOC43MDY3MUw0Ny4wMDMxNSwzMy4xNzkxNGExNC4wMzAzNywxNC4wMzAzNywwLDAsMCwwLDE5LjgyMTcxLDQuODAxMTMsNC44MDExMywwLDAsMS02Ljc4OTc5LDYuNzg5ODcsMjMuNjQzMjcsMjMuNjQzMjcsMCwwLDEsMC0zMy40MDE0NUw1NC42ODcyMSwxMS45MTY4NEEyMy42MjAzLDIzLjYyMDMsMCwwLDEsODguMDkzMDgsNDUuMzE5MjdMODAuOTIzOCw1Mi40ODcxMWE0LjgwMTE0LDQuODAxMTQsMCwwLDEtNi43ODk4LTYuNzg5ODdaTTExLjkwNzQxLDg4LjA5MzlhMjMuNjUwNTMsMjMuNjUwNTMsMCwwLDAsMzMuNDA1ODYtLjAwMUw1OS43ODY2NCw3My42MjE0N2EyMy42MTU4MywyMy42MTU4MywwLDAsMCwwLTMzLjQwMTQ1LDQuODAxMTQsNC44MDExNCwwLDAsMC02Ljc4OTc5LDYuNzg5ODgsMTQuMDE1MzEsMTQuMDE1MzEsMCwwLDEsMCwxOS44MjI2OEwzOC41MjM0OCw4MS4zMDRBMTQuMDE4LDE0LjAxOCwwLDEsMSwxOC42OTcyLDYxLjQ4MTM1TDI1Ljg2Niw1NC4zMTM1YTQuODAxMTQsNC44MDExNCwwLDAsMC02Ljc4OTgtNi43ODk4N2wtNy4xNjg3OSw3LjE2Nzg1QTIzLjY0NDg5LDIzLjY0NDg5LDAsMCwwLDExLjkwNzQxLDg4LjA5MzlaIj48L3BhdGg+PC9zdmc+");
}

.c-services__item p {
  margin-top: 1.25rem;
  font-weight: 400;
}

#services .swiper-button-prev,  
#services .swiper-button-next {
  @apply px-6 py-5 bg-finance-blue rounded-full
  
}

</style>