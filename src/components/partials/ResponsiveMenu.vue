<script setup>

const props = defineProps({
  menuState: Boolean,
})

</script>


<template>
  <Transition name="nested">
    <div v-if="menuState" class="bg-white responsive-menu">
  
      <div class="py-3 px-5 text-black border border-b transition-all border-b-gray-200">
        <a href="/" class="font-medium">Acceuil</a>
      </div>
  
      <div class="py-3 px-5 text-black border border-b transition-all border-b-gray-200">
        <a href="#" class="font-medium">Présentation</a>
        <div class="z-10 py-2 mt-2 -ml-2 w-full bg-white transition-all group-hover:block">
          <a href="/presentation/actualites" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">
            Actualités
          </a>
          <a href="/presentation/mission" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">
            Mission
          </a>
          <a href="/presentation/organigramme" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">
            Organigramme
          </a>
          <a href="/presentation/anciens-directeurs" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">
            Anciens Directeurs
          </a>
          <a href="/presentation/directions" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">
            Directions
          </a>
        </div>
      </div>
  
  
      <div class="py-3 px-5 text-black border border-b transition-all cursor-pointer hover:text-black border-b-gray-200">
        <a href="#" class="font-medium">Publications</a>
        <div class="z-10 py-2 mt-2 -ml-2 w-full bg-white transition-all group-hover:block">
          <a href="/publications/documents-budgetaires" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">
            Documents budgétaires </a>
          <a href="/publications/documents-politiques-nationales"
            class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"> Documents
            Politiques Nationales
            (DPN)
          </a>
          <a href="/publications/documents-travail" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">
            Documents de travail </a>
          <a href="/publications/infra-annuels" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"> Infra
            annuels </a>
          <a href="/publications/rapef" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"> RAPEF </a>
        </div>
      </div>
  
      <div class="py-3 px-5 text-black border border-b transition-all cursor-pointer hover:text-black border-b-gray-200">
        <a href="#" class="font-medium">Séminaire et Conférences</a>
        <div class="z-10 py-2 mt-2 -ml-2 w-full bg-white transition-all group-hover:block">
          <a href="/seminaire-conference/jseb" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"> JSEB
          </a>
        </div>
      </div>
  
      <div class="py-3 px-5 text-black border border-b transition-all cursor-pointer hover:text-black border-b-gray-200">
        <a href="#" class="font-medium">Opportunités</a>
        <div class="z-10 py-2 mt-2 -ml-2 w-full bg-white transition-all group-hover:block">
          <a href="/opportunites/offre-de-stage" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">
            Offre de stage </a>
          <a href="/opportunites/appel-candidature" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">
            Appel à candidature </a>
        </div>
      </div>
    </div>
  </Transition>
</template>