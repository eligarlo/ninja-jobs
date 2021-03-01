const redirects = [
  {
    path: '/all-jobs',
    redirect: '/jobs',
  },
  // {
  //   path: '/all-jobs/:id',
  //   // redirect: '/jobs/:id',
  // },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "Jobs" */ '../views/NotFound.vue'),
  },
]

export default redirects
