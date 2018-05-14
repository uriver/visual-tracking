import Vue from 'vue'
import Router from 'vue-router'
import Intorduction from '@/components/introduction/index'
import Statistics from "@/components/statistics/index"
import Overview from "@/components/statistics/overview"
import Events from "@/components/statistics/event"
import User from "@/components/statistics/user"
import NewUser from "@/components/statistics/newuser"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Intorduction
    },{
      path: '/statistics', 
      component: Statistics,
      children: [
        { path: 'overview', component: Overview },
        { path: 'event', component: Events },
        { path: 'user', component: User },
        { path: 'newuser',component: NewUser }
      ]
    }
  ]
})
