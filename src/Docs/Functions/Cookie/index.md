---
title: 操作cookie
toc: menu
---

## 1，设置 cookie

```
// 方法一：
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

// 方法二：
// 接收三个参数，第三个参数就是设置过期时间的，用相对时间，单位秒，要对所传参数进行类型检查。
// 可以设置统一的过期时间，也可以对单个值得过期时间进行单独配置。两种方式按需配置。
export const setStorage = (key,value,expire=0) => {
    if (value === '' || value === null || value === undefined) {
        value = null;
    }

    if (isNaN(expire) || expire < 1) throw new Error("Expire must be a number");

    expire = (expire?expire:config.expire) * 60000;
    let data = {
        value: value, // 存储值
        time: Date.now(), //存值时间戳
        expire: expire // 过期时间
    }

    window[config.type].setItem(key, JSON.stringify(data));
}
```

## 2，根据 key 值获取 cookie

```
// 方法一：
export function get(key: string) {
  const data = document.cookie; //获取cookie
  let startIndex = data.indexOf(key + '='); //获取key第一次出现的位置
  if (startIndex > -1) {
    //如果开始索引值大于0表示有cookie
    startIndex = startIndex + key.length + 1; //key的起始位置等于出现的位置加key的长度+1
    let endIndex = data.indexOf(';', startIndex); //结束位置等于从key开始的位置之后第一次;号所出现的位置
    endIndex = endIndex < 0 ? data.length : endIndex; //如果未找到结尾位置则结尾位置等于cookie长度，之后的内容全部获取
    return decodeURIComponent(data.substring(startIndex, endIndex));
  }
  return '';
}


// 方法二：
// 首先要对 key 是否存在进行判断，防止获取不存在的值而报错。
// 对获取方法进一步扩展，只要在有效期内获取 Storage 值，就对过期时间进行续期，如果过期则直接删除该值。并返回 null
export const getStorage = (key) => {
    // key 不存在判断
    if (!window[config.type].getItem(key) || JSON.stringify(window[config.type].getItem(key)) === 'null'){
        return null;
    }

    // 优化 持续使用中续期
    const storage = JSON.parse(window[config.type].getItem(key));
    console.log(storage)
    let nowTime = Date.now();
    console.log(config.expire*6000 ,(nowTime - storage.time))
    // 过期删除
    if (storage.expire && config.expire*6000 < (nowTime - storage.time)) {
        removeStorage(key);
        return null;
    } else {
        // 未过期期间被调用 则自动续期 进行保活
        setStorage(key,storage.value);
        return storage.value;
    }
}



```

## 3，获取所有值

```
export const getAllStorage = () => {
    let len = window[config.type].length // 获取长度
    let arr = new Array() // 定义数据集
    for (let i = 0; i < len; i++) {
        // 获取key 索引从0开始
        let getKey = window[config.type].key(i)
        // 获取key对应的值
        let getVal = window[config.type].getItem(getKey)
        // 放进数组
        arr[i] = { 'key': getKey, 'val': getVal, }
    }
    return arr
}
```

## 4，删除 cookie

```
export function remove(key: string) {
  const data = get(key);  //获取cookie
  //如果获取到cookie则重新设置cookie的生存周期为过去时间
  if (data) {
    set(key, data, -1);
  }
}


// 名称前自动添加前缀
const autoAddPrefix = (key) => {
    const prefix = config.prefix ? config.prefix + '_' : '';
    return  prefix + key;
}

// 删除 removeStorage
export const removeStorage = (key) => {
    window[config.type].removeItem(autoAddPrefix(key));
}

```

## 5，清空全部

```
// 清空 clearStorage
export const clearStorage = () => {
    window[config.type].clear();
}
```
