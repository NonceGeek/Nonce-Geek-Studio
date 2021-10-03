import Vue from 'vue';
import VueRouter from 'vue-router';
import Intro from '@/views/Intro.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Intro',
    component: Intro,
    meta: { title: 'Introduction' },
  },
  {
    path: '/taishang',
    name: 'TaiShang',
    component: () => import('@/views/TaiShang.vue'),
    meta: { title: 'TaiShang Series' },
  },
  {
    path: '/dapp',
    name: 'DApp',
    component: () => import('@/views/DApp.vue'),
    meta: { title: 'Web3.0 dApp Camp' },
  },
  {
    path: '/builders',
    name: 'Builders',
    component: () => import('@/views/Builders.vue'),
    meta: { title: 'Builders' },
  },
  {
    path: '/supporters',
    name: 'Supporters',
    component: () => import('@/views/Supporters.vue'),
    meta: { title: 'Supporters' },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
