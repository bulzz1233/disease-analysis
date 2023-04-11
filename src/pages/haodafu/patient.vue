<template>
    <div class="layout">
        <search class="a" />
        <u-tag class="a" :list="tag_list_data"/>
        <div class="chart">
            <china :list="r_list" />
            <u-table :tableData="t_data" />
        </div>
    </div>
</template>

<script>
import china from '@/components/common/charts/china.vue';
import uTable from '@/components/common/uTable.vue';
import search from '@/components/common/search.vue';
import uTag from '@/components/common/uTag.vue';
export default {
    data() {
        return {
            r_list: [
                {
                    name: '北京',
                    value: 54,
                },
                {
                    name: '南海诸岛',
                    value: 0,
                },
                {
                    name: '天津',
                    value: 13,
                },
                {
                    name: '上海',
                    value: 40,
                },
                {
                    name: '重庆',
                    value: 75,
                },
                {
                    name: '河北',
                    value: 13,
                },
                {
                    name: '河南',
                    value: 83,
                },
                {
                    name: '云南',
                    value: 11,
                },
                {
                    name: '辽宁',
                    value: 19,
                },
                {
                    name: '黑龙江',
                    value: 15,
                },
                {
                    name: '湖南',
                    value: 69,
                },
                {
                    name: '安徽',
                    value: 60,
                },
                {
                    name: '山东',
                    value: 39,
                },
                {
                    name: '新疆',
                    value: 4,
                },
                {
                    name: '江苏',
                    value: 31,
                },
                {
                    name: '浙江',
                    value: 104,
                },
                {
                    name: '江西',
                    value: 36,
                },
                {
                    name: '湖北',
                    value: 1052,
                },
                {
                    name: '广西',
                    value: 33,
                },
                {
                    name: '甘肃',
                    value: 7,
                },
                {
                    name: '山西',
                    value: 9,
                },
                {
                    name: '内蒙古',
                    value: 7,
                },
                {
                    name: '陕西',
                    value: 22,
                },
                {
                    name: '吉林',
                    value: 4,
                },
                {
                    name: '福建',
                    value: 18,
                },
                {
                    name: '贵州',
                    value: 5,
                },
                {
                    name: '广东',
                    value: 98,
                },
                {
                    name: '青海',
                    value: 1,
                },
                {
                    name: '西藏',
                    value: 0,
                },
                {
                    name: '四川',
                    value: 44,
                },
                {
                    name: '宁夏',
                    value: 4,
                },
                {
                    name: '海南',
                    value: 22,
                },
                {
                    name: '台湾',
                    value: 3,
                },
                {
                    name: '香港',
                    value: 5,
                },
                {
                    name: '澳门',
                    value: 5,
                },
            ],
            t_data: [
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                },
                {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                },
                {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                },
                {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                },
                       {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                },
                {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                },
                {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                },
                {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                },
            ],
            tag_list_data: ['全部','爱之', '艾滋', '艾子', '爱之', '艾滋', '艾子'],
        };
    },
    methods: {},
    components: {
        china,
        uTable,
        search,
        uTag,
    },
    created() {},
};
</script>
<style scoped>
.layout {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
.chart {
    height: 100%;

    display: flex;
    justify-content: center;
}
.a{
    display: flex;
    justify-content: center;
}
</style>
