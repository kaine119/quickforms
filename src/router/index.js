import Vue from 'vue';
import Router from 'vue-router';
import Preview from '@/components/Preview';
import Respond from '@/components/Respond';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/:id/preview',
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
