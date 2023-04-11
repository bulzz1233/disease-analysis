import * as $api from '@/api/index';
export default {
    name: 'haodafuData',
    namespaced: true,
    action: {},
    mutations: {},
    state: {
        comment_line_list: [
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
        comment_pie_list: [
            {
                name: 'ss',
                value: 22,
            },
            {
                name: 'ls',
                value: 27,
            },
            {
                name: 'iu',
                value: 12,
            },
            {
                name: '9s',
                value: 2,
            },
        ],
    },
};
