<template>
  <BaseCard2>
    <div slot="header">
      <villageSearch @villageSearch="Search" />
    </div>
    <div slot="body">
      <bar01 :chartdata="chartdatabar"
             :key="reloadbar" />
    </div>
  </BaseCard2>
</template>
<script>
import { get_party_members, get_villages } from 'network/request'
// import BaseCard from "components/commen1/BaseCard"
import BaseCard2 from "components/commen1/BaseCard2"
import villageSearch from 'components/content1/VillageSearch'
// import TownSearch from 'components/content1/TownSearch'
import bar01 from 'views/echartsExamples/bar_01'
// import pie01 from 'views/echartsExamples/pie_01'
export default {
  name: "membervillage",
  components: {
    BaseCard2,
    // BaseCard,
    villageSearch,
    bar01,
    // TownSearch,
    // pie01
  },
  data () {
    return {
      villageid: "",
      reloadbar: "",
      chartdatabar: {
        name: "党员发展柱状图",
        xAxisdata: ["积极分子", "发展对象", "预备党员", "正式党员"],
        seriesname: "人",
      },
    }
  },
  methods: {
    Search (val) {
      this.villageid = val
      this.getChartData()
    },
    getChartData () {
      get_party_members(
        {
          fields: "status",
          join: "village",
          s: {
            "village.id": {
              "$eq": Number(this.villageid)
            }
          }
        }
      )
        .then(res => {
          let data = [0, 0, 0, 0]
          res.forEach(element => {
            data[element.status - 2]++
          });
          this.$set(this.chartdatabar, "seriesdata", data)
          this.reloadbar = (new Date()).getTime()
        })
        .catch(err => {
          console.log(err);
          this.$set(this.chartdatabar, "seriesdata", [0, 0, 0, 0])
        })
    },
  },

}
</script>
