<template>
  <div class="flex h-screen bg-gray-100">
    <Sidebar v-if="showMenu" />
    <div class="flex-1 flex flex-col overflow-hidden">
      <Header v-if="showMenu" />
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
        <router-view></router-view>
      </main>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import Header from '/src/views/Header.vue';
import Sidebar from '/src/views/Sidebar.vue';
import Footer from '/src/views/Footer.vue';

const router = useRouter();
const route = useRoute();

const showMenu = computed(() => route.name !== "Login");

onMounted(() => {
  const user = localStorage.getItem("user");
  if (!user) {
    router.push("/login");
  }
});
</script>

<style>
/* Add necessary styles for App component */
</style>