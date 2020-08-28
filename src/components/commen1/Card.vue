<template>
  <!-- :style="{'border-left':'4px solid'+' '+ borderColor[colorIndex]}"> -->
  <div class="cb"
       style="border-left:4px solid rgb(46,85,199)">
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
        "cornflowerblue",
        "rgb(46,85,199)",
        "#92fcd7",
        "#7f2ac9",
        "#0242e3",
      ]
    }
  },
  computed: {
    colorIndex () {
      return Math.floor(Math.random() * 5);
    }
  },
}
</script>
<style lang="less" scoped>
.cb {
  box-sizing: border-box;
  background-color: white;
  padding: 20px 11px;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 4px;
  .boxshadow();
  .title {
    font-size: @fontsize20;
    color: @gray0;
    margin-bottom: 5px;
  }
  .main {
    font-size: @fontsize16;
  }
  &:hover {
    transform: translateY(-4px);
  }
}
</style>