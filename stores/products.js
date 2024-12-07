import debounce from "lodash/debounce";
import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [],
    isLoading: false,
    isLoaded: false,
    error: null,
  }),

  actions: {
    fetchProducts: debounce(async function (forceReload = false) {
      if (this.isLoaded && !forceReload) return;

      this.isLoading = true;
      this.error = null;

      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        this.products = data;
        this.isLoaded = true;
      } catch (error) {
        this.error = "Failed to load products. Please try again.";
        console.error("Error fetching products:", error);
      } finally {
        this.isLoading = false;
      }
    }, 300), // Debounce dengan delay 300ms
  },

  getters: {
    getAllProducts: (state) => state.products,
    isFetching: (state) => state.isLoading,
    hasError: (state) => state.error,
  },
});
