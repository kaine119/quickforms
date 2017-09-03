import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('@/components/Home');
const Preview = () => import('@/components/Preview');
const Respond = () => import('@/components/Respond');
const Create = () => import('@/components/Create');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/create',
      name: 'Create',
      component: Create,
    },
    {
      path: '/:id',
      name: 'Preview',
      component: Preview,
    },
    {
      path: '/:id/respond',
      name: 'Respond',
      component: Respond,
    },
  ],
});
