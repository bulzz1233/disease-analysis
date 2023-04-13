<template>
    <div class="input_layout">
        <el-input
            placeholder="请输入搜索内容"
            v-model="search"
            class="input_style"
            name="key"
        ></el-input>
        <el-button type="primary" class="btn" @click="searchByKey">搜索</el-button>
    </div>
</template>

<script>
export default {
    name: 'search',
    data() {
        return {
            search: '',
        };
    },
    methods: {
        searchByKey() {
            console.log(this.search);
        },
    },
    created() {},
};
</script>
<style scoped>
.input_layout {
    display: flex;
    padding: 2rem;
    padding-left:4rem ;
}
.input_style {
    width: 40rem;
    font-size: 1.625rem;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.btn {
    color: white;
    margin-left: 5px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.btn:hover {
    background: #3e5c4e;
    overflow: hidden;
}
</style>
