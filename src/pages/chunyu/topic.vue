<template>
    <div class="layout">
        <analysis-input class="input" />
        <div class="chart_layout">
            <circular class="input1" />
            <wave class="input1" />
        </div>
        <div class="topic">
            <topic-list />
        </div>
    </div>
</template>

<script>
import analysisInput from '@/components/common/analysisInput.vue';
import circular from '@/components/common/charts/circular.vue';
import wave from '@/components/common/charts/wave.vue';
import topicList from '@/components/common/topicList.vue';
export default {
    data() {
        return {};
    },
    methods: {},
    components: {
        analysisInput,
        circular,
        wave,
        topicList,
    },
    created() {},
};
</script>
<style scoped>
.layout {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
}
.chart_layout {
    display: flex;
    width: 90%;
    height: 80%;
    justify-content: space-around;
}
.topic{
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
}
.input{
    padding-bottom:0 ;
}
.input1{
    padding-top: 0;

}
</style>
