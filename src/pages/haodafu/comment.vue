<template>
    <div class="layout">
        <num-count class="num" :list="list" />
        <div class="chart">
            <div class="charts_layout">
                <bar
                    class="shadow"
                    :name="bar_name"
                    :xAxis="bar_xAxis"
                    :yAxis="bar_yAxis"
                    :list="bar_list"
                />
                <s-line
                    class="shadow"
                    :name="line_name"
                    :xAxis="line_Axis"
                    :list="line_list"
                    ref="s"
                />
            </div>
            <div class="charts_layout1">
                <vbar
                    class="shadow"
                    :name="bar_name"
                    :xAxis="bar_xAxis"
                    :yAxis="bar_yAxis"
                    :list="bar_list"
                />
                <pie class="shadow" :name="pie_name" :list="pie_list" />
            </div>
        </div>
    </div>
</template>

<script>
import numCount from '@/components/common/numCount.vue';
import bar from '@/components/common/charts/bar.vue';
import sLine from '@/components/common/charts/line.vue';
import pie from '@/components/common/charts/pie.vue';
import vbar from '@/components/common/charts/v_bar.vue';
export default {
    name: 'distribution',
    data() {
        return {
            list: [
                { name: '疾病类型数', num: 11, style: '#007aff' },
                { name: '最多评价疾病数', num: 14, style: '#ff3a30' },
                { name: '最多评价类型数', num: 15, style: '#ff9502' },
                { name: '最多评价分布数', num: 16, style: '#34c758' },
            ],
            /////////////
            bar_name: '春雨医生-全部疾病数量TOP10',
            bar_xAxis: [],
            bar_yAxis: ['ss', 'dd', 'vv', 'ff'],
            bar_list: [
                {
                    name: '2011',
                    type: 'bar',
                    data: [18203, 23489, 29034, 104970, 131744, 630230],
                },
            ],
            ////
            line_name: '春雨医生-全部疾病TOP10时间分布折线图',
            line_Axis: ['mon', 'tue', 'wed'],
            ///
            pie_name: '好大夫平台-全部疾病数量TOP10评价类型数量分布',
        };
    },
    methods: {},
    computed: {
        line_list() {
            return this.$store.state.haodafuData.comment_line_list;
        },
        pie_list() {
            return this.$store.state.haodafuData.comment_pie_list;
        },
    },
    components: {
        numCount,
        bar,
        sLine,
        pie,
        vbar,
    },
};
</script>
<style scoped>
.layout {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-around;
}
.charts_layout {
    display: flex;
    width: 97%;
    height: 50%;
    margin-top: 2rem;
    justify-content: center;
    align-items: center;
    max-height: 40rem;
    margin-bottom: 2rem;
    margin-left: 1rem;
}
.charts_layout1 {
    display: flex;
    height: 35%;

    width: 97%;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 7rem;
    margin-left: 1rem;
}
.chart{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80%;
    width: 99%;

}

.num {
    width: 94%;
    justify-content: space-around;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-right: 1rem;
}
.shadow {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin-right: 2rem;
}
</style>
