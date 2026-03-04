import { useSyncExternalStore } from "react";


/*
Custom hook for managing storage operations (e.g., localStorage, sessionStorage)
  @param key - The storage key
  @param defaultValue - The default value to return if the key does not exist
  @returns An object with methods to get, set, and remove the storage item
*/
export const useStorage = (key: string, defaultValue?: any) => {
  const subScribe = (callback: () => void) => {
    window.addEventListener('storage', e => {
      console.log('触发了：', e);
      callback()
    })
    return () => window.removeEventListener('storage', callback)
  }

  //从localStorage中获取数据 如果读不到返回默认值
  const getSnapShot = () => {
    return (localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)!) : null) || defaultValue;
  }

  //修改数据
  const setStorage = (value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new StorageEvent('storage'));
  }

  // 返回数据
  const res = useSyncExternalStore(subScribe, getSnapShot)

  return [res, setStorage]
}
