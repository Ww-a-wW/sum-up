---
nav:
  title: 文档
  path: /docs
group:
  title: 发布 github-pages
# toc: menu
---

#### 发布 github-pages

使用 DUmi 创建项目并发布部署在 github 上，需准备 git 仓库，并设置为公开，settings --> Pages，设置 Source branch 为 gh-pages /(root)

## 1. 创建项目

文档模式 : yarn create @umijs/dumi-lib

站点模式 : yarn create @umijs/dumi-lib --site

安装依赖 : yarn / npm install

启动项目 : npm run start

## 2. 相关配置

- _.umirc.ts_ :

```
import { defineConfig } from 'dumi';

//github仓库名称
const defaultPath = '/sum-up';

//打包后gh-pages默认会拼接仓库名称在路径上
const baseUrl = process.env.NODE_ENV === 'production' ? defaultPath : '';

const logo = `${baseUrl}/images/logo.png`;

export default defineConfig({
  base: defaultPath,
  publicPath: `${baseUrl}/`,
  title: '标题',
  favicon: logo,
  logo: logo,
  outputPath: 'docs-dist',
  mode: 'site',
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',   //配置antd全局样式
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
});
```

- _package.json_ :

```
"private": false,   //仓库必须公开，请保证github仓库也是公开的
"main": "dist/index.js",
"module": "dist/index.esm.js",
"typings": "dist/index.d.ts",
```

## 3. 构建发布

- 打包 : npm run build 这个文件夹是可以直接被 publish 到 npm 官方库里面的，里面同时包含了 esm 与 cjs 两种生成文件

- 编译文档 : npm run docs:build 会生成 docs-dist 文件夹，里面就包含了 DEMO 网站了

- 发布 : npm run docs:deploy 将文档文件夹，发布到当前 github 的分支 gh-pages 上面
