import * as $api from '@/api/index';
export default {
    name: 'haodafuTopicData',
    namespaced: true,
    actions: {
        haodafuTopicAll(context){
            $api.haodafuTopicAll().then(
                response=>{
                    context.commit("haodafuTopicAll",response.data.data.data_object.topic_high_frenquent_word_list)
                    context.commit("haodafuCircularAll",response.data.data.data_object.topic_nums_list)

                },
                error=>{
                    alert(error.message)
                }
            )
        },
        haodafuTopicComsumer(context){
            $api.haodafuTopicConsumer().then(
                response=>{
                    context.commit("haodafuTopicComsumer",response.data.data.data_object.topic_high_frenquent_word_list)
                    context.commit("haodafuCircularComsumer",response.data.data.data_object.topic_nums_list)

                },
                error=>{
                    alert(error.message)
                }
            )
        },
    },
    mutations: {
        haodafuTopicAll(state,obj){
            obj.forEach((element,index)=>{
                let arry = []
                element.word_list.forEach(item=>{
                    arry.push(`${item.word}(${item.percent})`)
                })
                state.topic_all_list.push({name:'Topic'+(Number(element.topic)+1),word:arry})
            })
        },
        haodafuTopicComsumer(state,obj){
            obj.forEach((element,index)=>{
                let arry = []
                element.word_list.forEach(item=>{
                    arry.push(`${item.word}(${item.percent})`)
                })
                state.topic_consumer_list.push({name:'Topic'+(index+1),word:arry})
            })
        },
        haodafuCircularAll(state,obj){
            obj.forEach(element=>{
                state.circular_all_list.push({value:element.nums,name:'Topic'+(Number(element.topic)+1)})
            })
        },
        haodafuCircularComsumer(state,obj){
            obj.forEach(element=>{
                state.circular_consumer_list.push({value:element.nums,name:'Topic'+(Number(element.topic)+1)})
            })
        },
    },
    state: {

        circular_all_list:[],
        circular_consumer_list:[],

        topic_all_list:[],
        topic_consumer_list:[]
        
    },
};
