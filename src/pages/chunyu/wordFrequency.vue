<template>
    <div class="layout">
        <search class="style" />
        <u-tag class="style"  :list="tag_list_data" />
        <div class="chart_layout">
            <scatter-chart class="scatter" :list="scatter_list" :Axis="scatter_type" />
            <word class="word" :list="word_list" />
        </div>
    </div>
</template>

<script>
import scatterChart from '@/components/common/charts/scatterChart';
import search from '@/components/common/search.vue';
import uTag from '@/components/common/uTag.vue';
import word from '@/components/common/word.vue';
export default {
    data() {
        return {};
    },
    methods: {},
    computed: {
        tag_list_data() {
            if (this.$store.state.constVal.MedicalType) {
                return this.$store.state.chunyuData.chunyuAllType;
            } else {
                return this.$store.state.chunyuData.chunyuConsumerMedicalType;
            }
        },
        scatter_type() {
            if (this.$store.state.constVal.MedicalType) {
                return this.$store.state.chunyuWordData.word_all_scatter_type;
            } else {
                return this.$store.state.chunyuWordData.word_consumer_scatter_type;
            }
        },
        scatter_list() {
            if (this.$store.state.constVal.MedicalType) {
                return this.$store.state.chunyuWordData.word_all_scatter_list;
            } else {
                return this.$store.state.chunyuWordData.word_consumer_scatter_list;
            }
        },
        word_list() {
            if (this.$store.state.constVal.MedicalType) {
                return this.$store.state.chunyuWordData.word_all_list;
            } else {
                return this.$store.state.chunyuWordData.word_consumer_list;
            }
        },
    },
    components: {
        scatterChart,
        search,
        uTag,
        word,
    },

    created() {
        Promise.all([
            this.$store.dispatch('chunyuWordData/allWord'),
            this.$store.dispatch('chunyuWordData/consumerWord'),
        ]);
    },
};
</script>
<style scoped>
.layout {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
.scatter {
    height: 40%;
    width: 90%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
}
.word {
    width: 90%;

    height: 40%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.chart_layout {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}
.style{
  margin-left:1rem ;
}
</style>
