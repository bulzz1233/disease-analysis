<template>
    <div class="layout">
        <search />
        <u-tag :list="tag_list" />
        <div class="num">

        <num-count :list="num_list" />
        </div>
        <div class="chart_layout">
            <circular :name="circular" />
            <wave :name="wave" />
        </div>
        <div class="table_layout">
            <div class="title">问诊对话详情分析</div>
            <el-table class="table" :data="tableData" stripe max-height="700" border>
                <el-table-column
                    prop="id"
                    label="问诊ID"
                    header-align="center"
                    align="center"
                    width="100"
                ></el-table-column>
                <el-table-column
                    prop="title"
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
    </div>
</template>

<script>
import search from '@/components/common/search.vue';
import uTag from '@/components/common/uTag.vue';
import numCount from '@/components/common/numCount.vue';
import circular from '@/components/common/charts/circular.vue';
import wave from '@/components/common/charts/wave.vue';
export default {
    data() {
        return {
            circular: '医生交互类型分析',
            wave: '医生回复次数分析',
            tag_list: ['baozhen', '感冒', 'ff', '发烧'],
            num_list: [
                { name: '疾病类型数', num: 11, style: '#007aff' },
                { name: '最多评价疾病数', num: 146, style: '#ff3a30' },
                { name: '最多评价类型数', num: 155, style: '#ff9502' },
                { name: '最多评价分布数', num: 167, style: '#34c758' },
            ],
            tableData: [
                { id: 1, title: '标题1' },
                { id: 2, title: '标题2' },
                { id: 3, title: '标题3' },
                { id: 1, title: '标题1' },
                { id: 2, title: '标题2' },
                { id: 3, title: '标题3' },
                { id: 1, title: '标题1' },
                { id: 2, title: '标题2' },
                { id: 3, title: '标题3' },
                { id: 1, title: '标题1' },
                { id: 2, title: '标题2' },
                { id: 3, title: '标题3' },
            ],
        };
    },
    methods: {
        handleClick(row) {
            console.log(row);
        },
    },
    components: {
        search,
        uTag,
        numCount,
        circular,
        wave,
    },
    mounted() {
        console.log(11);
    },
};
</script>
<style scoped>
.layout {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: scroll;
}
.chart_layout {
    display: flex;
    height: 100%;
    justify-content: center;
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
.table_layout {
    padding: 4rem;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.num{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
}
</style>
