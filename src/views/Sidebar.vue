<template>
  <aside class="w-64 bg-gray-800 text-white">
    <div class="p-4">
      <h1 class="text-xl font-bold">HR管理系统 Management System</h1>
    </div>
    <nav class="mt-4">
      <router-link
        v-for="item in menuItems"
        :key="item.path"
        :to="item.path"
        class="block px-4 py-2 hover:bg-gray-700"
        :class="{ 'bg-gray-700': currentRoute === item.path }"
      >
        <i :class="item.icon" class="mr-2"></i>
        {{ item.name }}
      </router-link>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const menuItems = [
  { name: "Dashboard", path: "/", icon: "fas fa-tachometer-alt" },
  { name: "员工一览", path: "/employee_list", icon: "fas fa-users" },
  { name: "Font Awesome Icons", path: "/icon", icon: "fas fa-briefcase" },
  { name: "Settings", path: "/settings", icon: "fas fa-cog" },
  { name: "EmployeeSearch", path: "/EmployeeSearch", icon: "fas fa-cog" },
  { name: "AddEmployee", path: "/add-employee", icon: "fas fa-cog" },
];

const currentRoute = computed(() => route.path);
</script>

<style scoped>
/* Add necessary styles for Sidebar */
</style>