<script setup>
const props = defineProps({
  listing: {
    type: Object,
    required: true,
  },
});
const emits = defineEmits(["deleteClick"]);
</script>

<template>
  <div class="shadow rounded overflow-hidden flex justify-between mb-4">
    <div class="flex">
      <img :src="listing.url" alt="" class="w-80 mr-3 h44" />
      <div class="p-3">
        <h1 class="text-2xl">{{ listing.name }}</h1>
        <p class="text-blue-500">${{ listing.price }}</p>
      </div>
    </div>
    <div class="p-3 flex">
      <NuxtLink
        class="text-blue-400 mr-5"
        :to="`/profile/listings/view/${listing.id}`"
        >View</NuxtLink
      >
      <p
        class="text-red-500 cursor-pointer"
        @click="emits(`deleteClick`, listing.id)"
      >
        Delete
      </p>
    </div>
  </div>
</template>
