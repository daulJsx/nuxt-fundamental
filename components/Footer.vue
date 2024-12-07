<script setup lang="ts"></script>

<template>
  <footer>
    <div class="social-icons">
      <a href="https://github.com" target="_blank">
        <Icon name="uil:github" style="color: #333" />
      </a>
      <a href="https://linkedin.com" target="_blank">
        <Icon name="uil:linkedin" style="color: #333" />
      </a>
    </div>
    <p>&copy; 2024 Daffaulhaq. All rights reserved.</p>
  </footer>
</template>

<style scoped>
footer {
  background-color: #fff;
  color: #333;
  padding: 20px;
  text-align: center;
}
footer .social-icons {
  margin: 10px 0;
}
footer .social-icons a {
  margin: 0 10px;
  text-decoration: none;
  font-size: 1.5em;
}
footer .social-icons a:hover {
  color: #ddd;
}
</style>
