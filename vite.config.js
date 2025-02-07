import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
// https://vite.dev/config/
export default defineConfig({
  //默认配置vue插件
  plugins: [vue()],
  //修改启动的
  server: {
    host: '0.0.0.0', // 这个用于启动
    port: '8092', // 指定启动端口
    open: true, //启动后是否自动打开浏览器
    proxy: {
      //将以/user开头的请求代理到目标服务器
      '/user': {
        target: 'http:localhost:8081',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/user/, '')
      }
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
        "@c": resolve(__dirname, "src/components"),
      }
    },
  }
})
