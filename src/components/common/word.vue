<template>
    <div>
        <div class='title'>x疾病-高频词云图</div>
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
            defaultWords: [
                {
                    name: 'Cat',
                    value: 26,
                },
                {
                    name: 'fish',
                    value: 19,
                },
                {
                    name: 'things',
                    value: 18,
                },
                {
                    name: 'look',
                    value: 16,
                },
                {
                    name: 'two',
                    value: 15,
                },
                {
                    name: 'fun',
                    value: 9,
                },
                {
                    name: 'know',
                    value: 9,
                },
                {
                    name: 'good',
                    value: 9,
                },
                {
                    name: 'play',
                    value: 6,
                },
                {
                    name: 'Cat',
                    value: 26,
                },
                {
                    name: 'fish',
                    value: 19,
                },
                {
                    name: 'things',
                    value: 18,
                },
                {
                    name: 'look',
                    value: 16,
                },
                {
                    name: 'two',
                    value: 15,
                },
                {
                    name: 'fun',
                    value: 9,
                },
                {
                    name: 'know',
                    value: 9,
                },
                {
                    name: 'good',
                    value: 9,
                },
                {
                    name: 'play',
                    value: 6,
                },
                {
                    name: 'Cat',
                    value: 26,
                },
                {
                    name: 'fish',
                    value: 19,
                },
                {
                    name: 'things',
                    value: 18,
                },
                {
                    name: 'look',
                    value: 16,
                },
                {
                    name: 'two',
                    value: 15,
                },
                {
                    name: 'fun',
                    value: 9,
                },
                {
                    name: 'know',
                    value: 9,
                },
                {
                    name: 'good',
                    value: 9,
                },
                {
                    name: 'play',
                    value: 6,
                },
            ],
        };
    },
};
</script>
<style scoped>
.title{
    font-size: 20px;
    font-weight: bolder;
    color: #464646;
    margin-left: 4rem;
}

</style>
