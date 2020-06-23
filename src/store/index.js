import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
import {
    gettruenumber
} from "assets/js/myjs"


const store = new Vuex.Store({
    state: {
        // urlf: "http://47.105.118.98/jdpt/",
        // urle: "http://47.105.118.98/jdpth/"
        zhensx: [{
                zhenid: 6,
                zhenName: "刘寨街道办事处",
                sName: "刘寨街道"
            },
            {
                zhenid: 7,
                zhenName: "长兴路街道办事处",
                sName: "长兴路街道"
            },
            {
                zhenid: 9,
                zhenName: "江山路街道办事处",
                sName: "江山路街道"
            },
            {
                zhenid: 8,
                zhenName: "新城街道办事处",
                sName: "新城街道"
            },
            {
                zhenid: 4,
                zhenName: "迎宾路街道办事处",
                sName: "迎宾路街道"
            },
            {
                zhenid: 3,
                zhenName: "大河路街道办事处",
                sName: "大河路街道"
            },
            {
                zhenid: 1,
                zhenName: "古荥镇",
                sName: "古荥镇"
            },
            {
                zhenid: 2,
                zhenName: "花园口镇",
                sName: "花园口镇"
            },
        ],
        status: Boolean(sessionStorage.getItem("status")), //身份true为区领导，false为镇领导
        studyurl: "",
        imgurl: "http://47.105.118.98/jdpt/",
        vmanagerurl: "http://47.105.118.98/jdpt/HJResourse/VillagecadresImages/",
        // 村干部照片路径
        vhuiyipurl: "http://47.105.118.98/jdpt/HJResourse/CunHuiyi/",
        // 村会议照片路径
        vhuodongpurl: "http://47.105.118.98/jdpt/HJResourse/Cunhuodong/",
        // 村活动照片路径
        vqypurl: "http://47.105.118.98/jdpt/HJResourse/HuKouqianyi/",
        // 迁移照片路径
        // 组织活动照片路径
        zzhdpurl: "http://47.105.118.98/jdpt/HJResourse/Zuzhihuodong/",
        // 学习园地党规党纪
        styfilesdddj: "http://47.105.118.98/jdpt/HJResourse/Law/",
        // 反馈图片路径
        feedbackurl: "http://47.105.118.98/jdpt/HJResourse/Feedback/",
        // 资源图片路径
        ziyuanurl: "http://47.105.118.98/jdpt/HJResourse/CunHuiyi/"
    },
    mutations: {
        changestatus(state, status) {
            state.status = status
        }
    },
    getters: {
        theday() {
            let date = new Date()
            let theday = "";
            let year = date.getFullYear();
            var mouth = date.getMonth();
            if (mouth == 11) {
                theday = year + "-" + gettruenumber(mouth + 1) + "-01~" + year + "-" + gettruenumber(mouth + 1) + "-31";
            } else {
                theday = year + "-" + gettruenumber(mouth + 1) + "-01~" + year + "-" + gettruenumber(mouth + 2) + "-01";
            }
            return theday
        }
    }
})
export default store