<script setup>
const route = useRoute();
const minPrice = ref(route.query.minPrice);
const maxPrice = ref(route.query.maxPrice);

const cars = await useFetchCars(route.params.city, {
  minPrice,
  maxPrice,
  make: route.params.make,
});
</script>

<template>
  <CarCards v-if="cars.length > 0" :cars="cars" />
  <h1 v-else class="text-2xl text-red-500">No cars in this city</h1>
</template>
