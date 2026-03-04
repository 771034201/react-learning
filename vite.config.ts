/**
 * Vite 配置文件
 * 定义项目的构建和开发服务器配置
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 导出 Vite 配置
// https://vite.dev/config/
export default defineConfig({
  // 配置 React 插件
  plugins: [react()],

  // 配置开发服务器
  server: {
    // 开发服务器端口
    port: 3000,
    // 自动打开浏览器
    open: true,
    // 主机名
    host: true,
  },

  // 配置构建选项
  build: {
    // 输出目录
    outDir: 'dist',
    // 资源内联限制
    assetsInlineLimit: 4096,
    // 源码映射
    sourcemap: false,
    // 压缩
    minify: 'terser',
    // 块大小警告限制 (KB)
    chunkSizeWarningLimit: 1000,
  },

  // 配置路径别名
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
