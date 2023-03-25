<template>
    <div class="box">
        <div class="head">在线问诊文本挖掘与数据分析系统</div>
        <div class="content">
            <div class="meun">
                <collapse />
            </div>
            <div class="chart_layout">
                <sLine ></sLine>
                <pie></pie>
            </div>
        </div>
    </div>
</template>

<script>
import collapse from '@/components/common/collapse.vue';
import sLine from '@/components/common/charts/line';
import pie from '@/components/common/charts/pie';
import Pie from '@/components/common/charts/pie.vue';
export default {
    name: 'chunyu',
    data() {
        return {};
    },
    methods: {},
    components: {
        collapse,
        sLine,
        pie,
        Pie,
    },

    created() {},
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
}
.chart_layout {
    width: 100%;
    height: 100%;
    overflow: scroll;
}
</style>
