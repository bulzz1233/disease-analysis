import * as $api from '@/api/index';
export default {
    name: 'chunyuData',
    namespaced: true,
    actions: {
        chunyuAllType(context){
            $api.chunyuAllType().then(
                response=>{
                    context.commit("addChunyuAllType",response.data.data.data_object.illness_type_list)
                },
                error=>{
                    alert(error.message)
                }
            )
        },
        chunyuConsumerMedicalType(context){
            $api.chunyuConsumerMedicalType().then(
                response=>{
                    context.commit("addChunyuConsumerMedicalType",response.data.data.data_object.illness_type_list)
                },
                error=>{
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        addChunyuAllType(state,obj){
            obj.forEach(element => {
                state.chunyuAllType.push(element)
            });
        },
        addChunyuConsumerMedicalType(state,obj){
            obj.forEach(element => {
                state.chunyuConsumerMedicalType.push(element)
            });
        },
    },
    state: {
        //春雨类型
        chunyuAllType:["全部类型"],
        chunyuConsumerMedicalType:["全部类型"],

        
        
    },
};
