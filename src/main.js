import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
Vue.use(vueResource)

import './tools/css/app.less'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
