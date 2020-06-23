import Vue from "vue"
import vueRouter from "vue-router"
Vue.use(vueRouter)
    // 登录
const login = () =>
    import ("views/login/login.vue")

const index_qu = () =>
    import ("views/index_qu/index.vue")
const qqfkindex = () =>
    import ("views/index_qu/fankui/fkindex.vue")
const qqfkbody = () =>
    import ("views/index_qu/fankui/fkbody.vue")
const qqfklist = () =>
    import ("views/index_qu/fankui/fankuilist.vue")
const qqfklistz = () =>
    import ("views/index_qu/fankui/fankuilistz.vue")
const fkdetail = () =>
    import ("views/index_qu/fankui/fankuidetail.vue")
const qqzjindex = () =>
    import ("views/index_qu/zijin/zijinindex.vue")
const qqdwindex = () =>
    import ("views/index_qu/dangwu/dwindex.vue")
const qqdwbody = () =>
    import ("views/index_qu/dangwu/dwbody.vue")
const dwdetail = () =>
    import ("views/index_qu/dangwu/dwdetail.vue")
const index_zhen = () =>
    import ("views/index_zhen/index.vue")
const zhenfankui = () =>
    import ("views/index_zhen/fankui.vue")
const zhenzijin = () =>
    import ("views/index_zhen/zijin.vue")
const zhenbuzhu = () =>
    import ("views/index_zhen/buzhu.vue")
const zhenzjgc = () =>
    import ("views/index_zhen/zjxiangmu.vue")
const zhencunwu = () =>
    import ("views/index_zhen/cunwu/index.vue")
const zhenvinfo = () =>
    import ("views/index_zhen/cunwu/zhenvinfo.vue")
const zhenvin = () =>
    import ("views/index_zhen/cunwu/zhenvin.vue")
const zhenvout = () =>
    import ("views/index_zhen/cunwu/zhenvout.vue")
const zhenvactivity = () =>
    import ("views/index_zhen/cunwu/zhenvactivity.vue")
const zhenvadetail = () =>
    import ("views/index_zhen/cunwu/zhenvactivitydetail.vue")
const zhenvmetting = () =>
    import ("views/index_zhen/cunwu/zhenvmetting.vue")
const zhenvmdetail = () =>
    import ("../views/index_zhen/cunwu/zhenvmd.vue")
const zhenvmanager = () =>
    import ("views/index_zhen/cunwu/zhenvmanager.vue")
const zhenvbzh = () =>
    import ("views/index_zhen/cunwu/buzhuhu.vue")
const zhenvbzo = () =>
    import ("views/index_zhen/cunwu/buzhuobj.vue")
const zhendyfazhan = () =>
    import ("views/index_zhen/dyfazhan/index.vue")
const zhendzzhd = () =>
    import ("views/index_zhen/dyfazhan/zhendzzhd.vue")
const zhendzadetail = () =>
    import ("views/index_zhen/dyfazhan/zhendzadetail.vue")
const zhenfzdx = () =>
    import ("views/index_zhen/dyfazhan/zhenfzdx.vue")
const zhenjjfz = () =>
    import ("views/index_zhen/dyfazhan/zhenjjfz.vue")
const zhenybdy = () =>
    import ("views/index_zhen/dyfazhan/zhenybdy.vue")
const zhenzsdy = () =>
    import ("views/index_zhen/dyfazhan/zhenzsdy.vue")
const zhensanzi = () =>
    import ("views/index_zhen/sanzi/index.vue")
const zhenzichan = () =>
    import ("views/index_zhen/sanzi/zichan.vue")
const zhenziyuan = () =>
    import ("views/index_zhen/sanzi/ziyuan.vue")
const zhenzijin1 = () =>
    import ("views/index_zhen/sanzi/zijin.vue")
    // const indexonlyzhen = () =>
    //     import ("views/index_zhen/indexzhen.vue")
const page404 = () =>
    import ("views/page404.vue")
