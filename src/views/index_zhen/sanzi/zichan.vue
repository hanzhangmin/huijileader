<template>
  <div class="platesbody">
    <div class="plate-box"
         style="overflow-x:auto">
      <tablepage :tableData="tableData"
                 :thepage="thepage"
                 :count="count"
                 :length="length"
                 @changepage="changepage">
        <div slot="tabletitle">
          <h1>村内资产列表</h1>
        </div>
      </tablepage>
    </div>
  </div>
</template>
<script>
import { isnull } from 'assets/js/myjs'
import { get_zichan_list_byvid } from 'network/request'
import tablepage from "components/commen/table/tablepagezc"
export default {
  name: "zhenzichan",
  data () {
    return {
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
      get_zichan_list_byvid_handle(this, this.vid)
    },
  },
  created () {
    let vid = this.$route.params.vid
    let zhenid = this.$route.params.zhen_id
    this.routepath = `/indexzhen/${zhenid}/zhencunwu/zhenvadetail`
    get_zichan_list_byvid_handle(this, vid)
  },
  watch: {
    vid (vid) {
      this.thepage = 1
      get_zichan_list_byvid_handle(this, vid)
    }
  },
}
// vid, page, pagesize
function get_zichan_list_byvid_handle (vm, vid) {
  get_zichan_list_byvid(vid, vm.thepage, vm.pagesize)
    .then(res => {
      console.log(res);
      vm.count = res.total
      vm.length = res.count
      vm.tableData = res.data.map(data => {
        let taizhang = [], jingying = []
        if (data.zichantfeijingying === null) {
          for (let index = 0; index < 15; index++) {
            taizhang.push("未知")
          }
        } else {
          taizhang.push(isnull(data.zichantfeijingying.zjtzJilangdanwei))
          taizhang.push(isnull(data.zichantfeijingying.zjtzShuliang))
          taizhang.push(isnull(data.zichantfeijingying.zjtzDanjian))
          taizhang.push(isnull(data.zichantfeijingying.zjtzPinpai))
          taizhang.push(isnull(data.zichantfeijingying.zjtzXinghao))
          taizhang.push(isnull(data.zichantfeijingying.zjtzZhuangtai))
          taizhang.push(isnull(data.zichantfeijingying.zjtzYuanzhi))
          taizhang.push(isnull(data.zichantfeijingying.zjtzXianzhi))
          taizhang.push(isnull(data.zichantfeijingying.zjtzBiandongqingkuang))
          taizhang.push(isnull(data.zichantfeijingying.zjtzGoujianshijian))
          taizhang.push(isnull(data.zichantfeijingying.zjtzLaiyuan))
          taizhang.push(isnull(data.zichantfeijingying.zjtzYvjinianxian))
          taizhang.push(isnull(data.zichantfeijingying.zjtzDepartment))
          taizhang.push(isnull(data.zichantfeijingying.zjtzPeople))
          taizhang.push(isnull(data.zichantfeijingying.zjtzBeizhu))
        }
        if (data.zichanjingying === null) {
          for (let index = 0; index < 7; index++) {
            jingying.push("未知")
          }
        } else {
          jingying.push(isnull(data.zichanjingying.zcjyZhuangtai))
          jingying.push(isnull(data.zichanjingying.zcjyChengzhuren))
          jingying.push(isnull(data.zichanjingying.zcjyZhifuqinkuang))
          jingying.push(data.zichanjingying.zcjyHetong === true ? "有" : "无")
          jingying.push(isnull(data.zichanjingying.zcjyHetongqixian))
          jingying.push(isnull(data.zichanjingying.zcjyHetongjine))
          jingying.push(isnull(data.zichanjingying.zcjyBeizhu))
        }
        return {
          values: [
            isnull(data.ZCMZ_Name),
            isnull(data.A_Type),
            ...taizhang,
            ...jingying
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