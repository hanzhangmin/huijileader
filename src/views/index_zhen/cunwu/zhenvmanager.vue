<template>
  <div class="platesbody"
       ref="details">
    <div class="plate-header"
         style="text-align:left">
      <h2>村内管理人员简介</h2>
    </div>
    <div v-for="(manager,index) in managers"
         :key="index"
         class="plate-box">
      <table border="1"
             cellspacing="0"
             cellpadding="0">
        <tr>
          <td rowspan="4"
              style="text-align:center">
            <span v-if="manager.vcNewimagename===null">暂无</span>
            <div v-else>
              <viewer :options="options">
                <img class="managerimg"
                     :src="manager.vcNewimagename">
              </viewer>
            </div>
            <!-- <viewer>
              <img class="managerimg"
                   :src="manager.vcNewimagename">
            </viewer> -->
          </td>
          <th>姓名</th>
          <td>{{manager.vcName}}</td>
          <th>性别</th>
          <td>{{manager.vcSex}}</td>
        </tr>
        <tr>
          <th>职务</th>
          <td>{{manager.job}}</td>
          <th>入职时间</th>
          <td>{{manager.getjobtime}}</td>
        </tr>
        <tr>
          <th>联系方式</th>
          <td>{{manager.vcPhone}}</td>
          <th>工资</th>
          <td>{{manager.salary}}</td>
        </tr>
        <tr>
          <th>职责</th>
          <td colspan="3">{{manager.vcZhize}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import { get_vmanagers_list } from 'network/request'
export default {
  name: "zhenvmanager",
  data () {
    return {
      managers: [],
      options: {
        "navbar": false,
        "title": false,
        "toolbar": false,
      },
    }
  },
  created () {
    let vid = this.$route.params.vid
    get_vmanagers_list_handle(this, vid)
  },
  computed: {
    vid () {
      return this.$route.params.vid
    }
  },
  watch: {
    vid (vid) {
      get_vmanagers_list_handle(this, vid)
    }
  },
}
function get_vmanagers_list_handle (vm, vid) {
  get_vmanagers_list(vid)
    .then(res => {
      console.log(res);
      vm.managers = res.record.map(manager => {
        return {
          vcName: manager.vcName,
          vcSex: manager.vcSex,
          vcPhone: manager.vcPhone,
          vcNewimagename: manager.vcNewimagename === null ? null : vm.$store.state.vmanagerurl + manager.vcNewimagename,
          // job: manager.job.jName,
          // job: manager.job == null ? "未知" : manager.job.jName,
          job: manager.vcPosts === null ? "未知" : manager.vcPosts,
          getjobtime: manager.vcBeiyong1 == null ? "未知" : manager.vcBeiyong1,
          salary: manager.vcGongzi == null ? "未知" : manager.vcGongzi,
          vcZhize: manager.vcZhize == null ? "未知" : manager.vcZhize
        }
      })
    })
}
</script>
<style lang="less" scoped>
@import "assets/css/quindex.less";
@import "assets/css/tablecard.less";
.managerimg {
  width: 100px;
  height: auto;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    box-shadow: 0px 0px 4px 3px #cccccc;
  }
}
table {
  width: 100%;
}
</style>