import { defineConfig } from '@umijs/max';

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
      name: 'Review Cards',
      path: '/',
      //   redirect: '/home',
      // },
      // {
      //   name: '首页',
      // path: '/home',
      component: './Home',
    },
    {
      name: 'Add Cards',
      path: '/cardForm',
      component: './CardForm',
    },
  ],
  npmClient: 'yarn',
});
