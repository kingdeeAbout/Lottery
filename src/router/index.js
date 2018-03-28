import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CourierWelfare from '../page/courierWelfare.vue'
import WelfareEntrance from '../page/welfareEntrance.vue'
import Welfare from '../page/welfare.vue'
import Prize from '../page/prize.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'courierWelfare',
      component: CourierWelfare
    },
    {
      path: '/welfareEntrance',
      name: 'WelfareEntrance',
      component: WelfareEntrance
    },
    {
      path: '/welfare',
      name: 'Welfare',
      component: Welfare
    },
    {
      path: '/prize',
      name: 'Prize',
      component: Prize
    }
  ]
})
