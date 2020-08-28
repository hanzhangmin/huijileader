<template>
  <BaseCard2>
    <div slot="header">
      <TownSearch @villageSearch="TownSearch" />
    </div>
    <div slot="body">
      <div style="height:400px;"
           v-loading="loading">
        <bar01 :name="name"
               :source="source"
               :key="reloadbar" />
      </div>
    </div>
  </BaseCard2>
</template>
<script>
import { get_party_members, get_villages } from 'network/request'
import BaseCard2 from "components/commen1/BaseCard2"
import TownSearch from 'components/content1/TownSearch'
import bar01 from 'views/echartsExamples/bar_05'
import membervillage from './membervillage'
export default {
  name: "membertowntype",
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
      source: [
        ['product', '积极分子', '发展对象', '预备党员', '正式党员'],
      ],
      name: "该镇各村党员发展柱状图",
      villages: [],
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
          return get_party_members(
            {
              fields: "status",
              join: "village,status",
              s: {
                "village.id": {
                  "$eq": Number(village.id)
                },
              }
            }
          )
        })
        Promise.all(promises)
          .then(res => {
            console.log(res);
            this.source.splice(1)
            res.forEach((element, index) => {
              console.log(index);
              let data = [this.villages[index], 0, 0, 0, 0]
              element.forEach(member => {
                data[member.status - 1]++
              });
              this.source.push(data)
            });
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