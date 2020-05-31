<template>
  <div class="ulandlis">
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
  name: "ulandlis"
}
</script>
<style lang="less" scoped>
.ulandlis {
  margin: 10px 10px;
  display: flex;
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
    text-align: center;
  }
  .liicon {
    width: 4rem;
    text-align: center;
  }
}
</style>