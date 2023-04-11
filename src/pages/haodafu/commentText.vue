<template>
    <div class="layout">
        <search />
        <u-tag :list="tag_list_data" />
        <scatter-chart />
        <word/>
    </div>
</template>

<script>
import scatterChart from '@/components/common/charts/scatterChart';
import search from '@/components/common/search.vue';
import uTag from '@/components/common/uTag.vue';
import word from '@/components/common/word.vue';
export default {
    data() {
        return {
            tag_list_data: ['全部', '梅毒', '没毒', '美度', '没读', '艾滋', '艾子'],
        };
    },
    methods: {},
    components: {
        scatterChart,
        search,
        uTag,
        word,
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
}
</style>
