<script setup lang="ts"></script>

<template>
  <header>
    <div class="navbar-brand">
      <a href="/">Nuxt App</a>
    </div>
    <div class="search-bar">
      <input type="text" placeholder="Search..." />
      <button type="button">
        <Icon name="uil:search" style="color: #f0a500" />
      </button>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: #fff;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 20px;
  position: sticky;
  top: 0;
  z-index: 10;
}
header a {
  color: #333;
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
.search-bar {
  display: flex;
  align-items: center;
  position: relative;
}
.search-bar input {
  padding: 20px 10px;
  border: none;
  border-radius: 3px;
  padding-right: 30px;
  color: #333;
  transition: linear 500ms;
}
.search-bar button {
  background: none;
  border: none;
  position: absolute;
  right: 5px;
  cursor: pointer;
  color: #333;
}

.search-bar input:focus {
  outline: none;
}

.search-bar input::after {
  content: "";
  width: 100%;
  color: #f0a500;
}
</style>
