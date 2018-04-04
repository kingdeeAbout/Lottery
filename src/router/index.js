import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CourierWelfare from '../page/courierWelfare.vue'
import WelfareEntrance from '../page/welfareEntrance.vue'
import Welfare from '../page/welfare.vue'
import Prize from '../page/prize.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',          // HTML5 history 消除# 后台续作配置 否则404
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'courierWelfare',
      component: CourierWelfare,
      meta:{title:'快递员福利社'}
    },
    {
      path: '/welfareEntrance',
      name: 'WelfareEntrance',
      component: WelfareEntrance,
      meta:{title:'我的奖品'}
    },
    {
      path: '/welfare',
      name: 'Welfare',
      component: Welfare,
      meta:{title:'我的奖品'}
    },
    {
      path: '/prize',
      name: 'Prize',
      component: Prize,
      meta:{title:'我的奖品'}
    }
  ]
})
