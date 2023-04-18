import * as $api from '@/api/index';
export default {
    name: 'haodafuWordData',
    namespaced: true,
    actions: {
        allWord(context){
            $api.haodafuWordAll().then(
                res=>{
                    context.commit('word_all_list',res.data.data.data_object.top200_list)
                    context.commit('word_all_scatter_list',res.data.data.data_object.top20_list)
                }
            )
        },
        consumerWord(context){
            $api.haodafuWordConsumer().then(
                res=>{

                    context.commit('word_consumer_list',res.data.data.data_object.top200_list)
                    context.commit('word_consumer_scatter_list',res.data.data.data_object.top20_list)

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
        word_all_scatter_list(state,obj){
            obj.forEach(element=>{
                state.word_all_scatter_type.push(element.word)
                state.word_all_scatter_list.push(element.number)
            })
        },
        word_consumer_scatter_list(state,obj){
            obj.forEach(element=>{
                state.word_consumer_scatter_type.push(element.word)
                state.word_consumer_scatter_list.push(element.number)
            })
        }
    },
    state: {
        //散点图
        word_all_scatter_type:[],
        word_all_scatter_list:[],
        word_consumer_scatter_type:[],
        word_consumer_scatter_list:[],


        word_all_list:[],
        word_consumer_list:[]
    },
};
