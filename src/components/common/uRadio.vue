<template>
    <div>
        <el-radio-group v-model="radio">
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
    methods: {},
    created() {},
};
</script>
<style scoped></style>
