<template>
  <div class="bodyitem">
    <div class="platesbody">
      <div class="plate-header">
        <div style="display:flex">
          <div style="flex:auto">
            <h2 style="text-align:left">近年来全区各镇(街道)所辖行政村资金柱状图(月表)
            </h2>
          </div>
          <div>
            <div style="text-align:right">
              <year2012selector @search="searchzj"></year2012selector>
            </div>
          </div>
        </div>
      </div>
      <div class="plate-box"
           style="height:400px">
        <bar03 :chartDate="chartDatezj2"
               :key="reloadzj2"></bar03>
      </div>
    </div>
    <div class="platesbody">
      <div class="plate-header"
           style="text-align:left">
        <h2>近年来全区各镇(街道)所辖行政村资金柱状图(年表)</h2>
      </div>
      <div class="plate-box"
           style="height:400px">
        <bar03 :chartDate="chartDatezj1"
               :key="reloadzj1"></bar03>
      </div>
    </div>

  </div>
</template>
<script>
import { post_zijin_all } from "network/request"
import { gettime } from "assets/js/myjs"
import bar03 from "views/echartsExamples/bar_03"
import selectonlyyear from "components/commen/dataselectbar/selectonlyyear"
import year2012selector from "components/commen/dataselectbar/year2012selector"
export default {
  name: "qqzjindex",
  components: {
    bar03,
    year2012selector,
    selectonlyyear
  },
  data () {
    return {
      chartDatezj1: {
        xAxisData: [],
        timelineData: [],
        types: ["收入", "支出"],
        seriesData: [
        ]
      },
      chartDatezj2: {
        xAxisData: [],
        timelineData: [],
        types: ["收入", "支出"],
        seriesData: [
        ]
      },
      reloadzj1: "",
      reloadzj2: "",
      year: 0
    }
  },
  created () {
    post_zijin_all(1349)
      .then(res => {
        getzijin(this, res);
        this.year = (new Date()).getFullYear()
        getzijinbyyear(this, this.year, res)
      })
  },
  methods: {
    searchzj (year) {
      this.year = Number(year)
      console.log(year);
      this.chartDatezj2.seriesData.splice(0, this.chartDatezj2.seriesData.length)
      post_zijin_all(1349)
        .then(res => {
          getzijinbyyear(this, this.year, res)
        })
    }
  },
}
function getzijin (vm, res) {
  let minyear = 2012,
    maxyear = (new Date()).getFullYear(),
    timelineData = [],
    xAxisData = [],
    myzhen = vm.$store.state.zhensx;
  for (let index = maxyear; index >= minyear; index--) {
    timelineData.push(index + "年");
  }
  myzhen.forEach((element, index) => {
    xAxisData.push(element.zhenName)
  });
  vm.$set(vm.chartDatezj1, "timelineData", timelineData)
  vm.$set(vm.chartDatezj1, "xAxisData", xAxisData)
  for (let i = 0, len = timelineData.length; i < len; i++) {
    let seriesItem = { seriesNames: ["收入", "支出"], seriesValue: [] };
    let sr = [],
      zc = [],
      theyear = parseInt(timelineData[i].substr(0, 4));
    for (let j = 0, len1 = myzhen.length; j < len1; j++) {
      for (let m = 0, len = res.data.length; m < len; m++) {
        if (res.data[m].zhen.zhenId === myzhen[j].zhenid) {
          let sritem = 0,
            zcitem = 0,
            xjsritem = 0,
            xjzcitem = 0,
            yhsritem = 0,
            yhzcitem = 0;
          for (let n1 = 0, nmax1 = res.data[m].bankCapital.length; n1 < nmax1; n1++) {
            let itemyear = Number(res.data[m].bankCapital[n1].CD_Income);
            if (itemyear == theyear) {
              yhsritem += (Number(res.data[m].bankCapital[n1].CD_Beiyong1).toFixed(0)) / 10000;
              yhzcitem += (Number(res.data[m].bankCapital[n1]["SUM(CD_Beiyong2)"]).toFixed(0)) / 10000;
            }
          }
          for (let n2 = 0, nmax2 = res.data[m].cashCapital.length; n2 < nmax2; n2++) {
            let itemyear = Number(res.data[m].cashCapital[n2].CD_Income);
            if (itemyear == theyear) {
              xjsritem += (Number(res.data[m].cashCapital[n2].CD_Beiyong1).toFixed(0)) / 10000;
              xjzcitem += (Number(res.data[m].cashCapital[n2]["SUM(CD_Beiyong2)"]).toFixed(0)) / 10000;
            }
          }
          sritem = xjsritem + yhsritem;
          zcitem = xjzcitem + yhzcitem;
          sr.push(sritem.toFixed(4));
          zc.push(zcitem.toFixed(4));
        }

      }
    }
    seriesItem.seriesValue.push(sr)
    seriesItem.seriesValue.push(zc)
    vm.chartDatezj1.seriesData.push(seriesItem)
  }
  vm.reloadzj1 = (new Date()).getTime();
}
function getzijinbyyear (vm, theyear, res) {
  let timelineData = [],
    xAxisData = [],
    myzhen = vm.$store.state.zhensx;
  for (let index = 1; index <= 12; index++) {
    timelineData.push(index + "月");
  }
  // timelineData.push(1 + "月");
  myzhen.forEach((element, index) => {
    xAxisData.push(element.zhenName)
  });
  vm.$set(vm.chartDatezj2, "timelineData", timelineData)
  vm.$set(vm.chartDatezj2, "xAxisData", xAxisData)
  for (let i = 0, len = timelineData.length; i < len; i++) {
    let seriesItem = { seriesNames: ["收入", "支出"], seriesValue: [] };
    let sr = [],
      zc = [],
      themouth;
    if (timelineData[i].length == 3) {
      themouth = parseInt(timelineData[i].substr(0, 2));
    } else {
      themouth = parseInt(timelineData[i][0]);
    }
    for (let j = 0, len1 = myzhen.length; j < len1; j++) {
      // for (let j = 0, len1 = 1; j < len1; j++) {
      for (let m = 0, len = res.data.length; m < len; m++) {
        if (res.data[m].zhen.zhenId === myzhen[j].zhenid) {
          let sritem = 0,
            zcitem = 0,
            xjsritem = 0,
            xjzcitem = 0,
            yhsritem = 0,
            yhzcitem = 0;
          for (let n1 = 0, nmax1 = res.data[m].bankCapital.length; n1 < nmax1; n1++) {
            let itemyear = Number(res.data[m].bankCapital[n1].CD_Income);
            let itemmouth = Number(res.data[m].bankCapital[n1].CD_Expenditure);
            if (itemyear === theyear && themouth === itemmouth) {
              // console.log(theyear);
              yhsritem += Number(res.data[m].bankCapital[n1].CD_Beiyong1);
              yhzcitem += Number(res.data[m].bankCapital[n1]["SUM(CD_Beiyong2)"]);
            }
          }
          for (let n2 = 0, nmax2 = res.data[m].cashCapital.length; n2 < nmax2; n2++) {
            let itemyear = Number(res.data[m].cashCapital[n2].CD_Income);
            let itemmouth = Number(res.data[m].cashCapital[n2].CD_Expenditure);
            if (itemyear === theyear && itemmouth === themouth) {
              xjsritem += Number(res.data[m].cashCapital[n2].CD_Beiyong1);
              xjzcitem += Number(res.data[m].cashCapital[n2]["SUM(CD_Beiyong2)"]);
              // console.log(theyear + "/" + itemmouth);
              // console.log(Number(res.data[m].cashCapital[n2].CD_Beiyong1));
              // console.log(Number(res.data[m].cashCapital[n2].CD_Beiyong1));
            }
          }
          sritem = (xjsritem + yhsritem) / 10000;
          zcitem = (xjzcitem + yhzcitem) / 10000;
          sr.push(sritem.toFixed(2));
          zc.push(zcitem.toFixed(2));
        }

      }
    }
    seriesItem.seriesValue.push(sr)
    seriesItem.seriesValue.push(zc)
    vm.chartDatezj2.seriesData.push(seriesItem)
  }
  vm.reloadzj2 = (new Date()).getTime();
}

</script>
<style lang="less" scoped>
@import "assets/css/quindex.less";
</style>