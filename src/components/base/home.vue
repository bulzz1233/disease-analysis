<template>
    <div class="box">
            <enter class="enter" v-show="mainShow" />

        
            <div v-show="mainShow" class="bfc"></div>
        

        <transition name="fade">
            <router-view ></router-view>
        </transition>
    </div>
</template>

<script>
import enter from '@/components/base/enter';
export default {
    name: 'home',
    data() {
        return {};
    },
    computed: {
        mainShow() {
            if (
                this.$route.path.indexOf('analysis') == -1 
            ) {
                return true;
            } else {
                return false;
            }
        },
    },
    methods: {},
    created() {},

    components: {
        enter,
    },
};
</script>
<style scoped>
.box {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.bfc {
    overflow: hidden;
    width: 100%;
    height: 100%;
    background: url('@/assets/img/background.png');
    position: absolute;
    background-size: 100% 100%;
    z-index: -1;
}
.fade-enter-active,
.fade-leave-active {
    transition: all ease-in-out 1s;
}
.fade-enter, .fade-leave /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
