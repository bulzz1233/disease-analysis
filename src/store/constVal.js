import * as $api from '@/api/index';
export default {
    name: 'constVal',
    namespaced: true,
    actions: {
        
    },
    mutations: {
        changeTpye(state,obj){
            state.MedicalType=!state.MedicalType
        }
    },
    state: {
        MedicalType:true
    },
};
