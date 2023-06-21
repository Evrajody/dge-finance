<script setup>

const props = defineProps({
  directeur: Object,
})

</script>

<template>
  <figure class="snip1165 max-w-md">
    <img :src="directeur.image" class="object-cover object-center w-full" alt="directeur-image" />
    <figcaption class="flex flex-col items-center">
      <h3 class="flex gap-2">
        <span v-text="directeur.prenom"></span>
        <span class="uppercase" v-text="directeur.nom"></span>
      </h3>

      <div class="">
        <p class="text-center text-lg font-semibold leading-8" v-text="directeur.titre"> </p>
      </div>

      <div class="">
        <p class="text-xl text-finance-blue text-center font-extrabold" v-text="directeur.periode"> </p>
      </div>

    </figcaption>
  </figure>
</template>

<style>
figure.snip1165 {
  border-radius: 3px;
  position: relative;
  overflow: hidden;
  width: 100%;
  text-align: left;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.1);
}

figure.snip1165 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.35s cubic-bezier(0.25, 0.5, 0.5, 0.9);
  transition: all 0.35s cubic-bezier(0.25, 0.5, 0.5, 0.9);
}

figure.snip1165 figcaption {
  position: relative;
  background-color: #ffffff;
  padding: 20px;
}

figure.snip1165 h3 {
  position: absolute;
  bottom: 100%;
  padding: 10px 25px;
  border-radius: 0 5px 0 0;
  margin: 0;
  left: 0;
  font-weight: 400;
  background-color: #0E406E;
  color: #ffffff;
}

figure.snip1165 h3 span {
  font-weight: 800;
}

figure.snip1165:hover img,
figure.snip1165.hover img {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>