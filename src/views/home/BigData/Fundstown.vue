<template>
  <BaseCard2>
    <div slot="header">
      <TownSearch @villageSearch="TownSearch" />
    </div>
    <div slot="body">
      <div class="flexbox">
        <div class="flexsize2">
          <div v-loading="loading"
               style="height:400px;">
            <bar01 :name="name"
                   :source="source"
                   :key="reloadbar" />
          </div>
        </div>
        <div v-loading="loading"
             class="flexsize1">
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
import { get_funds, get_villages } from 'network/request'
import BaseCard2 from "components/commen1/BaseCard2"
import TownSearch from 'components/content1/TownAndYearSearch'
import bar01 from 'views/echartsExamples/bar_06'
import pie01 from 'views/echartsExamples/pie_02'
import membervillage from './membervillage'
export default {
  name: "Fundstown",
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
      loading: true,
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
    TownSearch (val, year) {
      this.townid = val
      this.theyear = year
      this.getChartDatabyTownid()
    },
    getChartDatabyTownid () {
      this.loading = true;
      get_villages({
        join: "town",
        fields: "id,name",
        s: {
          "town.id": {
            "$eq": Number(this.townid)
          }
        }
      }).then(res => {
        this.villages.splice(0)
        let promises = res.map(village => {
          this.villages.push(village.name)
          return get_funds(
            {
              fields: "time,input,output",
              join: "village,status",
              s: {
                "village.id": {
                  "$eq": Number(village.id)
                },
                "time": {
                  "$cont": this.theyear
                }
              }
            }
          )
        })
        Promise.all(promises)
          .then(res => {

            this.source.splice(1)
            // let piedata=[
            //   {},
            //   {}
            // ]
            let allsr = 0, allzc = 0;
            res.forEach((element, index) => {
              let data = [this.villages[index], 0, 0]
              let sr = 0, zc = 0;
              element.forEach(member => {
                sr += parseInt(member.input)
                zc += parseInt(member.output)
              });

              this.source.push([this.villages[index], sr / 10000, zc / 10000])
              allsr += (sr / 10000)
              allzc += (zc / 10000)
            });
            this.$set(this.pie02data, "data", [{ value: allsr.toFixed(2), name: "收入" }, { value: allzc.toFixed(2), name: "支出" }]);

            this.reloadbar = (new Date()).getTime();
            this.reloadpie = (new Date()).getTime();
            this.loading = false;

          })
      })
    }
  },
}
</script>

<style>
</style>