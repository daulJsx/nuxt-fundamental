<template>
  <div class="image">
    <NuxtImg :src="image" :alt="alt" />
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.image {
  padding-top: 15px;
  width: 100%;

  img {
    display: block;
    max-width: 256px;
    height: auto;
    mix-blend-mode: multiply;
  }
}
</style>
