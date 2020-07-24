import Vue from 'vue'
import App from './App.vue'
// import 'babel-polyfill'
import "babel-polyfill"
import router from "./router"
import store from "./store"
import echarts from 'echarts'

import hzmMask from './components/commen1/Mask/hzmMask'
Vue.use(hzmMask)
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
Vue.use(Viewer, {
    defaultOptions: {
        zIndex: 9999
    }
})

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')