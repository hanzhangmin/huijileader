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
          <h1>村内资源列表</h1>
        </div>
      </tablepage>
    </div>
  </div>
</template>
<script>
import { isnull } from 'assets/js/myjs'
import { get_ziyuan_list_byvid } from 'network/request'
import tablepage from "components/commen/table/tablepage3"
export default {
  name: "zhenziyuan",
  data () {
    return {
      thead: ["资源名", "资源类型", "资源所在地", "备注"],
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
  methods: {
    changepage (page, size) {
      this.thepage = Number(page)
      this.pagesize = Number(size)
      get_ziyuan_list_byvid_handle(this, this.vid)
    },
  },
  created () {
    let vid = this.$route.params.vid
    let zhenid = this.$route.params.zhen_id
    this.routepath = `/indexzhen/${zhenid}/zhencunwu/zhenvadetail`
    get_ziyuan_list_byvid_handle(this, vid)
  },
  watch: {
    vid (vid) {
      this.thepage = 1
      get_ziyuan_list_byvid_handle(this, vid)
    }
  },
}
// vid, page, pagesize
function get_ziyuan_list_byvid_handle (vm, vid) {
  get_ziyuan_list_byvid(vid, vm.thepage, vm.pagesize)
    .then(res => {
      console.log(res);
      vm.count = res.total
      vm.length = res.count
      vm.tableData = res.data.map(data => {
        return {
          values: [
            isnull(data.RD_Name),
            isnull(data.R_Type),
            isnull(data.RD_Adress),
            isnull(data.RD_Details)
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