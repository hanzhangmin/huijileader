<template>
  <div class="tablepage">
    <div class="tb-header">
      <div class="tb-left">
        <slot name="tabletitle"></slot>
      </div>
      <div class="tb-right">
      </div>
    </div>
    <div class="tp-table"
         style="overflow-x:auto">
      <table border="1"
             cellspacing="0"
             cellpadding="0">
        <tr>
          <th v-for="(head,index) in thead"
              :key="index">{{head}}</th>
        </tr>
        <tr v-for="(data,index) in tableData"
            :key="index">
          <td v-for="(value ,index2) in data.values"
              :key="index2">
            {{value}}
          </td>
          <td>
            <button @click.stop="godetail(data.id,data.name)">
              详情
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "easytable",
  props: {
    thead: Array,
    tableData: Array,
  },
  methods: {
    godetail (zjid, name) {
      this.$emit("getdetails", zjid, name)
    }
  },
}
</script>
<style lang="less" scoped>
@import "assets/css/table.less";
</style>