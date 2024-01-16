<script setup>
definePageMeta({
  layout: "custom",
});
const { makes } = useCars();

const info = useState("adInfo", () => {
  return {
    make: "",
    model: "",
    year: "",
    miles: "",
    price: "",
    features: "",
    city: "",
    seats: "",
    description: "",
    image: null,
  };
});

const inputs = [
  {
    id: 1,
    title: "Model *",
    name: "model",
    placeholder: "Civic",
  },
  {
    id: 2,
    title: "Year *",
    name: "year",
    placeholder: "2019",
  },
  {
    id: 3,
    title: "Miles *",
    name: "miles",
    placeholder: "10000",
  },
  {
    id: 4,
    title: "Price *",
    name: "price",
    placeholder: "10000",
  },
  {
    id: 5,
    title: "City *",
    name: "city",
    placeholder: "New York",
  },
  {
    id: 6,
    title: "Seats *",
    name: "seats",
    placeholder: "4",
  },
  {
    id: 7,
    title: "Description *",
    name: "description",
    placeholder: "This is a great car",
  },
  {
    id: 8,
    title: "Features *",
    name: "features",
    placeholder: "Leather seats, sunroof, etc",
  },
];

const onChangeInput = (data, key) => {
  info.value[key] = data;
};
</script>

<template>
  <div>
    <div class="mt-24">
      <h1 class="text-6xl">Create a new listing</h1>
    </div>
    <div class="shadow rounded p-3 flex flex-wrap justify-between">
      <CarAdSelect
        title="Make *"
        :options="makes"
        @change-input="onChangeInput"
        name="make"
      />
      <CarAdInput
        v-for="input in inputs"
        :key="input.id"
        :title="input.title"
        :name="input.name"
        :placeholder="input.placeholder"
        @change-input="onChangeInput"
      />
      <CarAdImage @change-input="onChangeInput" />
    </div>
  </div>
</template>
