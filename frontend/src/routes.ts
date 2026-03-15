import { defineRoutes } from 'ice';
import BasicLayout from '@/layouts/BasicLayout';

export default defineRoutes([
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/',
        component: () => import('@/pages/index'),
      },
      {
        path: '/feed',
        component: () => import('@/pages/feed'),
      },
      {
        path: '/capture',
        component: () => import('@/pages/capture'),
      },
      {
        path: '/dashboard',
        component: () => import('@/pages/dashboard'),
      },
      {
        path: '/agents',
        component: () => import('@/pages/agents'),
      },
    ],
  },
]);
