<script setup>
import { ref } from 'vue';
import PageBanner from '../components/partials/PageBanner.vue';
import IcRoundRemoveRedEye from '../components/icons/IcRoundRemoveRedEye.vue'


const currentTab = ref(0)

const directions = ref([
  {
    nom: "Direction Générales",
    directions: [
      {
        nom: 'Direction Générale'
      },

      {
        nom: 'Direction Générale Adjoint'
      }
    ]
  },
  {
    nom: "Direction Techniques",
    directions: [
      {
        nom: "Direction de l’Intégration Économique Régionale (DIER)"
      },

      {
        nom: "Direction du Suivi des Politiques Sectorielles, Sociales et des Économies Locales (DSPSSEL)"
      },

      {
        nom: "Direction de la Prévision et de la Conjoncture (DPC)"
      },

      {
        nom: "Direction de la Promotion et de la Coopération Economiques (DPCE)"
      },

      {
        nom: "Direction de la Recherche et des Études Stratégiques (DRES)"
      },

      {
        nom: "Direction de la Gestion des Ressources (DGR)"
      },
    ]
  }
])


function setCurrentTab(index) {
  currentTab.value = index
}


</script>


<template>
  <PageBanner title="Directions" />

  <div class="flex flex-col justify-center items-center gap-12 my-20 lg:container mx-auto">

    <ul
      class="grid grid-flow-col items-center justify-center space-x-10 w-full lg:w-[90%] text-center border-b border-gray-200 text-finance-late">
      <li @click="setCurrentTab(index)" v-for="item, index in directions" :class="{'active': currentTab == index}" class="border-b-2 border-transparent hover:border-finance-blue">
        <a href="#" class="flex  py-4">
        {{ item.nom }}
        </a>
      </li>
    </ul>

    <div class="tab-content w-full lg:w-[90%]">

      <div class="w-full gap-8 grid grid-cols-1 items-center place-items-center md:grid-cols-2 px-5">

        <div v-for="item in directions[currentTab].directions" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
          class="self-stretch w-full card-finance rounded-md object-fill object-bottom shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div class="px-4 py-4 flex flex-col justify-between h-full mask">
            <h2 class="text-xl font-bold text-white"> {{item.nom }}</h2>

            <div class="mt-4 flex justify-end items-center">
              <a href="#"
                class="bg-white flex items-center gap-2 text-black text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-50 transition-colors duration-300">
                <IcRoundRemoveRedEye />
                Détails
              </a>
            </div>
          </div>

        </div>


      </div>


    </div>

  </div>
</template>


<style>

.active {
  @apply border-b-2 border-finance-blue text-finance-blue font-extrabold
}


figure.snip1249 {
  position: relative;
  overflow: hidden;
  margin: 10px;
  width: 100%;
  background: #1a1a1a;
  color: #ffffff;
  text-align: left;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%);
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%);
}

figure.snip1249 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}

figure.snip1249 .image {
  position: relative;
}

figure.snip1249 img {
  max-width: 100%;
  vertical-align: top;
}

figure.snip1249 i {
  position: absolute;
  top: 7px;
  left: 12px;
  font-size: 32px;
  opacity: 0;
  z-index: 2;
  -webkit-transition-delay: 0;
  transition-delay: 0;
}

figure.snip1249 h3 {
  margin: 0;
  font-weight: 500;
  text-transform: uppercase;
}

figure.snip1249 figcaption {
  padding: 25px 80px 25px 25px;
  background-color: #ffffff;
  color: #000000;
  position: relative;
  font-size: 0.9em;
}

figure.snip1249 figcaption p {
  margin-bottom: 15px;
}

figure.snip1249 figcaption:before {
  width: 150px;
  height: 150px;
  position: absolute;
  bottom: 0;
  right: 0;
  content: '';
  z-index: 1;
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 100%);
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 100%);
  background-color: #20638f;
  -webkit-transform: skew(-45deg) translateX(50%);
  transform: skew(-45deg) translateX(50%);
  border-right: 1px solid #20638f;
}

figure.snip1249 .add-to-cart {
  display: inline-block;
  width: auto;
  border: 2px solid #20638f;
  padding: 0.4em 0.6em;
  color: #20638f;
  text-decoration: none;
  font-weight: 800;
  font-size: 0.9em;
  text-transform: uppercase;
}

figure.snip1249 .add-to-cart:hover {
  background-color: #20638f;
  color: #ffffff;
}

figure.snip1249 .price {
  position: absolute;
  right: 0;
  bottom: 0;
  color: #ffffff;
  z-index: 2;
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
}

figure.snip1249 .price s {
  display: block;
  font-size: 0.85em;
  font-weight: 400;
  opacity: 0.8;
}

figure.snip1249:hover i,
figure.snip1249.hover i {
  opacity: 0.7;
  -webkit-transition-delay: 0.3s;
  transition-delay: 0.3s;
}

figure.snip1249:hover h3,
figure.snip1249.hover h3 {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  opacity: 1;
}

figure.snip1249:hover:before,
figure.snip1249.hover:before {
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
  -webkit-transform: skew(-45deg) translateX(-50%);
  transform: skew(-45deg) translateX(-50%);
}

figure.snip1249:hover:after,
figure.snip1249.hover:after {
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
  -webkit-transform: skew(-45deg) translateX(-75%);
  transform: skew(-45deg) translateX(-75%);
}
</style>