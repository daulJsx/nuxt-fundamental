<template>
  <Suspense>
    <template #default>
      <div v-if="products.length > 0" class="products-container">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </template>

    <template #fallback>
      <div class="container">
        <Icon name="svg-spinners:bars-rotate-fade" class="loading" />
      </div>
    </template>
  </Suspense>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useProductsStore } from "~/stores/products";
import ProductCard from "~/components/ProductCard.vue";

const productsStore = useProductsStore();

const products = computed(() => productsStore.getAllProducts);

// Ambil produk saat komponen di-mount
onMounted(() => {
  if (products.value.length === 0) {
    productsStore.fetchProducts();
  }
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.loading {
  font-size: 2rem;
}

.products-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 1rem;
}
</style>
