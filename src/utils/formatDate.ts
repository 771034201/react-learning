/**
 * 日期格式化工具函数
 * 提供日期格式化和相关操作
 * @module formatDate
 */

/**
 * 日期格式化选项
 */
interface FormatDateOptions {
  /**
   * 是否显示时间
   */
  includeTime?: boolean;

  /**
   * 日期分隔符
   */
  separator?: string;

  /**
   * 时间分隔符
   */
  timeSeparator?: string;

  /**
   * 是否使用 24 小时制
   */
  use24Hour?: boolean;
}

/**
 * 格式化日期为字符串
 *
 * @example
 * ```ts
 * formatDate(new Date()); // "2024-02-03"
 * formatDate(new Date(), { includeTime: true }); // "2024-02-03 14:30:00"
 * ```
 *
 * @param date - 日期对象或时间戳
 * @param options - 格式化选项
 * @returns 格式化后的日期字符串
 */
export const formatDate = (
  date: Date | number | string,
  options: FormatDateOptions = {}
): string => {
  const {
    includeTime = false,
    separator = '-',
    timeSeparator = ':',
    use24Hour = true,
  } = options;

  // 处理不同类型的日期输入
  const dateObj = date instanceof Date ? date : new Date(date);

  // 验证日期是否有效
  if (isNaN(dateObj.getTime())) {
    throw new Error('Invalid date provided');
  }

  // 获取日期组件
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');

  // 构建日期字符串
  let result = `${year}${separator}${month}${separator}${day}`;

  // 如果需要包含时间
  if (includeTime) {
    const hours = use24Hour
      ? String(dateObj.getHours()).padStart(2, '0')
      : dateObj.getHours() % 12 || 12;
    const minutes = String(dateObj.getMinutes()).padStart(2, '0');
    const seconds = String(dateObj.getSeconds()).padStart(2, '0');

    // 添加 AM/PM 如果使用 12 小时制
    const ampm = use24Hour ? '' : (dateObj.getHours() >= 12 ? ' PM' : ' AM');

    result += ` ${hours}${timeSeparator}${minutes}${timeSeparator}${seconds}${ampm}`;
  }

  return result;
};

/**
 * 获取相对时间描述
 *
 * @example
 * ```ts
 * getRelativeTime(new Date(Date.now() - 60000)); // "1分钟前"
 * getRelativeTime(new Date(Date.now() - 3600000)); // "1小时前"
 * ```
 *
 * @param date - 日期对象或时间戳
 * @returns 相对时间描述
 */
export const getRelativeTime = (date: Date | number | string): string => {
  const dateObj = date instanceof Date ? date : new Date(date);
  const now = new Date();
  const diff = now.getTime() - dateObj.getTime();

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) {
    return '刚刚';
  }
  if (minutes < 60) {
    return `${minutes}分钟前`;
  }
  if (hours < 24) {
    return `${hours}小时前`;
  }
  if (days < 7) {
    return `${days}天前`;
  }

  return formatDate(dateObj);
};

/**
 * 判断是否为同一天
 *
 * @param date1 - 第一个日期
 * @param date2 - 第二个日期
 * @returns 是否为同一天
 */
export const isSameDay = (
  date1: Date | number | string,
  date2: Date | number | string
): boolean => {
  const d1 = date1 instanceof Date ? date1 : new Date(date1);
  const d2 = date2 instanceof Date ? date2 : new Date(date2);

  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
};

export default {
  formatDate,
  getRelativeTime,
  isSameDay,
};
