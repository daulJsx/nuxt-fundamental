<template>
  <div v-if="products">
    <div class="products-container">
      <div v-for="product in products" :key="product.id" class="product-card">
        <nuxt-link :to="`/products/${product.id}`">
          <img :src="product.image" :alt="product.title" />
          <h2>{{ product.title }}</h2>
          <div class="product-detail">
            <p>${{ product.price }}</p>
            <p>{{ product.category }}</p>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
  <div v-else><p>Loading product details...</p></div>
</template>

<script setup>
useHead({
  title: "Nuxt | Home",
  meta: [{ name: "description", content: "My amazing site." }],
});

import { useProductsStore } from "~/stores/products";

// Ambil store produk
const productsStore = useProductsStore();

// Ambil produk dari store
const products = productsStore.getAllProducts;

// Ambil produk saat komponen di-mount
onMounted(() => {
  productsStore.fetchProducts();
});
</script>

<style lang="scss" scoped>
.products-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 1rem;
}

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

.product-card img {
  width: 100%;
  height: 150px;
  object-fit: contain; /* Menjaga gambar tetap proporsional */
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
  flex-grow: 1; /* Menjaga posisi teks untuk layout yang seragam */
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
