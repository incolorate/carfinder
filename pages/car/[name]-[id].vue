<script setup lang="ts">
const route = useRoute();
const { cars } = useCars();
useHead({
  title: useTitleCase(`${route.params.name}`),
});

definePageMeta({
  layout: "custom",
});

const car = computed(() => {
  return cars.find((car) => car.id === parseInt(route.params.id as string));
});

if (!car.value) {
  throw createError({
    statusCode: 404,
    message: "Car not found",
  });
}
</script>

<template v-if="car">
  <CarDetailHero :car="car" />
  <CarDetailAttributes :features="car?.features" />
  <CarDetailDescription :description="car?.description" />
  <CarDetailContact />
</template>
