<template>
    <div class="layout">
        <num-count :list="list" />
        <div class="charts_layout">
            <bar
                :name="bar_name"
                :type="bar_type"
                :xAxis="bar_xAxis"
                :yAxis="bar_yAxis"
                :list="bar_list"
            />
            <s-line :name="line_name" :xAxis="line_Axis" :list="line_list"  ref="s"/>
        </div>
    </div>
</template>

<script>
import numCount from '@/components/common/numCount.vue';
import bar from '@/components/common/charts/bar.vue';
import sLine from '@/components/common/charts/line.vue';
export default {
    name: 'distribution',
    data() {
        return {
            list: [
                { name: '疾病类型数', num: 11, style: '#007aff' },
                { name: '最多评价疾病数', num: 14, style: '#ff3a30' },
                { name: '最多评价类型数', num: 15, style: '#ff9502' },
                { name: '最多评价分布数', num: 16, style: '#34c758' },
            ],
            bar_name: '春雨医生-全部疾病数量TOP10',
            bar_type: ['category', 'value'],
            bar_xAxis: [],
            bar_yAxis: ['ss', 'dd', 'vv', 'ff'],
            bar_list: [
                {
                    name: '2011',
                    type: 'bar',
                    data: [18203, 23489, 29034, 104970, 131744, 630230],
                },
            ],
            ////
            line_name: '春雨医生-全部疾病TOP10时间分布折线图',
            line_Axis: ['mon', 'tue', 'wed'],
            line_list: [
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
        };
    },
    methods: {},
    components: {
        numCount,
        bar,
        sLine,
    },

   
};
</script>
<style scoped>
.layout {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
.charts_layout {
    display: flex;
    width: 100%;
    height: 80%;
    margin-top: 2rem;
    justify-content: center;
    align-items: center;
}
</style>
