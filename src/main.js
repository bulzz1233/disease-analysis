import Vue from 'vue'
import App from './App.vue'
import {Button} from 'element-ui'
//主题
//import './assets/css/index.css'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'
import axios from 'axios';
Vue.prototype.$axios = axios  

Vue.config.productionTip = false

Vue.use(Button) 


new Vue({
  render: h => h(App),
  store,
  router:router
}).$mount('#app')
