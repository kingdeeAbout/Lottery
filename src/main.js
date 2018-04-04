// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vconsole from 'vconsole'
import commonLess from  './assets/less/common.less'

const vConsole = new Vconsole()
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  commonLess,
  vConsole,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {     // 可以在这里进行token验证
  document.title = to.meta.title;
  next();
});