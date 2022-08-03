---
title: 数组操作
toc: menu
---

## 1、数组转映射

```
export const arrayToMap = (arr: Array<any>, key: string) => {
  if (!Array.isArray(arr) || !key) return;
  return arr.reduce((res, item) => {
    const k = item[key];
    if (k || k === 0) res[k] = item;
    return res;
  }, {});
};

```

## 2、tree-->平级

```
export const generateList = (data: Array<any>, key = 'children') => {
  const dataList: Array<any> = [];
  dealData(data);
  function dealData(data: Array<any>) {
    for (let i = 0; i < data.length; i++) {
      const node = data[i];
      dataList.push(node);
      if (node?.[key]) {
        dealData(node?.[key]);
      }
    }
  }
  return dataList;
};
```

## 3、平级-->tree 结构

```
export const getChildrenList = ({
  data,
  id = 'id',
  pid = 'pid',
}: {
  data: Array<any>;
  id?: string;
  pid?: string;
}) => {
  const info = data.reduce((pre, node) => {
    pre[node[id]] = node;
    node.children = [];
    return pre;
  }, {});
  const arr = data.filter((node) => {
    if (info[node[pid]]) {
      info[node[pid]].children.push(node);
    }
    return !node[pid] || node[pid] === '0' || node[pid] === 0; //注意有些pid值为字符0时 判断会有问题
  });
  return arr || [];
};
```

## 4、构建 TreeSelect 相关字段

```
export function createSelectData({
  data = [],
  children = 'children',
  title = 'label',
  value = 'value',
}: {
  data: Array<any>;
  children?: string;
  title?: string;
  value?: string;
}) {
  const list: Array<any> = (data || []).map((item) => {
    let childrenList = [];
    if (Array.isArray(item?.[children])) {
      childrenList = createSelectData({
        data: item?.[children],
        title,
        value,
        children,
      });
    }
    return {
      ...item,
      title: item?.[title],
      value: item?.[value],
      children: childrenList,
    };
  });

  return list;
}

```

## 5、从数组中随机抽取任意数量的元素

```
function getRandomArrayElements(arr, count) {
  var shuffled = arr.slice(0),
    i = arr.length,
    min = i - count,
    temp,
    index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
}
```
