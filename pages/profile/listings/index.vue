<script setup>
definePageMeta({
  layout: "custom",
  middleware: ["auth"],
});

const { listings } = useCars();
</script>

<template>
  <div>
    <div class="flex justify-between mt-24 items-center">
      <h1 class="text-xl">My listings</h1>
      <NuxtLink
        to="profile/listings/create"
        class="text-xl text-blue-500 w-9 h-9"
        >+</NuxtLink
      >
    </div>
    <div class="shadow rounded p-3 mt-5">
      <CarListingCard
        v-for="listing in listings"
        :key="listing.id"
        :listing="listing"
      />
    </div>
  </div>
</template>
