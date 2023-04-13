<template>
    <div class="layout">
        <div class="title_layout">
            <div class="title">生成主题词以及对应的高频词</div>
            <el-button class="btn" type="primary">查看pyLDAvis气泡图</el-button>
        </div>
        <el-collapse class="col" v-model="activeNames" @change="handleChange">
            <el-collapse-item
                class="col_item"
                v-for="(o, index) in list_data"
                :key="index"
                :title="o.name"
                :name="index"
            >
                <div class="item" v-for="(p, index) in o.word" :key="index">
                    {{ p }}
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
export default {
    name: 'topicList',
    data() {
        return {
            list_data: [
                { name: 'Topic1', word: ['对的', '不对', 'duidui'] },
                { name: 'Topic2', word: ['的', '不对', 'duidui'] },
                { name: 'Topic3', word: ['对ff的', 't对', 'duidui'] },
            ],
            activeNames: ['0'],
        };
    },
    methods: {
        handleChange(val) {
            console.log(val);
        },
    },
};
</script>
<style scoped>
.layout {
    display: flex;
    flex-direction: column;
    padding: 4rem;
    width: 100%;
    justify-content: center;
}
.title_layout {
    display: flex;
    align-items: center;
}
.title {
    font-size: 20px;
    font-weight: bolder;
    color: #464646;
}
.btn{
    margin-left:2rem ;
}
.col{
    margin-top:2rem ;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin-right:6rem ;

    /* padding-right:6rem ; */
}
.item{
    margin-left:2rem ;
    background: #83a896;
    color: white;
    border-radius: 5px;
    padding: .7rem;
}

/deep/.el-collapse-item__header {
    border: 1px solid rgb(231, 231, 231);
    min-width: 20rem;
    transition: all 0.5s;
    padding-left: 1rem;
}
/deep/.el-collapse-item__header:hover {
    background: #d4d4d4;
}
/deep/.el-collapse-item__content{
    display: flex;
    align-items: center;
    margin-top:1rem ;
    flex-flow: wrap;
}
</style>
