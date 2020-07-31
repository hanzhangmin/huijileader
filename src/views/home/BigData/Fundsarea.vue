<template>
  <BaseCard2>
    <div slot="header">
      <TownSearch @villageSearch="TownSearch" />
    </div>
    <div slot="body">
      <div class="flexbox">
        <div class="flexsize2">
          <div style="height:400px;">
            <bar01 :name="name"
                   :source="source"
                   :key="reloadbar" />
          </div>
        </div>
        <div class="flexsize1">
          <div style="height:400px;">
            <pie01 :pie02data="pie02data"
                   :key="reloadpie" />
          </div>
        </div>
      </div>

    </div>

  </BaseCard2>
</template>
<script>
import { get_bigdata_funds_data } from 'network/request'
import BaseCard2 from "components/commen1/BaseCard2"
import TownSearch from 'components/content1/YearSearch'
import bar01 from 'views/echartsExamples/bar_06'
import pie01 from 'views/echartsExamples/pie_02'
import membervillage from './membervillage'
export default {
  name: "fundArea",
  components: {
    BaseCard2,
    // BaseCard,
    // villageSearch,
    bar01,
    TownSearch,
    pie01,
    membervillage
  },
  data () {
    return {
      townid: "",
      theyear: "",
      source: [
        ['product', '收入', '支出'],
      ],
      name: "该镇各村资金收支柱状图",
      villages: [],
      reloadbar: "11",
      pie02data: {
        name: "该镇各村资金收支占比",
        name2: ["收入", "支出"],
        name3: "金额（万元）",
        // data: [
        //   { value: 2000, name: "收入" },
        //   { value: 2800, name: "支出" }
        // ]
      },
      reloadpie: ""
    }
  },
  methods: {
    TownSearch (year) {
      this.theyear = year
      this.getChartDatabyTownid()
    },
    getChartDatabyTownid () {
      get_bigdata_funds_data(this.theyear)
        .then(res => {
          console.log(res);
          this.source.splice(1)
          let sr = 0, zc = 0;
          for (let index = 0, lentown = this.$store.state.towns.length; index < lentown; index++) {
            for (let num = 0, lenres = res.length; num < lenres; num++) {
              console.log();
              if (this.$store.state.towns[index].zhenid === res[num].Town_id) {
                console.log(Number(res[num].input / 10000).toFixed(2));
                sr += Number(res[num].input / 10000),
                  zc += Number(res[num].output / 10000)
                this.source.push([res[num].Town_name, Number(res[num].input / 10000).toFixed(2), Number(res[num].output / 10000).toFixed(2)])
              }
            }
          }
          this.$set(this.pie02data, "data", [{ value: sr.toFixed(2), name: "收入" }, { value: zc.toFixed(2), name: "支出" }])
          console.log(this.pie02data);
          console.log(this.source);
          this.reloadbar = (new Date()).getTime()
          this.reloadpie = (new Date()).getTime()
        })
    }
  },
}
</script>

<style>
</style>