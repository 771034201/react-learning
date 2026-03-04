/**
 * ReducerDemo 组件
 * 演示 useReducer Hook 的使用，包含 localStorage 持久化
 * @module ReducerDemo
 */

import { useReducer, useEffect } from 'react';

/**
 * localStorage 键名
 */
const STORAGE_KEY = 'reducer-demo-count';

/**
 * 状态类型定义
 */
interface State {
  count: number;
}

/**
 * 动作类型定义
 */
type Action = { type: 'increment' } | { type: 'decrement' } | { type: 'reset' };

/**
 * 组件的 Props 接口
 */
export interface ReducerDemoProps {
  // 定义组件的属性类型
}

/**
 * 初始状态
 */
const initState: State = { count: 0 };

/**
 * 从 localStorage 读取状态
 * @returns 保存的状态或初始状态
 */
const loadStateFromStorage = (): State => {
  try {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState) {
      return JSON.parse(savedState);
    }
  } catch (error) {
    console.warn('Failed to load state from localStorage:', error);
  }
  return initState;
};

/**
 * 保存状态到 localStorage
 * @param state - 要保存的状态
 */
const saveStateToStorage = (state: State): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.warn('Failed to save state to localStorage:', error);
  }
};

/**
 * Reducer 函数
 * 根据动作类型更新状态
 * @param state - 当前状态
 * @param action - 动作对象
 * @returns 新的状态
 */
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initState;
    default:
      return state;
  }
};

/**
 * ReducerDemo 组件
 * @param {ReducerDemoProps} props - 组件属性
 * @returns {JSX.Element} ReducerDemo 组件
 */
export const ReducerDemo: React.FC<ReducerDemoProps> = () => {
  // 使用 useReducer Hook 管理状态，从 localStorage 读取初始值
  const [state, dispatch] = useReducer(reducer, loadStateFromStorage());

  // 使用 useEffect 监听状态变化，自动保存到 localStorage
  useEffect(() => {
    saveStateToStorage(state);
  }, [state]);

  return (
    <>
      <div>
        <h2>useReducer Demo (带持久化)</h2>
        <p>Counter: {state.count}</p>
        <p style={{ fontSize: '12px', color: '#888' }}>
          计数器已持久化到 localStorage，刷新页面后数据不会丢失
        </p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={() => dispatch({ type: 'increment' })}>+ 增加计数</button>
          <button onClick={() => dispatch({ type: 'decrement' })}>- 减少计数</button>
          <button onClick={() => dispatch({ type: 'reset' })}>重置计数</button>
        </div>
      </div>
    </>
  );
};

export default ReducerDemo;
