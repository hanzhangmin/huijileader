<template>
  <div class="Header">
    <div class="Header_title">
      <slot name="Header_title"></slot>
    </div>
    <div class="Header_right">
      <slot name="Header_right"></slot>
    </div>
    <div class="Header_left">
      <slot name="Header_left"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
}
</script>
<style lang="less" scoped>
@fitmobile: 320px, 360px, 375px, 384px, 400px, 414px, 424px, 450px, 480px, 540px,
  640px, 720px, 750px, 1024px;
@fitipad: 1280px, 1366px, 1440px, 1600px, 1680px, 1920px;
.Header {
  position: fixed;
  left: 0px;
  width: 100%;
  display: flex;
  z-index: 1;
  background-color: white;
  box-shadow: 0px 0px 8px 2px #cccccc;
  font-size: 1.4rem;
  div {
    text-align: center;
  }
  .Header_left,
  .Header_right {
    text-align: center;
    position: relative;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.5);
    background-color:rgba(0, 0, 0, 0);
    transition: color 0.3s ease-out,background-color 0.3s ease-out;
    &:hover {
      color:  #ffffff;
      // background-color: fade( @mainColor,0.4);
      background-color: @mainColor;
    }
  }
  .Header_title {
    flex: auto;
    padding-left: 400px;
  //   div{
  //  display: flex;
  //   }

  }
  each(@fitmobile,{
    @media screen and (min-width: @value){
      .Header_left,.Header_right{
        width: 6rem;
        height: 49px;
        line-height: 49px;
      }
      .Header_title{
        letter-spacing: 2px;
      }
    }
  })
   each(@fitpc,{
    @media screen and (min-width: @value){
      .Header_left,.Header_right{
        width: 8rem;
        height: 4rem;
        line-height: 4rem;
      }
      .Header_title{
         height: 4rem;
        line-height: 4rem;
        letter-spacing: 2px;
      }
    }
  })
}
</style>