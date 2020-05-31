<template>
  <div class="Tabitem"
       @click="itemclick"
       :class="activeClass">
    <div class="liicon">
      <slot name="liicon"></slot>
    </div>
    <div class="liintro">
      <slot name="liintro"></slot>
    </div>
    <div class="lidetails">
      <slot name="lidetails"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "tabitem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "rgba(0,0,0,0.5)"
    }
  },
  computed: {
    isActive () {
      // console.log(this.$route.path)
      // return this.$route.path === this.path 可行，但是下面有更加稳妥的方法
      return !this.$route.path.indexOf(this.path)
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
  color: #dddddd;
  background-color: rgba(0, 0, 0, 0);
  transition: color 0.3s ease-out, background-color 0.3s ease-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    color: #ffffff;
  }
  .liintro {
    flex: auto;
    font-size: 1.5rem;
    letter-spacing: 2px;
    white-space: nowrap;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 1rem 0px;
    padding-left: 2rem;
  }
  .lidetails {
    width: 3rem;
    line-height: 3.5rem;
    text-align: center;
  }
  .liicon {
    width: 4rem;
    display: table-cell;
    text-align: center;
    line-height: 3.5rem;
    span {
      display: inline-block;
    }
  }
}
.active {
  background-color: rgba(0, 0, 0, 0.2);
  color: #ffffff;
}
</style>