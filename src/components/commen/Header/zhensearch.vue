<template>
  <div class="searchbox">
    <div class="searchbody">
      <div class="search-l iconfont icon-jiantou"
           @click.stop="goindex">

      </div>
      <div class="search-m">
        {{zhenname}}
        <!-- <select v-model="thezhen">
          <option v-for="(zhen,index) in zhens"
                  :key="index"
                  :value="zhen.id">
            {{zhen.name}}
          </option>
        </select> -->
      </div>
      <div class="search-l iconfont icon-ziyuan"
           @click.stop="unfold($event)">
      </div>
    </div>
    <ul>
      <li v-for="(zhen,index) in zhens"
          :key="index"
          @click="changzhen(zhen.id,zhen.name)">
        {{zhen.name}}
      </li>
    </ul>
  </div>

</template>
<script>
import zhenselect from "components/commen/dataselectbar/zhenselector"
export default {
  name: "zhensearch",
  components: {
    zhenselect
  },
  data () {
    return {
      thezhen: 0,
      zhenname: ""
    }
  },
  computed: {
    zhens () {
      let kks = [];
      for (let index = 0, len = this.$store.state.zhensx.length; index < len; index++) {
        kks.push({
          id: this.$store.state.zhensx[index].zhenid,
          name: this.$store.state.zhensx[index].zhenName
        })
      }
      return kks
    }
  },
  watch: {
    thezhen (val) {
      this.$emit("transferzhen", this.thezhen)
    }
  },
  created () {
    this.thezhen = Number(this.$route.params.zhen_id)
    for (let index = 0, len = this.$store.state.zhensx.length; index < len; index++) {
      if (this.thezhen === this.$store.state.zhensx[index].zhenid) {
        this.zhenname = this.$store.state.zhensx[index].zhenName
      }
    }
    // console.log(this.$route.params.zhen_id);
  },
  methods: {
    unfold (event) {
      let thedom = event.currentTarget.parentNode.parentNode
      // let cdom = event.currentTarget
      let height = 3 * 8 + 4 + "rem"
      if (thedom.style.height === height) {
        thedom.style.height = "4rem"
        // cdom.style.color = "#cccccc"
      } else {
        thedom.style.height = height
        // cdom.style.color = "#ffffff"
      }
    },
    changzhen (id, name) {
      this.thezhen = id
      this.zhenname = name
    },
    goindex () {
      this.$router.push("/indexqu")
    }
  },
}
</script>
<style lang="less" scoped>
.searchbox {
  height: 4rem;
  // border-radius: 0px 0px 1rem 1rem;
  overflow: hidden;
  // background-color: rgba(0, 0, 0, 0.2);
  border-bottom: 2px solid rgba(255, 255, 255, 0.4);
  transition: height 0.3s ease-out;
  -moz-transition: height 0.3s ease-out;
  -webkit-transition: height 0.3s ease-out;
  -o-transition: height 0.3s ease-out;
}
ul {
  li {
    font-size: 1.6rem;
    cursor: pointer;
    color: #eeeeee;
    padding: 0.5rem 0rem 0.5rem 4rem;
    transition: background-color 0.5s ease-out;
    -moz-transition: background-color 0.5s ease-out;
    -webkit-transition: background-color 0.5s ease-out;
    -o-transition: background-color 0.5s ease-out;
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
}
.searchbody {
  display: flex;
  width: 100%;

  .search-l {
    width: 4rem;
    text-align: center;
    height: 4rem;
    line-height: 4rem;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.4);
    transition: color 0.3s ease-in;
    &:hover {
      color: #ffffff;
    }
    // display: table-cell;
    // vertical-align: middle;
    // // line-height: 100%;
  }
  .search-m {
    text-align: center;
    height: 4rem;
    line-height: 4rem;
    flex: auto;
    color: #ffffff;
    font-family: "华文行楷";
    font-size: 2rem;
  }
}
</style>