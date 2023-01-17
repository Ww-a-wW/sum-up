---
group:
  title: 工具函数
order: 1
title: isNilEmpty
# toc: menu
---

#### isNilEmpty

判断数据是否是 null undefined {} [] ''

```
import _ from 'lodash';

/**
 * 如果数据是 null undefined {} [] ''，返回true 其他返回false
 * @param value
 * @returns {boolean}
 */
const isNilEmpty = (value: any): value is null | undefined | '' | Record<string, never> | [] => {
  if (_.isString(value)) {
    return value.length === 0;
  }
  if (_.isObject(value)) {
    return _.isEmpty(Object.keys(value));
  }
  if (_.isArray(value)) {
    return _.isEmpty(value.length);
  }
  return _.isNil(value);
};
```
