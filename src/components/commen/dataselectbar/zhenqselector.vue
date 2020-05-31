<template>
  <select v-model="thezhen">
    <option v-for="(zhen,index) in zhens"
            :key="index"
            :value="zhen.id">
      {{zhen.name}}
    </option>
  </select>
</template>
<script>
export default {
  name: "selectzhenq",
  data () {
    return {
      thezhen: 0,
    }
  },
  props: {
    zhenid: Number
  },
  // created () {

  // },
  mounted () {
    this.thezhen = this.zhenid
  },
  computed: {
    zhens () {
      let kks = [];
      for (let index = 0, len = this.$store.state.zhensx.length; index < len; index++) {
        kks.push({
          id: this.$store.state.zhensx[index].zhenid,
          name: this.$store.state.zhensx[index].zhenName
        })
      }
      kks.push({
        id: 0,
        name: "全区"
      })
      return kks
    }
  },
  watch: {
    thezhen (val) {
      // this.thezhen = Number(val)
      // console.log(this.thezhen);
      this.$emit("thezhenq", this.thezhen)
    }
  },
}
</script>
<style lang="less" scoped>
@import "assets/css/select.less";
</style>