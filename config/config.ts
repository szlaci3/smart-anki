// https://umijs.org/config/
import { defineConfig } from 'umi';

import proxy from './proxy';
import routes from './routes';

const { REACT_APP_ENV } = process.env;

const SERVERIP = 'https://smart-anki-ws.onrender.com';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'SmartAnki',
  },
  // publicPath: './',
  // history: {type: 'hash'},
  // hash: true,
  routes,
  title: 'SmartAnki',
  proxy: proxy[REACT_APP_ENV || 'dev'],
  define: {
    SERVERIP: SERVERIP,
  },
  npmClient: 'yarn',
});
