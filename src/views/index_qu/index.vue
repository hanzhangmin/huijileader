<template>
  <div class="ib">
    <div class="container">
      <div class="ib_left">
        <div class="ib_left_bk">
          <div class="huijiicon">
            <div class="header">
              <img src="~assets/imgs/zhengzhou.png" />
            </div>
          </div>
        </div>
        <div class="lianjie">
          <naveasy></naveasy>
        </div>
      </div>
      <div class="ib_right">
        <Header>
          <div slot="Header_title"></div>
          <div slot="Header_right"
               @click.stop="changeisshow"><span>账号管理</span></div>
          <div slot="Header_left"
               @click.stop="goexit"><span>退出</span></div>
        </Header>
        <div class="thebody">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
        <div class="footer">
          <p>主办单位：惠济区纪委监委</p>
        </div>
      </div>
    </div>
    <updatazh :isshow="isshow"
              v-if="isshow"
              @cgisshow="cgisshow"></updatazh>
  </div>
</template>
<script>
import updatazh from "components/content/accountupdate"
import Header from "components/commen/Header/Header"
import ulandlis from "components/commen/ulnavigations/ulandlis"
import naveasy from "components/content/nav/naveasy"
export default {
  name: "indexqu",
  components: {
    Header,
    updatazh,
    naveasy,
  },
  data () {
    return {
      isshow: false,
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
    }
  },
  // created () {
  //   setTimeout(() => {
  //     this.showit = true
  //   },
  //     200)
  // },
}
</script>
<style lang="less" scoped>
@maxWidth:300px;
.ib {
  position: fixed;
  width: 100vw;
  height: 100vh;
   .container {
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: #efefef;
    display: flex;
    .ib_left {
      z-index: 100;
      width: @maxWidth;
      color: white;
      overflow: hidden;
      background-color: @mainColor;
      a{
        display: block;
      }
      a:link {
        color:white;
      }
      a:visited {
        background-color: rgba(0, 0, 0, 0.2);
      }
      a:hover, a:active{
        background-color: rgba(0, 0, 0, 0.2);
      }
       .ib_left_bk {
      width: 100%;
      height: 200px;
      background-color: @mainColor;
      .huijiicon{
        width:100%;
        margin: 1rem 0px;
        text-align: center;
        height: auto;
        .header {
          display: inline-block;
          background-color: white;
          text-align: center;
          border-radius: 50%;
          padding: 20px;
          img{
              width: 140px;
              height: 140px;
          }
        }
      }
    }
    }
    .ib_right {
      flex: auto;
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
      .thebody{
        flex: auto;
      }
      .footer{
        // background-color: @mainColor;
       background-color: darken(@mainColor, 10%) ;
        color: #ffffff;
        font-size: 1.5rem;
        text-align: center;
        padding: 4px 0px;
      }
    }
  }
 
 each(@fitmobile,{
      @media screen and (min-width: @value){
        .container{
          flex-direction:column;
            .ib_left{
               display: none;
            }
             .ib_right {
              flex: auto;
              .thebody{
                padding:50px 0px;
              }
            }
        }
        
      }
    })
  each(@fitipad,{
      @media screen and (min-width: @value){
        .container{
          flex-direction: column;
              .ib_left{
                display: none;
              }
             .ib_right {
                flex: auto;
                .thebody{
                  padding:50px 0px 50px 10px;
                }
            }
        }
        
      }
    })

 each(@fitpc,{
      @media screen and (min-width: @value){
       .container {
         flex-direction: row;
          .ib_left {
            width: @maxWidth;
            height: 100%;
            display: block;
            background-color: @mainColor;
          }
          .ib_right {
            flex: auto;
            .thebody{
              padding:4rem 0px 0rem 10px;
            }
          }
        }
      }
    })
}
</style>
  
