<template>
  <div class="loginbody">
    <h1>
      <img src="~assets/imgs/title.png" />
      <!-- 郑州市惠济区村（居）务监督平台 -->
    </h1>
    <div class="login_card">
      <div class="login_form">
      </div>
      <div class="login_form">
        <loginInput :inputtype="input1"
                    @changevalue="changevalue" />
      </div>
      <div class="login_form">
        <loginInput :inputtype="input2"
                    @changevalue="changevalue" />
      </div>
      <div class="login_form">
        <div class="logbutton">
          <button @click="login">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { post_login } from "network/request"
import {
  setCookie,
  getCookie,
  clearAllCookie
} from "assets/js/cookie"

import loginInput from "components/commen/loginInput/input"
export default {
  name: "login",
  components: {
    loginInput
  },
  data () {
    return {
      input1: {
        title: "nametitle",
        id: "name",
        type: "text",
        placeholder: "请输入账号",
        value: ""
      },
      input2: {
        title: "pastitle",
        id: "pas",
        type: "password",
        placeholder: "请输入密码",
        value: ""
      },
      // type: "1"
    }
  },
  methods: {
    changevalue (str1, str2) {
      str1 === this.input1.id ? this.input1.value = str2 : this.input2.value = str2
    },
    login () {
      post_login(this.input1.value, this.input2.value, this.type)
        .then(res => {
          // console.log(res);
          // sessionStorage.setItem("status", 1)
          // this.$store.commit("changestatus", sessionStorage.getItem("status"))
          // this.$router.push("/indexqu")
          if (res.state === "success") {
            if (res.data.mType === 1) {
              sessionStorage.setItem("status", 1)
              this.$store.commit("changestatus", sessionStorage.getItem("status"))
              setCookie(this.input1.value, this.input2.value, 1)
              this.$router.push("/indexqu");
            } else {
              setCookie(this.input1.value, this.input2.value, 0)
              sessionStorage.setItem("status", "")
              this.$store.commit("changestatus", sessionStorage.getItem("status"))
              this.$router.push({
                path: `/indexzhen/${res.data.zhenId}`,
              })
            }
          } else {
            this.$mytoast.toast("填写错误！", 2000)
          }
        })
    }
  },
}
</script>
<style lang="less" scoped>
.loginbody {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("~assets/imgs/loginback.jpg") no-repeat center;
  background-size: cover;
  h1 {
    text-align: center;
  }
  each(@fitmobile, {
    @media screen and (min-width: @value) {
     .login_card{
        width: 80vw;
        height: 120vw;
        border-radius: 10vw;
        box-shadow: 10px -10px 1px 1rem @mainColor;
     }
     img{
      width:100%;
     }
    }
  }
)
    each(@fitipad, {
    @media screen and (min-width: @value) {
      .login_card{
          width: 60vw;
          height: 60vw;
          border-radius: 30vw;
          box-shadow: 10px -10px 1px 1rem @mainColor;
     }
      img{
      width:70%;
     }
    }
  }
)
    each(@fitpc, {
    @media screen and (min-width: @value) {
     .login_card{
        width: 32vw;
        height: 32vw;
        border-radius: 16vw;
        box-shadow: 1rem -1rem 1px 1.1rem @mainColor;
     }
       img{
      width:40%;
     }
    }
  }
)
    .login_card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .login_form {
    width: 70%;
    height: 4rem;
    line-height: 4rem;
    position: relative;
    margin-bottom: 2rem;
    .logbutton {
      width: 100%;
      text-align: center;
      button {
        padding: 0.5rem 1rem;
        font-size: 1.5rem;
        height: auto;
        border: 5px solid #cccccc;
        color: #cccccc;
      }
      button:hover {
        border: 5px solid @mainColor;
        color: #32b588;
      }
    }
    select {
      width: 100%;
      border-bottom: 2px solid #cccccc;
      &:focus {
        border-bottom: 2px solid @mainColor;
        letter-spacing: 0.2rem;
      }
    }
  }
}
</style>