export default [
  {
    path: '/',
    component: () => import('@pages/index.vue'),
  },
  {
    path: '/error',
    component: () => import('@pages/error.vue'),
  },
  {
    path: '*',
    redirect: '/error',
  },
]
