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
      redirect: '/home',
    },
    {
      name: '',
      path: '/home',
      component: './Home',
    },
  ],
  npmClient: 'yarn',
});
