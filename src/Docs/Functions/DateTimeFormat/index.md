---
title: DateTimeFormat
# toc: menu
---

#### 时间日期格式转换

```
import { Moment } from 'moment';

// 转换显示日期
export const dateYMDHMS = (date: Moment): string => {
  return date.format('YYYY-MM-DD HH:mm:ss');
};

export const dateYMD = (date: Moment): string => {
  return date.format('YYYY-MM-DD');
};

export const dateHMS = (date: Moment): string => {
  return date.format('HH:mm:ss');
};

//获取momemt对象
export const getMoment = (str: string): Moment => {
  if (moment(str).isValid()) {
    return moment(str);
  }
  return new Error('时间日期字符串不符合格式');
};

```
