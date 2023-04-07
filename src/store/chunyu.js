import * as $api from '@/api/index';
export default {
    name: 'chunyuData',
    namespaced: true,
    action: {
        
    },
    mutations: {
        
    },
    state: {
        //所有疾病数据
        AllDisease: ['1', '2', 'ss'],
        //饼图数据
        testData: [
            {
                value: 22,
                name: 'HIV',
            },
            {
                value: 10,
                name: '傻逼',
            },
            {
                value:1,
                name:"弱智"
            },
        ],
    },
};
