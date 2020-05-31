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
          <h1>村内补助对象列表</h1>
        </div>
      </tablepage>
    </div>
  </div>
</template>
<script>
import { isnull } from 'assets/js/myjs'
import { get_subsidyObj_by_vid } from 'network/request'
import tablepage from "components/commen/table/tablepage3"
export default {
  name: "zhenvbzo",
  data () {
    return {
      thead: ["姓名", "性别", "补助类别", "补助原因"],
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
      get_subsidyObj_by_vid_handle(this, this.vid)
    },
  },
  created () {
    let vid = this.$route.params.vid
    // let zhenid = this.$route.params.zhen_id
    // this.routepath = `/indexzhen/${zhenid}/zhencunwu/zhenvadetail`
    get_subsidyObj_by_vid_handle(this, vid)
  },
  watch: {
    vid (vid) {
      this.thepage = 1
      get_subsidyObj_by_vid_handle(this, vid)
    }
  },
}
// vid, page, pagesize
function get_subsidyObj_by_vid_handle (vm, vid) {
  get_subsidyObj_by_vid(vid, vm.thepage, vm.pagesize)
    .then(res => {
      console.log(res);
      vm.count = res.total
      vm.length = res.count
      vm.tableData = res.record.map(data => {
        return {
          id: data.cdyzzhdId,
          values: [
            isnull(data.soName),
            isnull(data.soBeiyong1),
            data.subsidyname === null ? "未知" : data.subsidyname.sName,
            isnull(data.soBeiyong4),
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