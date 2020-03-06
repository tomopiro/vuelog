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
      path: '/article',
      name: 'Article',
      component: Article,
    },
  ],
});
