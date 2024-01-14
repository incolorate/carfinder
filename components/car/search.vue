<script setup lang="ts">
const location = ref<string>("");
const cityError = ref<boolean>(false);

const handleSearch = () => {
  if (!location.value) {
    cityError.value = true;
    return;
  }
  navigateTo(`/city/${location.value}/car`);
};
</script>

<template>
  <input
    type="text"
    class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none"
    placeholder="Search by city..."
    v-model="location"
    :class="{ 'border-2 border-red-500': cityError }"
  />
  <button class="bg-sky-500 px-10 text-white" @click="handleSearch">
    Search
  </button>
</template>
