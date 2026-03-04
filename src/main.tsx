/**
 * 应用入口文件
 * 创建 React 应用的根节点并挂载到 DOM
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

// 获取根 DOM 元素
const rootElement = document.getElementById('root');

// 如果根元素存在，则创建 React 根节点并渲染应用
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} else {
  console.error('Failed to find the root element');
}
