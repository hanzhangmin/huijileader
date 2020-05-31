<template>
  <div class="ib">
    <div class="container">
      <div class="ib-left">
        <zhensearch v-if="showzhens"
                    @transferzhen="getzhen"></zhensearch>
        <div v-if="!showzhens"
             style="padding:1rem 0px;border-bottom:2px solid rgba(255,255,255,0.4)">
          <h1 style="color:#ffffff;text-align:center">{{zhenname}}</h1>
        </div>
        <navfold :theid="'zhenfankui'"
                 :num="0"
                 :path="'/indexzhen/'+zhenid+'/zhenfankui'">
          <span slot="nav_header_l"
                class="iconfont icon-fankuixinxi"></span>
          <span slot="nav_header_m">反馈</span>
          <span slot="nav_header_r"
                class="iconfont icon-jiantou2"></span>
        </navfold>
        <navfold :theid="'zhenzijin'"
                 :num="0"
                 :path="'/indexzhen/'+zhenid+'/zhenzijin'">
          <span slot="nav_header_l"
                class="iconfont icon-zijin1"></span>
          <span slot="nav_header_m">资金</span>
          <span slot="nav_header_r"
                class="iconfont icon-jiantou2"></span>
        </navfold>
        <navfold :theid="'zhencunwu'"
                 :num="8"
                 :path="'/indexzhen/'+zhenid+'/zhencunwu'">
          <span slot="nav_header_l"
                class="iconfont icon-cunqingjianjie"></span>
          <span slot="nav_header_m">村务</span>
          <span slot="nav_header_r"
                class="iconfont icon-jiantou2"></span>
          <div slot="nav_box">
            <tabitem1 :path="'/indexzhen/'+zhenid+'/zhencunwu/zhenvinfo/'+vid">
              <span slot="liintro">村庄简介</span>
            </tabitem1>
            <tabitem1 :path="'/indexzhen/'+zhenid+'/zhencunwu/zhenvmanager/'+vid">
              <span slot="liintro">村干部</span>
            </tabitem1>
            <tabitem1 :path="'/indexzhen/'+zhenid+'/zhencunwu/zhenvactivity/'+vid">
              <span slot="liintro">村活动</span>
            </tabitem1>
            <tabitem1 :path="'/indexzhen/'+zhenid+'/zhencunwu/zhenvmetting/'+vid">
              <span slot="liintro">村会议</span>
            </tabitem1>
            <tabitem1 :path="'/indexzhen/'+zhenid+'/zhencunwu/zhenvinput/'+vid">
              <span slot="liintro">户口迁入</span>
            </tabitem1>
            <tabitem1 :path="'/indexzhen/'+zhenid+'/zhencunwu/zhenvout/'+vid">
              <span slot="liintro">户口迁出</span>
            </tabitem1>
            <tabitem1 :path="'/indexzhen/'+zhenid+'/zhencunwu/zhenvbzh/'+vid">
              <span slot="liintro">补助户</span>
            </tabitem1>
            <tabitem1 :path="'/indexzhen/'+zhenid+'/zhencunwu/zhenvbzo/'+vid">
              <span slot="liintro">补助对象</span>
            </tabitem1>
          </div>
        </navfold>
        <navfold :theid="'zhendyfazhan'"
                 :num="2"
                 :path="'/indexzhen/'+zhenid+'/zhendyfazhan'">
          <span slot="nav_header_l"
                class="iconfont icon-minzhengxinxi-kunnandangyuan"></span>
          <span slot="nav_header_m">党员发展</span>
          <span slot="nav_header_r"
                class="iconfont icon-jiantou2"></span>
          <div slot="nav_box">
            <!-- <tabitem1 :path="'/indexzhen/'+zhenid+'/zhendyfazhan/zhenjjfz/'+vid">
              <span slot="liintro">积极分子</span>
            </tabitem1>
            <tabitem1 :path="'/indexzhen/'+zhenid+'/zhendyfazhan/zhenfzdx/'+vid">
              <span slot="liintro">发展对象</span>
            </tabitem1>
            <tabitem1 :path="'/indexzhen/'+zhenid+'/zhendyfazhan/zhenybdy/'+vid">
              <span slot="liintro">预备党员</span>
            </tabitem1> -->
            <tabitem1 :path="'/indexzhen/'+zhenid+'/zhendyfazhan/zhenzsdy/'+vid">
              <span slot="liintro">党员发展</span>
            </tabitem1>
            <tabitem1 :path="'/indexzhen/'+zhenid+'/zhendyfazhan/zhendzzhd/'+vid">
              <span slot="liintro">党组织活动</span>
            </tabitem1>
          </div>
        </navfold>

        <!-- <navfold :theid="'zhenbuzhu'"
                 :num="0"
                 :path="'/indexzhen/'+zhenid+'/zhenbuzhu/'+vid">
          <span slot="nav_header_l"></span>
          <span slot="nav_header_m">补助对象</span>
          <span slot="nav_header_r"></span>
        </navfold> -->

        <navfold :theid="'zhensanzi'"
                 :num="3"
                 :path="'/indexzhen/'+zhenid+'/zhensanzi'">
          <span slot="nav_header_l"
                class="iconfont icon-santhree109"></span>
          <span slot="nav_header_m">村三资详情</span>
          <span slot="nav_header_r"
                class="iconfont icon-jiantou2"></span>
          <div slot="nav_box">
            <tabitem1 :path="'/indexzhen/'+zhenid+'/zhensanzi/zhenziyuan/'+vid">
              <span slot="liintro">资源</span>
            </tabitem1>
            <tabitem1 :path="'/indexzhen/'+zhenid+'/zhensanzi/zhenzichan/'+vid">
              <span slot="liintro">资产</span>
            </tabitem1>
            <tabitem1 :path="'/indexzhen/'+zhenid+'/zhensanzi/zhenzijin/'+vid">
              <span slot="liintro">资金</span>
            </tabitem1>
          </div>
        </navfold>
        <navfold :theid="'zhenzjgc'"
                 :num="0"
                 :path="'/indexzhen/'+zhenid+'/zhenzjgc/'+vid">
          <span slot="nav_header_l"
                class="iconfont icon-xiangmu"></span>
          <span slot="nav_header_m">在建项目</span>
          <span slot="nav_header_r"
                class="iconfont icon-jiantou2"></span>
        </navfold>
      </div>
      <div class="ib-right">
        <Header>
          <span slot="Header_title">
            <villagesearch :zhenid="zhenid"
                           @transfervid="getvid"
                           :key="reloadvillages"></villagesearch>
          </span>
          <div slot="Header_right"
               @click.stop="changeisshow"><span>账号管理</span></div>
          <div slot="Header_left"
               @click.stop="goexit"><span>退出</span></div>
        </Header>
        <div class="router-view">
          <keep-alive exclude="zhencunwu,fkdetail">
            <router-view></router-view>
          </keep-alive>
        </div>

      </div>
    </div>
    <div class="footer">
      <span>主办单位：惠济区纪委监委</span>
    </div>
    <updatazh :isshow="isshow"
              v-if="isshow"
              @cgisshow="cgisshow"></updatazh>
  </div>
