/**
 * ShoppingCar 组件
 * 购物车示例，演示 useReducer 的使用
 * @module ShoppingCar
 */

import { useReducer } from "react";

/**
 * 商品类型定义
 */
type Item = {
  id: number;
  name: string;
  price: number;
  count: number;
  isEdit: boolean;
  tempName: string; // 编辑时的临时名称
};

/**
 * 初始数据
 */
const initData: Item[] = [
  { id: 1, name: '苹果', price: 5, count: 2, isEdit: false, tempName: '苹果' },
  { id: 2, name: '香蕉', price: 3, count: 5, isEdit: false, tempName: '香蕉' },
  { id: 3, name: '橙子', price: 4, count: 3, isEdit: false, tempName: '橙子' },
];

/**
 * 动作类型定义
 */
type Action =
  | { type: 'ADD'; id: number }
  | { type: 'SUB'; id: number }
  | { type: 'DELETE'; id: number }
  | { type: 'EDIT'; id: number }
  | { type: 'UPDATE_NAME'; id: number; newName: string }
  | { type: 'SET_TEMP_NAME'; id: number; tempName: string };

/**
 * 更新指定索引的商品（不可变更新）
 */
const updateItem = (state: Item[], index: number, updates: Partial<Item>): Item[] => {
  if (index === -1) return state;
  return [
    ...state.slice(0, index),
    { ...state[index], ...updates },
    ...state.slice(index + 1),
  ];
};

/**
 * Reducer 函数 - 使用函数式编程风格
 */

const reducer = (state: Item[], action: Action): Item[] => {
  const index = state.findIndex(item => item.id === action.id)
  switch (action.type) {
    case 'ADD':
      return updateItem(state, index, { count: state[index].count + 1 })
    case 'SUB':
      return state[index].count > 0 ?
        updateItem(state, index, { count: state[index].count - 1 }) : state
    case 'DELETE':
      return state.filter(item => item.id !== action.id)
    case 'EDIT':
      if (state[index].isEdit) {
        return updateItem(state, index, {
          isEdit: false,
          name: state[index].tempName || state[index].name
        })
      } else {
        return updateItem(state, index, {
          isEdit: false,
          tempName: state[index].name || state[index].tempName
        })
      }
    case 'UPDATE_NAME':
      return updateItem(state, index, { name: action.newName, tempName: action.newName })
    case 'SET_TEMP_NAME':
      return updateItem(state, index, { tempName: action.tempName })
    default:
      return state;
  }
}

/**
 * ShoppingCar 组件
 */
export const ShoppingCar: React.FC = () => {
  const [data, dispatch] = useReducer(reducer, initData);

  return (
    <>
      <table cellPadding={0} cellSpacing={0} width={680} border={1}>
        <thead>
          <tr>
            <th>物品</th>
            <th>价格</th>
            <th>数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(item => {
              return (
                <tr key={item.id}>
                  <td align="center">
                    {item.isEdit ? (
                      <input
                        value={item.tempName}
                        onChange={(e) => dispatch({ type: 'SET_TEMP_NAME', id: item.id, tempName: e.target.value })}
                        onBlur={(e) => dispatch({ type: 'UPDATE_NAME', id: item.id, newName: e.target.value })}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            dispatch({ type: 'UPDATE_NAME', id: item.id, newName: e.currentTarget.value });
                          }
                        }}
                        autoFocus
                      />
                    ) : (
                      <span>{item.name}</span>
                    )}
                  </td>
                  <td align="center">{item.price}</td>
                  <td align="center">{item.count}</td>
                  <td align="center">
                    {item.isEdit ? (
                      // 编辑模式：只显示保存按钮
                      <span onClick={() => dispatch({ type: 'EDIT', id: item.id })} style={{ cursor: 'pointer' }}>保存</span>
                    ) : (
                      // 非编辑模式：显示编辑和删除按钮
                      <>
                        <span onClick={() => dispatch({ type: 'EDIT', id: item.id })} style={{ cursor: 'pointer', marginRight: '10px' }}>编辑</span>
                        <span onClick={() => dispatch({ type: 'DELETE', id: item.id })} style={{ cursor: 'pointer', marginRight: '10px' }}>删除</span>
                      </>
                    )}
                    <br />
                    <span onClick={() => dispatch({ type: 'ADD', id: item.id })} style={{ cursor: 'pointer', marginRight: '10px' }}>+</span>
                    <span onClick={() => dispatch({ type: 'SUB', id: item.id })} style={{ cursor: 'pointer' }}>-</span>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>总价</td>
            <td>{data.reduce((total, item) => total + item.price * item.count, 0)}</td>
          </tr>
        </tfoot>
      </table >
    </>
  )
}


export default ShoppingCar;
