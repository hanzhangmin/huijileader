<template>
  <div class="platesbody">
    <div class="plate-box">
      <tablepage :thead="thead"
                 :tableData="tableData"
                 :thepage="thepage"
                 :count="count"
                 :length="length"
                 :routepath="routepath"
                 @changepage="changepage">
        <div slot="tabletitle">
          <h1>村内活动列表</h1>
        </div>
      </tablepage>
    </div>
  </div>
</template>
<script>
import { get_activity_by_vid } from 'network/request'
import tablepage from "components/commen/table/tablepage"
export default {
  name: "zhenvactivity",
  data () {
    return {
      thead: ["活动标题", "活动时间", "活动地点", "活动类型", "活动内容", "详情"],
      tableData: [
      ],
      thepage: 1,
      pagesize: 8,
      count: 0,
      length: 0,
      routepath: "",
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
      get_activity_by_vid_handle(this, this.vid)
    },
  },
  created () {
    let vid = this.$route.params.vid
    let zhenid = this.$route.params.zhen_id
    this.routepath = `/indexzhen/${zhenid}/zhencunwu/zhenvadetail`
    get_activity_by_vid_handle(this, vid)
  },
  watch: {
    vid (vid) {
      this.thepage = 1
      get_activity_by_vid_handle(this, vid)
    }
  },
}
// vid, page, pagesize
function get_activity_by_vid_handle (vm, vid) {
  get_activity_by_vid(vid, vm.thepage, vm.pagesize)
    .then(res => {
      console.log(res);
      vm.count = res.total
      vm.length = res.count
      vm.tableData = res.data.map(data => {
        return {
          id: data.cdyzzhdId,
          values: [
            data.cdyzzhdName,
            data.cdyzzhdTime === null ? "未知" : data.cdyzzhdTime,
            data.cdyzzhdPlace === null ? "未知" : data.cdyzzhdPlace,
            data.cunhuodongleixing.chdlxName,
            data.cdyzzhdContent
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