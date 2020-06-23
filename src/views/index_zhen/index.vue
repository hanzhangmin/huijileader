<template>
  <div class="ib">
    <div class="container">
      <div class="ib-left">
        <zhensearch v-if="showzhens"
                    :key="reloadzhen"
                    @transferzhen="getzhen"></zhensearch>
        <div v-if="!showzhens"
             style="padding:1rem 0px;border-bottom:2px solid rgba(255,255,255,0.4)">
          <h1 style="color:#ffffff;text-align:center">{{zhenname}}</h1>
        </div>
        <!-- 群众意见建议 -->
        <navfold :theid="'zhenfankui'"
                 :num="0"
                 :path="'/indexzhen/'+zhenid+'/zhenfankui'">
          <span slot="nav_header_l"
                class="iconfont icon-fankuixinxi"></span>
          <span slot="nav_header_m">群众意见建议</span>
          <!-- <span slot="nav_header_r"
                class="iconfont icon-jiantou2"></span> -->
        </navfold>
        <!-- 党务 -->
        <navfold :theid="'zhendyfazhan'"
                 :num="2"
                 :path="'/indexzhen/'+zhenid+'/zhendyfazhan'">
          <span slot="nav_header_l"
                class="iconfont icon-minzhengxinxi-kunnandangyuan"></span>
          <span slot="nav_header_m">党务</span>
          <span slot="nav_header_r"
                class="iconfont icon-jiantou2"></span>
          <div slot="nav_box">
            <tabitem1 :path="'/indexzhen/'+zhenid+'/zhendyfazhan/zhenzsdy/'+vid">
              <span slot="liintro">党员发展</span>
            </tabitem1>
            <tabitem1 :path="'/indexzhen/'+zhenid+'/zhendyfazhan/zhendzzhd/'+vid"
                      path1="zhendzadetail">
              <span slot="liintro">党组织活动</span>
            </tabitem1>
          </div>
        </navfold>
        <!-- 村务 -->
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
            <tabitem1 :path="'/indexzhen/'+zhenid+'/zhencunwu/zhenvactivity/'+vid"
                      path1="zhenvadetail">
              <span slot="liintro">村活动</span>
            </tabitem1>
            <tabitem1 :path="'/indexzhen/'+zhenid+'/zhencunwu/zhenvmetting/'+vid"
                      path1="zhenvmdetail">
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
        <!-- 财务 -->
        <navfold :theid="'zhensanzi'"
                 :num="3"
                 :path="'/indexzhen/'+zhenid+'/zhensanzi'">
          <span slot="nav_header_l"
                class="iconfont icon-santhree109"></span>
          <span slot="nav_header_m">财务</span>
          <span slot="nav_header_r"
                class="iconfont icon-jiantou2"></span>
          <div slot="nav_box">
            <tabitem1 :path="'/indexzhen/'+zhenid+'/zhensanzi/zhenziyuan/'+vid">
              <span slot="liintro">资源</span>
            </tabitem1>
            <tabitem1 :path="'/indexzhen/'+zhenid+'/zhensanzi/zhenzichan/'+vid">
              <span slot="liintro">资产</span>
            </tabitem1>
            <tabitem1 :path="'/indexzhen/'+zhenid+'/zhensanzi/zhenzijincun/'+vid">
              <span slot="liintro">资金</span>
            </tabitem1>
          </div>
        </navfold>
        <!-- 资金统计表 -->
        <navfold :theid="'zhenzijin'"
                 :num="0"
                 :path="'/indexzhen/'+zhenid+'/zhenzijin'">
          <span slot="nav_header_l"
                class="iconfont icon-tongji4"></span>
          <span slot="nav_header_m">资金统计表</span>
          <!-- <span slot="nav_header_r"
                class="iconfont icon-jiantou2"></span> -->
        </navfold>
        <!-- 在建项目 -->
        <navfold :theid="'zhenzjgc'"
                 :num="0"
                 :path="'/indexzhen/'+zhenid+'/zhenzjgc/'+vid">
          <span slot="nav_header_l"
                class="iconfont icon-xiangmu"></span>
          <span slot="nav_header_m">在建项目</span>
          <!-- <span slot="nav_header_r"
                class="iconfont icon-jiantou2"></span> -->
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
      // zhenid: 0,
      vid: 0,
      reloadvillages: "",
      reloadzhen: "",
      zhenname: "",
      zhenid: 0
      // showit: false
    }
  },
  computed: {
    showzhens () {
      return this.$store.state.status
    },
    thezhenid () {
      this.zhenid = Number(this.$route.params.zhen_id)
      return Number(this.$route.params.zhen_id)
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
    getzhen (id) {
      console.log(id);
      this.zhenid = Number(id)
    }
  },
  created () {
    this.zhenid = Number(this.$route.params.zhen_id)
    for (let index = 0, len = this.$store.state.zhensx.length; index < len; index++) {
      if (this.zhenid === this.$store.state.zhensx[index].zhenid) {
        this.zhenname = this.$store.state.zhensx[index].zhenName
      }
    }
  },
  watch: {
    zhenid (val) {
      this.zhenid = Number(val)
      console.log("新的镇id");
      console.log(this.zhenid);
      if (this.zhenid === NaN) {
      } else {
        for (let index = 0, len = this.$store.state.zhensx.length; index < len; index++) {
          if (this.zhenid === this.$store.state.zhensx[index].zhenid) {
            this.zhenname = this.$store.state.zhensx[index].zhenName
          }
        }
      }
      console.log(this.zhenname);
      this.reloadzhen = (new Date()).getTime()
      this.reloadvillages = (new Date()).getTime()
    }
  },
}
</script>
<style  lang="less" scoped>
.ib {
  display: flex;
  flex-direction: column;
  // overflow-x: hidden;
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