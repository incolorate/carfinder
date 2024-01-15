<script setup>
const error = useError();
</script>

<template>
  <div class="h-screen flex justify-center items-center flex-col">
    <h1 class="text-8xl">{{ error.statusCode }}</h1>
    <p class="text-4xl mt-4">{{ error.message }}</p>
    <button
      @click="navigateTo('/')"
      class="text-2xl bg-blue-500 p-4 rounded-md mt-4 text-white"
    >
      Navigate to home
    </button>
  </div>
</template>
