<template>
    <div class="box">
        <div class="head">
            <div class="title">在线问诊文本挖掘与数据分析系统</div>
            <div class="radio_layout">
                <el-radio-group class="radio" v-model="radio1" @change="changeType()">
                    <el-radio-button label="全部类型"></el-radio-button>
                    <el-radio-button label="消费医疗"></el-radio-button>
                </el-radio-group>
            </div>
        </div>
        <div class="content">
            <div class="meun">
                <collapse />
            </div>
            <div class="chart_layout">
                <transition name="fade">
                    <keep-alive>
                        <router-view :key="$route.name"></router-view>
                    </keep-alive>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import collapse from '@/components/common/collapse.vue';

export default {
    name: 'chunyu',
    data() {
        return {
            radio1: '全部类型',
            pie_name: '疾病类型分析',
        };
    },
    methods: {
        changeType() {
            //commit直接访问mutation
            this.$store.commit('constVal/changeTpye');
            console.log(this.$store.state.constVal.MedicalType);
        },
    },
    created() {
        Promise.all([
            this.$store.dispatch('haodafuData/haodafuAllType'),
            this.$store.dispatch('haodafuData/haodafuConsumerMedicalType'),
            this.$store.dispatch('chunyuData/chunyuAllType'),
            this.$store.dispatch('chunyuData/chunyuConsumerMedicalType'),
        ]);
    },

    components: {
        collapse,
    },
};
</script>
<style scoped>
.icon {
    width: 100px;
    height: 100px;
    color: black;
}
.box {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: hidden;
}
.head {
    background: #64927c;
    width: 100%;
    min-height: 5rem;
    color: white;
    font-size: 2rem;
    font-weight: bolder;
    letter-spacing: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 5rem;
}
.content {
    display: flex;
    width: 100%;
    height: 100%;
}
.meun {
    background: #64927c;
    height: 100%;
    overflow: hidden;
    min-width: 20.625rem;
}
.chart_layout {
    width: 100%;
    height: 100%;
}
.radio_layout {
    padding: 1rem;
}
.radio {
    border: 1px solid rgb(168, 168, 168);
    margin-right: 3rem;
    border-radius: 5px;
    /* box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); */
    box-shadow: inset 20px 20px 60px #c4cacf, inset -20px -20px 60px #ffffff;
}
::v-deep .el-radio-button__orig-radio:checked + .el-radio-button__inner {
    background: linear-gradient(145deg, #5a8370, #6b9c85);
    /* box-shadow: 2px 2px 6px #557c69, -2px -2px 6px #73a88f; */
}
::v-deep .el-radio-button {
    background: #a3a4a5;
}
.fade-enter-active,
.fade-leave-active {
    transition: all ease-in-out 0.5s;
}
.fade-enter, .fade-leave /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
