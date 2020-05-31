<template>
  <div class="platesbody">
    <div class="plate-header"
         style="text-align:left">
      <h1> {{zhenname}}反馈统计表</h1>
    </div>
    <div class="plate-box">
      <tablepage :thead="thead"
                 :tableData="tableData"
                 :thepage="thepage"
                 :count="count"
                 :length="length"
                 :routepath="routepath"
                 @changepage="changepage">
        <div slot="tabletitle">
          <buttonback></buttonback>
          <year2018s @yearc="yearc"></year2018s>
          <mouthselector @mouthc="mouthc"></mouthselector>
          <!-- <villageselector @thezhenq="thezhenq"
                           :zhenid="zhenid"></villageselector> -->
          <zhuangtais @ztchange="ztchange"
                      :zhuangtai="zhuangtai"></zhuangtais>
          <button @click.stop="gosearch"
                  class="buttons">搜索</button>
        </div>
      </tablepage>
    </div>
  </div>
</template>
<script>
import { post_fankui_zhen } from "network/request"
import { gettime } from "assets/js/myjs"
import buttonback from "components/commen/dataselectbar/buttonback"
import tablepage from "components/commen/table/tablepage"
import year2018s from "components/commen/dataselectbar/year2018selector"
import mouthselector from "components/commen/dataselectbar/mouthselector"
import zhuangtais from "components/commen/dataselectbar/zhuangtais"
export default {
  name: "fankuilistz",
  components: {
    buttonback,
    tablepage,
    year2018s,
    mouthselector,
    zhuangtais
  },
  data () {
    return {
      thead: ["反馈标题", "内容", "类型", "来源", "处理情况", "详情"],
      tableData: [
      ],
      thepage: 1,
      pagesize: 8,
      count: 0,
      length: 0,
      routepath: "/indexqu/qqfkindex/fkdetail",
      zhenid: 0,
      zhenname: "",
      thetime: "",
      mouth: "",
      zhuangtai: 0,
    }
  },
  created () {
    this.thetime = gettime((new Date).getFullYear(), ((new Date).getMonth() + 1));
    this.zhenid = Number(this.$route.params.id) || Number(this.$route.params.zhen_id)
    this.zhuangtai = Number(this.$route.params.type) || 0
    this.zhenname = this.$route.params.zhenname
    console.log(this.$route.params);
    post_fankui_zhen_handle(this)
  },
  methods: {
    changepage (page, size) {
      this.thepage = Number(page)
      this.pagesize = Number(size)
      post_fankui_zhen_handle(this)
    },
    gosearch () {
      this.thetime = gettime(this.year, this.mouth);
      console.log(this.thetime);
      post_fankui_zhen_handle(this)
    },
    ztchange (val) {
      this.zhuangtai = Number(val)
    },
    // thezhenq (val) {
    //   this.zhenid = Number(val)
    // },
    mouthc (val) {
      this.mouth = Number(val)
    },
    yearc (val) {
      this.year = Number(val)
    }
  },
  // watch: {
  //   zhenid (val) {
  //     post_fankui_zhen_handle(this)
  //   }
  // },
  watch: {
    $route (to, from) {
      if (JSON.stringify(to.params) != "{}") {
        this.zhenid = Number(to.params.id) || Number(to.params.zhen_id)
        this.zhuangtai = Number(to.params.type) || 0
        this.zhenname = to.params.zhenname
        post_fankui_zhen_handle(this)
      }
    }
  },
}
function post_fankui_zhen_handle (vm) {
  post_fankui_zhen(vm.thetime, vm.zhuangtai, vm.thepage, vm.pagesize, vm.zhenid)
    .then(res => {
      console.log(res);
      vm.count = res.total
      vm.length = res.count
      vm.tableData = res.data.map(data => {
        return {
          id: data.Feedback_Id,
          values: [
            data.F_Title, data.F_Content, data.B_Type, data.zName, data.F_Handle === true ? "已处理" : "未处理"
          ]
        }
      })
    })
}
</script>
<style lang="less" scoped>
@import "assets/css/quindex.less";
@import "assets/css/select.less";
</style>