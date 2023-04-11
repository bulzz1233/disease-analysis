<template>
    <div>
        <ul class="list_style">
            <div class="title">疾病类型:</div>
            <li
                class="item"
                :class="{ active: index == isActive }"
                @click="changeType(index)"
                v-for="(o, index) in list"
                :key="index"
            >
                {{ o }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'uTag',
    data() {
        return {
            isActive: 0,
        };
    },
    methods: {
                changeType(index) {
                this.isActive = index;
                //加判断是否为当前路径

            }
        
    },
    created() {},
    props: ['list'],
};
</script>
<style scoped>
.list_style {
    list-style: none;
    display: flex;
    align-items: center;
    flex-flow: wrap;
    color: rgb(118, 118, 118);
    font-size: 1.5rem;
    padding: 0;
    margin-left: 24px;
}
.active {
    background: #64927c;
    color: white;
}
.item {
    cursor: pointer;
    margin-right: 1rem;
    padding: 0.5rem 1rem;
    transition: all 0.7s;
    border-radius: 5px;
}
.item:hover {
    color: white;
    background: #64927c;
}
.title {
    margin-right: 1rem;
}
</style>
