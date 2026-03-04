/**
 * 卡片组件
 * 展示卡片内容的示例组件
 * @module Card
 */

import { useEffect, useState } from 'react';

/**
 * 卡片组件的 Props 接口
 */
export interface CardProps {
  // 在此处定义卡片组件的属性
}

/**
 * 卡片组件
 * @returns {JSX.Element} 卡片组件
 */
export const Card: React.FC = () => {

  let [index, setIndex] = useState<number>(0);
  let [list, setList] = useState<number[]>([1, 2, 3, 5, 4]);

  const event = new Event('cardEvent');
  useEffect(() => {

    // 定义事件处理函数
    const handleTestEvent = (e: Event) => {
      setIndex((prevIndex) => prevIndex + 1);

      console.log('Card 组件监听到 testEvent 事件，参数：', (e as any).params, index);
      event.params = { cardInfo: `Card component received event ${index}, ${list.join(', ')}` };
      window.dispatchEvent(event);
    };

    // 添加事件监听器
    window.addEventListener('testEvent', handleTestEvent);

    // 清理函数：组件卸载时移除事件监听器
    return () => {
      window.removeEventListener('testEvent', handleTestEvent);
    };
  }, []); // 空依赖数组，只在组件挂载时执行一次

  const handleClick = () => {
    let newList = [...list]
    let arr = newList.sort((a, b) => a - b);
    console.log(arr);

  };

  return <div>
    <button onClick={handleClick}>点击我</button>
    <p>当前索引: {index}</p>
    <p>事件列表: {list.join(', ')}</p>
  </div>;
};

export default Card;
