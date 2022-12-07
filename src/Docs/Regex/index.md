---
group:
  title: 正则表达式
toc: menu
---

#### 正则表达式

由 普通字符（例如字母、数字等）、特殊字符（有特殊含义的，例如.\等）两种字符组成，可以与字符串进行匹配的模板，处理字符串增删查改更加灵活。

## 创建正则表达式对象

```javascript
// 1，字面量
const regex = /hello/;

// 2，变量
const char = 'hello';
const regex = eval(`/${char}/`);

// 3，RegExp 对象
const regex = new RegExp('o', 'g');
```

## 正则表达式速查表

1.  字符

| 表达式 | 描述                                               |
| ------ | -------------------------------------------------- |
| [abc]  | 字符集。匹配集合中所含的任一字符                   |
| [^abc] | 否定字符集。匹配任何不在集合中的字符               |
| [a-z]  | 字符范围。匹配指定范围内的任意字符                 |
| .      | 匹配除换行符以外的任何单个字符                     |
| \      | 转义字符                                           |
| \w     | 匹配任何字母数字，包括下划线（等价于[A-Za-z0-9_]） |
| \W     | 匹配任何非字母数字（等价于[^a-za-z0-9_]）          |
| \d     | 数字。匹配任何数字                                 |
| \D     | 非数字。匹配任何非数字字符                         |
| \s     | 空白。匹配任何空白字符，包括空格、制表符等         |
| \S     | 非空白。匹配任何非空白字符                         |
| \p     | 检测字符属性                                       |

2.  分组和引用

| 表达式         | 描述                                                               |
| -------------- | ------------------------------------------------------------------ |
| (expression)   | 分组。匹配括号里的整个表达式符                                     |
| (?:expression) | 非捕获分组。匹配括号里的整个字符串但不获取匹配结果，拿不到分组引用 |
| \num           | 对前面所匹配分组的引用。                                           |

3.  锚点/边界

| 表达式 | 描述                                       |
| ------ | ------------------------------------------ |
| ^      | 匹配字符串或行开头                         |
| $      | 匹配字符串或行结尾                         |
| \b     | 匹配单词边界，一边字符是\w，一边字符不是\w |
| \B     | 匹配非单词边界，两边都为\w 或者 \W         |

4.  数量表示

| 表达式 | 描述                                     |
| ------ | ---------------------------------------- |
| ?      | 匹配前面的表达式 0 个或 1 个。即表示可选 |
| +      | 匹配前面的表达式至少 1 个                |
| \*     | 匹配前面的表达式 0 个或多个              |
| \|     | 或运算符。并集，可以匹配符号前后的表达式 |
| {m}    | 匹配前面的表达式 m 个                    |
| {m,}   | 匹配前面的表达式最少 m 个                |
| {m,n}  | 匹配前面的表达式最少 m 个，最多 n 个     |

5.  断言/环视

| 表达式 | 描述                                     |
| ------ | ---------------------------------------- |
| (?=)   | 正向先行断言，a(?=b) 匹配 a 的右侧是 b   |
| (?!)   | 反向先行断言，a(?!b) 匹配 a 的右侧不是 b |
| (?<=)  | 正向后行断言，(?<=b)a 匹配 a 左侧是 b    |
| (?<!)  | 反向后行断言，(?<!b)a 匹配 a 左侧不是 b  |

6.  模式

| 表达式 | 描述                                                |
| ------ | --------------------------------------------------- |
| /.../i | 忽略大小写                                          |
| /.../g | 全局匹配                                            |
| /.../m | 多行修饰符。用于多行匹配                            |
| /.../s | 视为单行                                            |
| /.../u | 允许 unicode 匹配，针对多字节（汉字），配合 \p 使用 |
| /.../y | 连续检索，下一个不匹配则结束                        |

## 正则表达式使用

1.  test —— 测试是否匹配，返回 true 或 false

```javascript
const str = 'hello world 2022!';
console.log('test', /world/.test(str));
```

2.  exec —— 查找字符串中匹配的 String ，返回一个数组（未匹配到则返回 null）

```javascript
const str = 'hello world 2022!';
const regex = /o/g;
console.log('exec', regex.exec(str));

//设置了 global 或 sticky 标志位时，JavaScript RegExp 对象是有状态的。它们会将上次成功匹配后的位置记录在 lastIndex 属性中。
console.log('exec', regex.exec(str)); //起始位置为上一次结果的索引值

//使用此特性，exec() 可用来对单个字符串中的多次匹配结果进行逐条的遍历（包括捕获到的匹配）
let resultArr = [];
let count = 0;
while ((resultArr = regex.exec(str)) !== null) {
  count++;
  console.log(`exec-${count}`, resultArr, regex.lastIndex);
}
```

3.  match —— 查找匹配的 String ，它返回一个数组，在未匹配到时会返回 null。match 不会记录上一次成功匹配的结果

```javascript
const str = 'hello world 2022!';
const regex = /o/; //返回第一个完整匹配及其相关的捕获组
// const regex = /o/g;   //返回与完整正则表达式匹配的所有结果，但不会返回捕获组
console.log('match', str.match(regex));
```

4.  matchAll —— 执行查找所有匹配的 String，它返回一个迭代器（iterator）。正则必须是设置了全局模式 g 的形式，替代在 exec 方法中使用循环获取结果

```javascript
const str = 'abaabbabaab';
const regex = /ab/g;
const array = [...str.matchAll(regex)];
console.log('matchAll', array);

const regex1 = /(a){2}b/g;
const array1 = [...str.matchAll(regex1)];
console.log('matchAll', array1);
```

5.  search —— 测试匹配的 String 方法，返回匹配到的位置索引，或者在失败时返回 -1

```javascript
const str = 'hello world 2022!';
const regex = /o/g;
console.log(str.search(regex));
```

6.  replace —— 查找匹配的 String，并且使用替换字符串替换掉匹配到的子字符串

```javascript
const str = 'hello world 2022!';
const regex = /o/g;
console.log(str.replace(regex, 'mm'));

// 分组在replace中的使用
const date = '2022/02/12     2101/04/23'; //改格式为2022-12-12
const regex = /(\d{4}).([0-1]?\d).([0-2]?\d)/g;
// console.log(date.match(regex));
// const rplStr = date.replace(regex, '$1-$2-$3');
const rplStr = date.replace(regex, (m, m1, m2, m3) => {
  return `${m1}-${m2}-${m3}`;
});
console.log(rplStr);
```

7.  split —— 使用正则表达式或者一个固定字符串分隔一个字符串，返回数组

```javascript
const str = 'hello world 2022!';
const regex = /o/g;
console.log(str.split(regex));

const names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ; Chris Hand . aaa#bbb';
const regex1 = /\s*(?:;|\.|#)\s*/g;
const nameList = names.split(regex1);
console.log(nameList);
```

## 避免正则表达式因回溯过多导致的内存溢出：

1. 降低正则表达式的复杂度, 尽量少用分组

2. 严格限制用户输入的字符串长度(特定情况下)

3. 使用单元测试、regex101 或者其他测试工具保证安全

#### 参考链接:

1. [常用正则示例](https://r2coding.com/#/README?id=%e5%b8%b8%e7%94%a8%e6%ad%a3%e5%88%99%e8%a1%a8%e8%be%be%e5%bc%8f%e7%a4%ba%e4%be%8b)
2. [正则表达式在线测试网站](https://regex101.com/)
