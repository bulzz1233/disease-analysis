<template>
    <div class="layout">
        <v-chart class="chart" :option="option" />
    </div>
</template>

<script>
import VChart, { THEME_KEY } from 'vue-echarts';

export default {
    name: 'bar',
    components: {
        VChart,
    },
    provide: {
        [THEME_KEY]: 'light ',
    },
    data() {
        return {
            option: {
                title: {
                    text: 'World Population',
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                    },
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,
                },
                legend: {
                    // data: [],
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01],
                },
                yAxis: {
                    type: 'category',
                    data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World'],
                },
                series: [
                    {
                        name: '2011',
                        type: 'bar',
                        data: [18203, 23489, 29034, 104970, 131744, 630230],
                    },
                    {
                        name: '2012',
                        type: 'bar',
                        data: [19325, 23438, 31000, 121594, 134141, 681807],
                    },
                ],
            },
        };
    },
    methods: {},
    created() {},
    //props: ['name', 'list'],
};
</script>
<style scoped>
.layout {
    padding-top: 3rem;
    padding-left: 3rem;

    width: 100%;
    height: 100%;
}
.chart {
    width: 100%;
    height: 100%;
}
</style>
