<template>
    <div class="layout">
        <search />
        <u-tag :list="tag_list_data" />
        <scatter-chart />
        <word />
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
    },
    components: {
        scatterChart,
        search,
        uTag,
        word,
    },
    mounted() {
        console.log(this.$store.state.chunyuData.chunyuAllType);
    },
    created() {
        Promise.all([
            this.$store.dispatch('chunyuData/chunyuAllType'),
            this.$store.dispatch('chunyuData/chunyuConsumerMedicalType'),
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
</style>
