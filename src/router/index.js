import VueRouter from 'vue-router';

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component:()=>import ('@/components/base/home.vue' )  ,
        },
    ],
});

// 后置路由守卫
router.afterEach((to, from) => {
    document.title = to.meta.title || '在线问诊服务的文本分析和数据分析系统';
});
export default router;
