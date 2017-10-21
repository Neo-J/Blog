import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'

import Article from '@/components/Article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main,
      children: [
      	{
          path: '/article',
          name: 'Article',
          component: Article
      	}
      ]
    }
  ]
})
