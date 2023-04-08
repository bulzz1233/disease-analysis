import Vue from 'vue';
import App from './App.vue';
import { Button,Icon,Input, Collapse, CollapseItem } from 'element-ui';
//主题
import './assets/theme/index.css';
//字体图标
import './assets/iconfont/iconfont.css';
import VueRouter from 'vue-router';
import router from './router';
import store from './store';
import axios from 'axios';
//配置echart
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LineChart, PieChart,BarChart } from 'echarts/charts';
import { UniversalTransition,LabelLayout } from 'echarts/features';
import {
    TitleComponent,
    ToolboxComponent,
    GridComponent,
    TooltipComponent,
    LegendComponent,
} from 'echarts/components';
echarts.use([
    CanvasRenderer,
    ToolboxComponent,
    GridComponent,
    UniversalTransition,
    LineChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    PieChart,
    BarChart,
    LabelLayout
]);


Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(VueRouter);
Vue.use(Icon);
Vue.use(Input);

new Vue({
    render: h => h(App),
    store,
    router: router,
}).$mount('#app');
