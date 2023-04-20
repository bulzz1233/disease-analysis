<template>
    <div class="layout">
        <num-count :list="list" />
        <div ref="chart" class="charts_layout">
            <bar :name="bar_name" :xAxis="bar_xAxis" :yAxis="h_bar_yAxis" :list="h_bar_list">
                <div style="height: 42px"></div>
            </bar>
            <s-line :name="line_name" :xAxis="line_Axis" :list="line_list">
                <span class="title_layout">年份：</span>

                <el-select class="select" v-model="line_choose" placeholder="请选择">
                    <el-option
                        v-for="(item, index) in line_options"
                        :key="item"
                        :label="item"
                        :value="index"
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
            line_choose: 16,

            line_name: 'X平台-全部疾病TOP10时间分布折线图',
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

            bar_name: 'X平台-全部疾病数量TOP10',
            bar_xAxis: [],

            ////
        };
    },
    methods: {},

    computed: {
        list() {
            let a = [
                { name: '疾病类型数', num: 1547, style: '#007aff' },
                { name: '最多问诊疾病数', num: 748301, style: '#ff3a30' },
                { name: '最多问诊科室数', num: 226417, style: '#ff9502' },
            ];
            let b = [
                { name: '疾病类型数', num: 142, style: '#007aff' },
                { name: '最多问诊疾病数', num: 351063, style: '#ff3a30' },
                { name: '最多问诊科室数', num: 78911, style: '#ff9502' },
            ];

            if (this.$store.state.constVal.MedicalType) {
                return a;
            } else {
                return b;
            }
        },
        line_options() {
            if (this.$store.state.constVal.MedicalType) {
                return this.$store.state.chunyuDistributionData.distribution_all_line_option;
            } else {
                return this.$store.state.chunyuDistributionData.distribution_consumer_line_option;
            }
        },
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
        line_list() {
            if (this.$store.state.constVal.MedicalType) {
                return this.$store.state.chunyuDistributionData.distribution_all_line_list[
                    this.line_options[this.line_choose]
                ];
            } else {
                return this.$store.state.chunyuDistributionData.distribution_consumer_line_list[
                    this.line_options[this.line_choose]
                ];
            }
        },
    },
    created() {
        Promise.all([
            this.$store.dispatch('chunyuDistributionData/allDistribution'),
            this.$store.dispatch('chunyuDistributionData/consumerDistribution'),
        ]);
        this.line_choose = 0;
    },
    mounted() {
        console.log(this.$store.state.chunyuDistributionData.distribution_consumer_line_list);
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
    width: 91.5%;
    height: 100%;
    flex-direction: column;
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
    right: 5rem;
    border-radius: 5px;
    border: 1px solid #78cea5;
    box-shadow: 0 2px 12px 0 rgba(117, 117, 117, 0.1);
}
</style>
