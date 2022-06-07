import { defineConfig } from 'dumi';

const defaultPath = '/sum-up';
const baseUrl = process.env.NODE_ENV === 'production' ? defaultPath : '';
const logo = `${baseUrl}/images/logo.png`;

export default defineConfig({
  base: defaultPath,
  publicPath: `${baseUrl}/`,
  title: 'Hi !',
  favicon: logo,
  logo: logo,
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
});
