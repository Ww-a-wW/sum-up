---
title: 操作存储
# toc: menu
---

## 1、存储 loalStorage

```
export const loalStorageSet = (key, value) => {
  if (!key) return;
  if (typeof value !== 'string') {
    value = JSON.stringify(value);
  }
  window.localStorage.setItem(key, value);
};
```

## 2、获取 localStorage

```
export const loalStorageGet = (key) => {
  if (!key) return;
  return window.localStorage.getItem(key);
};
```

## 3、删除 localStorage

```
export const loalStorageRemove = (key) => {
  if (!key) return;
  window.localStorage.removeItem(key);
};
```

## 4、存储 sessionStorage

```
export const sessionStorageSet = (key, value) => {
  if (!key) return;
  if (typeof value !== 'string') {
    value = JSON.stringify(value);
  }
  window.sessionStorage.setItem(key, value);
};
```

## 5、获取 sessionStorage

```
export const sessionStorageGet = (key) => {
  if (!key) return;
  return window.sessionStorage.getItem(key);
};
```

## 6、删除 sessionStorage

```
export const sessionStorageRemove = (key) => {
  if (!key) return;
  window.sessionStorage.removeItem(key);
};
```
