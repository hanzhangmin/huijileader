<template>
  <div class="cb"
       :style="{'border-left':'4px solid'+' '+ borderColor[colorIndex]}">
    <div class="cordbody">
      <slot name="title"></slot>
    </div>
    <div>
      <slot name="main"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "card",
  data () {
    return {
      borderColor: [
        "#7f2ac9", "#026341", "#01a068", "#92fcd7", "#009efc", "#2f9649", "#7f2ac9", "#0242e3", "#d8bbf5",
        "#ffe43e", "#ff96bc"
      ]
    }
  },
  computed: {
    colorIndex () {
      return Math.floor(Math.random() * 10);
    }
  },
}
</script>
<style lang="less" scoped>
.cb {
  box-sizing: border-box;
  background-color: white;
  padding: 16px 11px;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 4px;
  .boxshadow();
  .title {
    font-size: @fontsize15;
    color: @gray0;
    margin-bottom: 5px;
  }
  .main {
    font-size: @fontsize12;
  }
}
</style>