<template>
    <div class="layout">
        <v-chart class="chart" :option="option" ref="s" />
    </div>
</template>

<script>
import VChart, { THEME_KEY } from 'vue-echarts';
export default {
    name: 'scatterChart',
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
                    text: 'x疾病-高频词%TOP30',
                    // subtext: 'Fake Data',
                },
                xAxis: {
                    xAxis: {
                        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                    },
                },
                tooltip: {
                    trigger: 'item',
                },
                legend: {
                    right: '10%',
                    top: '5%',

                    // data: [],
                },
                yAxis: {},
                series: [
                    {
                        name: '数据源1',
                        symbolSize: 20,
                        data: [
                            [10, 10],
                            [220, 24],
                            [191, 234],
                            [290, 330],
                        ],
                        type: 'scatter',
                    },
                    {
                        name: '数据源2',
                        symbolSize: 20,
                        type: 'scatter',
                        data: [
                            [40, 40],
                            [120, 239],
                            [294, 50],
                            [144, 230],
                        ],
                    },
                ],
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
