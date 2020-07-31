<template>
  <div class="home">
    <div class="header">
      <!-- <span :class="changefold"
            @click.stop="changemenu"></span> -->
      <!-- <span :class="el-icon-s-unfold"></span> -->
      <ul>
        <li>
          <span class="el-icon-user">
          </span> {{$store.state.name}}，欢迎登陆！</li>
        <li>
          <el-tooltip class="item"
                      effect="dark"
                      content="退出"
                      placement="bottom">
            <span @click.stop="exit"
                  class="el-icon-upload2"> </span>
          </el-tooltip>
        </li>
      </ul>
    </div>
    <div class="side">
      <div class="logo">
        <!-- <img src="~assets/imgs/huijilogo3.png"> -->
        <div class="img">
          郑州市惠济区<br>
          村（居）务监督平台
        </div>
      </div>
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
              <i class="el-icon-s-flag"></i>
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
              <i class="el-icon-s-flag"></i>
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
      reloadmenu: ""
    }
  },
  created () {
    try {
      this.defaultPath = this.$route.path
    } catch (error) {
    }
  },
  methods: {
    changemenu () {
      if (this.isCollapse) {
        this.changefold = "el-icon-s-fold"
        this.isCollapse = false
      } else {
        this.changefold = "el-icon-s-unfold"
        this.isCollapse = true
      }
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
    }
    // handleroute () {
    //   let path = this.$route.path
    //   if (path.indexOf("party")) {
    //     this.$refs.elmenu.open("Party")
    //   }
    //   if (path.indexOf("villagebox")) {
    //     this.$refs.elmenu.open("villagebox")
    //   }
    //   if (path.indexOf("finance")) {
    //     this.$refs.elmenu.open("finance")
    //   }
    // }
  },
  watch: {
    $route (to) {
      this.defaultPath = to.path
      this.reloadmenu = (new Date()).getTime()
    }
  },
}
</script>

<style>
/* .el-icon-s-fold,
.el-icon-s-unfold {
  color: black !important;
} */
</style>
<style lang="less" scoped>
.home {
  .header {
    margin-bottom: 16px;
    text-align: right;
    position: fixed;
    height: 50px;
    left: 260px;
    right: 0px;
    right: 0px;
    background-color: #ffffff;
    border-bottom: 1px solid #f6f6f6;
    box-sizing: border-box;
    ul {
      list-style: none;
      li {
        float: right;
        margin: 0px 16px;
      }
    }
    span {
      display: inline-block;
      height: 50px;
      line-height: 50px;
    }
    .el-icon-upload2 {
      cursor: pointer;
      &:hover {
        color: @mainColor;
        // background-color: @mainColor;
      }
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
    top: 0;
    z-index: 10;
    overflow-x: hidden;
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
    .menu {
      padding-top: 100px;
    }
    .logo {
      position: fixed;
      background-color: #4e73df;
      z-index: 10;
      width: 260px;
      text-align: center;
      color: #ffffff;
      height: auto;
      line-height: 50px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      .img {
        font-size: 24px;
        font-family: "华文行楷";
      }

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
  }
  .body {
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
    position: fixed;
    top: 50px;
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
</style>