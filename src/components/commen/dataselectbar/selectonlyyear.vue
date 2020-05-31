<template>
  <div>
    <select v-model="theyear">
      <option v-for="(year,index) in years"
              :key="index"
              :value="year">
        {{year}}年
      </option>
    </select>
    <button @click="gosearch">搜索</button>
  </div>
</template>
<script>
export default {
  name: "selectonlyyear",
  data () {
    return {
      theyear: "",
    }
  },
  computed: {
    years () {
      let kks = [];
      for (let index = (new Date()).getFullYear(); index >= 2012; index--) {
        kks.push(index)
      }
      return kks
    }
  },
  created () {
    this.theyear = (new Date()).getFullYear()
  },
  methods: {
    gosearch () {
      this.$emit("search", this.theyear)
    }
  },
}
</script>
<style lang="less" scoped>
@import "assets/css/select.less";
</style>