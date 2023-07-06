<template>
  <div class="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl">
    <div class="flex justify-between items-center mb-4">
      <div class="flex items-center">
        <div class="mr-2">
          <!-- Icone -->
          <svg class="w-6 h-6 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Icône d'un document -->
            <path d="M4 6V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V6Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 2V8H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 13H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 17H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 9H9H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div>
          <!-- Titre -->
          <h3 class="text-lg font-medium text-gray-800">{{ title }}</h3>
          <!-- Auteur -->
          <p class="text-sm text-gray-600">{{ author }}</p>
        </div>
      </div>
      <div class="flex items-center">
        <!-- Compteur de lectures -->
        <div class="mr-2">
          <svg class="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Icône d'un œil -->
            <path d="M12 8C10.9391 8 10.0783 8.42143 9.57857 9.07857C9.07886 9.73571 9 10.5714 9 11.5C9 12.4286 9.07886 13.2643 9.57857 13.9214C10.0783 14.5786 10.9391 15 12 15C13.0609 15 13.9217 14.5786 14.4214 13.9214C14.9211 13.2643 15 12.4286 15 11.5C15 10.5714 14.9211 9.73571 14.4214 9.078" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 17H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 9H9H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="text-sm text-gray-600">{{ views }} vues</span>
        </div>
        <!-- Compteur de téléchargements -->
        <div>
          <svg class="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Icône d'une flèche vers le bas -->
            <path d="M12 15L17 10L19 12L12 19L5 12L7 10L12 15Z" fill="currentColor"/>
          </svg>
          <span class="text-sm text-gray-600">{{ downloads }} téléchargements</span>
        </div>
      </div>
    </div>
    <!-- Date de publication -->
    <p class="mb-2 text-xs text-gray-500">{{ publicationDate }}</p>
    <!-- Boutons de lecture et de téléchargement -->
    <div class="flex justify-end">
      <button class="py-2 px-4 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600">Lire</button>
      <button class="py-2 px-4 ml-2 text-sm text-white bg-green-500 rounded-lg hover:bg-green-600">Télécharger</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    views: {
      type: Number,
      required: true
    },
    downloads: {
      type: Number,
      required: true
    },
    publicationDate: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
/* Ajoutez ici vos styles personnalisés si nécessaire */
</style>

<!-- <div class="flex fin-header">

  <div class="px-3 pt-5 w-1/4 h-full">
    <h3 class="py-3 text-xl font-semibold text-finance-blue"> Nos indicateurs clés </h3>

    <div class="flex flex-col gap-3">
      <article class="flex gap-4 items-center p-4 rounded-lg bg-finance-blue">
        <span class="p-3 bg-blue-100 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </span>

        <div>
          <p class="text-sm text-white">Total Sales</p>
          <p class="text-xl font-medium text-white">$240.94</p>

        </div>
      </article>

      <article class="flex gap-4 items-center p-4 rounded-lg bg-finance-blue">
        <span class="p-3 bg-blue-100 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </span>

        <div>
          <p class="text-sm text-white">Total Sales</p>
          <p class="text-xl font-medium text-white">$240.94</p>

        </div>
      </article>


      <article class="flex gap-4 items-center p-4 rounded-lg bg-finance-blue">
        <span class="p-3 bg-blue-100 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </span>

        <div>
          <p class="text-sm text-white">Total Sales</p>
          <p class="text-xl font-medium text-white">$240.94</p>

        </div>
      </article>

      <article class="flex gap-4 items-center p-4 rounded-lg bg-finance-blue">
        <span class="p-3 bg-blue-100 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </span>

        <div>
          <p class="text-sm text-white">Total Sales</p>
          <p class="text-xl font-medium text-white">$240.94</p>

        </div>
      </article>
    </div>




  </div>

  <div class="w-3/4 h-full bg-finance-plot">
    <Sliders />
  </div>


</div> -->


<!-- <div class="flex flex-col gap-12 justify-center items-center my-20 mx-auto lg:container">

  <ul
    class="grid grid-flow-col items-center justify-center space-x-10 w-full lg:w-[90%] text-center border-b border-gray-200 text-finance-late">
    <li @click="setCurrentTab(index)" v-for="item, index in directions" :class="{'active': currentTab == index}" class="border-b-2 border-transparent hover:border-finance-blue">
      <a href="#" class="flex py-4">
      {{ item.nom }}
      </a>
    </li>
  </ul>

  <div class="tab-content w-full lg:w-[90%]">

    <div class="grid grid-cols-1 gap-8 items-center place-items-center px-5 w-full md:grid-cols-2">

      <div v-for="item in directions[currentTab].directions" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
        class="object-fill object-bottom overflow-hidden self-stretch w-full rounded-md shadow-md transition-shadow duration-300 hover:shadow-lg card-finance">
        <div class="flex flex-col justify-between py-4 px-4 h-full mask">
          <h2 class="text-xl font-bold text-white"> {{item.nom }}</h2>

          <div class="flex justify-end items-center mt-4">
            <a :href="item.link"
              class="flex gap-2 items-center py-2 px-4 text-sm font-medium text-black bg-white rounded-md transition-colors duration-300 hover:bg-gray-50">
              <IcRoundRemoveRedEye />
              Détails
            </a>
          </div>
        </div>

      </div>


    </div>


  </div>

</div> -->
