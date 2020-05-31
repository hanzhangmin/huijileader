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
  background-color: white;
  padding: 2rem 10px 1.5rem 1rem;
  margin: 5px;
  flex: auto;
}
 each(@fitmobile,{
      @media screen and (min-width: @value){
      .cb {
          width:100%;
        }
      }
    })
    each(@fitipad,{
      @media screen and (min-width: @value){
        .cb {
          max-width: 48%;
          width:50%;
        }
      }
    })
    each(@fitpc,{
      @media screen and (min-width: @value){
       .cb {
          margin: 5px;
          width:23%;
        }
      }
    })
</style>