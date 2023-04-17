import * as $api from '@/api/index';
export default {
    name: 'haodafuData',
    namespaced: true,
    actions: {
        haodafuAllType(context){
            $api.haodafuAllType().then(
                response=>{
                    console.log(response)
                    context.commit("addHaodafuAllType",response.data.data.data_object.diseaseKey_CN_list)
                },
                error=>{
                    alert(error.message)
                }
            )
        },
        haodafuConsumerMedicalType(context){
            $api.haodafuConsumerMedicalType().then(
                response=>{
                    context.commit("addHaodafuConsumerMedicalType",response.data.data.data_object.diseaseKey_CN_list)
                },
                error=>{
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        addHaodafuAllType(state,obj){
            obj.forEach(element => {
                state.haodafuAllType.push(element)
            });
        },
        addHaodafuConsumerMedicalType(state,obj){
            obj.forEach(element => {
                state.haodafuConsumerMedicalType.push(element)
            });
        },
    },
    state: {
        //
        haodafuAllType:["全部类型"],
        haodafuConsumerMedicalType:["全部类型"],

        
        
    },
};
