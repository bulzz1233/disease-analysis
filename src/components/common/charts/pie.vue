<template>
    <div class="layout">
        <v-chart class="chart" :option="option" />
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
                    left: 'center',
                },
                tooltip: {
                    trigger: 'item',
                    //
                    // formatter: '{a} <br/>{b} : {c} ({d}%)',
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    // data: [],
                },
                series: [
                    {
                        name: this.name,
                        type: 'pie',
                        //半径
                        radius: '55%',
                        //圆心位置
                        center: ['50%', '40%'],
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
        
    },
    created() {},
    props:['name','list']
};
</script>
<style scoped>
.layout{
    padding-top: 3rem;
    padding-left:3rem ;
    
    width: 100%;
    height: 100%;
}
.chart{
    width: 100%;
    height: 100%;
}
</style>
