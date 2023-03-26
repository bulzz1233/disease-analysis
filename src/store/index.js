import Vue from 'vue'
import Vuex from 'vuex'
import chunyuData from './chunyu'
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        chunyuData
    }
})