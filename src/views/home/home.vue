<template>
  <div class="home">
    <div class="header">
      <div>
        <div class="logo">
          <div class="logo-img">
            惠济区 村（居）务监督平台
          </div>
        </div>

        <ul>
          <li>
            <span style="color:#ffffff">
              {{$store.state.name}}，欢迎登陆！
            </span>
          </li>
          <li @click.stop="exit"
              class="lihavea">
            <a>
              <el-tooltip class="item"
                          effect="dark"
                          content="退出"
                          placement="bottom">
                <button class="li el-icon-switch-button"> </button>
              </el-tooltip>
            </a>
          </li>

          <li v-if="isopenfall"
              @click.stop="openall"
              class="lihavea">
            <a>
              <el-tooltip class="item"
                          effect="dark"
                          content="全屏"
                          placement="bottom">
                <button class="li el-icon-full-screen"> </button>
              </el-tooltip>
            </a>
          </li>
          <li v-else
              @click.stop="hidenall"
              class="lihavea">
            <a>
              <el-tooltip class="item"
                          effect="dark"
                          content="恢复"
                          placement="bottom">
                <button class="li el-icon-copy-document"> </button>
              </el-tooltip>
            </a>
          </li>

          <li @click.stop="refresh"
              class="lihavea">
            <a>
              <el-tooltip class="item"
                          effect="dark"
                          content="刷新"
                          placement="bottom">
                <button class="li el-icon-refresh-right"> </button>
              </el-tooltip>
            </a>
          </li>

          <li @click.stop="gofront"
              class="lihavea"
              disabled>
            <a>
              <el-tooltip class="item"
                          effect="dark"
                          content="前进"
                          placement="bottom">
                <button class="li el-icon-d-arrow-right"
                        :disabled="showfront"></button>
              </el-tooltip>
            </a>
          </li>

          <li @click.stop="goback"
              class="lihavea">
            <a>
              <el-tooltip class="item"
                          effect="dark"
                          content="后退"
                          placement="bottom">
                <button class="li el-icon-d-arrow-left"
                        :disabled="showback"> </button>
              </el-tooltip>
            </a>
          </li>
          <li v-if="$store.state.leaderlevel===0">

            <span style="color:#ffffff;">身份选择：</span>
            <el-select v-model="yourlevel"
                       placeholder="请选择锁定您的身份"
                       filterable
                       style="width:200px;">
              <el-option label="区领导"
                         value="0">
                <span style="float: left;padding-left:10px">区领导</span>
              </el-option>
              <el-option v-for="item in levels"
                         :key="item.value"
                         :label="item.label+'领导'"
                         :value="item.value">
                <span style="float: left;padding-left:10px;">{{ item.label }}领导</span>
              </el-option>
            </el-select>
          </li>
        </ul>

      </div>

      <div class="breadcrumb">
      </div>

    </div>
    <div class="side">

      <div class="menu">
        <el-menu ref="elmenu"
                 :key="reloadmenu"
                 :collapse="isCollapse"
                 :default-active="defaultPath"
                 @open="handleOpen"
                 @close="handleClose"
                 :unique-opened="true"
                 style="font-size:20px;"
                 router>
          <el-submenu index="suggestion">
            <template slot="title">
              <i class="el-icon-chat-line-round"></i>
              <span>群众意见建议</span>
            </template>
            <el-menu-item index="/home/suggestion/sugsum">数据分析</el-menu-item>
            <el-menu-item index="/home/suggestion/sugtable">列表详情</el-menu-item>
          </el-submenu>
          <!-- <el-menu-item index="/home/suggestion">
            <i class="el-icon-s-comment"></i>
            <span slot="title">群众意见建议</span>
          </el-menu-item> -->
          <el-submenu index="Party">
            <template slot="title">
              <i class="icon-danghui"></i>
              <span>党务</span>
            </template>
            <el-menu-item index="/home/party/PartyMember">党员发展</el-menu-item>
            <el-menu-item index="/home/party/PartyActivity">党组织活动</el-menu-item>
          </el-submenu>
          <el-submenu index="villagebox">
            <template slot="title">
              <i class="el-icon-office-building"></i>
              <span>村务</span>
            </template>
            <el-menu-item index="/home/villagebox/cadre">村庄简介</el-menu-item>
            <el-menu-item index="/home/villagebox/villagemember">村干部</el-menu-item>
            <el-menu-item index="/home/villagebox/villager">村民</el-menu-item>
            <el-menu-item index="/home/villagebox/vActivity">村活动</el-menu-item>
            <el-menu-item index="/home/villagebox/vMeeting">村会议</el-menu-item>
            <el-menu-item index="/home/villagebox/vmigration">户口迁移</el-menu-item>
            <el-menu-item index="/home/villagebox/subsitytype">补助项</el-menu-item>
            <el-menu-item index="/home/villagebox/subsityfamily">补助户</el-menu-item>
            <el-menu-item index="/home/villagebox/subsityperson">补助对象</el-menu-item>
          </el-submenu>
          <el-submenu index="finance">
            <template slot="title">
              <i class="el-icon-coin"></i>
              <span>财务</span>
            </template>
            <el-menu-item index="/home/finance/resource">资源</el-menu-item>
            <el-menu-item index="/home/finance/assets">资产</el-menu-item>
            <el-menu-item index="/home/finance/fund">资金</el-menu-item>
            <el-menu-item index="/home/finance/project">项目建设</el-menu-item>
          </el-submenu>
          <el-submenu index="bigdata">
            <template slot="title">
              <i class="el-icon-s-data"></i>
              <span slot="title">数据可视化一览表</span>
            </template>
            <el-menu-item index="/home/bigdata/funds">资金</el-menu-item>
            <!-- <el-menu-item index="/home/bigdata/suggestions">群众意见建议</el-menu-item> -->
            <el-menu-item index="/home/bigdata/partymembers">党员发展</el-menu-item>
          </el-submenu>
          <el-submenu index="profile">
            <template slot="title">
              <i class="el-icon-user"></i>
              <span slot="title">我的账户</span>
            </template>
            <el-menu-item index="/home/profile/updata">编辑</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>

    </div>
    <div class="body">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data () {
    return {
      defaultPath: "/home/suggestion/sugsum",
      isCollapse: false,
      changefold: "el-icon-s-fold",
      reloadmenu: "",
      yourlevel: localStorage.yourlevel || "0",
      isopenfall: true,
      historyState: 1,
      showfront: false,
      showback: false
      // isopenfall: Boolean(localStorage.isopenfall)

      // el-icon-full-screen
    }
  },
  computed: {
    levels () {
      let arr = this.$store.state.towns.map(res => {
        return {
          value: res.zhenid.toString(),
          label: res.zhenName
        }
      })
      return arr
    }
  },
  created () {
    try {
      this.defaultPath = this.$route.path
    } catch (error) {
    }
    if (localStorage.isopenfall) {
      this.openall()
    }
  },
  methods: {
    hidenall () {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      }
      else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
      else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      if (typeof cfs != "undefined" && cfs) {
        cfs.call(el);
      }
      this.isopenfall = true
    },
    openall () {
      var el = document.documentElement;
      var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
      if (typeof rfs != "undefined" && rfs) {
        rfs.call(el);
      };
      this.isopenfall = false
      return;
    },
    changemenu () {
      if (this.isCollapse) {
        this.changefold = "el-icon-s-fold"
        this.isCollapse = false
      } else {
        this.changefold = "el-icon-s-unfold"
        this.isCollapse = true
      }
    },
    goback () {
      // console.log(window.history);
      this.$router.go(-1);
      this.historyState--;
      // this.historyStateChange()
    },
    gofront () {
      // console.log(this.$router);
      // console.log(window.history);
      this.$router.go(1);
      this.historyState++;
      // this.historyStateChange()
    },
    refresh () {
      location.reload();
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },
    exit () {
      this.$router.replace("/login")
      localStorage.removeItem("token")
    },
    historyStateChange () {
      // console.log("historyStateChange");

      let historylength = window.history.length;
      if (this.historyState < historylength) {
        this.showfront = false;
      } else {
        this.showfront = true;
      }
      if (this.historyState > 1) {
        this.showback = false;
      } else {
        this.showback = true;
      }
    },
    // changereloadmenu () {
    //   // console.log(this.$route);
    //   this.defaultPath = this.$route.path();
    //   this.reloadmenu = new Date().getTime()
    // },
    cancel () {
      // this.changereloadmenu();
      this.defaultPath = this.$route.path;
    },
  },
  watch: {
    yourlevel (val) {
      localStorage.yourlevel = val
      if (val === "0") {
        this.$store.commit("set_level", val);
        this.$store.commit("set_townid", "6");
      } else {
        this.$store.commit("set_level", val);
        this.$store.commit("set_townid", val.toString());
        this.$store.state.towns.forEach(element => {
          if (Number(val) === element.zhenid) {
            this.$store.commit("set_townname", element.zhenName)
          }
        });
      }
      this.refresh();
    },
    $route () {
      this.historyState = window.history.length;
      console.log(this.historyState);
      this.defaultPath = this.$route.path;
      // this.historyStateChange();
    }
  },
  mounted () {
    if (window.history && window.history.pushState) {
      history.pushState(null, null, document.URL);
      window.addEventListener('popstate', this.cancel, false);
    }
  },
  destroyed () {
    window.removeEventListener('popstate', this.cancel, false);
  }
}
</script>

