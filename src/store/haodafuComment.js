import * as $api from '@/api/index';
export default {
    name: 'haodafuCommentData',
    namespaced: true,
    actions: {
        allComment(context) {
            $api.haodafuAllComment().then(
                res => {
                    context.commit(
                        'comment_all_h_bar',
                        res.data.data.data_object.disease_nums_list
                    );
                    //vbar
                    context.commit(
                        'comment_all_v_bar',
                        res.data.data.data_object.disease_comment_type_nums
                    );
                    //line
                    context.commit('coomment_all_line_list', res.data.data.data_object);
                    //pie
                    context.commit(
                        'comment_pie_all_list',
                        res.data.data.data_object.disease_typeDesc_nums_list
                    );
                },
                error => {
                    alert(error.message);
                }
            );
        },
        consumerComment(context) {
            $api.haodafuConsumerComment().then(
                res => {
                    context.commit(
                        'comment_consumer_h_bar',
                        res.data.data.data_object.disease_nums_list
                    );
                    context.commit(
                        'comment_consumer_v_bar',
                        res.data.data.data_object.disease_comment_type_nums
                    );
                    context.commit(
                        'comment_pie_consumer_list',
                        res.data.data.data_object.disease_typeDesc_nums_list
                    );
                    context.commit('comment_consumer_line_list', res.data.data.data_object);
                },
                error => {
                    alert(error.message);
                }
            );
        },
    },
    mutations: {
        //条形图
        comment_all_h_bar(state, obj) {
            obj.forEach(element => {
                state.comment_all_h_bar_yAxis.push(element.disease_key);
                state.comment_all_h_bar.push(element.disease_nums);
            });
        },
        comment_consumer_h_bar(state, obj) {
            obj.forEach(element => {
                state.comment_consumer_h_bar_yAxis.push(element.disease_key);
                state.comment_consumer_h_bar.push(element.disease_nums);
            });
        },
        //堆叠柱状图
        comment_all_v_bar(state, obj) {
            for (let i = 0; i < obj.disease_attitude_nums_list.length; i++) {
                let disease_key = obj.disease_attitude_nums_list[i].disease_key;
                state.comment_all_v_bar_type.push(disease_key);
                let attitude_data = [
                    obj.disease_attitude_nums_list[i].dissatisfaction_nums,
                    obj.disease_attitude_nums_list[i].normal_nums,
                    obj.disease_attitude_nums_list[i].quite_satisfaction_nums,
                    obj.disease_attitude_nums_list[i].satisfaction_nums,
                ];
                let attitude_obj = { name: '态度满意度', type: 'bar', data: attitude_data };
                let effect_data = [
                    obj.disease_effect_nums_list[i].dissatisfaction_nums,
                    obj.disease_effect_nums_list[i].normal_nums,
                    obj.disease_effect_nums_list[i].quite_satisfaction_nums,
                    obj.disease_effect_nums_list[i].satisfaction_nums,
                ];
                let effect_obj = { name: '效果满意度', type: 'bar', data: effect_data };
                let skill_data = [
                    obj.disease_skill_nums_list[i].dissatisfaction_nums,
                    obj.disease_skill_nums_list[i].normal_nums,
                    obj.disease_skill_nums_list[i].quite_satisfaction_nums,
                    obj.disease_skill_nums_list[i].satisfaction_nums,
                ];
                let skill_obj = { name: '技能满意度', type: 'bar', data: skill_data };
                state.comment_all_v_bar_list[disease_key] = [effect_obj, attitude_obj, skill_obj];
            }
        },
        comment_consumer_v_bar(state, obj) {
            for (let i = 0; i < obj.disease_attitude_nums_list.length; i++) {
                let disease_key = obj.disease_attitude_nums_list[i].disease_key;
                state.comment_consumer_v_bar_type.push(disease_key);
                let attitude_data = [
                    obj.disease_attitude_nums_list[i].dissatisfaction_nums,
                    obj.disease_attitude_nums_list[i].normal_nums,
                    obj.disease_attitude_nums_list[i].quite_satisfaction_nums,
                    obj.disease_attitude_nums_list[i].satisfaction_nums,
                ];
                let attitude_obj = { name: '态度满意度', type: 'bar', data: attitude_data };
                let effect_data = [
                    obj.disease_effect_nums_list[i].dissatisfaction_nums,
                    obj.disease_effect_nums_list[i].normal_nums,
                    obj.disease_effect_nums_list[i].quite_satisfaction_nums,
                    obj.disease_effect_nums_list[i].satisfaction_nums,
                ];
                let effect_obj = { name: '效果满意度', type: 'bar', data: effect_data };
                let skill_data = [
                    obj.disease_skill_nums_list[i].dissatisfaction_nums,
                    obj.disease_skill_nums_list[i].normal_nums,
                    obj.disease_skill_nums_list[i].quite_satisfaction_nums,
                    obj.disease_skill_nums_list[i].satisfaction_nums,
                ];
                let skill_obj = { name: '技能满意度', type: 'bar', data: skill_data };
                state.comment_consumer_v_bar_list[disease_key] = [];
                state.comment_consumer_v_bar_list[disease_key].push(effect_obj);
                state.comment_consumer_v_bar_list[disease_key].push(attitude_obj);
                state.comment_consumer_v_bar_list[disease_key].push(skill_obj);
            }
        },

        //折线图
        coomment_all_line_list(state, obj) {
            for (let i = 0; i < obj.disease_time_nums_list.length; i++) {
                let diseaseData = obj.disease_time_nums_list[i];
                let diseaseName = diseaseData.disease_key;
                let timeNumsList = diseaseData.disease_time_nums_list;
                for (let j = 0; j < timeNumsList.length; j++) {
                    let timeNums = timeNumsList[j];
                    let year = timeNums.time.slice(0, 4);
                    if (!state.coomment_all_line_list[year]) {
                        state.coomment_all_line_list[year] = [];
                    }
                    let diseaseObj = state.coomment_all_line_list[year].find(
                        d => d.name === diseaseName
                    );
                    if (!diseaseObj) {
                        diseaseObj = { name: diseaseName, type: 'line', stack: 'Total', data: [] };
                        state.coomment_all_line_list[year].push(diseaseObj);
                    }
                    diseaseObj.data.push(timeNums.nums);
                }
            }
        },
        comment_consumer_line_list(state, obj) {
            for (let i = 0; i < obj.disease_time_nums_list.length; i++) {
                let diseaseData = obj.disease_time_nums_list[i];
                let diseaseName = diseaseData.disease_key;
                let timeNumsList = diseaseData.disease_time_nums_list;
                for (let j = 0; j < timeNumsList.length; j++) {
                    let timeNums = timeNumsList[j];
                    let year = timeNums.time.slice(0, 4);
                    if (!state.comment_consumer_line_list[year]) {
                        state.comment_consumer_line_list[year] = [];
                    }
                    let diseaseObj = state.comment_consumer_line_list[year].find(
                        d => d.name === diseaseName
                    );
                    if (!diseaseObj) {
                        diseaseObj = { name: diseaseName, type: 'line', stack: 'Total', data: [] };
                        state.comment_consumer_line_list[year].push(diseaseObj);
                    }
                    diseaseObj.data.push(timeNums.nums);
                }
            }
        },
        //饼图
        comment_pie_all_list(state, obj) {
            obj.forEach(element => {
                state.comment_pie_all_type.push(element.disease_key);
                state.comment_pie_all_list[element.disease_key] = [];
                state.comment_pie_all_list[element.disease_key].push({
                    name: '感谢信',
                    value: element.thanks_nums,
                });
                state.comment_pie_all_list[element.disease_key].push({
                    name: '看病经验',
                    value: element.experience_nums,
                });
                state.comment_pie_all_list[element.disease_key].push({
                    name: '医生投票',
                    value: element.vote_nums,
                });
            });
        },
        comment_pie_consumer_list(state, obj) {
            obj.forEach(element => {
                state.comment_pie_consumer_type.push(element.disease_key);
                state.comment_pie_consumer_list[element.disease_key] = [
                    { name: '感谢信', value: element.thanks_nums },
                    { name: '看病经验', value: element.experience_nums },
                    { name: '医生投票', value: element.vote_nums },
                ];
            });
        },
    },
    state: {
        /*
            comment页面
        */
        //水平条形图
        comment_all_h_bar: [],
        comment_all_h_bar_yAxis: [],

        comment_consumer_h_bar: [],
        comment_consumer_h_bar_yAxis: [],

        //折线图
        coomment_all_line_list: {"2022":[1,2]},

        comment_consumer_line_list: [],

        //堆叠柱状图
        comment_all_v_bar_type: [],
        comment_consumer_v_bar_type: [],
        comment_all_v_bar_list: {},

        comment_consumer_v_bar_list: {},

        //饼图
        comment_pie_all_type: [],
        comment_pie_consumer_type: [],
        comment_pie_all_list: {},
        comment_pie_consumer_list: {},
    },
};
