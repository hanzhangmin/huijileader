import Vue from 'vue'
import maskComponent from "./hzmMask.vue"
const toastConstructor = Vue.extend(maskComponent)
const instance = new toastConstructor({
        el: document.createElement('div')
    })
    // onst instance = new LoadingConstructor({
    //     el: document.createElement('div')
    // })

// instance.show = true // 默认隐藏
const showMask = {
    showMask() { // 显示方法
        instance.show = true;
        // document.getElementById("#app").appendChild(instance.$el)
        document.body.appendChild(instance.$el)
            // new Profile().$mount('#mount-point')
    },
}
export default {
    install() {
        if (!Vue.$showMask) {
            Vue.$showMask = showMask
        }
        Vue.mixin({
            created() {
                this.$showMask = Vue.$showMask
            }
        })
    }
}