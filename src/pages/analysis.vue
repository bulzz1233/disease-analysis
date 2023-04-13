<template>
    <div class="box">
        <div class="head">在线问诊文本挖掘与数据分析系统</div>
        <div class="content">
            <div class="meun">
                <collapse />
            </div>
            <div class="chart_layout ">
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
            pie_name: '疾病类型分析',
        };
    },
    methods: {},
    mounted() {
        
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
    min-height: 4rem;
    color: white;
    font-size: 2rem;
    font-weight: bolder;
    letter-spacing: 5px;
    display: flex;
    align-items: center;
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

.fade-enter-active,
.fade-leave-active {
    transition: all ease-in-out 0.5s;
}
.fade-enter, .fade-leave /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
