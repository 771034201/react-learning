# React Learning 项目

这是一个基于 React + TypeScript + Vite 的学习项目，遵循 IXC 代码规范。

## 项目特性

- ⚡️ **Vite** - 极速的开发服务器和构建工具
- ⚛️ **React 19** - 最新的 React 特性
- 📘 **TypeScript** - 完整的类型安全
- 🎨 **IXC 代码规范** - 统一的代码风格
- 📦 **ESLint + Prettier** - 代码质量保证
- 🎯 **EditorConfig** - 编辑器配置统一

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

应用将在 `http://localhost:3000` 启动。

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

### 代码检查

```bash
# 运行 ESLint
npm run lint

# 自动修复问题
npm run lint -- --fix
```

## 项目结构

```
react-learning/
├── public/              # 静态资源
│   └── vite.svg
├── src/
│   ├── assets/          # 资源文件
│   │   └── react.svg
│   ├── App.css          # App 组件样式
│   ├── App.tsx          # App 根组件
│   ├── index.css        # 全局样式
│   └── main.tsx         # 应用入口
├── .editorconfig        # 编辑器配置
├── .eslintrc.js         # ESLint 配置
├── .gitignore           # Git 忽略文件
├── .prettierignore      # Prettier 忽略文件
├── .prettierrc.js       # Prettier 配置
├── CODE_STYLE.md        # IXC 代码规范文档
├── package.json         # 项目配置
├── tsconfig.json        # TypeScript 配置
├── tsconfig.app.json    # TypeScript 应用配置
├── tsconfig.node.json   # TypeScript Node 配置
└── vite.config.ts       # Vite 配置
```

## 技术栈

### 核心
- **React 19.2.0** - UI 库
- **TypeScript 5.9.3** - 类型系统
- **Vite 7.2.4** - 构建工具

### 开发工具
- **ESLint 9.39.1** - 代码检查
- **Prettier** - 代码格式化
- **@vitejs/plugin-react 5.1.1** - Vite React 插件

### 类型定义
- **@types/react 19.2.5** - React 类型
- **@types/react-dom 19.2.3** - React DOM 类型
- **@types/node 24.10.1** - Node 类型

## 代码规范

本项目遵循 IXC 代码规范，详见 [CODE_STYLE.md](./CODE_STYLE.md)。

### 主要规范

- 使用 TypeScript 进行类型检查
- 使用 Prettier 进行代码格式化
- 使用 ESLint 进行代码质量检查
- 遵循 Conventional Commits 提交规范
- 使用语义化的文件命名和目录结构

## 开发建议

### 组件开发
- 使用函数组件和 Hooks
- 为组件添加 TypeScript 类型注释
- 添加清晰的 JSDoc 注释
- 遵循单一职责原则

### 状态管理
- 简单状态使用 `useState`
- 复杂逻辑使用自定义 Hook
- 全局状态考虑使用 Context API 或状态管理库

### 性能优化
- 使用 `React.memo` 避免不必要的重渲染
- 使用 `useMemo` 缓存计算结果
- 使用 `useCallback` 缓存函数引用

## Git 提交规范

使用 Conventional Commits 格式：

```bash
feat: add new feature
fix: fix bug
docs: update documentation
style: format code
refactor: refactor code
test: add tests
chore: update build tools
```

## 学习资源

- [React 官方文档](https://react.dev)
- [TypeScript 官方文档](https://www.typescriptlang.org)
- [Vite 官方文档](https://vite.dev)
- [IXC 代码规范](./CODE_STYLE.md)

## License

MIT
