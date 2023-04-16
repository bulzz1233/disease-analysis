import * as $api from '@/api/index';
export default {
    name: 'chunyuWordData',
    namespaced: true,
    actions: {
        allWord(context){
            $api.chunyuWordAll().then(
                res=>{
                    context.commit('word_all_list',res.data.data.data_object.top200_list)
                }
            )
        },
        consumerWord(context){
            $api.chunyuWordConsumer().then(
                res=>{
                    context.commit('word_consumer_list',res.data.data.data_object.top200_list)
                }
            )
        },
    },
    mutations: {
        word_all_list(state,obj){
            obj.forEach(element => {
                state.word_all_list.push({name:element.word,value:element.number})
            });
        },
        word_consumer_list(state,obj){
            obj.forEach(element => {
                state.word_consumer_list.push({name:element.word,value:element.number})
            });
        },

    },
    state: {



        word_all_list:[],
        word_consumer_list:[]
    },
};
