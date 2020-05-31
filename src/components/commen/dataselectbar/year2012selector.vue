<template>
  <select class="select"
          v-model="theyear">
    <option v-for="(year,index) in years"
            :key="index"
            :value="year">
      {{year}}年
    </option>
  </select>
</template>
<script>
export default {
  name: "year2012selector",
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
  watch: {
    theyear (val) {
      this.theyear = val;
      this.$emit("search", this.theyear)
    }
  },
}
</script>
<style lang="less" scoped>
.select {
  background-color: #efefef;
  outline: @mainColor;
  height: auto;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin: 0px 1rem;
  // border: 1px solid @mainColor;
}
</style>