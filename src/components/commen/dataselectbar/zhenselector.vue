<template>
  <div>
    <select v-model="thezhen">
      <option v-for="(zhen,index) in zhens"
              :key="index"
              :value="zhen.id">
        {{zhen.name}}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: "selectzhen",
  data () {
    return {
      thezhen: 0,
    }
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
      return kks
    }
  },
  watch: {
    thezhen (val) {
      this.$emit("thezhen", this.thezhen)
    }
  },
}
</script>
<style lang="less" scoped>
@import "assets/css/select.less";
</style>