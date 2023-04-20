<template>
    <div class="layout">
        <num-count class="num" :list="list" />
        <div class="chart">
            <div class="charts_layout">
                <bar
                    class="shadow"
                    :name="h_bar_name"
                    :xAxis="bar_xAxis"
                    :yAxis="h_bar_yAxis"
                    :list="h_bar_list"
                >
                    <div style="height: 42px"></div>
                </bar>
                <s-line class="shadow" :name="line_name" :xAxis="line_Axis" :list="line_list">
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
            <div class="charts_layout1">
                <vbar
                    class="shadow"
                    :name="bar_name"
                    :xAxis="v_bar_xAxis"
                    :yAxis="bar_xAxis"
                    :list="vbar_list"
                >
                    <span class="title_layout">疾病类型：</span>
                    <el-select class="select" v-model="vbar_choose" placeholder="请选择">
                        <el-option
                            v-for="(item, index) in vbar_type"
                            :key="item"
                            :label="item"
                            :value="index"
                        ></el-option>
                    </el-select>
                </vbar>
                <pie class="shadow" :name="pie_name" :list="pie_list">
                    <span class="title_layout">疾病类型：</span>
                    <el-select class="select" v-model="pie_choose" placeholder="请选择">
                        <el-option
                            v-for="(item, index) in pie_type"
                            :key="item"
                            :label="item"
                            :value="index"
                        ></el-option>
                    </el-select>
                </pie>
            </div>
        </div>
    </div>
</template>

<script>
import numCount from '@/components/common/numCount.vue';
import bar from '@/components/common/charts/bar.vue';
import sLine from '@/components/common/charts/line.vue';
import pie from '@/components/common/charts/pie.vue';
import vbar from '@/components/common/charts/v_bar.vue';
export default {
    name: 'comment',
    data() {
        return {
            //下拉选择器

            line_choose: 16,
            //num_list
            /////////////
            bar_name: 'Y平台-全部疾病数量TOP10评价类型数量分布',
            h_bar_name: 'Y平台-全部疾病数量TOP10',
            bar_xAxis: [],

            //堆叠柱状图

            v_bar_xAxis: ['不满意', '一般', '满意', '很满意'],

            ////折线图
            line_name: 'Y平台-全部疾病TOP10时间分布折线图',
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

            ///
            pie_name: 'Y平台-全部疾病数量TOP10评价类型数量分布',
            pie_choose: 0,
            vbar_choose: 0,
        };
    },
    methods: {},
    created() {
        Promise.all([
            this.$store.dispatch('haodafuCommentData/allComment'),
            this.$store.dispatch('haodafuCommentData/consumerComment'),
        ]);
    },

    computed: {
        list() {
            let a = [
                { name: '疾病类型数', num: 1194, style: '#007aff' },
                { name: '最多评价疾病数', num: 95564, style: '#ff3a30' },
                { name: '最多评价类型数', num: 4802067, style: '#ff9502' },
                { name: '最多评价分布数', num: 130114, style: '#34c758' },
            ];
            let b = [
                { name: '疾病类型数', num: 183, style: '#007aff' },
                { name: '最多评价疾病数', num: 69283, style: '#ff3a30' },
                { name: '最多评价类型数', num: 877163, style: '#ff9502' },
                { name: '最多评价分布数', num: 30942, style: '#34c758' },
            ];
            if (this.$store.state.constVal.MedicalType) {
                return a;
            } else {
                return b;
            }
        },
        MedicalType() {
            return this.$store.state.constVal.MedicalType;
        },

        h_bar_yAxis() {
            if (this.$store.state.constVal.MedicalType) {
                return this.$store.state.haodafuCommentData.comment_all_h_bar_yAxis;
            } else {
                return this.$store.state.haodafuCommentData.comment_consumer_h_bar_yAxis;
            }
        },
        h_bar_list() {
            if (this.$store.state.constVal.MedicalType) {
                return this.$store.state.haodafuCommentData.comment_all_h_bar;
            } else {
                return this.$store.state.haodafuCommentData.comment_consumer_h_bar;
            }
        },
        //折线图
        line_options() {
            if (this.$store.state.constVal.MedicalType) {
                return this.$store.state.haodafuCommentData.comment_all_line_option;
            } else {
                return this.$store.state.haodafuCommentData.comment_consumer_line_option;
            }
        },
        line_list() {
            if (this.$store.state.constVal.MedicalType) {
                return this.$store.state.haodafuCommentData.coomment_all_line_list[
                    this.line_options[this.line_choose]
                ];
            } else {
                return this.$store.state.haodafuCommentData.comment_consumer_line_list[
                    this.line_options[this.line_choose]
                ];
            }
        },
        //堆叠柱状图
        vbar_type() {
            if (this.$store.state.constVal.MedicalType) {
                return this.$store.state.haodafuCommentData.comment_all_v_bar_type;
            } else {
                return this.$store.state.haodafuCommentData.comment_consumer_v_bar_type;
            }
        },
        vbar_list() {
            if (this.$store.state.constVal.MedicalType) {
                return this.$store.state.haodafuCommentData.comment_all_v_bar_list[
                    this.vbar_type[this.vbar_choose]
                ];
            } else {
                console.log(22);
                return this.$store.state.haodafuCommentData.comment_consumer_v_bar_list[
                    this.vbar_type[this.vbar_choose]
                ];
            }
        },
        //pie图
        pie_type() {
            if (this.$store.state.constVal.MedicalType) {
                return this.$store.state.haodafuCommentData.comment_pie_all_type;
            } else {
                return this.$store.state.haodafuCommentData.comment_pie_consumer_type;
            }
        },
        pie_list() {
            if (this.$store.state.constVal.MedicalType) {
                return this.$store.state.haodafuCommentData.comment_pie_all_list[
                    this.pie_type[this.pie_choose]
                ];
            } else {
                return this.$store.state.haodafuCommentData.comment_pie_consumer_list[
                    this.pie_type[this.pie_choose]
                ];
            }
        },
    },
    mounted() {
        console.log(this.line_options);
        console.log(this.$store.state.haodafuCommentData.coomment_all_line_list);
    },
    watch: {},
    components: {
        numCount,
        bar,
        sLine,
        pie,
        vbar,
    },
};
</script>
<style scoped>
.layout {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-around;
}
.charts_layout {
    display: flex;
    width: 97%;
    height: 75%;
    margin-top: 2rem;
    justify-content: center;
    align-items: center;
    max-height: 40rem;
    margin-bottom: 2rem;
    margin-left: 1rem;
}
.charts_layout1 {
    display: flex;
    height: 55%;

    width: 97%;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 1rem;
    margin-left: 1rem;
}
.chart {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80%;
    width: 99%;
}

.num {
    width: 94%;
    justify-content: space-around;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-right: 1rem;
}
.shadow {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin-right: 2rem;
}
.select {
    position: relative;
    width: 10rem;
    right: 0;
    border-radius: 5px;
    border: 1px solid #78cea5;
    box-shadow: 0 2px 12px 0 rgba(117, 117, 117, 0.1);
}
.title_layout {
    display: flex;
    align-items: center;
}
</style>
