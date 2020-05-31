<template>
  <div class="login_card">
    <div class="hideit"
         @click.stop="hideit">x</div>
    <div class="login_form">
      <h2>修改账号密码</h2>
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
        <button @click="login">提交</button>
      </div>
    </div>
  </div>
</template>
<script>
import { post_login } from "network/request"
import loginInput from "components/commen/loginInput/input"
export default {
  name: "updatazh",
  components: {
    loginInput
  },
  props: {
    isshow: Boolean
  },
  data () {
    return {
      input1: {
        title: "nametitle",
        id: "pasold",
        type: "password",
        placeholder: "请输入旧密码",
        value: ""
      },
      input2: {
        title: "pastitle",
        id: "pasnew",
        type: "password",
        placeholder: "请输入新密码",
        value: ""
      },
      showit: true
    }
  },
  methods: {
    changevalue (str1, str2) {
      str1 === this.input1.id ? this.input1.value = str2 : this.input2.value = str2
    },
    hideit () {
      this.showit = false
    },
    login () {
      post_login(this.input1.value, this.input2.value, this.type)
        .then(res => {
          console.log(res);
          if (res.state === "success") {
            if (this.type === "1") {
              this.$router.push("/indexqu")
            } else {
              this.$router.push("/indexzhen")
            }
          }
        })
    }
  },
  watch: {
    isshow () {
      if (isshow === true) {
        this.showit = true;
      } else {
        this.showit = false
      }
    },
    showit () {
      this.$emit("cgisshow", this.showit)
    }
  },
}
</script>
<style lang="less" scoped>
h2 {
  letter-spacing: 2px;
  color: @mainColor;
}
each(@fitmobile, {
    @media screen and (min-width: @value) {
     .login_card{
        width: 80vw;
        height: 120vw;
        border-radius: 10vw;
        box-shadow: 10px -10px 1px 1rem  @mainColor;
        .hideit{
          width: 3rem;
          height: 3rem;
          line-height: 3rem;
          top: 5vw;
          right: 5vw;
        }
     }
      h2 {
        font-size: 1.6rem;
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
          box-shadow: 10px -10px 1px 1rem  @mainColor;
     }
       h2 {
        font-size: 2rem;
       
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
        box-shadow: 1rem -1rem 1px 1.1rem  @mainColor;
     }
       h2 {
        font-size: 2rem;
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
  z-index: 100;
}
.hideit {
  position: absolute;
  border: 4px solid #cccccc;
  color: #cccccc;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
}
.hideit:hover {
  border: 5px solid @mainColor;
  color: @mainColor;
}

.login_form {
  width: 70%;
  height: 4rem;
  line-height: 4rem;
  position: relative;
  margin-bottom: 1rem;
}
.logbutton {
  width: 100%;
  text-align: center;
  button {
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    height: auto;
    border: 5px solid #cccccc;
    color: #cccccc;
  }
  button:hover {
    border: 5px solid @mainColor;
    color: #32b588;
  }
}
</style>