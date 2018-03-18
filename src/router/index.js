import Vue from 'vue'
import Router from 'vue-router'

import recommend from '../components/m-recommend.vue'
import list from '../components/m-list.vue'
import rank from '../components/m-rank.vue'
import search from '../components/m-search.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },{
      path: '/recommend',
      component: recommend
    },{
      path: '/list',
      component: list
    },{
      path: '/rank',
      component: rank
    },{
      path: '/search',
      component: search
    },
  ]
})
