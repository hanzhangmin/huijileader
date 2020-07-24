<template>
  <div class="mask"
       @click="hidenMask"
       v-show="showcard">
    <div class="centerbody">
      <slot name="centerbody"></slot>
    </div>
  </div>
</template>
<script>
// import BaseCord2 from './BaseCard2'
export default {
  name: "hzmMask",
  // data () {
  //   return {
  //     show: true
  //   }
  // },
  props: {
    showcard: Boolean
  },
  methods: {
    hidenMask () {
      this.showcard = false
    }
  },
  // components: {
  //   BaseCord2
  // }
}
</script>

<style lang="less" scoped>
// .mask {
//   position: absolute;
//   width: 100vw;
//   height: 100vh;
//   z-index: 2000;
//   background-color: rgba(0, 0, 0, 0.4);
// }
</style>