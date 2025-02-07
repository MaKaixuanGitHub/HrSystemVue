# adminLte

> npm install --global yarn
>
> yarn config set registry https://registry.npm.taobao.org
>
> yarn install
>
> yarn run dev

在 Vue 项目中，使用 `mock.js` 来模拟 API 接口非常常见以便于前端开发。以下是创建和配置 `mock.js` 的一些基本步骤和示例。

### 1. 安装 Mock.js

首先，确保你的项目中已经安装了 `mockjs`。在项目根目录下运行以下命令：

```bash
npm install mockjs --save-dev
```

### 2. 创建 Mock 服务器

在你的 Vue 项目中，可以创建一个专门用于模拟请求的文件，比如 `mock.js`，通常放在 `src` 目录下。

#### 示例 `mock.js` 文件

```javascript
// src/mock.js
import Mock from 'mockjs';

// 定义模拟数据
// 这里使用 Mock.Random 来生成随机数据
const Random = Mock.Random;

Mock.mock('/api/user', 'get', {
  code: 200,
  message: 'success',
  data: {
    id: Random.id(),
    name: Random.name(),
    age: Random.integer(18, 60),
    email: Random.email(),
  },
});

// 可以添加更多的接口
Mock.mock('/api/products', 'get', {
  code: 200,
  message: 'success',
  'data|10': [
    {
      id: '@id',
      name: '@word(3, 7)',
      price: '@float(10, 100, 2, 2)',
      description: '@sentence(5, 10)',
    },
  ],
});

// 测试接口
Mock.mock('/api/test', 'post', (options) => {
  console.log('Received data', JSON.parse(options.body));
  return {
    code: 200,
    message: 'Data received successfully',
  };
});
```

### 3. 在 Vue 项目中引入 Mock.js

在你的 Vue 项目中需要引入刚才创建的 `mock.js` 文件。通常可以在 `main.js` 中引入，也可以在特定的组件中引入。

#### 在 `main.js` 中引入

```javascript
// src/main.js
import Vue from 'vue';
import App from './App.vue';
import './mock'; // 引入 mock.js

new Vue({
  render: h => h(App),
}).$mount('#app');
```

### 4. 使用模拟接口

在你的 Vue 组件中，你可以像使用真实 API 一样使用这些模拟的接口。

#### 示例组件

```javascript
<template>
  <div>
    <h1>User Info</h1>
    <p>ID: {{ user.id }}</p>
    <p>Name: {{ user.name }}</p>
    <p>Age: {{ user.age }}</p>
    <p>Email: {{ user.email }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {},
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    async fetchUser() {
      try {
        const response = await axios.get('/api/user');
        this.user = response.data.data; // 根据模拟的返回结构修改
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    },
  },
};
</script>
```

### 5. 运行项目

确保运行你的 Vue 项目，通过 `npm run serve` 等命令，如果一切设置正确，你应该能看到你从 Mock.js 模拟的 API 返回的数据了。

### 总结

- 使用肯定要指定 API 路径、HTTP 方法和返回的数据结构。
- 可以通过 `Mock.Random` 提供的各种方法来生成随机数据。
- 确保在开发环境下使用 Mock.js，生产环境中应移除或禁用。

