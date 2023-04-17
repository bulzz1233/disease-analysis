<template>
    <div class="layout">
        <search class="a" />
        <u-tag class="a" :list="tag_list_data" />
        <div class="chart">
            <china1 :list="r_list" :nums="nums" />
            <u-table :tableData="t_data" />
        </div>
    </div>
</template>

<script>
import china1 from '@/components/common/charts/china.vue';
import uTable from '@/components/common/uTable.vue';
import search from '@/components/common/search.vue';
import uTag from '@/components/common/uTag.vue';
export default {
    data() {
        return {



        };
    },
    methods: {},
    computed: {
        tag_list_data() {
            if (this.$store.state.constVal.MedicalType) {
                return this.$store.state.haodafuData.haodafuAllType;
            } else {
                return this.$store.state.haodafuData.haodafuConsumerMedicalType;
            }
        },
         r_list() {
             if (this.$store.state.constVal.MedicalType) {
                 return this.$store.state.haodafuPatientData.haodafuAllPatientProvince;
             } else {
                 return this.$store.state.haodafuPatientData.haodafuConsumerPatientProvince;
             }
         },
        nums(){
           if (this.$store.state.constVal.MedicalType) {
                 return this.$store.state.haodafuPatientData.allNums;
             } else {
                 return this.$store.state.haodafuPatientData.consumerNums;
             }
        },
        t_data() {
            if (this.$store.state.constVal.MedicalType) {
                if (this.$store.state.constVal.city_province) {
                    return this.$store.state.haodafuPatientData.haodafuAllPatientProvinceTable;
                } else {
                    return this.$store.state.haodafuPatientData.haodafuAllPatientCityTable;
                }
            } else {
                if (this.$store.state.constVal.city_province) {
                    return this.$store.state.haodafuPatientData.haodafuConsumerPatientProvinceTable;
                } else {
                    return this.$store.state.haodafuPatientData.haodafuConsumerPatientCityTable;
                }
            }
        },
    },
    created() {
        Promise.all([
                        this.$store.dispatch('haodafuPatientData/haodafuAllPatient'),

            this.$store.dispatch('haodafuData/haodafuAllType'),
            this.$store.dispatch('haodafuData/haodafuConsumerMedicalType'),
            this.$store.dispatch('haodafuPatientData/haodafuConsumerPatient'),
        ]);
    },
  mounted() {
  },
  components: {
        china1,
        uTable,
        search,
        uTag,
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
.chart {
    height: 100%;

    display: flex;
    justify-content: center;
}
.a {
    display: flex;
    justify-content: center;
}
</style>
