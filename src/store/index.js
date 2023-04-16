import Vue from 'vue'
import Vuex from 'vuex'
import chunyuData from './chunyu/chunyu'
import haodafuCommentData from "./haodafu/haodafuComment";
import constVal from './constVal';
import chunyuDistributionData from './chunyu/chunyuDistribution';
import chunyuWordData from './chunyu/chunyuWord';
import haodafuData from './haodafu/haodafu';
import haodafuPatientData from './haodafu/haodafuPatient';

Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        chunyuData,
        haodafuCommentData,
        constVal,
        chunyuDistributionData,
        chunyuWordData,
        haodafuData,
        haodafuPatientData
    }
})
