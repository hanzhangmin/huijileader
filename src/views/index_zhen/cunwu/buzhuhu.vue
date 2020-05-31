<template>
  <div class="platesbody">
    <div class="plate-box">
      <tablepage :thead="thead"
                 :tableData="tableData"
                 :thepage="thepage"
                 :count="count"
                 :length="length"
                 @changepage="changepage">
        <div slot="tabletitle">
          <h1>村内补助户列表</h1>
        </div>
      </tablepage>
    </div>
  </div>
</template>
<script>
import { isnull } from 'assets/js/myjs'
import { get_buzhuhu_by_vid } from 'network/request'
import tablepage from "components/commen/table/tablepage3"
export default {
  name: "zhenvbzh",
  data () {
    return {
      thead: ["户主姓名", "家庭情况", "家庭地址", "补助年份", "补助类型"],
      tableData: [
      ],
      thepage: 1,
      pagesize: 8,
      count: 0,
      length: 0,
    }
  },
  components: {
    tablepage
  },
  computed: {
    vid () {
      return this.$route.params.vid
    }
  },
  watch: {
    vid (vid) {
      this.thepage = 1
      get_buzhuhu_by_vid_handle(this, vid)
    }
  },
  methods: {
    changepage (page, size) {
      this.thepage = Number(page)
      this.pagesize = Number(size)
      get_buzhuhu_by_vid_handle(this, this.vid)
    },
  },
  created () {
    let vid = this.$route.params.vid
    get_buzhuhu_by_vid_handle(this, vid)
  },

}
// vid, page, pagesize
function get_buzhuhu_by_vid_handle (vm, vid) {
  get_buzhuhu_by_vid(vid, vm.thepage, vm.pagesize)
    .then(res => {
      // console.log(res);
      // console.log(res.response);
      if (res.response) {
      } else {
        vm.count = res.total
        vm.length = res.count
        vm.tableData = res.record.map(data => {
          return {
            values: [
              isnull(data.shName),
              isnull(data.shFamilyinformation),
              isnull(data.shAddress),
              isnull(data.shHu),
              data.subsidyname === null ? "未知" : data.subsidyname.sName,
            ]
          }
        })
      }
    })
}
</script>
<style lang="less" scoped>
@import "assets/css/quindex.less";
@import "assets/css/select.less";
</style>