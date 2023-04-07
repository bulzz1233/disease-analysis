import VueRouter from 'vue-router';

const router = new VueRouter({
    routes: [
        {
            path: '/analysis',
            name: 'analysis',
            component: () => import('@/pages/analysis.vue'),
            children: [
                {
                    path: 'c_distribution',
                    name: 'c_distribution',
                    meta: { title: '平台问诊数据分布分析' },

                    component: () => import('@/pages/chunyu/distribution.vue'),
                },
                {
                    path: 'c_wordFrequency',
                    name: 'c_wordFrequency',
                    meta: { title: '患者提问标题词频分析' },

                    component: () => import('@/pages/chunyu/wordFrequency.vue'),
                },
                {
                    path: 'c_topic',
                    name: 'c_topic',
                    meta: { title: '患者提问标题主题分析' },

                    component: () => import('@/pages/chunyu/topic.vue'),
                },
                {
                    path: 'c_communication',
                    name: 'c_communication',
                    meta: { title: '医患问诊对话详情分析' },

                    component: () => import('@/pages/chunyu/communication.vue'),
                },
                {
                    path: 'h_comment',
                    name: 'h_comment',
                    meta: { title: '平台评价数据分布分析' },

                    component: () => import('@/pages/haodafu/comment.vue'),
                },
                {
                    path: 'h_patient',
                    name: 'h_patient',
                    meta: { title: '评价患者分布地区分析' },

                    component: () => import('@/pages/haodafu/patient.vue'),
                },
                {
                    path: 'h_commentText',
                    name: 'h_commentText',
                    meta: { title: '患者评价文本词频分析' },

                    component: () => import('@/pages/haodafu/commentText.vue'),
                },
                {
                    path: 'h_commentTopic',
                    name: 'h_commentTopic',
                    meta: { title: '患者评价文本主题分析' },

                    component: () => import('@/pages/haodafu/commentTopic.vue'),
                },
            ],
        },
    ],
});

// 后置路由守卫
router.afterEach((to, from) => {
    document.title = to.meta.title || '在线问诊服务的文本分析和数据分析系统';
});
export default router;
