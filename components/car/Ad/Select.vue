<script setup>
const props = defineProps({
  title: String,
  name: String,
  options: Array,
});
const emits = defineEmits(["changeInput"]);
const selected = ref(null);

const onChange = () => {
  emits("changeInput", selected.value, props.name);
};
</script>

<template>
  <div class="flex flex-col w-[48%] mt-2">
    <label class="text-cyan-400 mb-1 text-sm" :for="title"> {{ title }}</label>
    <select
      class="p-2 border w-100 rounded"
      :id="title"
      @change="onChange"
      v-model="selected"
    >
      <option v-for="option in options" :key="option.id" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>
