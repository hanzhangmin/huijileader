<template>
  <div>
    <BaseCard2>
      <div slot="header">
        <villageSearch @villageSearch="Search" />
      </div>
      <div slot="body">
        <div style="height:400px;"
             v-loading="loading">
          <line02 :key="reload"
                  :ChartData="ChartData"></line02>
        </div>

      </div>
    </BaseCard2>
    <Fundstown />
    <Fundsarea v-if="$store.state.level===0" />
  </div>
</template>
<script>
import { get_funds } from 'network/request'
import BaseCard from "components/commen1/BaseCard"
import BaseCard2 from "components/commen1/BaseCard2"
import villageSearch from 'components/content1/VillageSearch'
import line02 from 'views/echartsExamples/line_02'
import Fundstown from './Fundstown'
import Fundsarea from './Fundsarea'
export default {
  name: "Funds",
  components: {
    BaseCard2,
    BaseCard,
    villageSearch,
    line02,
    Fundstown,
    Fundsarea
  },
  data () {
    return {
      loading: true,
      villageid: "",
      reload: "",
      ChartData: {
      }
    }
  },
  created () {
  },
  methods: {
    Search (val) {
      this.villageid = val
      this.getChartData()
    },
    getChartData () {
      this.loading = true
      get_funds(
        {
          fields: "input,output,time",
          join: "village",
          sort: "time,ASC",
          s: {
            "village.id": {
              "$eq": Number(this.villageid)
            }
          }
        }
      )
        .then(res => {
          console.log(res);
          let xAxisData = [], sr = [], zc = []
          res.forEach(element => {
            xAxisData.push(element.time)
            sr.push(parseFloat(element.input).toFixed(2))
            zc.push(-parseFloat(element.output).toFixed(2))
          });
          this.$set(this.ChartData, "xAxisData", xAxisData)
          this.$set(this.ChartData, "sr", sr)
          this.$set(this.ChartData, "zc", zc)

          this.reload = (new Date()).getTime()
          this.loading = false
        })
        .catch(err => {
          this.$set(this.ChartData, "xAxisData", [])
          this.$set(this.ChartData, "sr", [])
          this.$set(this.ChartData, "zc", [])
        })
    }
  },
}
</script>

<style>
</style>