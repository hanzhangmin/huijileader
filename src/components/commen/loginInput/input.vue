<template>
  <div class="input_body">
    <div class="title"
         :id="inputtype.title">
      <label :for="inputtype.id">
        {{inputtype.placeholder}}
      </label>
    </div>
    <div class="input"
         @click="toup($event)">
      <input :type="inputtype.type"
             :id="inputtype.id"
             v-model="value"
             autocomplete="new-password">
      <!--   autocomplete="new-password"取消浏览器自动化填充问题 -->
    </div>
    <div class="clear">
      <span class="iconfont icon-qingchu"
            @click.stop="clear"></span>
      <!-- <svg class="icon svg-icon"
           @click.stop="clear"
           aria-hidden="true">
        <use xlink:href="#icon-drxx54"></use>
      </svg> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "loginInput",
  props: {
    inputtype: {
      type: Object
    }
  },
  data () {
    return {
      value: ""
    }
  },
  methods: {
    toup (event) {
      document.getElementById(this.inputtype.title).style.top = "-2rem"
    },
    clear () {
      console.log(this.value);
      this.value = ""
    }
  },
  watch: {
    value (val) {
      this.inputtype.value = val;
      this.$emit("changevalue", this.inputtype.id, this.inputtype.value)
    }
  },
}
</script>
<style lang="less" scoped>
.input_body {
  width: 100%;
  display: flex;
  height: auto;
  margin-bottom: 3rem;
  div {
    position: absolute;
    font-size: 1.4rem;
  }
  .title,
  .input {
    width: 100%;
    height: 3rem;
    input {
      height: 3rem;
      font-size: 1.4rem;
      border-bottom: 2px solid #cccccc;
      &:focus {
        border-bottom: 2px solid @mainColor !important;
      }
    }
  }
  .title {
    z-index: 100;
    top: 0px;
    background-color: #ffffff;
    transition: top 0.3s ease;
    -webkit-transition: top 0.3s ease;
    letter-spacing: 2px;
    label {
      width: 100%;
      display: inline-block;
    }
  }
  .clear {
    right: 0px;
    z-index: 100;
    height: 2rem;
    cursor: pointer;
    &:hover {
      color: @mainColor;
    }
  }
}
</style>