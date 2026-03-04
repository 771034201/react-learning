/**
 * 测试组件
 * 用于演示组件结构的简单示例组件
 * @module Test
 */

import React, { useEffect } from 'react';

/**
 * 测试组件的 Props 接口
 */
export interface TestProps {
  /**
   * 测试属性示例
   */
  exampleProp?: string;
  title?: string;
  children?: React.ReactNode;
}

const defaultProps: Partial<TestProps> = {
  exampleProp: 'Default Prop Value',
  title: 'Default Title'
}

/**
 * 测试组件
 */
export const Test: React.FC<TestProps> = ({ exampleProp, title, children }) => {
  const props = { ...defaultProps, exampleProp, title };
  const event = new Event('testEvent');
  const clickTap = () => {
    event.params = { info: 'This is a test event' };
    window.dispatchEvent(event);
  }

  const handleCardEvent = (e: Event) => {
    console.log('Test 组件监听到 cardEvent 事件，参数：', (e as any).params);
  }
  useEffect(() => {
    window.addEventListener('cardEvent', handleCardEvent);
    return () => {
      window.removeEventListener('cardEvent', handleCardEvent);
    };
  }, []);
  return <div>Test Component: {props.title || 'No title provided'} - {props.exampleProp || 'No prop provided'}
    <button onClick={clickTap}>点击测试</button>
    <div>{children}</div>
  </div>;
};

// 扩充event类型
declare global {
  interface Event {
    params: any;
  }
}

export default Test;
