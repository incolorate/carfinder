<script setup lang="ts">
const route = useRoute();
useHead({
  title: useTitleCase(`${route.params.name}`),
});

definePageMeta({
  layout: "custom",
});
</script>

<template>
  <CarDetailHero />
  <CarDetailAttributes />
  <CarDetailDescription />
  <CarDetailContact />
</template>
