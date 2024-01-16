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
  <CarCards :cars="cars" />
</template>
