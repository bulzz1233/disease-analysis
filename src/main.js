import Vue from 'vue'
import App from './App.vue'
import {Button,Collapse,CollapseItem} from 'element-ui'
//主题
import './assets/theme/index.css'
//字体图标
import  "./assets/iconfont/iconfont.css"
import VueRouter from 'vue-router'
import router from './router'
import store from './store'
import axios from 'axios';
//


Vue.prototype.$axios = axios  

Vue.config.productionTip = false

Vue.use(Button) 
Vue.use(Collapse) 
Vue.use(CollapseItem) 
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  store,
  router:router
}).$mount('#app')
