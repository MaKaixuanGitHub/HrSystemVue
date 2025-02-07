// src/axios.js
import axios from 'axios';

const axiosInstance  = axios.create({
  baseURL: 'http://localhost:8081/', // 你的 Spring Boot 后端 URL
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
});

// 请求拦截器  
axiosInstance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么，例如添加 token  
    const token = localStorage.getItem('token'); // 假设 token 存储在 localStorage 中  localStorage.setItem('token', 'ashduiasd8796789876')；
    console.log("token==" + token)
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么  
    return Promise.reject(error);
  }
);

// 响应拦截器  
axiosInstance.interceptors.response.use(
  (response) => {
    // 对响应数据做些什么  
    return response; // 直接返回响应数据  
  },
  (error) => {
    
    // 对响应错误做些什么  
    if (error.response) {
      // 服务器响应状态码不为 2xx  
      console.error('Error:', error.response.data);
    } else {
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);
export default axiosInstance ;