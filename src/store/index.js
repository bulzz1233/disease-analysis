import Vue from 'vue'
import Vuex from 'vuex'
import chunyuData from './chunyu'
import haodafuCommentData from "./haodafuComment";
import constVal from './constVal';
import chunyuDistributionData from './chunyuDistribution';
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        chunyuData,
        haodafuCommentData,
        constVal,
        chunyuDistributionData
    }
})
