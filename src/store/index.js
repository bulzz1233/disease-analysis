import Vue from 'vue'
import Vuex from 'vuex'
import chunyuData from './chunyu'
import haodafuData from "./haodafu";
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        chunyuData,
        haodafuData
    }
})