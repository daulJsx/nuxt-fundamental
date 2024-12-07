<template>
  <Suspense>
    <template #default>
      <div v-if="product" class="container">
        <main>
          <ProductDetails :product="product" />
        </main>
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
import { computed, onMounted } from "vue";
import { useRoute } from "nuxt/app";
import { useProductsStore } from "~/stores/products";
const ProductDetails = defineAsyncComponent(() =>
  import("@/components/ProductDetails.vue")
);

const { id } = useRoute().params;
const productsStore = useProductsStore();

// Ambil produk berdasarkan ID
const product = computed(() => {
  return productsStore.products.find((prod) => prod.id === parseInt(id));
});

// Fetch data jika produk belum ada di store
onMounted(() => {
  if (!product.value) {
    productsStore.fetchProducts();
  }
});
</script>

<style lang="scss" scoped>
.container {
  padding: 1rem;
}
</style>
