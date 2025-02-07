<template>
  <div class="login-container">
    <div class="login-form">
      <div class="login">
        <h1>大连水杉软件技术有限公司HR管理系统</h1>
        <br />
        <form @submit.prevent="login">
          <div class="form-group">
            <div class="input-group mb-3">
              <span class="input-group-text">
                <i class="fa fa-user"></i>
              </span>
              <input v-model="username" type="text" class="form-control" placeholder="用户名" required />
            </div>
          </div>
          <div class="form-group">
            <div class="input-group mb-3">
              <span class="input-group-text">
                <i class="fa fa-key"></i>
              </span>
              <input v-model="password" type="password" class="form-control" placeholder="密  码" required />
            </div>
          <button type="submit" class="btn btn-primary w-100">登 录</button>
          </div>
        </form>
        
      </div>
      <AlertBox v-if="error" :message="errorMessage" />
    </div>
     
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import AlertBox from '/src/views/AlertBox.vue';

const username = ref<string>("");
const password = ref<string>("");

const error = ref(false);
const errorMessage = ref('');
const router = useRouter();

const login = async () => {
  // 模拟 API 调用
  const response = await fakeApiLogin(username.value, password.value);
  if (response.success) {
    // 保存用户信息到 localStorage
    localStorage.setItem('user', JSON.stringify(response.user));
    // 启动定时器
    startLogoutTimer();
    // 导航到首页
    router.push('/');
  } else {
    // 显示错误信息
    error.value = true;
    errorMessage.value = '错误：用户名或者密码错误！！！';
     // 重置 AlertBox 的可见状态
    setTimeout(() => {
      error.value = false;
    }, 5000); // 5秒后自动隐藏
  }
};

const fakeApiLogin = async (username: string, password: string) => {
  return new Promise<{ success: boolean, user: any }>((resolve) => {
    setTimeout(() => {
      if (username === 'admin' && password === 'pass') {
        resolve({ success: true, user: 'admin' });
      } else if (username === 'makx' && password === 'makx') {
        resolve({ success: true, user: 'Makxiauan' });
      } else if (username === 'gaoc' && password === 'gaoc') {
        resolve({ success: true, user: 'Gaochao' });
      } else if (username === 'zhoudx' && password === 'zhoudx') {
        resolve({ success: true, user: 'Zhoudongxue' });
      } else {
        resolve({ success: false, user: null });
      }
    }, 1000);
  });
};

// 定时器变量
let logoutTimer: ReturnType<typeof setTimeout> | null = null;

// 启动定时器，设置30分钟后自动退出登录
const startLogoutTimer = () => {
  if (logoutTimer) {
    clearTimeout(logoutTimer);
  }
  logoutTimer = setTimeout(() => {
    logout();
   }, 30 * 60 * 1000); // 30分钟
};

// 退出登录函数
const logout = () => {
  localStorage.removeItem('user');
  router.push('/login');
};

</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 8px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
}
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-image: url("../src/assets/back.jpg");
  background-size: cover;
  background-position: center;
}

.login-form {
  background-color: rgba(255, 255, 255, 0.4); /* 半透明白色背景 */
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
}

.form-group {
  margin-bottom: 10px;
}

.btn {
  margin-top: 10px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

</style>
