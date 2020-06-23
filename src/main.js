import Vue from 'vue'
import App from './App.vue'
// import 'babel-polyfill'
import "babel-polyfill"
import router from "./router"
import store from "./store"
import echarts from 'echarts'
import mytoast from "./components/commen/myToast/toast"
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
Vue.use(Viewer, {
    defaultOptions: {
        zIndex: 9999
    }
})
Vue.use(mytoast)
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')