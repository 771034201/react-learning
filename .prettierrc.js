/**
 * Prettier 配置文件
 * 用于统一代码格式化风格
 */
module.exports = {
  // 使用单引号
  singleQuote: true,
  
  // 在对象或数组最后一个元素后面添加逗号
  trailingComma: 'es5',
  
  // 在语句末尾添加分号
  semi: true,
  
  // 使用 2 空格缩进
  tabWidth: 2,
  useTabs: false,
  
  // 每行最大字符数
  printWidth: 100,
  
  // 对象大括号内部不添加空格
  bracketSpacing: true,
  
  // 多行 HTML 元素的 > 放在最后一行的末尾
  bracketSameLine: false,
  
  // 箭头函数参数只有一个时使用括号
  arrowParens: 'always',
  
  // 换行符使用 LF
  endOfLine: 'lf',
  
  // 每个文件顶部添加注释
  requirePragma: false,
  
  // 代码变更检测
  insertPragma: false,
  
  // 不自动格式化 markdown
  proseWrap: 'preserve',
  
  // HTML 空白敏感
  htmlWhitespaceSensitivity: 'css',
  
  // Vue 文件脚本和样式标签缩进
  vueIndentScriptAndStyle: false,
  
  // 单个属性的 HTML 标签不换行
  singleAttributePerLine: false,
  
  // 覆盖特定文件类型的配置
  overrides: [
    {
      files: '*.md',
      options: {
        proseWrap: 'always',
      },
    },
    {
      files: '*.json',
      options: {
        printWidth: 80,
      },
    },
    {
      files: '*.yml',
      options: {
        printWidth: 120,
      },
    },
  ],
};
