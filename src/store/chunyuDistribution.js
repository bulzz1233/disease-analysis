import * as $api from '@/api/index';
export default {
    name: 'chunyuDistributionData',
    namespaced: true,
    actions: {
        allDistribution(context) {
            $api.chunyuDistributionAll().then(
                res => {
                    context.commit(
                        'distribution_all_bar',
                        res.data.data.data_object.disease_nums_list
                    );
                    context.commit('distribution_all_line_list', res.data.data.data_object);
                },
                error => {
                    alert(error.message);
                }
            );
        },
        consumerDistribution(context) {
            $api.chunyuDistributionAll().then(
                res => {
                    context.commit(
                        'distribution_consumer_bar',
                        res.data.data.data_object.disease_nums_list
                    );
                },
                error => {
                    alert(error.message);
                }
            );
        },
    },
    mutations: {
        distribution_all_bar(state, obj) {
            obj.forEach(element => {
                state.distribution_all_bar_yAxis.push(element.illness_type);
                state.distribution_all_bar.push(element.illness_nums);
            });
        },
        distribution_consumer_bar(state, obj) {
            obj.forEach(element => {
                state.distribution_consumer_bar_yAxis.push(element.illness_type);
                state.distribution_consumer_bar.push(element.illness_nums);
            });
        },
        distribution_all_line_list(state, obj) {
            for (let i = 0; i < obj.disease_time_nums_list.length; i++) {
                let diseaseData = obj.disease_time_nums_list[i];
                let diseaseName = diseaseData.illness_type;
                let timeNumsList = diseaseData.time_nums_list;
                for (let j = 0; j < timeNumsList.length; j++) {
                    let timeNums = timeNumsList[j];
                    let year = timeNums.time.slice(0, 4);
                    if (!state.distribution_all_line_list[year]) {
                        state.distribution_all_line_list[year] = [];
                    }
                    let diseaseObj = state.distribution_all_line_list[year].find(
                        d => d.name === diseaseName
                    );
                    if (!diseaseObj) {
                        diseaseObj = { name: diseaseName, type: 'line', stack: 'Total', data: [] };
                        state.distribution_all_line_list[year].push(diseaseObj);
                    }
                    diseaseObj.data.push(timeNums.nums);
                }
            }
        },
        distribution_consumer_line_list(state, obj) {
            for (let i = 0; i < obj.disease_time_nums_list.length; i++) {
                let diseaseData = obj.disease_time_nums_list[i];
                let diseaseName = diseaseData.illness_type;
                let timeNumsList = diseaseData.time_nums_list;
                for (let j = 0; j < timeNumsList.length; j++) {
                    let timeNums = timeNumsList[j];
                    let year = timeNums.time.slice(0, 4);
                    if (!state.distribution_all_line_list[year]) {
                        state.distribution_all_line_list[year] = [];
                    }
                    let diseaseObj = state.distribution_all_line_list[year].find(
                        d => d.name === diseaseName
                    );
                    if (!diseaseObj) {
                        diseaseObj = { name: diseaseName, type: 'line', stack: 'Total', data: [] };
                        state.distribution_all_line_list[year].push(diseaseObj);
                    }
                    diseaseObj.data.push(timeNums.nums);
                }
            }
        },
    },
    state: {
        distribution_all_bar: [],
        distribution_all_bar_yAxis: [],
        distribution_consumer_bar: [],
        distribution_consumer_bar_yAxis: [],

        //折线图
        distribution_all_line_list: [],

        distribution_consumer_line_list: [],
    },
};
