<template>
  <select v-model="thezhangtai">
    <option value="2">全部</option>
    <option value="1">已解决</option>
    <option value="0">未解决</option>
  </select>
</template>
<script>
export default {
  name: "zhuangtais",
  data () {
    return {
      thezhangtai: "0"
    }
  },
  props: {
    zhuangtai: Number
  },
  created () {
    this.thezhangtai = this.zhuangtai
  },
  watch: {
    thezhangtai (val) {
      this.$emit("ztchange", val)
    }
  },
}
</script>
<style lang="less" scoped>
@import "assets/css/select.less";
</style>