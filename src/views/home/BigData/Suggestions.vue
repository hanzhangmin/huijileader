<template>
  <div>
    <BaseCard2>
      <div slot="header">
        <villageSearch @searchFeedback="Search" />
      </div>
      <div slot="body">
        <div class="flexbox">
          <!-- <div class="flexsize1">
          <pie01 :key="reloadpietype"
                 :pie01data="piedatatype" />
        </div> -->
          <div class="flexsize1">
            <div style="height:400px;"
                 v-loading="loading">
              <pie02 :key="reloadpiepro"
                     :pie02data="piedatapro" />
            </div>
          </div>
          <div class="flexsize1">
            <div style="height:400px;"
                 v-loading="loading">
              <bar01 :chartdata="chartdatabar"
                     :key="reloadbar" />
            </div>
          </div>
        </div>
      </div>
    </BaseCard2>
    <SuggestionArea v-if="$store.state.level===0" />
  </div>
</template>
<script>
import { get_feedbacks } from 'network/request'
import BaseCard from "components/commen1/BaseCard"
import BaseCard2 from "components/commen1/BaseCard2"
import villageSearch from 'components/content1/FeedbackSreach1'
import pie01 from 'views/echartsExamples/pie_01'
import pie02 from 'views/echartsExamples/pie_02'
import bar01 from 'views/echartsExamples/bar_01'
import SuggestionArea from './SuggestionsArea'
export default {
  name: "Suggestions",
  data () {
    return {
      loading: true,
      villageid: "",
      time: "",
      reloadpietype: "type",
      reloadpiepro: "pro",
      reloadbar: "bar",
      chartdatabar: {
        name: "反馈量类型柱状图",
        xAxisdata: ["资金", "资产", "资源", "党务", "村务", "其他"],
        seriesname: "反馈量",
      },
      // piedatatype: {
      //   name: "反馈量类型占比图",
      //   name2: "反馈量",
      // },
      piedatapro: {
        name: "反馈量处理情况占比图",
        name2: "反馈量",
      }
    }
  },
  components: {
    BaseCard,
    BaseCard2,
    villageSearch,
    pie01,
    pie02,
    bar01,
    SuggestionArea
  },
  created () {


  },
  methods: {
    Search (villageid, time) {
      this.villageid = villageid
      this.time = time
      this.getChartData()
    },
    getChartData () {
      this.loading = true
      get_feedbacks({
        fields: "type,processed",
        join: "village",
        s: {
          "village.id": {
            "$eq": Number(this.villageid)
          },
          "createdAt": {
            "$between": [new Date(this.time[0]).toISOString(), new Date(this.time[1]).toISOString()],
          }
        }
      })
        .then(res => {
          console.log(res);
          // let datatype = [
          //   { value: 0, name: "资金" },
          //   { value: 0, name: "资产" },
          //   { value: 0, name: "资源" },
          //   { value: 0, name: "党务" },
          //   { value: 0, name: "村务" },
          //   { value: 0, name: "其他" },
          // ]
          let datapro = [
            { value: 0, name: '已处理' },
            { value: 0, name: '未处理' },
          ],
            seriesdata = [0, 0, 0, 0, 0, 0]
          //let processedtrue = 0, processedfalse = 0, type0 = 0, type1 = 0, type2 = 0, type3 = 0, type4 = 0, type5 = 0
          res.forEach(element => {
            switch (element.processed) {
              case true:
                datapro[0].value++
                break;
              case false:
                datapro[1].value++
                break;
              default:
                break;
            }
            // datatype[element.type].value++
            seriesdata[element.type]++
            console.log(datapro);
            // console.log(datatype);
            // this.$set(this.piedatatype, "data", datatype)
            this.$set(this.piedatapro, "data", datapro)
            this.$set(this.chartdatabar, "seriesdata", seriesdata)
            // this.reloadpietype = (new Date()).getTime()
            this.reloadpiepro = (new Date()).getTime()
            this.reloadbar = (new Date()).getTime()
            this.loading = false
          });
        })
    }
  },
}
</script>

<style>
</style>