<template>
  <div class="searchbody">
    <div class="title">
      <!-- <span> 镇：</span> -->
      <select v-model="theid">
        <option v-for="(v ,index) in villages"
                :key="index"
                :value="v.id">{{v.name}}</option>
      </select>
    </div>
    <!-- <div class="icon">
    </div> -->
  </div>
</template>
<script>
import { post_villages_zhen } from "network/request"
export default {
  name: "villagesearch",
  data () {
    return {
      theid: 0,
      villages: [],
    }
  },
  props: {
    zhenid: Number
  },
  watch: {
    theid (val) {
      this.$emit("transfervid", this.theid)
    }
  },
  created () {
    // this.zhenid = this.$route.params.vid
    // console.log(this.zhenid);
    post_villages_zhen(this.zhenid)
      .then(res => {
        // console.log(res);
        this.theid = res.data[0].villageId
        this.villages = res.data.map(v => {
          return {
            id: v.villageId,
            name: v.vName
          }
        })
      })

  },
}
</script>
<style lang="less" scoped>
.searchbody {
  display: flex;
  width: 20rem;
  vertical-align: middle;
  .title {
    select {
      background-color: #efefef;
      margin: 0;
      height: 100%;
      border-radius: 0.5rem;
      width: 16rem;
      padding-left: 0.5rem;
      max-height: 3rem;
    }
  }
  .icon {
    margin: 0.5rem 0px;
    width: 3rem;
    text-align: center;
    vertical-align: middle;
    background-color: @mainColor;
    color: #ffffff;
    border-radius: 0rem 0.5rem 0.5rem 0rem;
    cursor: pointer;
  }
}
</style>