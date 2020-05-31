<template>
  <div>
    <p>404 NOT FIND</p>
    <p><button @click.stop="goback">返回</button></p>
  </div>
</template>
<script>
export default {
  name: "page404",
  methods: {
    goback () {
      this.$router.back()
    }
  },
}
</script>
<style lang="less" scoped>
body {
  background-color: #efefef;
}
div {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: @mainColor;
  font-size: 6rem;
  p {
    text-align: center;
    button {
      background-color: #efefef;
      color: @mainColor;
      cursor: pointer;
      padding: 0.5rem 2rem;
      font-size: 2rem;
      height: auto;
      border-radius: 0.5rem;
      -webkit-transition: background-color 0.5s ease-in, color 0.5s ease-in;
      -moz-transition: background-color 0.5s ease-in, color 0.5s ease-in;
      transition: background-color 0.5s ease-in, color 0.5s ease-in;

      &:hover {
        background-color: @mainColor;
        // background-color: @mainColor;
        color: #ffffff;
      }
    }
  }
}
</style>