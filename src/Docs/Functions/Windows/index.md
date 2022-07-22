---
title: 浏览器
toc: menu
---

## 1、滚动到页面顶部

```
export const scrollToTop = () => {
  const height = document.documentElement.scrollTop || document.body.scrollTop;
  if (height > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, height - height / 8);
  }
};

```

## 2、滚动到页面底部

```
export const scrollToBottom = () => {
  window.scrollTo(0, document.documentElement.clientHeight);
};
```

## 3、滚动到指定元素区域

```
export const smoothScroll = (element: string) => {
  document.querySelector(element)?.scrollIntoView({
    behavior: 'smooth',
  });
};
```

## 4、获取可视窗口高度

```
export const getClientHeight = () => {
  let clientHeight = 0;
  if (document.body.clientHeight && document.documentElement.clientHeight) {
    clientHeight =
      document.body.clientHeight < document.documentElement.clientHeight
        ? document.body.clientHeight
        : document.documentElement.clientHeight;
  } else {
    clientHeight =
      document.body.clientHeight > document.documentElement.clientHeight
        ? document.body.clientHeight
        : document.documentElement.clientHeight;
  }
  return clientHeight;
};

```

## 5、获取可视窗口宽度

```
export const getPageViewWidth = () => {
  return (document.compatMode == 'BackCompat' ? document.body : document.documentElement)
    .clientWidth;
};

```
