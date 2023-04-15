<template>
    <div class="layout">
          <div class="slot_layout">
            <slot></slot>
        </div>
        <v-chart class="chart" :option="option" ref="s" />
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
                    text: this.name,
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
                    right: '1%',
                    top: '2%',
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01],
                    // data:this.xAxis
                },
                //数据里的data有多少值要对应相应的坐标值个数
                yAxis: {
                    type: 'category',
                    data: this.yAxis,
                },
                // 数据格式  {
                //         name: '2011',
                //         type: 'bar',
                //         data: [18203, 23489, 29034, 104970, 131744, 630230],
                //     },
                series: [
                    {
                        type: 'bar',
                        data: this.list,
                    },
                ],
            },
        };
    },
    methods: {
        chartsResize() {
            console.log(1);
            this.$refs.s.resize();
        },
    },
    mounted() {
        this.chartsResize();
    },
    activated() {
        this.chartsResize();

        window.addEventListener('resize', this.chartsResize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.chartsResize, false);
    },
    //type设定表格方向['category','value'],xAxis[]坐标数据，name为标题，list为数据列表
    props: ['name', 'xAxis', 'yAxis', 'list'],
};
</script>
<style scoped>
.layout {
    padding-left: 3rem;

    width: 100%;
    height: 100%;
}
.chart {
    width: 100%;
    height: 100%;
}
.slot_layout {
    display: flex;
    justify-content: flex-end;
    width: 100%;
}
</style>
