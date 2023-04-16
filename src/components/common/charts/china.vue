<template>
    <div class="layout">
        <v-chart class="chart" :option="option" ref="s" />
    </div>
</template>

<script>
import '@/assets/charts/china.js';
import VChart, { THEME_KEY } from 'vue-echarts';

export default {
    name: 'china',
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
                    text: '好大夫-评价患者分布地区分析',

                    textStyle: {
                        fontSize: 25,
                    },
                },
                tooltip: {
                    triggerOn: 'mousemove',
                    formatter: function (e, t, n) {
                        return e.seriesName + '<br />' + e.name + '：' + e.value;
                    },
                },
                // 热力地图
                visualMap: {
                    min: 0,
                    max: this.list[0].value,
                    calculable: true,
                    orient: 'vertical',
                    left: '1%',
                    bottom: '1%',
                    color:['#45c170','#e6e6e6']
                },
                series: [
                    {
                        name: '患者数',
                        data: this.list,
                        type: 'map',
                        map: 'china',
                        zoom: 1.2,
                        aspectScale: 0.75,
                        label: {
                            // 默认文本标签样式
                            normal: {
                                color: 'white',
                                show: false,
                            },
                            // 高亮文本标签样式
                            emphasis: {
                                color: 'white',
                                fontSize: 22,
                                fontWeight: 'bold',
                            },
                        },
                        itemStyle: {
                            // 默认区域样式
                            normal: {
                                // 区域背景透明
                                areaColor: 'transparent',
                                borderColor: '#d1d1d1',
                                borderWidth: 1,
                            },
                            // 高亮区域样式
                            emphasis: {
                                // 高亮区域背景色
                                areaColor: '#64927c',
                            },
                        },
                    },
                ],
            },
        };
    },

    props: ['list'],
};
</script>
<style scoped>
.layout {
    padding: 4rem;
    width: 70%;
    height: 70%;
}
.chart {
    width: 70%;
    height: 70%;
}
</style>
