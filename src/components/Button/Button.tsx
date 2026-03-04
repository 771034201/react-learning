/*
 * @Author: 万帅 771034201@qq.com
 * @Date: 2026-02-03 10:33:54
 * @LastEditors: 万帅 771034201@qq.com
 * @Description:
 */
/**
 * 按钮组件
 * 通用的按钮组件，支持多种样式和尺寸
 * @module Button
 */

import React from 'react';
import './Button.css';

/**
 * 按钮组件的 Props 接口
 */
export interface ButtonProps {
  /**
   * 按钮文本内容
   */
  label: string;

  /**
   * 点击事件处理函数
   */
  onClick?: () => void;

  /**
   * 按钮类型：默认、主要、危险、禁用
   */
  variant?: 'default' | 'primary' | 'danger' | 'disabled';

  /**
   * 按钮尺寸：小、中、大
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * 是否禁用按钮
   */
  disabled?: boolean;

  /**
   * 按钮类型：按钮、提交、重置
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * 自定义类名
   */
  className?: string;

  /**
   * 按钮图标（可选）
   */
  icon?: React.ReactNode;
}

/**
 * 按钮组件
 * @param {ButtonProps} props - 按钮组件属性
 * @returns {JSX.Element} 按钮组件
 */
export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'default',
  size = 'medium',
  disabled = false,
  type = 'button',
  className = '',
  icon,
}) => {
  // 构建按钮类名
  const buttonClasses = [
    'button',
    `button--${variant}`,
    `button--${size}`,
    disabled && 'button--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || variant === 'disabled'}
    >
      {icon && <span className="button__icon">{icon}</span>}
      <span className="button__label">{label}</span>
    </button>
  );
};

export default Button;
