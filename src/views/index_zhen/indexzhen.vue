<template>
  <div class="ib">
    <div class="container">
      <div class="ib-left">
        <div style="padding:1rem 0px;border-bottom:2px solid rgba(255,255,255,0.4)">
          <h1 style="color:#ffffff;text-align:center">{{zhenname}}</h1>
        </div>
        <navfold :theid="'zhenfankui'"
                 :num="0"
                 :path="'/thezhen/'+zhenid+'/zhenfankui'">
          <span slot="nav_header_l"></span>
          <span slot="nav_header_m">反馈</span>
          <span slot="nav_header_r"></span>
        </navfold>
        <navfold :theid="'zhenzijin'"
                 :num="0"
                 :path="'/thezhen/'+zhenid+'/zhenzijin'">
          <span slot="nav_header_l"></span>
          <span slot="nav_header_m">资金</span>
          <span slot="nav_header_r"></span>
        </navfold>
        <navfold :theid="'zhencunwu'"
                 :num="6"
                 :path="'/thezhen/'+zhenid+'/zhencunwu'">
          <span slot="nav_header_l"></span>
          <span slot="nav_header_m">村务</span>
          <span slot="nav_header_r"></span>
          <div slot="nav_box">
            <tabitem1 :path="'/thezhen/'+zhenid+'/zhencunwu/zhenvinfo/'+vid">
              <span slot="liintro">村庄简介</span>
            </tabitem1>
            <tabitem1 :path="'/thezhen/'+zhenid+'/zhencunwu/zhenvmanager/'+vid">
              <span slot="liintro">村干部</span>
            </tabitem1>
            <tabitem1 :path="'/thezhen/'+zhenid+'/zhencunwu/zhenvactivity/'+vid">
              <span slot="liintro">村活动</span>
            </tabitem1>
            <tabitem1 :path="'/thezhen/'+zhenid+'/zhencunwu/zhenvmetting/'+vid">
              <span slot="liintro">村会议</span>
            </tabitem1>
            <tabitem1 :path="'/thezhen/'+zhenid+'/zhencunwu/zhenvinput/'+vid">
              <span slot="liintro">户口迁入</span>
            </tabitem1>
            <tabitem1 :path="'/thezhen/'+zhenid+'/zhencunwu/zhenvout/'+vid">
              <span slot="liintro">户口迁出</span>
            </tabitem1>
          </div>
        </navfold>
        <navfold :theid="'zhendyfazhan'"
                 :num="5"
                 :path="'/thezhen/'+zhenid+'/zhendyfazhan'">
          <span slot="nav_header_l"></span>
          <span slot="nav_header_m">党员发展</span>
          <span slot="nav_header_r"></span>
          <div slot="nav_box">
            <tabitem1 :path="'/thezhen/'+zhenid+'/zhendyfazhan/zhenjjfz/'+vid">
              <span slot="liintro">积极分子</span>
            </tabitem1>
            <tabitem1 :path="'/thezhen/'+zhenid+'/zhendyfazhan/zhenfzdx/'+vid">
              <span slot="liintro">发展对象</span>
            </tabitem1>
            <tabitem1 :path="'/thezhen/'+zhenid+'/zhendyfazhan/zhenybdy/'+vid">
              <span slot="liintro">预备党员</span>
            </tabitem1>
            <tabitem1 :path="'/thezhen/'+zhenid+'/zhendyfazhan/zhenzsdy/'+vid">
              <span slot="liintro">正式党员</span>
            </tabitem1>
            <tabitem1 :path="'/thezhen/'+zhenid+'/zhendyfazhan/zhendzzhd/'+vid">
              <span slot="liintro">党组织活动</span>
            </tabitem1>
          </div>
        </navfold>
        <navfold :theid="'zhenbuzhu'"
                 :num="0"
                 :path="'/thezhen/'+zhenid+'/zhenbuzhu/'+vid">
          <span slot="nav_header_l"></span>
          <span slot="nav_header_m">补助对象</span>
          <span slot="nav_header_r"></span>
        </navfold>
        <navfold :theid="'zhensanzi'"
                 :num="3"
                 :path="'/thezhen/'+zhenid+'/zhensanzi'">
          <span slot="nav_header_l"></span>
          <span slot="nav_header_m">村三资详情</span>
          <span slot="nav_header_r"></span>
          <div slot="nav_box">
            <tabitem1 :path="'/thezhen/'+zhenid+'/zhensanzi/zhenziyuan/'+vid">
              <span slot="liintro">资源</span>
            </tabitem1>
            <tabitem1 :path="'/thezhen/'+zhenid+'/zhensanzi/zhenzichan/'+vid">
              <span slot="liintro">资产</span>
            </tabitem1>
            <tabitem1 :path="'/thezhen/'+zhenid+'/zhensanzi/zhenzijin/'+vid">
              <span slot="liintro">资金</span>
            </tabitem1>
          </div>
        </navfold>
        <navfold :theid="'zhenzjgc'"
                 :num="0"
                 :path="'/thezhen/'+zhenid+'/zhenzjgc/'+vid">
          <span slot="nav_header_l"></span>
          <span slot="nav_header_m">在建项目</span>
          <span slot="nav_header_r"></span>
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
import villagesearch from "components/commen/Header/villagesearch"
export default {
  name: "indexonlyzhen",
  components: {
    Header,
    updatazh,
    navfold,
    tabitem1,
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
    this.zhenid = Number(this.$route.params.zhen_id)
    for (let index = 0, len = this.$store.state.zhensx.length; index < len; index++) {
      if (this.zhenid = this.$store.state.zhensx[index].zhenid) {
        this.zhenname = this.$store.state.zhensx[index].zhenName
      }
    }
    // document.getElementById("zhenfankui").checked = true;
  },
  updated () {
    // console.log(1);

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
      padding: 0px 1rem;
      min-height: 100vh;
      z-index: 100;
      background-color: @mainColor;
      margin: 0;
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
    text-align: center;
    font-size: 1.4rem;
    padding: 5px 0px;
    color: #efefef;
  }
}
</style>