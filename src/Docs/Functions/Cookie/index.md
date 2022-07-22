---
title: 操作cookie
toc: menu
---

## 1，根据 key 值获取 cookie

```
export function get(key: string) {
  const data = document.cookie;         //获取cookie
  let startIndex = data.indexOf(key + '=');         //获取key第一次出现的位置
  if (startIndex > -1) {
    //如果开始索引值大于0表示有cookie
    startIndex = startIndex + key.length + 1;        //key的起始位置等于出现的位置加key的长度+1
    let endIndex = data.indexOf(';', startIndex);           //结束位置等于从key开始的位置之后第一次;号所出现的位置
    endIndex = endIndex < 0 ? data.length : endIndex;            //如果未找到结尾位置则结尾位置等于cookie长度，之后的内容全部获取
    return decodeURIComponent(data.substring(startIndex, endIndex));
  }
  return '';
}

```

## 2，设置 cookie

```
/**
 * @param key
 * @param value
 * @param [validity = 365] 有效期 单位天
 */
export function set(key: string, value: string, validity = 365) {
  const times = validity; //默认保存时间
  const cur = new Date(); //获取当前时间
  cur.setTime(cur.getTime() + times * 24 * 3600 * 1000); //设置指定时间
  //创建cookie  并且设置生存周期为UTC时间
  document.cookie = `${key}=${encodeURIComponent(value)};expires=${
    times === undefined ? '' : cur.toUTCString()
  }`;
}
```

## 3，删除 Cookie

```
export function remove(key: string) {
  const data = get(key);  //获取cookie
  //如果获取到cookie则重新设置cookie的生存周期为过去时间
  if (data) {
    set(key, data, -1);
  }
}

```
