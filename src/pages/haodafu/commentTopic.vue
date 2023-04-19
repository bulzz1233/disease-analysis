<template>
    <div class="layout">
        <analysis-input class="input" />
        <div class="chart_layout">
            <circular class="input1"
            :list="circular_list"
            :name="circular_name"
             />
        </div>
        <div class="topic">
            <topic-list :list_data="topic_list" />
        </div>
    </div>
</template>

<script>
import analysisInput from '@/components/common/analysisInput.vue';
import circular from '@/components/common/charts/circular.vue';
import topicList from '@/components/common/topicList.vue';
export default {
    data() {
        return {
            circular_name:'生成主题数量环形图'
        };
    },
    methods: {},
    components: {
        analysisInput,
        circular,
        topicList,
    },
    computed: {
        topic_list() {
            if (this.$store.state.constVal.MedicalType) {
                return this.$store.state.haodafuTopicData.topic_all_list;
            } else {
                return this.$store.state.haodafuTopicData.topic_consumer_list;
            }
        },
        circular_list() {
            if (this.$store.state.constVal.MedicalType) {
                return this.$store.state.haodafuTopicData.circular_all_list;
            } else {
                return this.$store.state.haodafuTopicData.circular_consumer_list;
            }
        },
    },
    created() {
                 Promise.all([
            this.$store.dispatch('haodafuTopicData/haodafuTopicAll'),
            this.$store.dispatch('haodafuTopicData/haodafuTopicComsumer'),
            
        ])
    },
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
    width: 100%;
    height: 80%;
    justify-content: space-around;
    align-items: center;
}
.topic {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
}
.input {
    padding-bottom: 0;
}
.input1 {
    padding-top: 0;
    width: 93%;
    box-shadow: 0 2px 12px 0 rgba(117, 117, 117, 0.1);
}
</style>
