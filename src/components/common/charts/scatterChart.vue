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
                    text: 'x疾病-高频词TOP30',
                    // subtext: 'Fake Data',
                },
                xAxis: {
                    
                        data: this.Axis,
                    
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
                        type: 'scatter',
                        color:'#91cc75',
                        data: this.list,
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
        watch: {
        Axis: {
            deep: true,
            handler(newVal) {
                this.option.xAxis.data = newVal;
                this.$refs.s.setOption(this.option, true);
            },
        },
        list: {
            deep: true,
            handler(newVal) {
                this.option.series[0].data = newVal;
                this.$refs.s.setOption(this.option, true);
            },
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

    props: [ 'Axis', 'list'],
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
