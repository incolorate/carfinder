<script setup>
const props = defineProps({
  cars: {
    type: Object,
    required: true,
  },
});

const favorite = useLocalStorage("favorite", {});

const handleFavorite = (id) => {
  if (id in favorite.value) {
    delete favorite.value[id];
  } else {
    favorite.value[id] = true;
  }
};
</script>

<template>
  <div class="w-full">
    <ClientOnly>
      <CarCard
        v-for="car in cars"
        :key="car.id"
        :car="car"
        @favor="handleFavorite"
        :favored="car.id in favorite"
      />
    </ClientOnly>
  </div>
</template>