<style>
.el-icon-lock {
  color: #ffffff;
}
/* .el-dropdown {
  margin-right: 20px !important;
} */
/* .el-dropdown-item {
  padding: 20px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #ffffff;
}
.el-icon-arrow-down {
  font-size: 20px;
  color: #ffffff;
}
.el-icon--right {
  color: #ffffff;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
  padding: 20px !important;
} */
</style>
<style lang="less" scoped>
.el-select {
  margin-right: 10px;
  width: 200px !important;
}
.logo {
  position: fixed;
  padding-left: 40px;
  color: #4e73df;
  z-index: 10;
  text-align: center;
  height: 80px;
  line-height: 80px;

  .logo-img {
    font-size: 24px;
    font-weight: 600;
    // font-family: "华文行楷";
  }
}
.breadcrumb {
  position: relative;
  left: 260px;
  right: 0px;
  top: 80px;
  height: 40px;
  line-height: 40px;
}
.home {
  .header {
    margin-bottom: 16px;
    position: fixed;
    height: 120px;
    left: 0px;
    right: 0px;
    box-sizing: border-box;
    background-image: url("~assets/imgs/bk1.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    ul {
      list-style: none;
      // .lihavea::before {
      //   position: absolute;
      //   content: "";
      //   display: inline-block;
      //   width: 0px;
      //   transition: all 0.3s linear;
      // }
      // .lihavea:hover ::before {
      //   position: absolute;
      //   content: "";
      //   height: 0px;
      //   border-top: 4px solid #224abe;
      //   width: 80px;
      // }
      li {
        float: right;
        height: 80px;
        line-height: 80px;
        text-align: center;

        .li {
          -webkit-text-stroke: 1px #ffffff;
          background-color: transparent;
          border: none;
          outline: none;
          color: #ffffff;
          height: 80px;
          width: 80px;
          display: inline-block;
          transition: all 0.3s linear;
          cursor: pointer;
          font-size: 24px;
          &:hover {
            background-color: @mainColor;
          }
        }
        button[disabled] {
          color: #cccccc !important;
          -webkit-text-stroke: 1px #cccccc;
          background: transparent;
          &:hover {
            cursor: not-allowed;
          }
        }
      }
    }
    span {
      font-size: 20px;
    }
    .profile {
      padding: 0px;
      font-size: @fontsize14;
    }
  }
  .side::-webkit-scrollbar {
    display: none;
  }
  .side {
    position: fixed;
    background-image: linear-gradient(180deg, #4e73df 10%, #224abe 100%);
    background-size: cover;
    left: 0;
    height: 100vh;
    width: 260px;
    top: 79px;
    z-index: 10;
    overflow-x: hidden;
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
    padding-bottom: 40px;
    // .img::before {
    //   content: "";
    //   display: inline-block;
    //   position: relative;
    //   width: 50px;
    //   height: 30px;
    //   background-image: url("~assets/imgs/huijilogo3.png");
    //   background-size: cover;
    //   background-position: center;
    //   margin-top: 10px;
    // }
  }
  .body {
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
    position: fixed;
    top: 80px;
    bottom: 0;
    left: 260px;
    z-index: 998;
    overflow-y: auto;
    box-sizing: border-box;
    right: 0px;
    background-color: @bgcolor;
    padding: 10px;
  }
}
// a::before {
//   // position: absolute;
//   width: 80px;
//   border-top: 4px solid #224abe;
// }
</style>