/*
 * @Author: 万帅 771034201@qq.com
 * @Date: 2026-02-03 10:24:29
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Description:
 */
/**
 * App 组件
 * React 应用的根组件，包含计数器示例
 * @module App
 */

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { Test } from './components/Test';
import { Card } from './components/Card';
import { ReducerDemo } from './components/ReducerDemo';
import { ShoppingCar } from './components/ShoppingCar';
import { useHistory } from './hooks/useHistory';
import { DeferredValueDemo } from './views/DeferredValueDemo';
import { EffectDemo } from './views/EffectDemo';

/**
 * 主应用组件
 * @returns 返回应用界面的 JSX 元素
 */
/**
 * 应用主组件，负责渲染整个应用的UI结构和路由逻辑
 *
 * @returns {JSX.Element} 返回应用的根组件结构
 *
 * @description
 * 1. 使用useState管理计数器状态
 * 2. 使用自定义的useHistory Hook获取当前路径和导航方法
 * 3. 根据当前路径渲染不同的页面内容
 *   - '/'路径: 渲染首页内容，包含计数器、测试组件和功能演示组件
 *   - '/aaa'路径: 渲染AAA页面
 *   - '/bbb'路径: 渲染BBB页面
 *   - '/DeferredValueDemo'路径: 渲染DeferredValueDemo组件
 *   - 默认路径: 渲染与首页相同的内容
 * 4. 提供导航按钮用于切换不同路由
 * 5. 显示Vite和React的logo链接
 */
function App() {
  // 使用 useState Hook 管理计数器状态
  const [count, setCount] = useState<number>(0);
  const { path: history, push, replace } = useHistory();

  // 根据当前路径渲染不同组件
  const renderContent = () => {
    switch (history) {
      case '/DeferredValueDemo':
        return <DeferredValueDemo />;
      case '/test':
        return
        <>
          <div>
            <Test title={'测试'} exampleProp="Hello from App!" >
              <div>测试子组件</div>
            </Test>
          </div>;
        </>
      case '/card':
        return <div><Card /></div>;
      case '/ReducerDemo':
        return <ReducerDemo />;
      case '/ShoppingCar':
        return <ShoppingCar />;
      case '/EffectDemo':
        return <EffectDemo />;
      case '/':
        return (
          <>
            <div className="card">
              {/* 计数器按钮，点击增加计数 */}
              <button onClick={() => setCount((prevCount: number) => prevCount + 1)}>
                count is {count}
              </button>
              <p>
                Edit <code>src/App.tsx</code> and save to test HMR
              </p>
            </div>
          </>
        );
      default:
        return (
          <>
            <div className="card">
              {/* 计数器按钮，点击增加计数 */}
              <button onClick={() => setCount((prevCount: number) => prevCount + 1)}>
                count is {count}
              </button>
              <p>
                Edit <code>src/App.tsx</code> and save to test HMR
              </p>
            </div>
          </>
        );
    }
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <div>当前url：{history}</div>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => {
          console.log('跳转到首页');
          push('/');
        }} style={{ marginRight: '10px' }}>测试子组件</button>
        <button onClick={() => {
          console.log('跳转到 /测试子组件');
          push('/aaa');
        }} style={{ marginRight: '10px' }}>Card组件</button>
        <button onClick={() => {
          console.log('替换到 /card');
          replace('/card');
        }} style={{ marginRight: '10px' }}>ReducerDemo</button>
        <button onClick={() => {
          console.log('跳转到 ReducerDemo');
          push('/ReducerDemo');
        }}>ReducerDemo</button>
        <button onClick={() => {
          console.log('跳转到 ReducerDemo');
          push('/ShoppingCar');
        }}>ShoppingCar</button>
        <button onClick={() => {
          console.log('跳转到 DeferredValueDemo');
          push('/DeferredValueDemo');
        }}>DeferredValueDemo</button>
        <button onClick={() => {
          console.log('跳转到 EffectDemo');
          push('/EffectDemo');
        }}>EffectDemo</button>
      </div>
      <div className="content" style={{ marginTop: '20px', padding: '20px', border: '1px solid #ddd' }}>
        {renderContent()}
      </div>
    </>
  );
}

export default App;
