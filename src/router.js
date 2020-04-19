import Vue from 'vue';
import Router from 'vue-router';

import Index from './components/Index.vue';
import Article from './components/Article.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/twitter',
      beforeEnter() { window.open('http://twitter.com/tomo_moog'); },
    },
    {
      path: '/github',
      beforeEnter() { window.open('http://github.com/tomopiro'); },
    },
    {
      path: '/:id',
      name: 'Article',
      component: Article,
    },
  ],
});
