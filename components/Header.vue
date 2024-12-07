<script setup lang="ts"></script>

<template>
  <header>
    <div class="navbar-brand">
      <a href="/">Nuxt App</a>
    </div>
    <div class="navbar-links">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/products">Products</nuxt-link>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 20px;
}
header a {
  color: #fff;
  text-decoration: none;
  margin: 0 15px;
  font-size: 18px;
}
header a:hover {
  color: #f0a500;
}
.navbar-brand {
  font-size: 24px;
  font-weight: 700;
}
.navbar-links {
  display: flex;
  align-items: center;
}
.navbar-links a {
  position: relative;
}
.navbar-links a::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  background-color: #f0a500;
  left: 50%;
  bottom: -5px;
  transition: width 0.3s, left 0.3s;
}
.navbar-links a:hover::after {
  width: 100%;
  left: 0;
}
</style>
