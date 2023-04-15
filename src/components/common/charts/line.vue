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
    name: 'sLine',
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
                },
                legend: {
                    // data: [],
                },
                //调整网格位置
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,
                },
                legend: {
                    // data: [],
                    top: '4%',
                    right: '1%',
                },
                //横坐标
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: this.xAxis,
                },
                yAxis: {
                    type: 'value',
                },
                //数据
                //    {
                //         name: 'Email',
                //         type: 'line',
                //         stack: 'Total',
                //         data: [120, 132, 101, 134, 90, 230, 210],
                //     },
                series: this.list,
            },
        };
    },
    methods: {
        chartsResize() {
            this.$refs.s.resize();
        },
    },
     mounted(){
        this.chartsResize();

    },
    activated() {
        this.chartsResize();

        window.addEventListener('resize', this.chartsResize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.chartsResize, false);
    },

    props: ['name', 'xAxis', 'list'],
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
.slot_layout{
    display: flex;
    justify-content: flex-end;
    width: 100%;
}
</style>
