<template>
  <select v-model="theid">
    <option v-for="(v ,index) in villages"
            :key="index"
            :value="v.id">{{v.name}}</option>
  </select>
</template>
<script>
import { post_villages_zhen } from "network/request"
export default {
  name: "villageselector",
  data () {
    return {
      theid: 0,
      villages: []
    }
  },
  props: {
    zhenid: Number
  },
  created () {
    console.log(this.zhenid);
    post_villages_zhen(this.zhenid)
      .then(res => {
        console.log(res);
        this.villages = res.data.map(v => {
          return {
            id: v.villageId,
            name: v.vName
          }
        })
        this.villages.push({ id: 0, name: "全镇（街道）" })
      })

  },
}
</script>