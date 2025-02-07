<template>
  <div class="not-found">
    <div class="content">
      <h1>404</h1>
      <p>Page Not Found</p>
      <p>Sorry, the page you are looking for does not exist.</p>
      <router-link to="/" class="home-link">Go back to Home</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: linear-gradient(135deg, #ff4081, #81d4fa);
  color: white;
  text-align: center;
}

.content {
  max-width: 500px;
  padding: 20px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
}

h1 {
  font-size: 6rem;
  margin: 0;
  font-weight: bold;
  animation: bounce 1s infinite;
}

p {
  font-size: 1.2rem;
  margin: 10px 0;
}

.home-link {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #42b983;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.home-link:hover {
  background-color: #2c8c6e;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}
</style>