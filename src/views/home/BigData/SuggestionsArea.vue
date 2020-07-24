<template>
  <BaseCard2>
    <div slot="header">
      全区群众意见建议柱状图
    </div>
    <div slot="body">
      <bar01 :chartdata="chartdatabar"
             :key="reloadbar" />
    </div>
  </BaseCard2>
</template>
<script>
import { get_feedbacks_bytown } from 'network/request'
import BaseCard2 from "components/commen1/BaseCard2"
// import villageSearch from 'components/content1/VillageSearch'
import bar01 from 'views/echartsExamples/bar_01'
export default {
  name: "SuggestionArea",
  components: {
    BaseCard2,
    bar01
  },
  data () {
    return {
      chartdatabar: {
        name: "群众意见建议柱状图",
        // xAxisdata: ["积极分子", "发展对象", "预备党员", "正式党员"],
        seriesname: "条",
      },
      reloadbar: ""
    }
  },
  created () {
    get_feedbacks_bytown()
      .then(res => {
        console.log(res);
        let xAxisdata = []
        let data = []
        res.forEach(element => {
          xAxisdata.push(element.name)
          let num = 0
          element.village.forEach(village => {
            num += village.feedback.length
          });
          data.push(num)
        });
        this.$set(this.chartdatabar, "seriesdata", data)
        this.$set(this.chartdatabar, "xAxisdata", xAxisdata)
        this.reloadbar = (new Date()).getTime()
      })
      .catch(err => {
        this.$set(this.chartdatabar, "seriesdata", [])
        this.$set(this.chartdatabar, "xAxisdata", [])
      })
  },
}
</script>

<style>
</style>