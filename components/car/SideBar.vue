<script setup>
const route = useRoute();
const router = useRouter();
const showModal = ref({
  location: false,
  make: false,
  price: false,
});
const city = ref(route.params.city);
const priceRange = ref({
  min: "",
  max: "",
});

const { makes } = useCars();

const updateModal = (modal) => {
  showModal.value[modal] = !showModal.value[modal];
};

const onChangeLocation = () => {
  if (!city.value) return;
  if (!isNaN(parseInt(city.value))) {
    throw createError({
      statusCode: 404,
      message: "City not found",
    });
  }
  updateModal("location");
  navigateTo(`/city/${city.value}/car/${route.params.make}`);
};

const onChangeMake = (make) => {
  updateModal("make");
  navigateTo(`/city/${route.params.city}/car/${make}`);
};

const onChangePrice = () => {
  updateModal("price");
  if (priceRange.value.max && priceRange.value.min) {
    if (priceRange.value.max < priceRange.value.min) {
      throw createError({
        statusCode: 400,
        message: "Max price must be greater than min price",
      });
    } else {
      router.push({
        query: {
          ...route.query,
          minPrice: priceRange.value.min,
          maxPrice: priceRange.value.max,
        },
      });
    }
  }
};

const priceRangeText = computed(() => {
  const minPrice = route.query.minPrice;
  const maxPrice = route.query.maxPrice;

  if (!minPrice && !maxPrice) {
    return "All";
  } else if (!minPrice && maxPrice) {
    return `< $${maxPrice}`;
  } else if (minPrice && !maxPrice) {
    return `> $${minPrice}`;
  } else {
    return `$${minPrice} - $${maxPrice}`;
  }
});
</script>

<template>
  <div class="shadow border w-64 mr-10 z-30 h-[190px]">
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Location</h3>
      <h3 class="text-blue-400 capitalize" @click="updateModal('location')">
        {{ route.params.city }}
      </h3>
      <div
        class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white"
        v-if="showModal.location"
      >
        <input type="text" class="border p-1 rounded" v-model="city" />
        <button
          class="bg-blue-400 w-full mt-2 rounded text-white p-1"
          @click="onChangeLocation()"
        >
          Apply
        </button>
      </div>
    </div>

    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <div @click="updateModal('make')" class="flex justify-around w-full">
        <h3>Make</h3>
        <h3 class="text-blue-400 capitalize">
          {{ route.params.make ? route.params.make : "All" }}
        </h3>
      </div>
      <div
        class="absolute border shadow left-56 p-5 top-1 -m-1 w-[600px] flex justify-between flex-wrap bg-white"
        v-if="showModal.make"
      >
        <h4
          v-for="make in makes"
          :key="make"
          class="w-1/3"
          @click="onChangeMake(make)"
        >
          {{ make }}
        </h4>
      </div>
    </div>

    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3 @click="updateModal('price')">Price</h3>
      <h3 class="text-blue-400 capitalize">{{ priceRangeText }}</h3>
      <div
        class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white"
        v-if="showModal.price"
      >
        <input
          type="number"
          placeholder="min"
          v-model="priceRange.min"
          class="border p-1 rounded"
        />
        <input
          type="number"
          placeholder="max"
          v-model="priceRange.max"
          class="border p-1 rounded"
        />
        <button
          class="bg-blue-400 w-full mt-2 rounded text-white p-1"
          @click="onChangePrice()"
        >
          Apply
        </button>
      </div>
    </div>
  </div>
</template>
