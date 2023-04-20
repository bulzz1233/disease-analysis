<template>
    <div class="layout">
        <div class="slot_layout">
            <slot></slot>
        </div>
        <v-chart class="chart" ref="s" :option="option" />
    </div>
</template>

<script>
import VChart, { THEME_KEY } from 'vue-echarts';

export default {
    name: 'pie',
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
                    // subtext: 'Fake Data',
                },
                tooltip: {
                    trigger: 'item',
                    //
                    // formatter: '{a} <br/>{b} : {c} ({d}%)',
                },
                legend: {
                    right: '4%',
                    top: '6%',

                    // data: [],
                },
                series: [
                    {
                        name: this.name,
                        type: 'pie',
                        //半径
                        radius: '65%',
                        //圆心位置
                        center: ['50%', '60%'],
                        //传数据
                        data: this.list,
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)',
                            },
                        },
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
    props: ['name', 'list'],
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
