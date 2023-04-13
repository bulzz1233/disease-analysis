<template>
    <div class="layout">
        <div @click="goHome()" class="goHome">主页</div>
        <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="春雨医生平台分析" name="2">
                <ul class="list">
                    <li
                        class="list_item"
                        :class="{ active: index == isActive }"
                        @click="change(index)"
                        v-for="(i, index) in list.slice(0, 4)"
                        :key="index"
                    >
                        {{ i }}
                    </li>
                </ul>
            </el-collapse-item>
            <el-collapse-item title="好大夫平台分析" name="3">
                <li
                    class="list_item"
                    :class="{ active: index + 4 == isActive }"
                    @click="change(index + 4)"
                    v-for="(i, index) in list.slice(4, list.length)"
                    :key="index"
                >
                    {{ i }}
                </li>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
export default {
    name: 'collapse',
    data() {
        return {
            isActive: 0,
            activeNames: ['2'],
            list: [
                '平台问诊数据分布分析',
                '患者提问标题词频分析',
                '患者提问标题主题分析',
                '医患问诊对话详情分析',
                '平台评价数据分布分析',
                '评价患者分布地区分析',
                '患者评价文本词频分析',
                '患者评价文本主题分析',
            ],
            router_name: [
                'c_distribution',
                'c_wordFrequency',
                'c_topic',
                'c_communication',
                'h_comment',
                'h_patient',
                'h_commentText',
                'h_commentTopic',
            ],
        };
    },
    methods: {
        handleChange(val) {
            console.log(val);
        },
        goHome() {
            this.$router.push({
                path: '/',
            });
        },
        change(index) {
            if (this.$route.name != this.router_name[index]) {
                this.isActive = index;
                //加判断是否为当前路径
                this.$router.push({
                    name: this.router_name[index],
                });
            }
        },
    },
    mounted() {},
};
</script>
<style scoped>
::v-deep .el-collapse-item__header {
    background: #64927c;
    color: white;
    border: none;
    min-width: 20rem;
    transition: all 0.5s;
    padding-left: 1rem;
}
::v-deep .el-collapse-item__header:hover {
    background: #3e5c4e;
}
.goHome:hover {
    background: #3e5c4e;
}

.list_item:hover {
    background: #3e5c4e;
}
::v-deep .el-collapse-item__wrap {
    max-width: 21rem;
}

::v-deep .el-icon-arrow-right {
    margin-right: 2rem;
}
::v-deep .el-collapse {
    border-top: 0;
}
::v-deep .el-collapse-item__content {
    padding-bottom: 0;
}
.goHome {
    height: 48px;
    color: white;
    border-top: 1px solid white;

    display: flex;
    align-items: center;
    height: 48px;
    line-height: 48px;
    cursor: pointer;
    font-size: 13px;
    font-weight: 500;
    transition: all 0.5s;
    outline: 0;
    padding-left: 1rem;
}
.list {
    list-style: none;
    margin: 0;
    padding: 0;
}
.list_item {
    height: 48px;
    color: white;
    display: flex;
    align-items: center;
    height: 48px;
    line-height: 48px;
    cursor: pointer;
    font-size: 13px;
    font-weight: 500;
    transition: all 0.5s;
    outline: 0;
    padding-left: 2rem;
    background: #799c8b;
}
.active {
    background: #3e5c4e;
}
.layout {
    overflow: hidden;
}
</style>
