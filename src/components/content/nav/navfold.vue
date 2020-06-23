<template>
  <div>
    <input type="radio"
           name="active"
           :id="theid"
           :value="theid"
           v-model="param">
    <div class="nav_body">
      <label :for="theid"
             @click.stop="unfold($event)"
             class="nav_header">
        <div class="nav_header_l">
          <slot name="nav_header_l"></slot>
        </div>
        <div class="nav_header_m">
          <slot name="nav_header_m"></slot>
        </div>
        <div class="nav_header_r">
          <slot name="nav_header_r"></slot>
        </div>
      </label>
      <div class="nav_box">
        <slot name="nav_box">
        </slot>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: "navfold",
  data () {
    return {
      param: Boolean
    }
  },
  props: {
    num: Number,
    theid: String,
    path: String
  },
  methods: {
    unfold (event) {
      try {
        if (this.num === 0) {
          this.$router.push(this.path)
        }
      } catch (e) {
        console.log(e);
      }
      let el = document.getElementById(theid)
      if (el.checked) {
        el.checked = false
      } else {
        el.checked = true
      }

      // if (this.num === 0) {
      // } else {
      //   let thedom = event.currentTarget.parentNode
      //   let cdom = event.currentTarget
      //   let height = this.num * 3 + 4 + "rem"
      //   thedom.style.height = height
      //   cdom.style.color = "#cccccc"
      // }
      // this.$refs.thefold.style.height = this.num * 3 + "rem"
    },
    gotheroute () {
      try {
        if (this.num === 0) {
          this.$router.push(this.path)
        }
      } catch (e) {
        console.log(e);
      }
    }
  },
  created () {
    if (this.$route.path.indexOf(this.theid) > 0) {
      this.param = this.theid
    }
  },
}
</script>
<style lang="less" scoped>
input {
  // appearance: none;
  width: 0px;
  height: 0px;
  background-color: #ffffff;
  overflow: hidden;
}
input:checked + .nav_body {
  color: #ffffff;
  max-height: 1000px;
}
input:checked + .nav_body .nav_header_r {
  animation: rotate 0.3s ease-in;
  transform: rotateZ(90deg);
}
@keyframes rotate {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
.nav_body {
  max-height: 4rem;
  color: rgba(0, 0, 0, 0.4);
  transition: max-height 0.5s linear, color 0.3s ease-out, height 0.5s ease-out;
  -webkit-transition: max-height 0.5s linear, color 0.3s ease-out,
    height 0.5s ease-out;
  -moz-transition: max-height 0.5s linear, color 0.3s ease-out,
    height 0.5s ease-out;
  // animation: changeheight 0.3s ease-out;
  overflow: hidden;
  &:hover {
    color: #ffffff;
  }
  .nav_header {
    height: 4rem;
    line-height: 4rem;
    display: flex;
    cursor: pointer;
    letter-spacing: 4px;
    font-size: 1.6rem;
    font-weight: bold;
    transition: background-color 0.5 ease-in;
    -webkit-transition: background-color 0.5 ease-in;
    -moz-transition: background-color 0.5 ease-in;
    .nav_header_l {
      width: 5rem;
      text-align: center;
    }
    .nav_header_r {
      width: 4rem;
      text-align: center;
      animation: rotate1 0.3s ease-in;
      transform: rotateZ(0deg);
    }
    .nav_header_m {
      flex: auto;
    }
  }
  .nav_box {
    background-color: #ffffff;
    // margin: 10px 2rem;
    // padding: 0.5rem 0px;
    border-radius: 1rem;
    div {
      padding: 0.5rem 0px;
    }
  }
}
.activeclass {
  color: #ffffff;
}
@keyframes rotate1 {
  0% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
}
</style>