</template>
<script>
import updatazh from "components/content/accountupdate"
import Header from "components/commen/Header/Header"
// import ulandlis from "components/commen/ulnavigations/ulandlis"
// import naveasy from "components/content/nav/naveasy"
import navfold from "components/content/nav/navfold"
import tabitem1 from "components/commen/tabbar/tabitem1"
import zhensearch from "components/commen/Header/zhensearch"
import villagesearch from "components/commen/Header/villagesearch"
export default {
  name: "indexzhen",
  components: {
    Header,
    updatazh,
    navfold,
    tabitem1,
    zhensearch,
    villagesearch
  },
  data () {
    return {
      isshow: false,
      zhenid: 0,
      vid: 0,
      reloadvillages: "",
      zhenname: ""
      // showit: false
    }
  },
  computed: {
    showzhens () {
      return this.$store.state.status
    }
  },
  methods: {
    changeisshow () {
      this.isshow = true
    },
    cgisshow (value) {
      this.isshow = Boolean(value)
    },
    goexit () {
      this.$router.replace("/login")
    },
    getvid (vid) {
      this.vid = Number(vid)
      let route = this.$route.path.split("/")
      console.log(route);
      // index.vue?6ced:185 (6) ["", "indexzhen", "6", "zhendyfazhan", "zhendzzhd", "2"]
      // index.vue?6ced:185 (4) ["", "indexzhen", "6", "zhenfankui"]
      // index.vue?6ced:185 (5) ["", "indexzhen", "6", "zhenzjgc", "51"]
      route[2] = this.zhenid
      switch (route.length) {
        case 5:
          route[4] = this.vid
          break;
        case 6:
          route[5] = this.vid
          break;
        default:
          break;
      }
      let path = route.join("/");
      console.log(path);
      this.$router.push(path)
    },
    getzhen (zhenid) {
      this.zhenid = Number(zhenid)
      this.reloadvillages = (new Date()).getTime()
    }
  },
  created () {
    console.log(this.$route.params);
    this.zhenid = Number(this.$route.params.zhen_id)
    for (let index = 0, len = this.$store.state.zhensx.length; index < len; index++) {
      if (this.zhenid === this.$store.state.zhensx[index].zhenid) {
        this.zhenname = this.$store.state.zhensx[index].zhenName
      }
    }
  },
}
</script>
<style  lang="less" scoped>
.ib {
  display: flex;
  flex-direction: column;
  .container {
    flex: auto;
    display: flex;
    flex-direction: row;
    background-color: @mainColor;
    .ib-left {
      width: 26rem;
      min-width: 26rem;
      padding: 0px 1rem;
      min-height: 100vh;
      z-index: 100;
      background-color: @mainColor;
    }
    .ib-right {
      flex: auto;
      background-color: #efefef;
      .router-view {
        margin-top: 5rem;
        color: #888888;
        margin-left: 1rem;
      }
    }
  }
  .footer {
    background-color: @mainColor;
    width: 100vw;
    text-align: center;
    font-size: 1.4rem;
    padding: 5px 0px;
    color: #efefef;
    position: fixed;
    z-index: 1000;
    bottom: 0px;
  }
}
</style>