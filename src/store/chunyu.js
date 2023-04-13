import * as $api from '@/api/index';
export default {
    name: 'chunyuData',
    namespaced: true,
    actions: {
        chunyuAllType(context){
            $api.chunyuAllType().then(
                response=>{
                    console.log(response);
                    context.commit("addChunyuAllType",response.data.data.data_object)
                },
                error=>{
                    alert(error.message)
                }
            )
        },
        chunyuConsumerMedicalType(context){
            $api.chunyuConsumerMedicalType().then(
                response=>{
                    console.log(response);
                    context.commit("addChunyuConsumerMedicalType",response.data.data.data_object)
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
        chunyuAllType:["全部"],
        chunyuConsumerMedicalType:["全部"],



        //所有疾病数据
        AllDisease: ['1', '2', 'ss'],
        //平台问诊数据分布分析
        d_bar_list: [
            {
                name: '2011',
                type: 'bar',
                data: [18203, 23489, 29034, 104970, 131744, 630230],
            },
        ],
        d_line_list: [
            {
                name: 'Email',
                type: 'line',
                stack: 'Total',
                data: [120, 132, 101, 134, 90, 230, 210],
            },
            {
                name: 'Union Ads',
                type: 'line',
                stack: 'Total',
                data: [220, 182, 191, 234, 290, 330, 310],
            },
            {
                name: 'Video Ads',
                type: 'line',
                stack: 'Total',
                data: [150, 232, 201, 154, 190, 330, 410],
            },
            {
                name: 'Direct',
                type: 'line',
                stack: 'Total',
                data: [320, 332, 301, 334, 390, 330, 320],
            },
            {
                name: 'Search Engine',
                type: 'line',
                stack: 'Total',
                data: [820, 932, 901, 934, 1290, 1330, 1320],
            },
        ],
    },
};
