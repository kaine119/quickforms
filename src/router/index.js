import Vue from 'vue';
import Router from 'vue-router';
import Preview from '@/components/Preview';
import Respond from '@/components/Respond';
import Create from '@/components/Create';

Vue.use(Router);

export default new Router({
  routes: [
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
    {
      path: '/create',
      name: 'Create',
      component: Create,
    },
  ],
});
