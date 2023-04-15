<template>
    <div class="layout">
        <num-count :list="list" />
        <div ref="chart" class="charts_layout">
            <bar :name="bar_name" :xAxis="bar_xAxis" :yAxis="h_bar_yAxis" :list="h_bar_list">
                <div style="height: 42px"></div>
            </bar>
            <div class="line"></div>
            <s-line :name="line_name" :xAxis="line_Axis" :list="line_list">
                <span class="title_layout">年份：</span>

                <el-select class="select" v-model="line_choose" placeholder="请选择">
                    <el-option
                        v-for="item in line_options"
                        :key="item"
                        :label="item"
                        :value="item"
                    ></el-option>
                </el-select>
            </s-line>
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
            line_options: [
                '2006',
                '2007',
                '2008',
                '2009',
                '2010',
                '2011',
                '2012',
                '2013',
                '2014',
                '2015',
                '2016',
                '2017',
                '2018',
                '2019',
                '2020',
                '2021',
                '2022',
                '2023',
            ],
            line_choose: '2022',

            line_name: '春雨医生-全部疾病TOP10时间分布折线图',
            line_Axis: [
                '1月',
                '2月',
                '3月',
                '4月',
                '5月',
                '6月',
                '7月',
                '8月',
                '9月',
                '10月',
                '11月',
                '12月',
            ],

            list: [
                { name: '疾病类型数', num: 11, style: '#007aff' },
                { name: '最多评价疾病数', num: 14, style: '#ff3a30' },
                { name: '最多评价类型数', num: 15, style: '#ff9502' },
                { name: '最多评价分布数', num: 16, style: '#34c758' },
            ],
            bar_name: '春雨医生-全部疾病数量TOP10',
            bar_xAxis: [],

            ////
        };
    },
    methods: {},

    computed: {
        h_bar_yAxis() {
            if (this.$store.state.constVal.MedicalType) {
                return this.$store.state.chunyuDistributionData.distribution_all_bar_yAxis;
            } else {
                return this.$store.state.chunyuDistributionData.distribution_consumer_bar_yAxis;
            }
        },
        h_bar_list() {
            if (this.$store.state.constVal.MedicalType) {
                return this.$store.state.chunyuDistributionData.distribution_all_bar;
            } else {
                return this.$store.state.chunyuDistributionData.distribution_consumer_bar;
            }
        },
    },
    created() {
        Promise.all([
            this.$store.dispatch('chunyuDistributionData/allDistribution'),
            this.$store.dispatch('chunyuDistributionData/consumerDistribution'),
        ]);

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
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.line {
    height: 80%;
    border: 1px solid rgb(226, 226, 226);
}
.title_layout {
    display: flex;
    align-items: center;
}
.select {
    position: relative;
    width: 10rem;
    right: 0;
    border-radius: 5px;
    border: 1px solid #78cea5;
    box-shadow: 0 2px 12px 0 rgba(117, 117, 117, 0.1);
}
</style>
