---
group:
  title: 操作

sidemenu: menu
title: 关闭tab提示
---

```
1,切换路由时提示

import { Prompt } from 'react-router-dom';
<div>
  <Prompt when={true} message={() => '提示信息'} />
</div>


2，关闭tab，浏览器，刷新页面 提示

useEffect(() => {
  window.addEventListener('beforeunload', handleTabClosing);
  window.addEventListener('unload', handleTabClosing);
  return () => {
    window.removeEventListener('beforeunload', handleTabClosing);
    window.removeEventListener('unload', handleTabClosing);
  };
});

const handleTabClosing = (event) => {
  event.preventDefault();
  event.returnValue = '提示信息';
};
```
