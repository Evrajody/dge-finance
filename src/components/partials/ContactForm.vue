<script setup>


</script>


<template>

  <div class="w-full px-5 lg:px-0 lg:max-w-2xl flex flex-col space-y-10">
    <div class="">
      <h3 class="text-lg font-medium text-finance-plot"> Avez - vous une préoccupations ? Ecrivez-nous ! </h3>
    </div>
  
    <form action="#" method="POST" class="">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

        <div class="col-span-2 md:col-span-1">
          <label for="full-name" class="block text-sm font-semibold leading-6 text-gray-900"> Nom & Prénom </label>
          <div class="mt-2.5">
            <input type="text" name="first-name" class="block w-full border-0 px-3.5 py-2.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset bg-finance-gray focus:bg-transparent  focus:ring-finance-blue sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="col-span-2 md:col-span-1">
          <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Adresse Email</label>
          <div class="mt-2.5">
            <input type="text" name="first-name" class="block w-full border-0 px-3.5 py-2.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset bg-finance-gray focus:bg-transparent focus:ring-finance-blue sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="col-span-2">
          <label for="subject" class="block text-sm font-semibold leading-6 text-gray-900"> Sujet </label>
          <div class="mt-2.5">
            <input type="text" name="first-name" class="block w-full border-0 px-3.5 py-2.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset bg-finance-gray focus:bg-transparent focus:ring-finance-blue sm:text-sm sm:leading-6">
          </div>
        </div>

 
        <div class="col-span-2">
          <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
          <div class="mt-2.5">
            <textarea name="message" id="message" rows="4" class="block w-full border-0 px-3.5 py-2.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset bg-finance-gray focus:bg-transparent focus:ring-finance-blue sm:text-sm sm:leading-6"></textarea>
          </div>
        </div>

      </div>
      <div class="mt-10">
        <button type="submit" class="block w-32 bg-transparent border-2 border-finance-blue px-3.5 py-2.5 text-center text-sm font-semibold hover:bg-finance-blue hover:text-white transition-all text-finance-blue"> Envoyer </button>
      </div>
    </form>
  </div>



</template>