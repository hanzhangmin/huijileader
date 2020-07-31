<template>
  <BaseCard2>
    <div slot="header">
      <TownSearch @villageSearch="TownSearch" />
    </div>
    <div slot="body">
      <div style="height:400px;">
        <pie01 :key="reloadpie01"
               :pie01data="pie01data" />
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
// import bar01 from 'views/echartsExamples/bar_01'
import pie01 from 'views/echartsExamples/pie_01'
import membervillage from './membervillage'
export default {
  name: "membertownpie",
  components: {
    BaseCard2,
    TownSearch,
    pie01,
    membervillage
  },
  data () {
    return {
      townid: "",
      pie01data: {
        name: "党员发展类型占比图",
        name2: "人次",
      },
      reloadpie01: "pie01"
    }
  },
  methods: {
    TownSearch (val) {
      this.townid = val
      this.getChartDatabyTownidpie()
    },
    getChartDatabyTownidpie () {
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
            let data = [
              { value: 0, name: "积极分子" },
              { value: 0, name: "发展对象" },
              { value: 0, name: "预备党员" },
              { value: 0, name: "正式党员" },
            ]
            arr.forEach(element => {
              data[element.status - 2].value++
            });
            this.$set(this.pie01data, "data", data)
            this.reloadpie01 = (new Date()).getTime()
            console.log(this.pie01data);
          })
      })
    },
  },
}
</script>

<style>
</style>