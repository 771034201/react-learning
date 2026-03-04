/*
 * @Author: 万帅 771034201@qq.com
 * @Date: 2026-02-06 10:43:37
 * @LastEditors: 万帅 771034201@qq.com
 * @Description:
 */
import { useSyncExternalStore } from "react";



export const useHistory = () => {
  const subScribe = (callback: () => void) => {
    window.addEventListener('popstate', callback);
    window.addEventListener('hashchange', callback);
    return () => {
      window.removeEventListener('popstate', callback);
      window.removeEventListener('hashchange', callback);
    }
  }

  const getSnapShot = () => {
    return window.location.pathname;
  }

  const push = (path: string) => {
    window.history.pushState(null, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  const replace = (path: string) => {
    window.history.replaceState(null, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  const res = useSyncExternalStore(subScribe, getSnapShot);

  return { path: res, push, replace };
}

export default useHistory;
