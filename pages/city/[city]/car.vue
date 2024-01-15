<script setup lang="ts">
const route = useRoute();
useHead({
  title: `${route.params.make ? route.params.make : "Cars"} in - ${
    route.params.city
  }`,
});
</script>

<template>
  <div>
    <div
      class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"
    >
      <div class="mt-32 flex">
        <NuxtErrorBoundary>
          <CarSideBar />
          <NuxtPage />
          <template #error="{ error }">
            <div class="mx-auto flex flex-col text-center">
              <p>Sorry somethig went wrong</p>
              <code>
                {{ error }}
              </code>
              <button
                class="text-2xl bg-blue-500 p-4 rounded-md"
                @click="error.value = null"
              >
                Go back
              </button>
            </div>
          </template>
        </NuxtErrorBoundary>
      </div>
    </div>
  </div>
</template>
