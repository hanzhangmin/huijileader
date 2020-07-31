<template>
  <div>
    <div class="loginbox">
      <el-row>
        <el-col :span="12"
                :offset="8">
          <div class="loginform">
            <h1>郑州市惠济区村务监督平台</h1>
            <el-form :model="form">
              <el-form-item>
                <el-input v-model="form.usernum"
                          placeholder="请输入账号"
                          clearable
                          prefix-icon="el-icon-user"
                          type="text"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input v-model="form.pas"
                          clearable
                          placeholder="请输入密码"
                          prefix-icon="el-icon-key"
                          type="password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-switch v-model="form.remember"></el-switch>
                <span>记住我</span>
              </el-form-item>
              <br>
              <el-form-item>
                <el-button type="primary"
                           class="loginbutton"
                           @click="onSubmit">登录</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-row>
      <el-col :span="12">
        <div class="login login-left">
        </div>
      </el-col>
      <el-col :span="12">
        <div class="login login-right">
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  post_user_login,
  get_user_info
} from "network/request"
export default {
  name: "login",
  data () {
    return {
      form: {
        usernum: localStorage.usernum,
        pas: localStorage.userpas,
        remember: Boolean(localStorage.remember),
      }
    }
  },
  methods: {
    onSubmit () {
      post_user_login(this.form.usernum, this.form.pas)
        .then(res => {
          this.$store.commit("set_token", res.access_token)
          this.$message({
            message: res.message,
            type: 'success'
          });
          return get_user_info()
        }, err => {
          this.$message({
            showClose: true,
            message: err.data.message,
            type: 'error'
          });
        })
        .then(res => {
          if (this.form.remember) {
            localStorage.usernum = this.form.usernum
            localStorage.userpas = this.form.pas
            localStorage.remember = true
          }
          console.log(res);
          this.$store.commit("set_level", res.level)
          this.$store.commit("set_id", res.id)
          this.$store.commit("set_name", res.name)
          this.$store.commit("set_townid", res.town === null ? 6 : res.town.id)
          this.$store.commit("set_townname", res.town === null ? "刘寨街道" : res.town.name)
          this.$store.commit("set_areaid", res.area.id)
          this.$store.commit("set_areaname", res.area.name)
          this.$store.commit("set_villagename", res.village === null ? "" : res.village.name)
          this.$store.commit("set_villageid", res.village === null ? "" : res.village.id)
          this.$router.replace("/home")
        })
    }
  }
}
</script>
<style lang="less" scoped>
.login {
  height: 100vh;
}
.login-left {
  background-image: url("~assets/imgs/lotus3.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.login-right {
  background-color: @mainColorfade1;
}
.loginbox {
  .center();
  h1 {
    .textcenter();
  }
  z-index: @index10;
  .loginform {
    // width: 100%;
    max-width: 900px;
    width: 33vw;
    height: 500px;
    background-color: #fff;
    padding: 15px;
    padding-top: 30px;
  }
}
.el-form {
  max-width: 420px;
  margin: 30px auto;
  padding: 0px 2rem;
  .el-button {
    width: 100%;
    height: 40px;
    background-color: @mainColor;
    color: #fff;
  }
}
.el-input {
  margin: 1rem 0px;
}
</style>