import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CourierWelfare from '../page/courierWelfare.vue'
import WelfareEntrance from '../page/welfareEntrance.vue'
import Welfare from '../page/welfare.vue'
import Prize from '../page/prize.vue'
import Receipt from '../page/receipt/receipt.vue'

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
      name: 'welfareEntrance',
      component: WelfareEntrance,
      meta:{title:'我的奖品'}
    },
    {
      path: '/welfare',
      name: 'welfare',
      component: Welfare,
      meta:{title:'我的奖品'}
    },
    {
      path: '/prize',
      name: 'prize',
      component: Prize,
      meta:{title:'我的奖品'}
    },
    {
      path: '/receipt',
      name: 'receipt',
      component: Receipt,
      meta:{title:'收件明细'}
    }
  ]
})
