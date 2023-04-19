import * as $api from '@/api/index';
export default {
    name: 'chunyuTopicData',
    namespaced: true,
    actions: {
        chunyuTopicAll(context){
            $api.chunyuTopicAll().then(
                response=>{
                    console.log(response)
                    context.commit("chunyuTopicAll",response.data.data.data_object.topic_high_frequent_word_list)
                    context.commit("chunyuCircularAll",response.data.data.data_object.topic_nums_list)

                },
                error=>{
                    alert(error.message)
                }
            )
        },
        chunyuTopicComsumer(context){
            $api.chunyuTopicConsumer().then(
                response=>{
                    context.commit("chunyuTopicComsumer",response.data.data.data_object.topic_high_frequent_word_list)
                    context.commit("chunyuCircularComsumer",response.data.data.data_object.topic_nums_list)

                },
                error=>{
                    alert(error.message)
                }
            )
        },
    },
    mutations: {
        chunyuTopicAll(state,obj){
            console.log(obj)
            obj.forEach(element=>{
                let arry = []
                element.word_list.forEach(item=>{
                    arry.push(`${item.word}(${item.percent})`)
                })
                state.topic_all_list.push({name:'Topic'+(Number(element.topic)+1),word:arry})
            })
        },
        chunyuTopicComsumer(state,obj){
            obj.forEach((element,index)=>{
                let arry = []
                element.word_list.forEach(item=>{
                    arry.push(`${item.word}(${item.percent})`)
                })
                state.topic_consumer_list.push({name:'Topic'+(index+1),word:arry})
            })
        },
        chunyuCircularAll(state,obj){
            obj.forEach(element=>{
                state.circular_all_list.push({value:element.nums,name:'Topic'+(Number(element.topic)+1)})
            })
        },
        chunyuCircularComsumer(state,obj){
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
