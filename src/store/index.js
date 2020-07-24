import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
import {
    gettruenumber
} from "assets/js/myjs"

const store = new Vuex.Store({
    state: {
        towns: [{
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
        id: localStorage.id,
        name: localStorage.name,
        townid: localStorage.townid,
        level: localStorage.level,
        townname: localStorage.townname,
        areaid: localStorage.areaid,
        areaname: localStorage.areaname,
        villageid: localStorage.villageid,
        villagename: localStorage.villagename,
        token: localStorage.token
    },
    mutations: {
        set_level(state, level) {
            state.level = level
            localStorage.level = level
        },
        set_id(state, id) {
            state.id = Number(id)
            localStorage.id = Number(id)
        },
        set_townid(state, townid) {
            state.townid = Number(townid)
            localStorage.townid = Number(townid)
        },
        set_townname(state, townname) {
            state.townname = townname
            localStorage.townname = townname
        },
        set_areaid(state, areaid) {
            state.areaid = Number(areaid)
            localStorage.areaid = Number(areaid)
        },
        set_areaname(state, areaname) {
            state.areaname = areaname
            localStorage.areaname = areaname
        },
        set_name(state, name) {
            state.name = name
            localStorage.name = name
        },
        set_token(state, token) {
            state.token = token
            localStorage.token = token
        },
        set_villageid(state, villageid) {
            state.villageid = villageid
            localStorage.villageid = villageid
        },
        set_villagename(state, villagename) {
            state.villagename = villagename
            localStorage.villagename = villagename
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