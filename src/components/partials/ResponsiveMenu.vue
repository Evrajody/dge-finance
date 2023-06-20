<script setup>

const props = defineProps({
  menuState: Boolean,
})

</script>


<template>
  <Transition name="nested">
    <div v-if="menuState" class="responsive-menu transition-all duration-300 w-full bg-white">
  
      <div class="border border-b border-b-gray-200 text-black transition-all py-3 px-5">
        <a href="/" class="font-medium">Acceuil</a>
      </div>
  
      <div class="border border-b border-b-gray-200 text-black transition-all py-3 px-5">
        <a href="#" class="font-medium">Présentation</a>
        <div class="group-hover:block mt-2 -ml-2 py-2 bg-white w-full z-10 transition-all">
          <a href="/presentation/actualites" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Actualités
          </a>
          <a href="/presentation/mission" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Mission
          </a>
          <a href="/presentation/organigramme" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Organigramme
          </a>
          <a href="/presentation/anciens-directeurs" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Anciens Directeurs
          </a>
          <a href="/presentation/directions" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Directions
          </a>
        </div>
      </div>
  
  
      <div class="border border-b border-b-gray-200 text-black transition-all hover:text-black cursor-pointer py-3 px-5">
        <a href="#" class="font-medium">Publications</a>
        <div class="group-hover:block mt-2 -ml-2 py-2 w-full bg-white z-10 transition-all">
          <a href="/publications/documents-budgetaires" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Documents budgétaires </a>
          <a href="/publications/documents-politiques-nationales"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Documents
            Politiques Nationales
            (DPN)
          </a>
          <a href="/publications/documents-travail" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Documents de travail </a>
          <a href="/publications/infra-annuels" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Infra
            annuels </a>
          <a href="/publications/rapef" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> RAPEF </a>
        </div>
      </div>
  
      <div class="border border-b border-b-gray-200 text-black transition-all hover:text-black cursor-pointer py-3 px-5">
        <a href="#" class="font-medium">Séminaire et Conférences</a>
        <div class="group-hover:block mt-2 -ml-2 py-2 w-full bg-white z-10 transition-all">
          <a href="/seminaire-conference/jseb" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> JSEB
          </a>
        </div>
      </div>
  
      <div class="border border-b border-b-gray-200 text-black transition-all hover:text-black cursor-pointer py-3 px-5">
        <a href="#" class="font-medium">Opportunités</a>
        <div class="group-hover:block mt-2 -ml-2 py-2 w-full bg-white z-10 transition-all">
          <a href="/opportunites/offre-de-stage" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Offre de stage </a>
          <a href="/opportunites/appel-candidature" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Appel à candidature </a>
        </div>
      </div>
    </div>
  </Transition>
</template>