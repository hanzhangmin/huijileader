<template>
  <div class="bodyitem">
    <div class="platesbody">
      <div class="plate-header">
        <div style="display:flex">
          <div style="flex:auto">
            <h1 style="text-align:left">
              该村 <year2012selector @search="searchzj"></year2012selector>资金收支曲线图
            </h1>
          </div>
        </div>
      </div>
      <div class="plate-box"
           style="height:400px;border-bottom:1px solid #efefef">
        <line01 :legend="legend"
                :key="reloadzj"></line01>
      </div>
      <div class="plate-box">
        <easytable :thead="thead"
                   :tableData="tableData"
                   @getdetails="getzjdetails">
          <div slot="tabletitle">
            <h1>{{theyear}}资金收支列表</h1>
          </div>
        </easytable>
      </div>
    </div>
    <zjdcard v-show="zjcardshow"
             :jieyu="jieyu"
             :zjname="zjname"
             :shouzhi="shouzhi"
             :key="reloadd"
             @zjcardhide="zjcardhide"></zjdcard>
  </div>
</template>
<script>
import { post_vzijin_year, get_zijinintro_byid } from 'network/request'
import line01 from "views/echartsExamples/line_01"
import year2012selector from "components/commen/dataselectbar/year2012selector"
import easytable from "components/commen/table/easytable"
import zjdcard from 'components/commen/card/zijindetailcard'
export default {
  name: "zhenzijin1",
  data () {
    return {
      legend: [],
      reloadzj: "",
      year: "",
      thead: ["活动标题", "时间", "收入金额(元)", "支出金额(元)", "详情"],
      tableData: [
      ],
      theyear: Number,
      jieyu: 0,
      shouzhi: [],
      reloadd: "",
      zjname: "",
      zjcardshow: false
    }
  },
  computed: {
    vid () {
      return this.$route.params.vid
    }
  },
  watch: {
    vid (vid) {
      post_vzijin_year_handle(this, this.year, vid)
    }
  },
  components: {
    line01,
    year2012selector,
    easytable,
    zjdcard
  },
  created () {
    this.theyear = (new Date()).getFullYear()
    this.year = `${this.theyear}-01~${this.theyear}-12`
    post_vzijin_year_handle(this, this.year, this.vid)
  },
  methods: {
    searchzj (val) {
      this.theyear = Number(val)
      this.year = val + "-01~" + val + "-12"
      post_vzijin_year_handle(this, this.year, this.vid)
    },
    zjcardhide () {
      this.zjcardshow = false
    },
    getzjdetails (id, name) {
      console.log(id);
      this.zjname = name
      get_zijinintro_byid(id)
        .then(res => {
          console.log(res);
          try {
            this.jieyu = parseInt(res.monthincome).toFixed(2)
            this.shouzhi = res.record.map(item => {
              return {
                time: item.zijinxiangqing.cdTime,
                money: parseInt(item.meicishouzhi).toFixed(2),
                reason: item.zijinxiangqing.cdXiangqing
              }
            })
            this.reloadd = (new Date()).getTime()
            this.zjcardshow = true
          } catch (error) {
            // alert(1)
            // this.zjname = "无信息"
            // this.jieyu = "未知"
            // this.zjcardshow = true
            // this.jieyu = zjname
            this.$mytoast.toast("无信息", 100000)
          }
        })
    }
  },
}
function post_vzijin_year_handle (vm, year, vid) {
  post_vzijin_year(vid, year)
    .then(mes => {
      vm.legend.splice(0, vm.legend.length)
      vm.tableData.splice(0, vm.tableData.length)
      console.log(mes)
      let sr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        zc = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

      for (var i = 0, len = mes.data.length; i < len; i++) {
        var yue = parseInt(mes.data[i].CD_Expenditure);
        vm.tableData.push({
          id: mes.data[i].Capital_Id,
          name: mes.data[i].C_Type,
          values: [
            mes.data[i].C_Type,
            mes.data[i].CD_Income + "年" + yue + "月",
            Number(mes.data[i].CD_beiyong1),
            Number(mes.data[i].CD_beiyong2),
          ]
        })
        if (mes.data[i].CD_beiyong1 !== null && mes.data[i].CD_beiyong1 != "") {
          sr[yue - 1] += Number(mes.data[i].CD_beiyong1);
        }
        if (mes.data[i].CD_beiyong2 !== null && mes.data[i].CD_beiyong2 != "") {
          zc[yue - 1] += Number(mes.data[i].CD_beiyong2);
        }
      }
      vm.legend.push(sr)
      vm.legend.push(zc)
      vm.reloadzj = (new Date()).getTime()
    })
}

</script>
<style lang="less" scoped>
@import "assets/css/quindex.less";
.bodyitem {
  margin-top: 0px;
  padding-top: 0px;
}
</style>