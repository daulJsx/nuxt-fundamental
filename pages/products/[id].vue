<template>
  <div id="app" class="container">
    <div v-if="product" class="product-detail">
      <header>
        <nuxt-link to="/products" class="btn-back">Back</nuxt-link>
        <h2 class="product-title">{{ product.title }}</h2>
      </header>
      <img :src="product.image" :alt="product.title" />
      <p>Price: ${{ product.price }}</p>
      <p>Description: {{ product.description }}</p>
      <p>Category: {{ product.category }}</p>
      <p>Rating: {{ product.rating.rate }}</p>
      <p>Count: {{ product.rating.count }}</p>
    </div>
    <div v-else class="loading">
      <p>Loading product details...</p>
    </div>
  </div>
</template>

<script setup>
const { id } = useRoute().params;

// Fetch product data
const uri = `https://fakestoreapi.com/products/${id}`;
const { data: product } = await useFetch(uri);
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
}

header {
  display: flex;
  gap: 1rem;
  align-items: center;
}

header .product-title {
  font-size: large;
  color: #2e3440;
}

header .btn-back {
  background-color: #4a5568;
  padding: 10px 1rem;
  border-radius: 8px;
  color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.product-detail {
  background-color: #fff;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.product-detail h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 16px;
}
.product-detail p {
  font-size: 1.125rem;
  color: #4a5568;
  margin-bottom: 8px;
}
.product-detail img {
  width: 100%;
  height: 300px;
  object-fit: contain;
  border-radius: 8px;
  margin-bottom: 16px;
}
.loading {
  text-align: center;
  color: #4a5568;
  font-size: 1.125rem;
}
</style>
