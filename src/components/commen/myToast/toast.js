import Vue from 'vue'
import toastComponent from "./toast.vue"
const toastConstructor = Vue.extend(toastComponent)
const instance = new toastConstructor({
    el: document.createElement('div')
})
instance.show = false // 默认隐藏
const mytoast = {
    toast(message, timeout) { // 显示方法
        instance.message = message;
        instance.show = true
        setTimeout(() => {
            instance.show = false
        }, timeout);
        document.body.appendChild(instance.$el)
    },
}

export default {
    install() {
        if (!Vue.$mytoast) {
            Vue.$mytoast = mytoast
        }
        Vue.mixin({
            created() {
                this.$mytoast = Vue.$mytoast
            }
        })
    }
}