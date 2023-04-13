import Vue from 'vue'
import Vuex from 'vuex'
import chunyuData from './chunyu'
import haodafuData from "./haodafu";
import constVal from './constVal';
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        chunyuData,
        haodafuData,
        constVal
    }
})