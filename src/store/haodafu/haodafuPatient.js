import * as $api from '@/api/index';
export default {
    name: 'haodafuPatientData',
    namespaced: true,
    actions: {
        haodafuAllPatient(context) {
            $api.haodafuAllPatient().then(
                response => {
                    context.commit(
                        'haodafuAllPatientCity',
                        response.data.data.data_object.city_distribute_list
                    );
                    context.commit(
                        'haodafuAllPatientProvince',
                        response.data.data.data_object.province_distribute_list
                    );
                },
                error => {
                    alert(error.message);
                }
            );
        },
        haodafuConsumerPatient(context) {
            $api.haodafuConsumerPatient().then(
                response => {
                    context.commit(
                        'haodafuConsumerPatientCity',
                        response.data.data.data_object.city_distribute_list
                    );
                    context.commit(
                        'haodafuConsumerPatientProvince',
                        response.data.data.data_object.province_distribute_list
                    );
                },
                error => {
                    alert(error.message);
                }
            );
        },
    },
    mutations: {
        haodafuAllPatientProvince(state, obj) {
            state.allNums = obj[0].distribution_nums;
            obj.forEach(element => {
                state.haodafuAllPatientProvince.push({
                    name: element.distribution_area,
                    value: element.distribution_nums,
                });
                state.haodafuAllPatientProvinceTable.push({
                    area: element.distribution_area,
                    nums: element.distribution_nums,
                    percent: element.distribution_percent,
                });
            });
            console.log(state.haodafuAllPatientProvince);
        },
        haodafuConsumerPatientProvince(state, obj) {
            state.consumerNums = obj[0].distribution_nums;

            obj.forEach(element => {
                state.haodafuConsumerPatientProvince.push({
                    name: element.distribution_area,
                    value: element.distribution_nums,
                });
                state.haodafuConsumerPatientProvinceTable.push({
                    area: element.distribution_area,
                    nums: element.distribution_nums,
                    percent: element.distribution_percent,
                });
            });
        },

        haodafuAllPatientCity(state, obj) {
            obj.forEach(element => {
                state.haodafuAllPatientCityTable.push({
                    area: element.distribution_area,
                    nums: element.distribution_nums,
                    percent: element.distribution_percent,
                });
            });
        },
        haodafuConsumerPatientCity(state, obj) {
            obj.forEach(element => {
                state.haodafuConsumerPatientCityTable.push({
                    area: element.distribution_area,
                    nums: element.distribution_nums,
                    percent: element.distribution_percent,
                });
            });
        },
    },
    state: {
        //
        haodafuAllPatientProvince: [],
        haodafuConsumerPatientProvince: [],
        allNums: 0,
        consumerNums: 0,
        haodafuAllPatientCityTable: [],
        haodafuAllPatientProvinceTable: [],
        haodafuConsumerPatientProvinceTable: [],
        haodafuConsumerPatientCityTable: [],
    },
};
