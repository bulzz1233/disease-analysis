<template>
    <div class="layout">
        <analysis-input />
        <div class="chart_layout">
          <circular :name="circular"/>
          <wave :name="wave"/>
        </div>
        <topic-list/>
    </div>
</template>

<script>
import analysisInput from '@/components/common/charts/analysisInput.vue';
import circular from "@/components/common/charts/circular.vue";
import wave from '@/components/common/charts/wave.vue';
import topicList from '@/components/common/topicList.vue';
export default {
    data() {
        return {
          circular:'生成主题数量环形图',
          wave:'不同主题时间分布折线图'
        };
    },
    methods: {},
    components: {
        analysisInput,
        circular,
        wave,
        topicList
    },
    created() {},
};
</script>
<style scoped>
.layout {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: scroll;
}
.chart_layout {
    display: flex;
    width: 100%;
    height: 100%;
}
</style>
