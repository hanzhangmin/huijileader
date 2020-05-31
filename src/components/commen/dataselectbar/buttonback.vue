<template>
  <button class="buttons"
          @click.stop="goback">返回</button>
</template>
<script>
export default {
  name: "buttonback",
  methods: {
    goback () {
      this.$router.back()
    }
  },
}
</script>
<style lang="less" scoped>
@import "assets/css/select.less";
</style>
