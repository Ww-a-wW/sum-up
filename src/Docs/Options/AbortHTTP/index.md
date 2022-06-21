---
# sidemenu: menu
title: 中断HTTP请求
---

```
import React from 'react';
import axios from 'axios';

const CancelToken = axios.CancelToken;
let cancel;

const AbortHTTP: React.FC = (props) => {
  const handleAbort = () => {
    cancel('中断请求');
  };
  const handleFetch = (e) => {
    axios(
      {
        //...paramsData
      },
      {
        cancelToken: new CancelToken(function executor(c) {
          // executor 函数接收一个 cancel 函数作为参数
          cancel = c;
        }),
      },
    )
      .then(() => {})
      .catch(function (thrown) {
        if (axios.isCancel(thrown)) {
          console.log(thrown.message);
        } else {
          // 处理错误
        }
      });
    e.preventDefault();
    e.cancelBubble = true;
  };

  return (
    <>
      <button onClick={handleFetch}>请求</button>
      <button onClick={handleAbort}>停止</button>
    </>
  );
};
export default AbortHTTP;

```
