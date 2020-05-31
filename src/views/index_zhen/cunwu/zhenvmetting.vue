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
          <h1>村内会议列表</h1>
        </div>
      </tablepage>
    </div>
  </div>
</template>
<script>
import { get_huiyi_by_vid } from 'network/request'
import tablepage from "components/commen/table/tablepage"
export default {
  name: "zhenvmetting",
  data () {
    return {
      thead: ["会议标题", "会议时间", "会议地点", "会议内容", "详情"],
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
      get_huiyi_by_vid_handle(this, this.vid)
    },
  },
  created () {
    let vid = this.$route.params.vid
    let zhenid = this.$route.params.zhen_id
    this.routepath = `/indexzhen/${zhenid}/zhencunwu/zhenvmdetail`
    get_huiyi_by_vid_handle(this, vid)
  },
  watch: {
    vid (vid) {
      this.thepage = 1
      get_huiyi_by_vid_handle(this, vid)
    }
  },
}
function get_huiyi_by_vid_handle (vm, vid) {
  get_huiyi_by_vid(vid, vm.thepage, vm.pagesize)
    .then(res => {
      console.log(res);
      vm.count = res.total
      vm.length = res.count
      vm.tableData = res.record.map(data => {
        return {
          id: data.villageaffairId,
          values: [
            data.vaTitle,
            data.vaTime === null ? "未知" : data.vaTime,
            data.vaPlace === null ? "未知" : data.vaPlace,
            data.vaContent === null ? "未知" : data.vaContent,
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