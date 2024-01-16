<script setup>
const props = defineProps({
  title: String,
  name: String,
  placeholder: String,
  key: String,
});

const emits = defineEmits(["changeInput"]);
const inputValue = ref(null);

const onChange = () => {
  emits("changeInput", inputValue.value, props.name);
};
</script>

<template>
  <div class="flex flex-col mt-2">
    <label class="text-cyan-400 mb-1 text-sm" :for="key"> {{ title }}</label>
    <input
      type="text"
      :placeholder="placeholder"
      class="p-2 border w-200 rounded"
      :id="key"
      @input="onChange"
      v-model="inputValue"
    />
  </div>
</template>
