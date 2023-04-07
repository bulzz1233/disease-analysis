<template>
    <div class="input_layout">
        <el-input
            placeholder="请输入搜索内容"
            v-model="search"
            class="input_style"
            name="key"
        ></el-input>
        <el-button type="primary" class="btn " @click="searchByKey">搜索</el-button>
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
}
.input_style {
    height: 6rem;
    width: 40rem;
}
.btn {
    height: 100%;
    color: white;
    margin-left: 5px;
}

.btn:hover {
    background: #3e5c4e;
}

</style>
