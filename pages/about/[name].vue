<template>
  <Head>
    <Title>Nuxt - {{ getNameFromRoute.params.name }}</Title>
  </Head>
  <LazyCustomTitle
    >Hi {{ getNameFromRoute.params.name }}! You are on the About Page, and it's
    dynamic</LazyCustomTitle
  >
  <LazyNestedcompNestedComponent />
</template>

<script setup>
const getNameFromRoute = useRoute();
</script>

<style lang="scss" scoped></style>
