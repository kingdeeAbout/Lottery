// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vconsole from 'vconsole'
import commonLess from  './assets/less/common.less'
import Cookie from './libs/cookieHelper'

const cookie = new Cookie();                 // 设置TOKEN
cookie.setCookie("CRMTOKEN", "8xzJdIuTkKeSmeuZptWAJA");
cookie.setCookie("TOKEN", "sGavFr5pdsVDLeyL5DyI0FhKmWcv3ixU1JcNO537kwk");
cookie.setCookie("Hm_lvt_22ea01af58ba2be0fec7c11b25e88e6c", "1527053862,1527066428,1527123960,1528254160");
cookie.setCookie("mkttype", "PERSONAL");
cookie.setCookie("Hm_lpvt_22ea01af58ba2be0fec7c11b25e88e6c", "1528426897");
cookie.setCookie("MOSSJSESSIONID", "5BC224DB3178502ED6D72FAC741B23A2.mktmgr");
cookie.setCookie("STID", "100");

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