<template>
  <div class="formbox">
    <el-form :model="form"
             status-icon
             ref="ruleForm"
             label-width="100px"
             class="demo-ruleForm">
      <el-form-item label="账号："
                    clearable
                    disabled>
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="姓名："
                    clearable>
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码：">
        <el-input type="password"
                  v-model="pass"
                  autocomplete="off"
                  clearable></el-input>
      </el-form-item>
      <el-form-item label="确认密码：">
        <el-input type="password"
                  v-model="checkPass"
                  autocomplete="off"
                  clearable></el-input>
        <p style="color:red">{{errormessage}}</p>
      </el-form-item>

      <el-form-item>
        <el-button type="primary"
                   @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
import { get_user, patch_user } from 'network/request'
export default {
  name: "updata",
  data () {
    return {
      form: {
        id: 285,
        init: true,
        level: 0,
        name: "惠济区纪委监委",
        town: null,
        username: "hjqjwjw",
        village: null,
      },
      pass: "",
      checkPass: "",
      errormessage: ""
    }

  },
  created () {
    this.get_user_intro()
  },
  methods: {
    onSubmit () {
      if (this.pass != this.checkPass) {
        // this.$toast.fail("操作失败！")
        this.errormessage = "两次输入密码不相同！"
      } else {
        this.$confirm('确定要修改吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$set(this.form, "password", this.pass.toString())
          return patch_user(this.$store.state.id, this.form)
        }).catch(() => {

        })
          .then(res => {
            this.$message({
              message: "操作成功",
              type: 'success'
            });
          }, err => {
            console.log(err);
            this.$message({
              showClose: true,
              message: err.data.message,
              type: 'error'
            });
          });
      }
    },
    get_user_intro () {
      get_user(this.$store.state.id)
        .then(res => {
          console.log(res);
          for (const [k, v] of Object.entries(res)) {
            if (v != null) {
              this.$set(this.form, k, v)
            }
          }
          console.log(this.form);
        })
    }
  }
}
</script>

<style>
.formbox {
  width: 400px;
}
</style>