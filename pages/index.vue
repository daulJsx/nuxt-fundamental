<template>
  <Head>
    <Title>Nuxt - Home</Title>
    <Meta name="description" content="Nuxt Fundamental" />
    <Meta property="og:title" content="OG title" />
  </Head>

  <CustomTitle>
    You are on the home page, Try to click the button below
  </CustomTitle>

  <Todo />
</template>

<script setup>
useHead({
  title: "Nuxt Fundamental",
  meta: [{ name: "description", content: "My amazing site." }],
});
</script>

<style lang="scss" scoped></style>
