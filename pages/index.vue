<template>
  <div>
    <h1>You are on the home page</h1>
  </div>
</template>

<script setup>
setTimeout(() => {
  navigateTo("/about");
}, 5000);
</script>

<style lang="scss" scoped></style>
