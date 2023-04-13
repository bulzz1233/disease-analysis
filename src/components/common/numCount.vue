<template>
        <ul class="list_style">
            <li class="list" v-for="(o,index) in list" :key="index">
                <i :style="{background:o.style}" class=" icon el-icon-s-data"></i>
                <div class="content">
                    <div :style="{color:o.style}" class="num">{{o.num}}</div>
                    <div class="name">{{o.name}}</div>
                </div>
            </li>
        </ul>
</template>
<script>
export default {
    name:'numCount',
    data() {
        return {
            
        };
    },
    methods: {},
    created() {},
    props:['list']
};
</script>
<style scoped>
.list_style {
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2rem 1rem;
    margin-top: 3rem;
    width: 90%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

}
.list {
    display: flex;
    justify-content: space-around;
}
.content{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.num{
    display: flex;
    justify-content:center ;
    align-items: center;
    font-weight: bolder;
    font-size:1.5rem ;
}
.name{
    display: flex;
    justify-content:center ;
    align-items: center;
    color: rgb(129, 128, 128);
    font-size:1.2rem ;

}
.icon{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    border-radius: 5px;
    color: white;
    padding: .4rem;
}
.content{
    margin-left: 1rem;
}
</style>
