<template>
  <div class="platesbody">
    <div class="plate-box"
         style="overflow-x:auto">
      <tablepage :thead="thead"
                 :tableData="tableData"
                 :thepage="thepage"
                 :count="count"
                 :length="length"
                 :routepath="routepath"
                 @changepage="changepage">
        <div slot="tabletitle">
          <select v-model="type"
                  :key="reloadtypes">
            <option v-for="(t,index) in types"
                    :key="index"
                    :value="t.id">{{t.name}}</option>
          </select>
        </div>
      </tablepage>
    </div>
  </div>
</template>
<script>
import { isnull } from 'assets/js/myjs'
import { get_dzuzhihd_by_vid, get_dzuzhihd_list_by_vid } from 'network/request'
import tablepage from "components/commen/table/tablepage"
export default {
  name: "zhendzzhd",
  data () {
    return {
      thead: ["活动标题", "活动时间", "活动地点", "活动内容", "详情"],
      tableData: [
      ],
      thepage: 1,
      pagesize: 8,
      count: 0,
      length: 0,
      routepath: "",
      type: 1,
      types: [],
      reloadtypes: ""
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
      get_dzuzhihd_list_by_vid_handle(this, this.vid)
    },
  },
  created () {
    let vid = this.$route.params.vid
    let zhenid = this.$route.params.zhen_id
    this.routepath = `/indexzhen/${zhenid}/zhendyfazhan/zhendzadetail`
    get_dzuzhihd_by_vid(this.vid)
      .then(res => {
        console.log(res);
        this.type = res.huodongleixingList[0].hdlxId
        this.types = res.huodongleixingList.map(t => {
          return {
            id: t.hdlxId,
            name: t.hdlxName
          }
        })
        this.reloadtypes = "1"
        return get_dzuzhihd_list_by_vid_handle(this, vid)
      })
    //
  },
  watch: {
    vid (vid) {
      this.thepage = 1
      get_dzuzhihd_list_by_vid_handle(this, vid)
    }
  },
}
// vid, page, pagesize
function get_dzuzhihd_list_by_vid_handle (vm, vid) {
  get_dzuzhihd_list_by_vid(vid, vm.thepage, vm.type, vm.pagesize)
    .then(res => {
      console.log(res);
      vm.count = res.total
      vm.length = res.count
      vm.tableData = res.huodongleixingList.map(data => {
        return {
          id: data.dyzzhdId,
          values: [
            isnull(data.dyzzhdName),
            isnull(data.dyzzhdTime),
            isnull(data.dyzzhdPlace),
            isnull(data.dyzzhdContent)
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