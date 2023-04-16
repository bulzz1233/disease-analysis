import * as $api from '@/api/index';
export default {
    name: 'constVal',
    namespaced: true,
    actions: {
        
    },
    mutations: {
        changeTpye(state,obj){
            state.MedicalType=!state.MedicalType
        },
        changeArea(state,obj){
            state.city_province=!state.city_province

        }
    },
    state: {
        MedicalType:true,
        city_province:true
    },
};
