import Vue from 'vue'
import Router from 'vue-router'
import Intorduction from '@/components/introduction/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Introduction',
      component: Intorduction
    }
  ]
})
