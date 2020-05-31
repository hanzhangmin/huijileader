<template>
  <div>
    <select v-model="theyear">
      <option v-for="(year,index) in years"
              :key="index"
              :value="year.value">
        {{year.text}}
      </option>
    </select>
    <select v-model="themouth">
      <option v-for="(mouth,index) in mouths"
              :key="index"
              :value="mouth.value">
        {{mouth.text}}
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
      theyear: "",
      themouth: "整年",
    }
  },
  props: {
    year: Number,
    mouth: Number
  },
  created () {
    this.theyear = this.year
    this.themouth = this.mouth
  },
  computed: {
    years () {
      let kks = [];
      for (let i = (new Date).getFullYear(); i > (new Date).getFullYear() - 2; i--) {
        kks.push({ text: (i + "年"), value: i })
      }
      kks.push({ text: "近年来", value: 0 })
      return kks
    },
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
  methods: {
    gosearch () {
      // console.log("search");
      this.$emit("search", this.theyear, this.themouth)
    }
  },
}
</script>
<style lang="less" scoped>
@import "assets/css/select.less";
</style>