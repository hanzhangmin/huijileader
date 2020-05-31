<template>
  <select v-model="themouth">
    <option v-for="(mouth,index) in mouths"
            :key="index"
            :value="mouth.value">
      {{mouth.text}}
    </option>
  </select>
</template>
<script>
export default {
  name: "mouthselector",
  data () {
    return {
      themouth: 0
    }
  },
  computed: {
    mouths () {
      let kks = [];
      for (let index = 0; index <= 12; index++) {
        if (index === 0) {
          kks.push({ text: "整年", value: index })
        } else {
          kks.push({ text: (index + "月"), value: index })
        }
      }
      return kks
    }
  },
  created () {
    this.themouth = (new Date()).getMonth() + 1
  },
  watch: {
    themouth (val) {
      this.$emit("mouthc", val)
    }
  },
}
</script>
<style lang="less" scoped>
@import "assets/css/select.less";
</style>
