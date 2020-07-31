import Vue from "vue"
import vueRouter from "vue-router"
Vue.use(vueRouter)
    // 登录
const login = () =>
    import ("views/login/login.vue")
const home = () =>
    import ("views/home/home.vue")
const page404 = () =>
    import ("views/page404.vue")
    // 意见建议
const suggestion = () =>
    import ("views/home/suggestion/suggestion.vue")
const sugtable = () =>
    import ("views/home/suggestion/SugTable.vue")
const sugsum = () =>
    import ("views/home/suggestion/sugBigData.vue")
    // 三资
const finance = () =>
    import ("views/home/finance/finance.vue")
    // 资产
const assets = () =>
    import ("views/home/finance/Assets.vue")
    // 资金
const fund = () =>
    import ("views/home/finance/Fund.vue")
    // 资源
const resource = () =>
    import ("views/home/finance/Resource.vue")
    // 党务
const Party = () =>
    import ("views/home/party/party.vue")
    // 党员发展
const PartyMember = () =>
    import ("views/home/party/PartyMember.vue")
    // 党组织活动
const PartyActivity = () =>
    import ("views/home/party/PartyActivity.vue")
    // 村信息
const villagebox = () =>
    import ("views/home/village/villagebox.vue")
    // 村简介
const cadre = () =>
    import ("views/home/village/Cadre.vue")
    // 村民
const villager = () =>
    import ("views/home/village/Villager.vue")
    // 村干部
const villagemember = () =>
    import ("views/home/village/Member.vue")
    // 村活动
const vActivity = () =>
    import ("views/home/village/Activity.vue")
    // 村会议
const vMeeting = () =>
    import ("views/home/village/VMeeting.vue")
    // 村补助项
const subsitytype = () =>
    import ("views/home/village/Subsidytype.vue")
    // 村补助户
const subsityfamily = () =>
    import ("views/home/village/Subsidyfamily.vue")
    // 村补助对象
const subsityperson = () =>
    import ("views/home/village/Subsidyperson.vue")
    // 户口迁移
const vmigration = () =>
    import ("views/home/village/qianyi.vue")
    // 大数据一览表
const BigData = () =>
    import ("views/home/BigData/BigData.vue")
const DataFunds = () =>
    import ("views/home/BigData/Funds.vue")
const DataPartyMembers = () =>
    import ("views/home/BigData/PartyMembers.vue")
const DataSuggestions = () =>
    import ("views/home/BigData/Suggestions.vue")
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
        path: "/home",
        component: home,
        meta: "首页",
        children: [{
                path: '',
                redirect: "suggestion",
            },
            {
                path: "suggestion",
                component: suggestion,
                children: [{
                        path: '',
                        redirect: "sugsum",
                    }, {
                        path: "sugtable",
                        component: sugtable
                    },
                    {
                        path: "sugsum",
                        component: sugsum
                    }
                ]
            },
            {
                path: "finance",
                component: finance,
                children: [{
                        path: "assets",
                        component: assets,
                    },
                    {
                        path: "fund",
                        component: fund,
                    },
                    {
                        path: "resource",
                        component: resource,
                    },
                ]
            },
            {
                path: "bigdata",
                component: BigData,
                children: [{
                        path: "funds",
                        component: DataFunds,
                    },
                    {
                        path: "partymembers",
                        component: DataPartyMembers,
                    },
                    {
                        path: "suggestions",
                        component: DataSuggestions,
                    },
                ]
            },
            {
                path: "Party",
                component: Party,
                children: [{
                        path: "PartyMember",
                        component: PartyMember
                    },
                    {
                        path: "PartyActivity",
                        component: PartyActivity
                    },
                ]
            },
            {
                path: "villagebox",
                component: villagebox,
                children: [{
                        path: "cadre",
                        component: cadre
                    },
                    {
                        path: "villagemember",
                        component: villagemember
                    },
                    {
                        path: "subsityfamily",
                        component: subsityfamily
                    },
                    {
                        path: "subsityperson",
                        component: subsityperson
                    },
                    {
                        path: "subsitytype",
                        component: subsitytype
                    },
                    {
                        path: "vActivity",
                        component: vActivity
                    },
                    {
                        path: "villager",
                        component: villager
                    },
                    {
                        path: "vMeeting",
                        component: vMeeting
                    },
                    {
                        path: "vmigration",
                        component: vmigration
                    },
                ]
            },
        ]
    },
    {
        path: '*',
        component: page404,
    },
]
const router = new vueRouter({
    routes,
})


export default router