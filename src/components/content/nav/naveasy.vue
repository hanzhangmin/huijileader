<template>
  <div>
    <tabitem path="/indexqu/qqfkindex"
             :activeColor="activeColor">
      <span slot="liicon"
            class="iconfont icon-drxx54">
      </span>
      <span slot="liintro">群众意见建议</span>
      <span slot="lidetails"
            class=" iconfont icon-jiantou2"></span>
    </tabitem>
    <tabitem path="/indexqu/qqdwindex">
      <span slot="liicon"
            class="iconfont icon-minzhengxinxi-kunnandangyuan"></span>
      <span slot="liintro">党务</span>
      <span slot="lidetails"
            class=" iconfont icon-jiantou2"></span>
    </tabitem>
    <tabitem path="/indexqu/qqzjindex">
      <span slot="liicon"
            class="iconfont icon-zijin1"></span>
      <span slot="liintro">资金统计表</span>
      <span slot="lidetails"
            class=" iconfont icon-jiantou2"></span>
    </tabitem>

  </div>
</template>
<script>
import tabitem from "components/commen/tabbar/tabitem"
export default {
  name: "naveasy",
  components: {
    tabitem
  },
  data () {
    return {
      activeColor: "#ffffff"
    }
  },
}
</script>
<style lang="stylus" scoped></style>