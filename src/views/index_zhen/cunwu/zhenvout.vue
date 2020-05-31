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
          <h1>村内迁出人员列表</h1>
        </div>
      </tablepage>
    </div>
  </div>
</template>
<script>
import { get_qianyi_by_vid } from 'network/request'
import { isnull } from 'assets/js/myjs'
import tablepage from "components/commen/table/tablepage2"
export default {
  name: "zhenvout",
  data () {
    return {
      thead: ["迁出人姓名", "迁出人性别", "迁出人文化程度", "迁出时间", "证明"],
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
      get_qianyi_by_vid_handle(this, this.vid)
    },
  },
  created () {
    let vid = this.$route.params.vid
    // let zhenid = this.$route.params.zhen_id
    // this.routepath = `/indexzhen/${zhenid}/zhencunwu/zhenvmdetail`
    get_qianyi_by_vid_handle(this, vid)
  },
  watch: {
    vid (vid) {
      this.thepage = 1
      get_qianyi_by_vid_handle(this, vid)
    }
  },
}
function get_qianyi_by_vid_handle (vm, vid) {
  get_qianyi_by_vid(vid, 2, vm.thepage, vm.pagesize)
    .then(res => {
      console.log(res);
      vm.count = res.total
      vm.length = res.count
      vm.tableData = res.record.map(data => {
        let imgs = [];
        if (data.hkqyZhengming != "" && data.hkqyZhengming != null) {
          let photos = data.hkqyZhengming.split(",")
          photos.length--;
          imgs = photos.map(p => {
            return `${this.$store.state.vqypurl}${p}`
          });
        }
        return {
          id: data.hkqyId,
          values: [
            isnull(data.hkqyName),
            isnull(data.hkqySex),
            isnull(data.hkqyWenhuachengdu),
            isnull(data.hkqyTime)
          ],
          imgs: imgs
        }
      })
    })
}
</script>
<style lang="less" scoped>
@import "assets/css/quindex.less";
@import "assets/css/select.less";
</style>