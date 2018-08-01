import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/detail', component: () => import('./views/detail.vue'),
  },
  {
    path: '/index', component: () => import('./views/index.vue'),
  },
  {
    path: '*', redirect: '/index',
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});
router.beforeEach((to, from, next) => {
  next();
});
router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
