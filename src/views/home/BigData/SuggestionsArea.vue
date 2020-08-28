<template>
  <BaseCard2>
    <div slot="header">
      <TownSearch @villageSearch="TownSearch" />
    </div>
    <div slot="body">
      <div class="flexbox">
        <div class="flexsize2">
          <div style="height:400px;"
               v-loading="loading">
            <bar01 :name="name"
                   :name1="name1"
                   :source="source"
                   :key="reloadbar" />
          </div>
        </div>
        <div class="flexsize1">
          <div style="height:400px;"
               v-loading="loading">
            <pie01 :pie02data="pie02data"
                   :key="reloadpie" />
          </div>
        </div>
      </div>

    </div>

  </BaseCard2>
</template>
<script>
import { get_feedbacks_bytown } from 'network/request'
import BaseCard2 from "components/commen1/BaseCard2"
import TownSearch from 'components/content1/TimetwoSearch'
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
      loading: true,
      townid: "",
      time: "",
      source: [
        ['product', '已处理', '未处理'],
      ],
      name: "该镇各村资金收支柱状图",
      name1: "条",
      villages: [],
      reloadbar: "11",
      pie02data: {
        name: "全区该时间段内群众意见建议类型占比",
        name2: ["资金", "资产", "资源", "党务", "村务", "其他"],
        name3: "条数",
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
      this.time = year
      this.getChartDatabyTownid()
    },
    getChartDatabyTownid () {
      this.loading = true;
      get_feedbacks_bytown({
        join: "village,village.feedback",
        s: {
          "createdAt": {
            "$between": [new Date(this.time[0]).toISOString(), new Date(this.time[1]).toISOString()],
          }
        }
      })
        .then(res => {
          console.log(res);
          this.source.splice(1);
          let piedata = [
            { value: 0, name: "资金" },
            { value: 0, name: "资产" },
            { value: 0, name: "资源" },
            { value: 0, name: "党务" },
            { value: 0, name: "村务" },
            { value: 0, name: "其他" },
          ]
          res.forEach(town => {
            let data = [town.name, 0, 0]
            town.village.forEach(village => {
              for (let index = 0, len = village.feedback.length; index < len; index++) {
                if (village.feedback[index].processed) {
                  data[1]++
                } else {
                  data[2]++
                }
                piedata[village.feedback[index].type].value++
              }
              console.log(village.feedback);

            });
            this.source.push(data);
          });
          this.$set(this.pie02data, "data", piedata);
          this.reloadbar = (new Date()).getTime();
          this.reloadpie = (new Date()).getTime();
          this.loading = false;
        })
    }
  },
}
</script>

<style>
</style>