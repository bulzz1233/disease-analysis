<template>
    <div class="layout">
        <search />
        <u-tag :list="tag_list_data" />
        <div class="num">
            <num-count :list="num_list" />
        </div>
        <div class="chart_layout">
            <div class="pie">
                <pie :list="pie_list" :name="circular" />
            </div>
            <div class="line"></div>
            <div class="vbar">
                <vbar :name="bar_name" :xAxis="v_bar_xAxis" :yAxis="bar_xAxis" :list="vbar_list" />
            </div>
        </div>
        <div class="table_layout">
            <div class="title">问诊对话详情分析</div>
            <el-table class="table" :data="tableData" stripe max-height="700" border>
                <el-table-column
                    prop="inquiry_id"
                    label="问诊ID"
                    header-align="center"
                    align="center"
                    width="100"
                ></el-table-column>
                <el-table-column
                    prop="inquiry_title"
                    label="问诊标题"
                    header-align="center"
                    align="center"
                ></el-table-column>
                <el-table-column align="center" header-align="center" label="操作">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">
                            查看详情
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <el-dialog title="详情信息" :visible.sync="dialogTableVisible">
            <div class="li_layout">
                <div class="li">
                    <div class="text title1">问诊ID :</div>
                    <div class="text text1">{{ gridData.inquiry_id }}</div>
                </div>

                <div class="li">
                    <div class="text title1">问诊时间 :</div>
                    <div class="text text1">{{ gridData.inquiry_time }}</div>
                </div>

                <div class="li">
                    <div class="text title1">问题题目 :</div>
                    <div class="text text1">{{ gridData.inquiry_title }}</div>
                </div>

                <div class="li">
                    <div class="text title1">医患交互总次数 :</div>
                    <div class="text text1">{{ gridData.inquiry_total_nums }}</div>
                </div>
                <div class="li">
                    <div class="text title1">患者提问次数 :</div>
                    <div class="text text1">{{ gridData.patient_inquiry_nums }}</div>
                </div>

                <div class="li">
                    <div class="text title1">医生回答次数 :</div>
                    <div class="text text1">{{ gridData.doctor_answer_nums }}</div>
                </div>

                <div class="li">
                    <div class="text title1">医生回答类型 :</div>
                    <div class="text text1">{{ gridData.doctor_answer_type }}</div>
                </div>

                <div class="li">
                    <div class="text title1">医生回答文本总长度 :</div>
                    <div class="text text1">{{ gridData.doctor_answer_text_total_length }}</div>
                </div>
                <div class="li">
                    <div class="text title1">医生回复文本平均长度 :</div>
                    <div class="text text1">{{ gridData.doctor_answer_text_averange_length }}</div>
                </div>

                <div class="li">
                    <div class="text title1">医生文字回复次数 :</div>
                    <div class="text text1">{{ gridData.doctor_answer_text_nums }}</div>
                </div>

                <div class="li">
                    <div class="text title1">医生语音回复次数 :</div>
                    <div class="text text1">{{ gridData.doctor_answer_audio_nums }}</div>
                </div>

                <div class="li">
                    <div class="text title1">医生图片回复次数 :</div>
                    <div class="text text1">{{ gridData.doctor_answer_pic_nums }}</div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import search from '@/components/common/search.vue';
import uTag from '@/components/common/uTag.vue';
import numCount from '@/components/common/numCount.vue';
import vbar from '@/components/common/charts/v_bar.vue';
import pie from '@/components/common/charts/pie.vue';
export default {
    data() {
        return {
            circular: '医生交互类型分析',
            bar_name: '医生回复次数分析',
            v_bar_xAxis: ['文本回复数', '图片回复数', '语音回复数'],
            dialogTableVisible: false,
            gridData: [],
            bar_xAxis: [],
        };
    },
    methods: {
        handleClick(row) {
            console.log(row);
            this.dialogTableVisible = true;
            this.gridData = row;
        },
    },
    computed: {
        tag_list_data() {
            if (this.$store.state.constVal.MedicalType) {
                return this.$store.state.chunyuData.chunyuAllType;
            } else {
                return this.$store.state.chunyuData.chunyuConsumerMedicalType;
            }
        },
        num_list() {
            if (this.$store.state.constVal.MedicalType) {
                return this.$store.state.chunyuTextData.num_list_all;
            } else {
                return this.$store.state.chunyuTextData.num_list_consumer;
            }
        },
        pie_list() {
            if (this.$store.state.constVal.MedicalType) {
                return this.$store.state.chunyuTextData.pie_list_all;
            } else {
                return this.$store.state.chunyuTextData.pie_list_consumer;
            }
        },
        vbar_list() {
            if (this.$store.state.constVal.MedicalType) {
                return this.$store.state.chunyuTextData.bar_list_all;
            } else {
                return this.$store.state.chunyuTextData.bar_list_consumer;
            }
        },
        tableData() {
            if (this.$store.state.constVal.MedicalType) {
                return this.$store.state.chunyuTextData.table_list_all;
            } else {
                return this.$store.state.chunyuTextData.table_list_consumer;
            }
        },
    },
    components: {
        search,
        uTag,
        numCount,
        vbar,
        pie,
    },
    mounted() {},
};
</script>
<style scoped>
.layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: scroll;
}
.chart_layout {
    display: flex;
    height: 100%;
    width: 95%;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
padding-top: 1rem;
}
.pie {
    height: 100%;
    width: 47.5%;
}
.vbar {
    height: 100%;
    width: 47.5%;

}
.table {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.title {
    font-size: 20px;
    font-weight: bolder;
    color: #464646;
    margin-bottom: 2rem;
}
.title1 {
    font-weight: bolder;
}
.table_layout {
    padding: 4rem;
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.num {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
}
.line{
    height: 90%;
    width: 1px;
    background: #e0e0e0;
}
.li {
    display: flex;
    margin-top: 1.5rem;
    width: 50%;
}
.li_layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
.text {
    font-size: 1.3rem;
}

.text1 {
    margin-left: 4rem;
}
::v-deep .el-dialog__header {
    background: #64927c;
}
::v-deep .el-dialog__title {
    color: white;
    font-weight: bolder;
}
::v-deep .el-dialog__close {
    color: rgb(233, 233, 233);
    font-weight: bolder;
}
::v-deep .el-dialog__close:hover {
    color: white;
    font-weight: bolder;
}
</style>
