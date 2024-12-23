// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  css: [
    "@/assets/styles/main.scss", // Lokasi file SCSS global
  ],

  ssr: false,
  modules: ["@nuxt/icon", "@nuxt/image"],
});