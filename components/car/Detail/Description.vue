<script setup>
const props = defineProps({
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="mt-5">
    <p class="mb-10">
      {{ description }}
    </p>
  </div>
</template>
