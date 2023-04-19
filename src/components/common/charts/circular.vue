<template>
    <div class="layout">
        <v-chart class="chart init" :option="option" ref="s" />
    </div>
</template>

<script>
import VChart, { THEME_KEY } from 'vue-echarts';

export default {
    name: 'circular',
    components: {
        VChart,
    },
    provide: {
        [THEME_KEY]: 'light ',
    },
    data() {
        return {
            option: {
                tooltip: {
                    trigger: 'item',
                },
                title: {
                    text: this.name,
                },
                legend: {
                    top: '10%',
                    left: 'center',
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                           //半径
                        radius: ['50%','70%'],
                        //圆心位置
                        center: ['50%', '55%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center',
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 40,
                                fontWeight: 'bold',
                            },
                        },
                        labelLine: {
                            show: false,
                        },
                        data:this.list,
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
        list: {
            deep: true,
            handler(newVal) {
                this.option.series.data= newVal;
                this.$refs.s.setOption(this.option, true);
            },
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
    props: ['name','list'],
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
