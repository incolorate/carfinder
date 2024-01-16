<script setup lang="ts">
const route = useRoute();
useHead({
  title: useTitleCase(`${route.params.name}`),
});

const { data: car } = await useFetchCar(route.params.id);
definePageMeta({
  layout: "custom",
});
</script>

<template v-if="car">
  <CarDetailHero :car="car" />
  <CarDetailAttributes :features="car?.features" />
  <CarDetailDescription :description="car?.description" />
  <CarDetailContact />
</template>
