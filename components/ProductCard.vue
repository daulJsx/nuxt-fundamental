<template>
  <div class="product-card">
    <nuxt-link :to="`/products/${product.id}`">
      <NuxtImg
        :src="product.image"
        :alt="product.title"
        loading="lazy"
        class="product-image"
      />
      <h2>{{ product.title }}</h2>
      <div class="product-detail">
        <p>${{ product.price }}</p>
        <p>{{ product.category }}</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.product-card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #fff;
  padding: 1rem;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 256px;
  min-height: 250px;
  overflow: hidden;
  transition: transform 0.2s;
}

.product-image {
  width: 100%;
  height: 150px;
  object-fit: contain;
  margin-bottom: 1rem;
}

.product-detail {
  align-self: end;
  bottom: 0;
}

.product-card h2 {
  font-size: 1em;
  margin: 10px 0;
  color: #333;
  flex-grow: 1;
}

.product-card p {
  font-size: 0.9em;
  color: #777;
  margin: 5px 0;
}

.product-card:hover {
  transform: translateY(-5px);
}
</style>
