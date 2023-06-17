import { defineConfig } from '@umijs/max';
import EmptyLayout from '@/layouts/EmptyLayout';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'SmartAnki',
  },
  routes: [
    {
      path: '/',
      //   redirect: '/home',
      // },
      // {
      //   name: '首页',
      // path: '/home',
      component: './Home',
    },
    {
      path: '/cardForm',
      component: './CardForm',
    },
  ],
  npmClient: 'yarn',
});
