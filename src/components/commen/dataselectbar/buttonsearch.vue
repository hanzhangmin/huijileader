<template>
  <button class="button">搜索</button>
</template>
<script>
export default {
  name: "buttonback",
}
</script>
<style lang="less" scoped>
.button {
  background-color: #efefef;
  color: @mainColor;
  -webkit-transition: background-color 0.5s ease-in, color 0.5s ease-in;
  -moz-transition: background-color 0.5s ease-in, color 0.5s ease-in;
  transition: background-color 0.5s ease-in, color 0.5s ease-in;
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  height: auto;
  &:hover {
    background-color: @mainColor;
    // background-color: @mainColor;
    color: #ffffff;
  }
}
</style>
