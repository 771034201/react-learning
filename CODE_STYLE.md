# IXC 代码规范

## 概述
本文档定义了 react-learning 项目的代码规范，遵循 IXC 代码标准。

## 目录结构规范

```
react-learning/
├── public/           # 静态资源
├── src/
│   ├── assets/       # 资源文件（图片、字体等）
│   ├── components/   # 可复用组件
│   ├── pages/        # 页面组件
│   ├── hooks/        # 自定义 Hooks
│   ├── utils/        # 工具函数
│   ├── types/        # TypeScript 类型定义
│   ├── App.tsx       # 根组件
│   ├── main.tsx      # 应用入口
│   └── *.css         # 样式文件
```

## 命名规范

### 文件命名
- 组件文件：PascalCase，如 `UserList.tsx`
- 工具文件：camelCase，如 `formatDate.ts`
- 类型文件：*.types.ts，如 `user.types.ts`
- 样式文件：kebab-case，如 `user-list.css`

### 变量命名
- 变量/函数：camelCase，如 `userName`, `getUser()`
- 常量：UPPER_SNAKE_CASE，如 `MAX_COUNT`
- 类/接口/类型：PascalCase，如 `UserList`, `IUserProps`
- 私有变量：前缀 `_`，如 `_internalState`

### 组件命名
- 组件使用 PascalCase，如 `UserProfile`
- 自定义 Hook 使用 `use` 前缀，如 `useUserData`

## TypeScript 规范

### 类型定义
```typescript
// ✅ 推荐：使用 interface 定义对象类型
interface UserProps {
  id: string;
  name: string;
  age?: number;
}

// ✅ 推荐：使用 type 定义联合类型
type Status = 'active' | 'inactive' | 'pending';

// ✅ 推荐：组件 Props 类型定义
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
  return <button onClick={onClick} disabled={disabled}>{label}</button>;
};
```

### 类型注释
```typescript
// ✅ 推荐：显式类型注释
const count: number = 0;
const users: User[] = [];

// ❌ 避免：不必要的类型注释（TypeScript 可以推断）
const userName: string = 'John'; // 可以简化为 'John'

// ✅ 推荐：函数返回类型
function getUser(id: string): User {
  return { id, name: 'John' };
}
```

## React 组件规范

### 组件结构
```typescript
/**
 * 组件描述
 * 详细说明组件的功能和用途
 */

// 1. 导入语句（按顺序：React、第三方库、内部模块）
import { useState, useEffect } from 'react';
import { SomeComponent } from 'some-library';
import { utils } from '@/utils';

// 2. 类型定义
interface ComponentProps {
  title: string;
  onSubmit: (data: FormData) => void;
}

// 3. 组件定义
const MyComponent: React.FC<ComponentProps> = ({ title, onSubmit }) => {
  // 4. Hooks
  const [data, setData] = useState<FormData>(initialData);
  
  useEffect(() => {
    // 副作用逻辑
  }, []);

  // 5. 事件处理函数
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(data);
  };

  // 6. 渲染
  return (
    <div>
      <h1>{title}</h1>
      {/* JSX 内容 */}
    </div>
  );
};

export default MyComponent;
```

### Hooks 规范
```typescript
// ✅ 推荐：自定义 Hook 以 use 开头
function useUserData(userId: string) {
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    // 获取用户数据
  }, [userId]);
  
  return user;
}

// ✅ 推荐：遵循 Hooks 规则
// 1. 只在顶层调用 Hooks
// 2. 只在 React 函数中调用 Hooks
```

### JSX 规范
```typescript
// ✅ 推荐：使用 Fragment 避免额外 div
return (
  <>
    <Header />
    <Main />
    <Footer />
  </>
);

// ✅ 推荐：事件处理使用 arrow function
<button onClick={() => handleClick(item.id)}>Click</button>

// ✅ 推荐：使用条件渲染
{isLoggedIn && <UserProfile />}
{showModal ? <Modal /> : null}
```

## 注释规范

### 文件注释
```typescript
/**
 * 用户列表组件
 * 展示用户信息并提供操作功能
 * @module UserList
 */
```

### 函数注释
```typescript
/**
 * 计算两个数的和
 * @param a - 第一个数
 * @param b - 第二个数
 * @returns 两数之和
 */
function sum(a: number, b: number): number {
  return a + b;
}
```

### 行内注释
```typescript
// 检查用户是否已登录
if (user) {
  // 更新用户状态
  updateUser(user);
}

// TODO: 添加错误处理
// FIXME: 修复性能问题
```

## 样式规范

### CSS 命名
- 使用 BEM 命名规范：`.block__element--modifier`
- 类名使用 kebab-case：`.user-card`, `.user-card--active`

### CSS Modules
```css
/* UserCard.module.css */
.card {
  display: flex;
  padding: 16px;
}

.title {
  font-size: 18px;
  font-weight: bold;
}
```

```typescript
import styles from './UserCard.module.css';

<div className={styles.card}>
  <h2 className={styles.title}>User Card</h2>
</div>
```

## Git 提交规范

使用 Conventional Commits 规范：
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type 类型
- `feat`: 新功能
- `fix`: 修复 Bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 重构代码
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建/工具链相关

### 示例
```bash
feat(user): add user profile page

- Add profile information display
- Add edit profile functionality
- Add avatar upload feature

Closes #123
```

## 性能优化

### React 性能
```typescript
// ✅ 使用 React.memo 避免不必要的重渲染
const ExpensiveComponent = React.memo<Props>(({ data }) => {
  return <div>{/* ... */}</div>;
});

// ✅ 使用 useMemo 缓存计算结果
const filteredList = useMemo(
  () => list.filter(item => item.active),
  [list]
);

// ✅ 使用 useCallback 缓存函数
const handleClick = useCallback(() => {
  // 处理逻辑
}, [dependency]);
```

## 安全规范

- 永远不要使用 `dangerouslySetInnerHTML`，除非绝对必要
- 对用户输入进行验证和转义
- 使用 `rel="noreferrer"` 在外部链接上
- 敏感数据不要存储在前端代码中

## 测试规范

```typescript
// 组件测试示例
describe('Button', () => {
  it('renders button with label', () => {
    render(<Button label="Click me" onClick={vi.fn()} />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## 工具配置

项目已配置以下工具：
- **ESLint**: 代码质量检查
- **Prettier**: 代码格式化
- **EditorConfig**: 编辑器配置
- **TypeScript**: 类型检查

### 运行检查
```bash
# 运行 ESLint
npm run lint

# 自动修复 ESLint 问题
npm run lint -- --fix

# 类型检查
npm run build
```

## 参考资料

- [React 官方文档](https://react.dev)
- [TypeScript 官方文档](https://www.typescriptlang.org)
- [ESLint 规则](https://eslint.org/docs/latest/rules)
- [Prettier 配置](https://prettier.io/docs/en/options.html)
