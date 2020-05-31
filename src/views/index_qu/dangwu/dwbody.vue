<template>
  <div>
    <div class="platesbody">
      <div class="plate-header"
           style="text-align:left">
        <h2>组织活动列表</h2>
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
            <zhenselct :years="years"
                       :zhens="zhens"
                       :key="reloadselect"
                       @searchbyzhen="searchbyzhen"></zhenselct>
          </div>
        </tablepage>
      </div>
    </div>
    <div class="platesbody">
      <div class="plate-header"
           style="text-align:left">
        <h2>各镇(街道)所辖行政村党员发展情况统计图表（单位:人）</h2>
      </div>
      <div class="plate-box"
           style="height:400px">
        <bar04></bar04>
      </div>
    </div>
  </div>
</template>
<script>
import tablepage from "components/commen/table/tablepage"
import zhenselct from "components/commen/dataselectbar/yearandzhen"
import { post_huodong } from "network/request"
import bar04 from "views/echartsExamples/bar_04"
export default {
  name: "dwbody",
  components: {
    tablepage,
    zhenselct,
    bar04
  },
  data () {
    return {
      thead: ["组织活动主题", "内容", "类型", "时间", "地点", "详情"],
      tableData: [
      ],
      thepage: 1,
      pagesize: 8,
      count: 0,
      length: 0,
      routepath: "/indexqu/qqdwindex/dwdetail",
      activezhenid: 0,
      zhens: [],
      reloadselect: "",
      activeyear: 0,
    }
  },
  computed: {
    years () {
      let kks = [];
      for (let index = (new Date()).getFullYear(); index >= 2018; index--) {
        kks.push({ value: index, text: index + "年" })
      }
      return kks
    },
  },
  created () {
    this.activeyear = (new Date()).getFullYear()
    this.zhens = this.$store.state.zhensx.map(zhen => {
      return {
        id: zhen.zhenid,
        name: zhen.zhenName
      }
    })
    this.zhens.push({ id: 0, name: "全区" })
    this.reloadselect = "1"
    post_huodong(this.activezhenid, this.activeyear, this.thepage, this.pagesize)
      .then(res => {
        post_huodong_handle(this, res)
      })

  },
  methods: {
    changepage (page, size) {
      this.thepage = Number(page)
      this.pagesize = Number(size)
      post_huodong(this.activezhenid, this.activeyear, this.thepage, this.pagesize)
        .then(res => {
          post_huodong_handle(this, res)
        })
    },
    searchbyzhen (year, zhenid) {
      this.activeyear = Number(year)
      this.activezhenid = Number(zhenid)
      post_huodong(this.activezhenid, this.activeyear, this.thepage, this.pagesize)
        .then(res => {
          post_huodong_handle(this, res)
        })
    }
  },
}
function post_huodong_handle (vm, res) {
  vm.count = res.total
  vm.length = res.size
  vm.tableData = res.data.map(data => {
    return {
      id: data.DYZZHD_Id,
      values: [
        data.DYZZHD_Name, data.DYZZHD_Content, data.HDLX_Name, data.DYZZHD_Time, data.Z_Name + data.V_Name + data.DYZZHD_Place
      ]
    }
  })
}
</script>
<style lang="less" scoped>
@import "assets/css/quindex.less";
</style>