<template>
  <Head>
    <Title>Nuxt - Home</Title>
    <Meta name="description" content="Nuxt Fundamental" />
    <Meta property="og:title" content="OG title" />
  </Head>

  <CustomTitle>You are on the home page</CustomTitle>
</template>

<script setup>
useHead({
  title: "Nuxt Fundamental",
  meta: [{ name: "description", content: "My amazing site." }],
});

setTimeout(() => {
  navigateTo("/about");
}, 5000);
</script>

<style lang="scss" scoped></style>
