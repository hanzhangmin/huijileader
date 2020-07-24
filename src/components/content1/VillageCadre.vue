<template>

  <BaseCard2>
    <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
    <div slot="header">
      <VillageSearch @villageSearch="villageSearch" />
    </div>
    <div slot="body">
      <!-- <div class="background">
          // footprint: "1500"
          // introduction: "纪公庙村聚力，四环
          // population: 5200
      </div> -->
      <div class="villagecontent">
        <p>
          <b class="cardspan">占地面积：{{itemdata.footprint}}平方千米</b>
          <b class="cardspan"> 现有人口：{{itemdata.population}}人</b>
        </p>
        村简介
        <span>
          {{itemdata.introduction}}
        </span>
      </div>
      <div class="demo-image__lazy">
        <el-image v-for="(file,index) in itemdata.image"
                  :key="index+'file'"
                  :src="file.url"
                  lazy></el-image>
      </div>
    </div>
  </BaseCard2>

</template>
<script>
import { get_village_intro } from 'network/request'
import { formatDate, isnull } from 'assets/js/myjs'
import BaseCard2 from "components/commen1/BaseCard2"
import VillageSearch from "./VillageSearch"
export default {
  name: "VillageCadre",
  components: {
    BaseCard2,
    VillageSearch
  },
  data () {
    return {
      itemdata: {},
      villageid: ""
    }
  },
  created () {
    // this.showcard = true
  },
  methods: {
    get_itemdata (villageid) {
      get_village_intro(villageid)
        .then(res => {
          console.log(res);
          for (const [k, v] of Object.entries(res)) {
            this.$set(this.itemdata, k, isnull(v))
          }

        })
    },
    villageSearch (villageid) {
      console.log(villageid);
      this.villageid = villageid
      this.get_itemdata(Number(this.villageid))
    },
  },
}
</script>

<style>
</style>