/**
 * useCounter Hook
 * 提供计数器功能的自定义 Hook
 * @module useCounter
 */

import { useState, useCallback } from 'react';

/**
 * useCounter Hook 的配置选项
 */
interface UseCounterOptions {
  /**
   * 初始计数值
   */
  initialValue?: number;

  /**
   * 最小值
   */
  min?: number;

  /**
   * 最大值
   */
  max?: number;

  /**
   * 步长
   */
  step?: number;
}

/**
 * useCounter Hook 的返回值
 */
interface UseCounterReturn {
  /**
   * 当前计数值
   */
  count: number;

  /**
   * 增加计数
   */
  increment: () => void;

  /**
   * 减少计数
   */
  decrement: () => void;

  /**
   * 重置计数
   */
  reset: () => void;

  /**
   * 设置计数值
   * @param value - 要设置的值
   */
  setValue: (value: number) => void;
}

/**
 * 计数器 Hook
 * 提供计数器的增加、减少、重置和设置功能
 *
 * @example
 * ```tsx
 * const { count, increment, decrement, reset } = useCounter({
 *   initialValue: 0,
 *   min: 0,
 *   max: 100,
 *   step: 1
 * });
 * ```
 *
 * @param options - 计数器配置选项
 * @returns 计数器状态和操作函数
 */
export const useCounter = (options: UseCounterOptions = {}): UseCounterReturn => {
  const {
    initialValue = 0,
    min = Number.NEGATIVE_INFINITY,
    max = Number.POSITIVE_INFINITY,
    step = 1,
  } = options;

  const [count, setCount] = useState<number>(initialValue);

  /**
   * 增加计数
   */
  const increment = useCallback(() => {
    setCount((prev) => Math.min(prev + step, max));
  }, [step, max]);

  /**
   * 减少计数
   */
  const decrement = useCallback(() => {
    setCount((prev) => Math.max(prev - step, min));
  }, [step, min]);

  /**
   * 重置计数到初始值
   */
  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  /**
   * 设置计数值
   * @param value - 要设置的值
   */
  const setValue = useCallback((value: number) => {
    const clampedValue = Math.max(min, Math.min(max, value));
    setCount(clampedValue);
  }, [min, max]);

  return {
    count,
    increment,
    decrement,
    reset,
    setValue,
  };
};

export default useCounter;
