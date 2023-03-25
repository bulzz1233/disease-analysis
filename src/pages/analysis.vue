<template>
    <div class="box">
        <div class="head">
            春雨医生
        </div>
        <div class="content">
            <div class="meun">
                <collapse/>
            </div>
            
            <sLine class="pie" ></sLine>
        </div>
        
    </div>
</template>

<script>
import collapse from "@/components/common/collapse.vue";
import sLine from "@/components/common/charts/line";
export default {
    name:'chunyu',
    data() {
        return {};
    },
    methods: {},
    components:{
        collapse,
        sLine,
        
    },

    created() {},
};
</script>
<style scoped>
.icon{
    width: 100px;
    height: 100px;
    color: black;
}
.box{
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
}
.head{
    background:#64927c ;
    width: 100%;
    height: 4rem;
    color: white;
    font-size: 2rem;
    font-weight: bolder;
    letter-spacing: 5px;
    display: flex;
    align-items: center;
    padding-left:10rem ;
}
.content{
    display: flex;
    width: 100%;
    height: 100%;
}
.meun{
    background: #64927c;
    height: 100%;
    overflow:scroll;
}
.pie{
    width: 100%;
    height: 100%;
}
</style>
