<template>
  <div class="platesbody">
    <div class="plate-box"
         style="overflow-x:auto">
      <tablepage :thead="thead"
                 :tableData="tableData"
                 :thepage="thepage"
                 :count="count"
                 :length="length"
                 @changepage="changepage">
        <div slot="tabletitle">
          <h1>村内在建项目列表</h1>
        </div>
      </tablepage>
    </div>
  </div>
</template>
<script>
import { isnull } from 'assets/js/myjs'
import { get_project_byid } from 'network/request'
import tablepage from "components/commen/table/tablepage3"
export default {
  name: "zhenzjgc",
  data () {
    return {
      thead: ["项目名", "项目编号", "是否实施", "实施方", "是否立项", "是否招标", "验收方", "监理方", "支付情况", "备注"],
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
      get_project_byid_handle(this, this.vid)
    },
  },
  created () {
    let vid = this.$route.params.vid
    let zhenid = this.$route.params.zhen_id
    this.routepath = `/indexzhen/${zhenid}/zhencunwu/zhenvadetail`
    get_project_byid_handle(this, vid)
  },
  watch: {
    vid (vid) {
      this.thepage = 1
      get_project_byid_handle(this, vid)
    }
  },
}
// vid, page, pagesize
function get_project_byid_handle (vm, vid) {
  get_project_byid(vid, vm.thepage, vm.pagesize)
    .then(res => {
      console.log(res);
      vm.count = res.total
      vm.length = res.count
      vm.tableData = res.OperationManagements.map(data => {
        return {
          values: [
            isnull(data.om_Name),
            isnull(data.omTenderingmaterial),
            data.omImplementation === true ? "是" : "否",
            isnull(data.omImplementingparty),
            isnull(data.omSourceoffunds),
            isnull(data.omImplementtheplan),
            isnull(data.omAcceptanceparty),
            isnull(data.omFollowupmanagement),
            isnull(data.omDivisionofresponsibility),
            isnull(data.omType)
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