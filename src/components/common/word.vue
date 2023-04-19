<template>
    <div class="layout">
        <div class='title'>高频词云图</div>
    <wordcloud
        :data="defaultWords"
        nameKey="name"
        valueKey="value"
        :color="myColors"
        :showTooltip="false"
        :rotate="deg"
        :wordClick="wordClickHandler"

    ></wordcloud>
    </div>
</template>

<script>
import wordcloud from 'vue-wordcloud';

export default {
    name: 'word',
    components: {
        wordcloud,
    },
    methods: {
        wordClickHandler(name, value, vm) {
            console.log('wordClickHandler', name, value, vm);
        },
    },
    data() {
        return {
            deg: {
                from: 0, to: 90, numOfOrientation: 2
                
            },
            myColors: ['#1f77b4', '#629fc9', '#94bedb', '#c9e0ef'],
            defaultWords: this.list
        };
    },
        watch: {
        list: {
            deep: true,
            handler(newVal) {
                this.defaultWords= newVal;
            },
        },
    },
    props:['list']
};
</script>
<style scoped>
.title{
    font-size: 20px;
    font-weight: bolder;
    color: #464646;
}
.layout{
     padding-top: 3rem;
    padding-left: 3rem;

}

</style>
