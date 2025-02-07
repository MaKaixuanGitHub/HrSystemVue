<template>
  <div class="welcome">
    <div class="content">
      <h1>Welcome to the HR Management System</h1>
      <p>Your one-stop solution for managing HR tasks efficiently.</p>
      <router-link to="/dashboard" class="btn">Get Started</router-link>
    </div>
    <div class="background">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.welcome {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: linear-gradient(135deg, #42b983, #38a1db);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.content {
  z-index: 2;
  max-width: 600px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}

.content h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.content p {
  font-size: 1.5rem;
  margin-bottom: 30px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.2rem;
  color: #42b983;
  background-color: white;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #f0f0f0;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circle {
  position: absolute;
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

.circle:nth-child(1) {
  top: 20%;
  left: 25%;
  animation-delay: 0s;
}

.circle:nth-child(2) {
  top: 50%;
  left: 75%;
  animation-delay: 2s;
}

.circle:nth-child(3) {
  top: 80%;
  left: 50%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
</style>