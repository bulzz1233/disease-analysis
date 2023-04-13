<template>
    <div class="layout">
        <num-count :list="list" />
        <div ref="chart" class="charts_layout">
            <bar :name="bar_name" :xAxis="bar_xAxis" :yAxis="bar_yAxis" :list="bar_list" />
            <s-line :name="line_name" :xAxis="line_Axis" :list="line_list" ref="s" />
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
            bar_xAxis: [],
            bar_yAxis: ['ss', 'dd', 'vv', 'ff'],

            ////
            line_name: '春雨医生-全部疾病TOP10时间分布折线图',
            line_Axis: ['mon', 'tue', 'wed'],

            
        };
    },
    methods: {
     
    },
    mounted() {
     
    },
    computed: {
        bar_list() {
            return this.$store.state.chunyuData.d_bar_list;
        },
        line_list() {
            return this.$store.state.chunyuData.d_line_list;
        },
      
    },
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
    height: 96%;
    align-items: center;
    justify-content: space-around;
}
.charts_layout {
    display: flex;
    width: 98%;
    height: 100%;
    margin-top: 2rem;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
