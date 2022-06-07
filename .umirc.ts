import { defineConfig } from 'dumi';
const logo = '/images/logo.png';

export default defineConfig({
  title: 'sum-up',
  favicon: logo,
  logo: logo,
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
});
