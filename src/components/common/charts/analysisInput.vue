<template>
    <div class="layout1">
        <el-form :inline="true"  :model="keyVal" class="demo-form-inline">
            <el-form-item label="分析疾病类型">
                <el-input class="input_style" v-model="keyVal.diseaseType" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item class="item" label="生成主题数">
                <el-input class="input_style" v-model="keyVal.topic" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="btn_style" type="primary" @click="onSubmit">开始分析</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    name: 'analysisInput',
    data() {
        return {
            keyVal: {
                diseaseType: '',
                topic: '',
            },
        };
    },
    methods: {
        onSubmit() {
            console.log(this.keyVal);
        },
    },
};
</script>
<style scoped>
.layout1{
    padding: 4rem;
    height: 8rem;
}
.input_style{
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    width: 30rem;

}
.btn_style{
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);


}
.item{
    margin-left:1.5rem ;
}
</style>
