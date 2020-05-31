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
          <!-- <h2 style="display:inline-block"> 选择查询时间段：</h2>  -->
          <select v-model="theyear">
            <option v-for="(year,index) in years"
                    :key="index"
                    :value="year.id">{{year.name}}</option>
          </select>
          <select v-model="type">
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
import { post_dylist_bytype } from 'network/request'
import { isnull } from 'assets/js/myjs'
import tablepage from "components/commen/table/tablepage3"
export default {
  name: "zhenzsdy",
  data () {
    return {
      thead: ["姓名", "性别", "联系方式", "成为积极分子", "转发展对象", "转预备党员", "转正", "文化程度", "工作单位", "职务"],
      tableData: [
      ],
      thepage: 1,
      pagesize: 8,
      count: 0,
      length: 0,
      type: 4,
      types: [
        {
          id: 4, name: "正式党员"
        },
        {
          id: 3, name: "预备党员"
        },
        {
          id: 2, name: "发展对象"
        },
        {
          id: 1, name: "积极分子"
        },
      ],
      theyear: 0
    }
  },
  components: {
    tablepage
  },
  computed: {
    vid () {
      return this.$route.params.vid
    },
    years () {
      let kks = [];
      kks.push({ id: 0, name: "近年来" })
      for (let index = (new Date()).getFullYear(); index > 2013; index--) {
        kks.push({ id: index, name: index + "年" })
      }
      kks.push({ id: 2013, name: "2013年及以前" })
      return kks
    }
  },
  methods: {
    changepage (page, size) {
      this.thepage = Number(page)
      this.pagesize = Number(size)
      post_dylist_bytype_handle(this, this.vid)
    },
  },
  created () {
    let vid = this.$route.params.vid
    // this.theyear = (new Date()).getFullYear()
    post_dylist_bytype_handle(this, vid)
  },
  watch: {
    vid (vid) {
      this.thepage = 1
      post_dylist_bytype_handle(this, vid)
    },
    type (val) {
      this.thepage = 1,
        this.type = val
      post_dylist_bytype_handle(this, this.vid)
    },
    theyear (val) {
      this.thepage = 1
      post_dylist_bytype_handle(this, this.vid)
    }
  },
}
function post_dylist_bytype_handle (vm, vid) {
  post_dylist_bytype(vid, vm.thepage, vm.pagesize, vm.type, vm.theyear)
    .then(res => {
      console.log(vm.type);
      console.log(res);
      vm.count = res.total
      vm.length = res.count
      vm.tableData = res.data.map(data => {
        return {
          id: data.hkqyId,
          values: [
            isnull(data.zzfzName),
            isnull(data.zzfzSex),
            isnull(data.zzfzPhone),
            isnull(data.jjfzTime),
            isnull(data.fzdxTime),
            isnull(data.ybdyTime),
            isnull(data.zsdyTime),
            isnull(data.zzfzWenHua),
            isnull(data.zzfzDanWei),
            isnull(data.zzfzZhiWu)
          ],
        }
      })
    })
}
</script>
<style lang="less" scoped>
@import "assets/css/quindex.less";
@import "assets/css/select.less";
</style>