const routes = [{
        path: '',
        redirect: "/login",
        meta: "登录"
    },
    {
        path: "/login",
        component: login,
        meta: "登录"
    },
    {
        path: "/indexqu",
        component: index_qu,
        meta: "区内详情",
        children: [{
                    path: "",
                    redirect: "qqfkindex"
                },
                {
                    path: "qqfkindex",
                    component: qqfkindex,
                    children: [{
                            path: "",
                            redirect: "qqfkbody"
                        },
                        {
                            path: "qqfkbody",
                            component: qqfkbody
                        },
                        {
                            path: "qqfklist/:type/:id",
                            component: qqfklist
                        },
                        {
                            path: "qqfklistz/:type/:id/:zhenname",
                            component: qqfklistz
                        },
                        {
                            path: "fkdetail/:fkid",
                            component: fkdetail
                        }
                    ]
                },
                {
                    path: "qqzjindex",
                    component: qqzjindex
                },
                {
                    path: "qqdwindex",
                    component: qqdwindex,
                    children: [{
                            path: "",
                            redirect: "qqdwbody"
                        },
                        {
                            path: "qqdwbody",
                            component: qqdwbody
                        },
                        {
                            path: "dwdetail/:id",
                            component: dwdetail
                        }
                    ]
                },

            ]
            // qqdwindex
            //qqfklistz
    },
    {
        path: "/indexzhen/:zhen_id",
        component: index_zhen,
        meta: "镇内详情",
        children: [{
                path: "",
                redirect: "zhenfankui"
            },
            {
                path: "zhenfankui",
                component: zhenfankui
            },
            {
                path: "zhenfkdetail/:fkid",
                component: fkdetail
            },
            {
                path: "zhenzijin",
                component: zhenzijin
            },
            {
                path: "zhenbuzhu/:vid",
                component: zhenbuzhu
            },
            {
                path: "zhenzjgc/:vid",
                component: zhenzjgc
            },
            {
                path: "zhencunwu",
                component: zhencunwu,
                children: [
                    // {
                    //       path: "",
                    //       redirect: "zhenvinfo/:vid"
                    //   }, 
                    {
                        path: "zhenvmanager/:vid",
                        component: zhenvmanager
                    }, {
                        path: "zhenvactivity/:vid",
                        component: zhenvactivity
                    },
                    {
                        path: "zhenvinput/:vid",
                        component: zhenvin
                    },
                    {
                        path: "zhenvinfo/:vid",
                        component: zhenvinfo
                    },
                    {
                        path: "zhenvmetting/:vid",
                        component: zhenvmetting
                    },
                    {
                        path: "zhenvout/:vid",
                        component: zhenvout
                    },
                    {
                        path: "zhenvbzh/:vid",
                        component: zhenvbzh
                    },
                    {
                        path: "zhenvbzo/:vid",
                        component: zhenvbzo
                    },
                    {
                        path: "zhenvadetail/:chdid",
                        component: zhenvadetail
                    },
                    {
                        path: "zhenvmdetail/:chyid",
                        component: zhenvmdetail
                    }
                ]
            },
            {
                path: "zhendyfazhan",
                component: zhendyfazhan,
                meta: "组织发展",
                children: [
                    // {
                    //       path: "",
                    //       redirect: "zhenjjfz/:vid"
                    //   },
                    {
                        path: "zhenjjfz/:vid",
                        component: zhenjjfz
                    },
                    {
                        path: "zhenfzdx/:vid",
                        component: zhenfzdx
                    },
                    {
                        path: "zhenybdy/:vid",
                        component: zhenybdy
                    },
                    {
                        path: "zhenzsdy/:vid",
                        component: zhenzsdy
                    },
                    {
                        path: "zhendzzhd/:vid",
                        component: zhendzzhd
                    },
                    {
                        path: "zhendzadetail/:zhid",
                        component: zhendzadetail
                    }
                ]
            },
            {
                path: "zhensanzi",
                component: zhensanzi,
                meta: "三资",
                children: [
                    // {
                    //       path: "",
                    //       redirect: "zhenzijin/:vid"
                    //   },
                    {
                        path: "zhenzijincun/:vid",
                        component: zhenzijin1
                    },
                    {
                        path: "zhenziyuan/:vid",
                        component: zhenziyuan
                    },
                    {
                        path: "zhenzichan/:vid",
                        component: zhenzichan
                    }
                ]
            }
        ]
    },
    // {
    //     path: "/thezhen/:zhen_id",
    //     component: indexonlyzhen,
    //     meta: "镇内详情",
    //     children: [{
    //             path: "",
    //             redirect: "zhenfankui"
    //         },
    //         {
    //             path: "zhenfankui",
    //             component: zhenfankui
    //         },
    //         {
    //             path: "zhenfkdetail/:id",
    //             component: fkdetail
    //         },
    //         {
    //             path: "zhenzijin",
    //             component: zhenzijin
    //         },
    //         {
    //             path: "zhenbuzhu/:vid",
    //             component: zhenbuzhu
    //         },
    //         {
    //             path: "zhenzjgc/:vid",
    //             component: zhenzjgc
    //         },
    //         {
    //             path: "zhencunwu",
    //             component: zhencunwu,
    //             meta: "村务",
    //             children: [{
    //                     path: "",
    //                     redirect: "zhenvinfo/:vid"
    //                 }, {
    //                     path: "zhenvmanager/:vid",
    //                     component: zhenvmanager
    //                 }, {
    //                     path: "zhenvactivity/:vid",
    //                     component: zhenvactivity
    //                 },
    //                 {
    //                     path: "zhenvinput/:vid",
    //                     component: zhenvin
    //                 },
    //                 {
    //                     path: "zhenvinfo/:vid",
    //                     component: zhenvinfo
    //                 },
    //                 {
    //                     path: "zhenvmetting/:vid",
    //                     component: zhenvmetting
    //                 },
    //                 {
    //                     path: "zhenvout/:vid",
    //                     component: zhenvout
    //                 },
    //                 {
    //                     path: "zhenvadetail/:chdid",
    //                     component: zhenvadetail
    //                 }
    //             ]
    //         },
    //         {
    //             path: "zhendyfazhan",
    //             component: zhendyfazhan,
    //             meta: "组织发展",
    //             children: [{
    //                     path: "",
    //                     redirect: "zhenjjfz/:vid"
    //                 },
    //                 {
    //                     path: "zhenjjfz/:vid",
    //                     component: zhenjjfz
    //                 },
    //                 {
    //                     path: "zhenfzdx/:vid",
    //                     component: zhenfzdx
    //                 },
    //                 {
    //                     path: "zhenybdy/:vid",
    //                     component: zhenybdy
    //                 },
    //                 {
    //                     path: "zhenzsdy/:vid",
    //                     component: zhenzsdy
    //                 },
    //                 {
    //                     path: "zhendzzhd/:vid",
    //                     component: zhendzzhd
    //                 }
    //             ]
    //         },
    //         {
    //             path: "zhensanzi",
    //             component: zhensanzi,
    //             meta: "三资",
    //             children: [{
    //                     path: "",
    //                     redirect: "zhenzijin/:vid"
    //                 },
    //                 {
    //                     path: "zhenzijin/:vid",
    //                     component: zhenzijin1
    //                 },
    //                 {
    //                     path: "zhenziyuan/:vid",
    //                     component: zhenziyuan
    //                 },
    //                 {
    //                     path: "zhenzichan/:vid",
    //                     component: zhenzichan
    //                 }
    //             ]
    //         }
    //     ]
    // },
    {
        path: '*',
        component: page404,
    },

]
const router = new vueRouter({
    routes,
    // mode: "history"
})

router.beforeEach((to, from, next) => {
    try {
        document.title = to.matched[0].meta;
    } catch (error) {}
    next() // next()为必须使用的函数
})

export default router