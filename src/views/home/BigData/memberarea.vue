<template>
  <BaseCard2>
    <div slot="header">
      全区党员发展柱状图
    </div>
    <div slot="body">
      <!-- <bar01 :chartdata="chartdatabar"
             :key="reloadbar" /> -->
    </div>
  </BaseCard2>
</template>
<script>
import { get_partymembers_bytown } from 'network/request'
import BaseCard2 from "components/commen1/BaseCard2"
// import villageSearch from 'components/content1/VillageSearch'
import bar01 from 'views/echartsExamples/bar_01'
export default {
  name: "",
  components: {
    BaseCard2,
    bar01
  },
  created () {
    get_partymembers_bytown()
      .then(res => {
        console.log(res);
      })
  },
}
</script>

<style>
</style>