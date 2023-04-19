import * as $api from '@/api/index';
export default {
    name: 'chunyuTextData',
    namespaced: true,
    actions: {
        chunyuAllText(context) {
            $api.chunyuTextAll().then(
                response => {
                    context.commit(
                        'allTextNums',
                        response.data.data.data_object.interaction_record_analysis
                    );
                    context.commit(
                        'allPieList',
                        response.data.data.data_object.doctor_interaction_type_analysis
                    );
                    context.commit(
                        'allBarList',
                        response.data.data.data_object.doctor_reply_analysis
                    );
                    context.commit(
                        'allTableList',
                        response.data.data.data_object.inquiry_detail_list_analysis
                    );
                },
                error => {
                    alert(error.message);
                }
            );
        },
        chunyuConsumerText(context) {
            $api.chunyuTextConsumer().then(
                response => {
                    context.commit(
                        'consumerTextNums',
                        response.data.data.data_object.interaction_record_analysis
                    );
                    context.commit(
                        'consumerPieList',
                        response.data.data.data_object.doctor_interaction_type_analysis
                    );
                    context.commit(
                        'consumerBarList',
                        response.data.data.data_object.doctor_reply_analysis
                    );
                    context.commit(
                        'consumerableList',
                        response.data.data.data_object.inquiry_detail_list_analysis
                    );
                },
                error => {
                    alert(error.message);
                }
            );
        },
    },
    mutations: {
        allTextNums(state, obj) {
            state.num_list_all.push(
                { name: '医生回复数', num: obj.doctor_interaction_nums, style: '#007aff' },
                { name: '患者提问数', num: obj.patient_interaction_nums, style: '#ff3a30' },
                { name: '问诊记录总数', num: obj.total_dialog_nums, style: '#ff9502' },
                { name: '总交互数', num: obj.total_interaction_nums, style: '#34c758' }
            );
        },
        consumerTextNums(state, obj) {
            state.num_list_consumer.push(
                { name: '医生回复数', num: obj.doctor_interaction_nums, style: '#007aff' },
                { name: '患者提问数', num: obj.patient_interaction_nums, style: '#ff3a30' },
                { name: '问诊记录总数', num: obj.total_dialog_nums, style: '#ff9502' },
                { name: '总交互数', num: obj.total_interaction_nums, style: '#34c758' }
            );
        },
        allPieList(state, obj) {
            state.pie_list_all.push(
                { name: '纯文字回复次数', value: obj.text_nums },
                { name: '文字+图文回复次数', value: obj.text_pic_nums },
                { name: '文字+语音回复次数', value: obj.text_audio_nums },
                { name: '文字+图片+语音回复次数', value: obj.text_audio_nums }
            );
        },
        consumerPieList(state, obj) {
            state.pie_list_consumer.push(
                { name: '纯文字回复次数', value: obj.text_nums },
                { name: '文字+图文回复次数', value: obj.text_pic_nums },
                { name: '文字+语音回复次数', value: obj.text_audio_nums },
                { name: '文字+图片+语音回复次数', value: obj.text_audio_nums }
            );
        },
        allBarList(state, obj) {
            state.bar_list_all.push({
                name: 'total-reply',
                type: 'bar',
                data: [
                    obj.total_reply.text_reply_nums,
                    obj.total_reply.pic_reply_nums,
                    obj.total_reply.audio_reply_nums,
                ],
            });
            state.bar_list_all.push({
                name: 'average-reply',
                type: 'bar',
                data: [
                    obj.average_reply.text_reply_nums,
                    obj.average_reply.pic_reply_nums,
                    obj.average_reply.audio_reply_nums,
                ],
            });
        },
        consumerBarList(state,obj) {
            state.bar_list_consumer.push({
                name: 'total-reply',
                type: 'bar',
                data: [
                    obj.total_reply.text_reply_nums,
                    obj.total_reply.pic_reply_nums,
                    obj.total_reply.audio_reply_nums,
                ],
            });
            state.bar_list_consumer.push({
                name: 'average-reply',
                type: 'bar',
                data: [
                    obj.average_reply.text_reply_nums,
                    obj.average_reply.pic_reply_nums,
                    obj.average_reply.audio_reply_nums,
                ],
            });
        },
        allTableList(state,obj){
            state.table_list_all=obj
        },
        consumerableList(state,obj){
            state.table_list_consumer = obj
        }
    },
    state: {
        num_list_all: [],
        num_list_consumer: [],

        pie_list_all: [],
        pie_list_consumer: [],

        bar_list_all: [],
        bar_list_consumer: [],

        table_list_all:[],
        table_list_consumer:[],

    },
};
