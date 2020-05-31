<template>
  <div>
    <select v-model="theyear">
      <option v-for="(year,index) in years"
              :key="index"
              :value="year.value">
        {{year.text}}
      </option>
    </select>
    <select v-model="thezhenid">
      <option v-for="(zhen,index) in zhens"
              :key="index"
              :value="zhen.id">
        {{zhen.name}}
      </option>
    </select>
    <button @click="gosearch">搜索</button>
  </div>
</template>
<script>
export default {
  name: "timeselect",
  data () {
    return {
      theyear: 0,
      thezhenid: 0
    }
  },
  props: {
    years: Array,
    zhens: Array
  },
  created () {
    this.theyear = (new Date()).getFullYear()
  },
  methods: {
    gosearch () {
      // console.log("search");
      this.$emit("searchbyzhen", this.theyear, this.thezhenid)
    }
  },
}
</script>
<style lang="less" scoped>
@import "assets/css/select.less";
</style>