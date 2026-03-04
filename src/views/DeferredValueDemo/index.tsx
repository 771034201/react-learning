/*
 * @Author: 万帅 771034201@qq.com
 * @Date: 2026-02-09 11:05:39
 * @LastEditors: 万帅 771034201@qq.com
 * @Description:使用 useDeferredValue 延迟处理输入内容，以提高大型数据的搜索性能
 */

import React from "react";
import { useDeferredValue, useState, useMemo } from "react";
import mockjs from 'mockjs';
import { Input, List } from "antd";

interface Item {
  number: number;
  address: string;
  name: string;
}

export const DeferredValueDemo: React.FC = () => {
  const [val, setVal] = useState('');

  // 使用 useMemo 缓存 mock 数据，避免重复生成
  const [list] = useState<Item[]>(() => {
    return mockjs.mock({
      'list|10000': [{
        'id|+1': 1,
        name: '@natural',
        'address': '@county(true)',
      }]
    }).list;
  });

  // 使用 useDeferredValue 延迟处理搜索值
  const defferedquery = useDeferredValue(val);
  const isStale = defferedquery !== val;

  // 使用 useMemo 缓存过滤结果
  const filteredList = useMemo(() => {
    return list.filter(item => item.name.toString().includes(defferedquery));
  }, [list, defferedquery]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>useDeferredValue Demo - 搜索优化</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        输入内容时，列表会以低透明度显示旧结果，新结果计算完成后才更新
      </p>
      <Input
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder="请输入搜索关键词..."
        style={{ marginBottom: '20px' }}
      />
      <List
        style={{ opacity: isStale ? 0.2 : 1, transition: 'all 1s' }}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta title={item.name} description={item.address} />
          </List.Item>
        )}
        dataSource={filteredList}
      />
    </div>
  );
};

export default DeferredValueDemo;
