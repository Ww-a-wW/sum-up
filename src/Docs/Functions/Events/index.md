---
title: JavaScript操作
---

## 1、阻止冒泡事件

```
export const stopPropagation = (e) => {
  e = e || window.event;
  if (e.stopPropagation) {
    // W3C阻止冒泡方法
    e.stopPropagation();
  } else {
    e.cancelBubble = true; // IE阻止冒泡方法
  }
};

```

## 2、防抖函数

```
export const debounce = (fn, wait) => {
  let timer = null;
  return function () {
    let context = this,
      args = arguments;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
};
```

## 3、节流函数

```
export const throttle = (fn, delay) => {
  let curTime = Date.now();

  return function () {
    let context = this,
      args = arguments,
      nowTime = Date.now();

    if (nowTime - curTime >= delay) {
      curTime = Date.now();
      return fn.apply(context, args);
    }
  };
};
```

## 3、数据类型判断

```
export const getType = (value: any) => {
  if (value === null) {
    return value + '';
  }
  // 判断数据是引用类型的情况
  if (typeof value === 'object') {
    let valueClass = Object.prototype.toString.call(value),
      type = valueClass.split(' ')[1].split('');
    type.pop();
    return type.join('').toLowerCase();
  } else {
    // 判断数据是基本数据类型的情况和函数的情况
    return typeof value;
  }
};
```
