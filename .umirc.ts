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
      name: '',
      component: './Home',
    },
  ],
  npmClient: 'yarn',
});
