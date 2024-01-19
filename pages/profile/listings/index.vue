<script setup>
definePageMeta({
  layout: "custom",
  middleware: ["auth"],
});

const user = useSupabaseUser();

const { data: listings, refresh } = await useFetch(
  `/api/car/listings/user/${user.value.id}`
);

const handleDelete = async (id) => {
  await $fetch(`/api/car/listings/${id}`, {
    method: "DELETE",
  });
  refresh();
};
</script>

<template>
  <div>
    <div class="flex justify-between mt-24 items-center">
      <h1 class="text-xl">My listings</h1>
      <NuxtLink to="listings/create" class="text-xl text-blue-500 w-9 h-9"
        >+</NuxtLink
      >
    </div>
    <div class="shadow rounded p-3 mt-5">
      <CarListingCard
        v-for="listing in listings"
        :key="listing.id"
        :listing="listing"
        @delete-click="handleDelete"
      />
    </div>
  </div>
</template>
