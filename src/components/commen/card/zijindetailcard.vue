<template>
  <div class="body">
    <div class="hiden iconfont icon-ziyuanxhdpi"
         @click="zjcardhide">
    </div>
    <div class="container">
      <h3>{{zjname}}</h3>
      <div class="jieyu">
        <span v-if="jieyu>0">月结余：{{jieyu}}元</span>
        <span v-else
              style="color:#cf2d28">月结余：{{jieyu}}元</span>
      </div>
      <table cellpadding="0"
             border="0"
             cellspacing="5px">
        <div v-for="(item,index) in shouzhi"
             :key="index">
          <tr>
            <td v-if="item.money>0"
                style="background-color:darkgreen">
              <span>{{item.time}}</span><br>
              <span>￥{{item.money}}元</span><br>
            </td>
            <td v-else
                style="background-color:#CF2D28">
              <span>{{item.time}}</span><br>
              <span>￥{{item.money}}元</span><br>
            </td>
            <td>{{item.reason}}</td>
          </tr>
        </div>
      </table>
    </div>
  </div>
</template>
<script>
import {
  get_zijinintro_byid
} from 'network/request'
export default {
  name: "zjdcard",
  props: {
    shouzhi: Array,
    jieyu: String,
    zjname: String
  },
  methods: {
    zjcardhide () {
      this.$emit("zjcardhide")
    }
  },
}
</script>
<style lang="less" scoped>
.body {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.2);

  z-index: 1000;
}
.hiden {
  position: absolute;
  width: 3rem;
  height: 3rem;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.6);
  padding-left: 1rem;
  font-size: 2rem;
  right: 12px;
  border-bottom-left-radius: 100%;
  cursor: pointer;
}
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex: auto;
  background-color: #ffffff;
  max-height: 80vh;
  overflow-y: auto;
  font-size: 1.4rem;
  padding: 1rem;
}
h4 {
  margin: 4px;
  padding: 0px 10px;
}
.jieyu {
  text-align: right;
  color: darkgreen;
  padding: 0px 10px;
}
table {
  vertical-align: middle;
  width: 100%;
  padding: 0px 10px;
}
table td {
  padding: 4px;
  display: table-cell;
  vertical-align: middle;
}
table td:first-child {
  width: 16rem;
  text-align: center;
  color: white;
}
table div {
  background: white;
  // border-radius: 10px;
  margin: 0.5rem 0px;
  border: 1px solid #efefef;
}
</style>