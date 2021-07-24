import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'proxsp',
      component: () => import('@/page/index')
    }, {
      path: '/hellodesigner',
      name: 'hellodesigner',
      component: () => import('@/page/project/hellodesigner')
    }, {
      path: '/igrouppurchase',
      name: 'igrouppurchase',
      component: () => import('@/page/project/igrouppurchase')
    }
  ]
})
