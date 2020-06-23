<template>
  <div :class="'Tabitem '+activeClass"
       @click="itemclick">
    <div class="liintro">
      <slot name="liintro"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "tabitem1",
  props: {
    path: String,
    path1: {
      type: String,
      default: "huiji"
    }
  },
  computed: {
    isActive () {
      // console.log(this.$route.path)
      // return this.$route.path === this.path 可行，但是下面有更加稳妥的方法
      return (this.$route.path.indexOf(this.path) !== -1 || this.$route.path.indexOf(this.path1) !== -1)
      // indexOf(item ,num) item 要找的字符串 num 检索开始位置下标 存在则返回第一次存在的下标，不存在返回 -1 
    },
    activeClass () {
      // console.log(this.activeColor)
      return this.isActive ? "active" : "";
    },
  },
  methods: {
    itemclick () {
      try {
        this.$router.push(this.path)
      } catch (e) {
        console.log(e);
      }
    }
  },
}
</script>
<style lang="less" scoped>
.Tabitem {
  display: flex;
  cursor: pointer;
  margin: 0px 1rem;
  border-radius: 0.5rem;
  height: 3rem;
  line-height: 3rem;
  color: #888888;
  background-color: rgba(0, 0, 0, 0);
  transition: background-color 0.3s ease-out;
  -webkit-transition: background-color 0.3s ease-out;
  -moz-transition: background-color 0.3s ease-out;
  &:hover {
    background-color: fade(@mainColor, 20%);
    color: @mainColor;
  }
  .liintro {
    flex: auto;
    font-size: 1.4rem;
    letter-spacing: 2px;
    padding-left: 2rem;
  }
}
.active {
  background-color: fade(@mainColor, 20%) !important;
  color: @mainColor !important;
}
</style>