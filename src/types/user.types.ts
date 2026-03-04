/**
 * 用户类型定义
 * 定义用户相关的 TypeScript 类型
 * @module userTypes
 */

/**
 * 用户性别
 */
export type UserGender = 'male' | 'female' | 'other' | 'unknown';

/**
 * 用户状态
 */
export type UserStatus = 'active' | 'inactive' | 'pending' | 'suspended';

/**
 * 用户角色
 */
export type UserRole = 'user' | 'admin' | 'moderator' | 'guest';

/**
 * 用户接口
 */
export interface User {
  /**
   * 用户唯一标识符
   */
  id: string;

  /**
   * 用户名
   */
  username: string;

  /**
   * 电子邮箱
   */
  email: string;

  /**
   * 显示名称
   */
  displayName?: string;

  /**
   * 头像 URL
   */
  avatar?: string;

  /**
   * 用户性别
   */
  gender?: UserGender;

  /**
   * 用户状态
   */
  status: UserStatus;

  /**
   * 用户角色
   */
  role: UserRole;

  /**
   * 创建时间
   */
  createdAt: string;

  /**
   * 更新时间
   */
  updatedAt: string;

  /**
   * 最后登录时间
   */
  lastLoginAt?: string;
}

/**
 * 用户创建接口
 */
export interface CreateUserInput {
  username: string;
  email: string;
  password: string;
  displayName?: string;
  gender?: UserGender;
}

/**
 * 用户更新接口
 */
export interface UpdateUserInput {
  displayName?: string;
  avatar?: string;
  gender?: UserGender;
  status?: UserStatus;
  role?: UserRole;
}

/**
 * 用户查询参数
 */
export interface UserQueryParams {
  /**
   * 搜索关键词
   */
  search?: string;

  /**
   * 用户状态筛选
   */
  status?: UserStatus;

  /**
   * 用户角色筛选
   */
  role?: UserRole;

  /**
   * 页码
   */
  page?: number;

  /**
   * 每页数量
   */
  pageSize?: number;
}

/**
 * 用户列表响应
 */
export interface UserListResponse {
  /**
   * 用户列表
   */
  users: User[];

  /**
   * 总数
   */
  total: number;

  /**
   * 当前页码
   */
  page: number;

  /**
   * 每页数量
   */
  pageSize: number;

  /**
   * 总页数
   */
  totalPages: number;
}

/**
 * 用户权限接口
 */
export interface UserPermissions {
  /**
   * 是否可以编辑用户
   */
  canEditUser: boolean;

  /**
   * 是否可以删除用户
   */
  canDeleteUser: boolean;

  /**
   * 是否可以管理角色
   */
  canManageRoles: boolean;

  /**
   * 是否可以查看敏感信息
   */
  canViewSensitiveInfo: boolean;
}

/**
 * 用户详情接口
 */
export interface UserDetail extends User {
  /**
   * 用户权限
   */
  permissions: UserPermissions;

  /**
   * 用户简介
   */
  bio?: string;

  /**
   * 生日
   */
  birthday?: string;

  /**
   * 所在地
   */
  location?: string;

  /**
   * 个人网站
   */
  website?: string;
}
