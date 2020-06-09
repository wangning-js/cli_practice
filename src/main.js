import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

// 将axios挂载到vue构造函数原型上
Vue.prototype.axios = axios
axios.defaults.baseURL='http://localhost:3000'

Vue.config.productionTip = false
// 引入bootstrqp
import 'bootstrap/dist/css/bootstrap.css'

// 引入路由对象模块
import router from './router'

new Vue({
  render: h => h(App),
  router// 挂载
}).$mount('#app')
