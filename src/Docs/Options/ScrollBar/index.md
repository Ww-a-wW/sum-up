---
title: 滚动条
toc: menu
---

- 通用配置

```
// 滚动条整体
::-webkit-scrollbar {
  z-index: 50;
  width: 5px;
  height: 5px;
}

// 滚动条滑道
::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0);
}

// 滚动滑块样式
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #d6dce0;
}

// 滚动条上下的箭头按钮
::-webkit-scrollbar-button {
  display: none;
}

::-webkit-scrollbar-corner {
  display: none;
}
```
