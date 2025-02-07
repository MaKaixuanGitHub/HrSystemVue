<template>
  <header class="bg-white shadow">
    <div class="flex items-center justify-between px-6 py-4">
      <h2 class="text-xl font-semibold">{{ currentPage }}</h2>
      <div class="flex items-center">
        <button class="p-2 hover:bg-gray-100 rounded-full">
          <code>
            <i class="fas fa-bell"></i>&nbsp;<font style="color: orange">未读消息</font>
          </code>
        </button>
        <button class="p-2 hover:bg-gray-100 rounded-full ml-2">
          <code>
            <i class="fas fa-user"></i>&nbsp;Hello&nbsp;<font style="color: green">{{ userName }}</font>
          </code>
        </button>
        <button class="p-2 hover:bg-gray-100 rounded-full ml-2">
          <code>
            <i class="fa fa-power-off" @click="logout">
              <font style="color: red">&nbsp;退出登录</font>
            </i>
          </code>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const userName = computed(() => localStorage.getItem("user"));

const logout = () => {
  localStorage.removeItem("user");
  router.push("/login");
};

const menuItems = [
  { name: "Dashboard", path: "/", icon: "fas fa-tachometer-alt" },
  { name: "员工一览", path: "/employee_list", icon: "fas fa-users" },
  { name: "Font Awesome Icons", path: "/icon", icon: "fas fa-briefcase" },
  { name: "Settings", path: "/settings", icon: "fas fa-cog" },
];

const currentPage = computed(() => {
  const item = menuItems.find((item) => item.path === route.path);
  return item ? item.name : "";
});
</script>

<style scoped>
/* Add necessary styles for Header */
</style>