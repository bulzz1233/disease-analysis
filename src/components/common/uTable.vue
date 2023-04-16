<template>
    <div class="table_layout">
        <u-radio class="radio" />
        <el-table class="table" :data="tableData" stripe max-height="700" border>
            <el-table-column
                type="index"
                label="排名"
                header-align="center"
                align="center"
                width="100"
            ></el-table-column>
            <el-table-column
                prop="area"
                label="地区"
                header-align="center"
                align="center"
                width="100"
            ></el-table-column>
            <el-table-column
                prop="nums"
                label="数量"
                header-align="center"
                align="center"
                width="100"
            ></el-table-column>
            <el-table-column
                prop="percent"
                label="占比"
                header-align="center"
                align="center"
                width="100"
            ></el-table-column>
        </el-table>
    </div>
</template>

<script>
import uRadio from '@/components/common/uRadio';
export default {
    name: 'uTable',
    data() {
        return {};
    },
    components: {
        uRadio
    },
    props: ['tableData'],
};
</script>
<style scoped>
.table_layout {
    padding: 4rem;
    margin-right:2rem ;
}
.radio {
    padding-bottom: 1rem;
}
.table {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
