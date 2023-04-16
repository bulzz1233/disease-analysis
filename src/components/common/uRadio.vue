<template>
    <div class="layout">
        <el-radio-group @change="changeArea()" v-model="radio">
            <el-radio-button label="省份"></el-radio-button>
            <el-radio-button label="城市"></el-radio-button>
        </el-radio-group>
    </div>
</template>

<script>
export default {
    name:'uRadio',
    data() {
        return {
            radio:'省份'
        };
    },
    methods: {
            changeArea(){
            //commit直接访问mutation
            this.$store.commit('constVal/changeArea');
            console.log(this.$store.state.constVal.city_province);
        }
    },
    created() {},
};
</script>
<style scoped>

</style>
