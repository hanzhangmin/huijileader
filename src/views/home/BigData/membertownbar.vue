<template>
  <BaseCard2>
    <div slot="header">
      <TownSearch @villageSearch="TownSearch" />
    </div>
    <div slot="body">
      <div style="height:400px;"
           v-loading="loading">
        <bar01 :chartdata="chartdatabar"
               :key="reloadbar" />
      </div>
    </div>
  </BaseCard2>
</template>
<script>
import { get_party_members, get_villages } from 'network/request'
// import BaseCard from "components/commen1/BaseCard"
import BaseCard2 from "components/commen1/BaseCard2"
// import villageSearch from 'components/content1/VillageSearch'
import TownSearch from 'components/content1/TownSearch'
import bar01 from 'views/echartsExamples/bar_01'
// import pie01 from 'views/echartsExamples/pie_01'
import membervillage from './membervillage'
export default {
  name: "membertownbar",
  components: {
    BaseCard2,
    // BaseCard,
    // villageSearch,
    bar01,
    TownSearch,
    // pie01,
    membervillage
  },
  data () {
    return {
      loading: true,
      townid: "",
      chartdatabar: {
        name: "党员发展柱状图",
        xAxisdata: ["积极分子", "发展对象", "预备党员", "正式党员"],
        seriesname: "人",
      },
      reloadbar: "11",
    }
  },
  methods: {
    TownSearch (val) {
      this.townid = val
      this.getChartDatabyTownid()
    },
    getChartDatabyTownid () {
      this.loading = true;
      get_villages({
        join: "town",
        fields: "id",
        s: {
          "town.id": {
            "$eq": Number(this.townid)
          }
        }
      }).then(res => {
        let promises = res.map(village => {
          return get_party_members(
            {
              fields: "status",
              join: "village",
              s: {
                "village.id": {
                  "$eq": Number(village.id)
                }
              }
            }
          )
        })
        Promise.all(promises)
          .then(res => {
            let arr = [];
            res.forEach(element => {
              arr.push(...element)
            });
            // console.log(arr);
            let data = [0, 0, 0, 0]
            arr.forEach(element => {
              data[element.status - 2]++
            });
            this.$set(this.chartdatabar, "seriesdata", data)
            this.reloadbar = (new Date()).getTime()
            this.loading = false;
          })
      })
    }
  },
}
</script>

<style>
</style>