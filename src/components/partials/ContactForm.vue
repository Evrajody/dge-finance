<script setup>


</script>


<template>

  <div class="flex flex-col px-5 space-y-10 w-full lg:px-0 lg:max-w-2xl">
    <div class="">
      <h3 class="text-lg font-medium text-finance-plot"> Avez - vous une préoccupations ? Ecrivez-nous ! </h3>
    </div>
  
    <form action="#" method="POST" class="">
      <div class="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">

        <div class="col-span-2 md:col-span-1">
          <label for="full-name" class="block text-sm font-semibold leading-6 text-gray-900"> Nom & Prénom </label>
          <div class="mt-2.5">
            <input type="text" name="first-name" class="block py-2.5 px-3.5 w-full text-gray-900 border-0 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:bg-transparent focus:ring-1 focus:ring-inset placeholder:text-gray-400 bg-finance-gray focus:ring-finance-blue">
          </div>
        </div>

        <div class="col-span-2 md:col-span-1">
          <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Adresse Email</label>
          <div class="mt-2.5">
            <input type="text" name="first-name" class="block py-2.5 px-3.5 w-full text-gray-900 border-0 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:bg-transparent focus:ring-1 focus:ring-inset placeholder:text-gray-400 bg-finance-gray focus:ring-finance-blue">
          </div>
        </div>

        <div class="col-span-2">
          <label for="subject" class="block text-sm font-semibold leading-6 text-gray-900"> Sujet </label>
          <div class="mt-2.5">
            <input type="text" name="first-name" class="block py-2.5 px-3.5 w-full text-gray-900 border-0 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:bg-transparent focus:ring-1 focus:ring-inset placeholder:text-gray-400 bg-finance-gray focus:ring-finance-blue">
          </div>
        </div>

 
        <div class="col-span-2">
          <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
          <div class="mt-2.5">
            <textarea name="message" id="message" rows="4" class="block py-2.5 px-3.5 w-full text-gray-900 border-0 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:bg-transparent focus:ring-1 focus:ring-inset placeholder:text-gray-400 bg-finance-gray focus:ring-finance-blue"></textarea>
          </div>
        </div>

      </div>
      <div class="mt-10">
        <button type="submit" class="block py-2.5 px-3.5 w-32 text-sm font-semibold text-center bg-transparent border-2 transition-all hover:text-white border-finance-blue text-finance-blue hover:bg-finance-blue"> Envoyer </button>
      </div>
    </form>
  </div>

</template>