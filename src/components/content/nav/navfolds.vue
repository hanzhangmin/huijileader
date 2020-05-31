<template>
  <div>
    <input type="radio"
           name="active"
           id="fankui">
    <navfold for="fankui"
             :num="0">
      <span slot="nav_header_l"></span>
      <span slot="nav_header_m">反馈</span>
      <span slot="nav_header_r"></span>
    </navfold>
    <input type="radio"
           name="active"
           id="zijin">
    <navfold for="zijin"
             :num="0">
      <span slot="nav_header_l"></span>
      <span slot="nav_header_m">资金</span>
      <span slot="nav_header_r"></span>
    </navfold>
    <input type="radio"
           name="active"
           id="cunwu">
    <navfold for="cunwu"
             :num="6">
      <span slot="nav_header_l"></span>
      <span slot="nav_header_m">村务</span>
      <span slot="nav_header_r"></span>
      <div slot="nav_box">
        <tabitem1 path="/indexqu/qqfkindex">
          <span slot="liintro">村庄简介</span>
        </tabitem1>
        <tabitem1 path="/indexqu/qqzjindex">
          <span slot="liintro">村干部</span>
        </tabitem1>
        <tabitem1 path="/indexqu/qqzjindex">
          <span slot="liintro">村活动</span>
        </tabitem1>
        <tabitem1 path="/indexqu/qqzjindex">
          <span slot="liintro">村会议</span>
        </tabitem1>
        <tabitem1 path="/indexqu/qqdwindex">
          <span slot="liintro">户口迁入</span>
        </tabitem1>
        <tabitem1 path="/indexqu/qqdwindex">
          <span slot="liintro">户口迁出</span>
        </tabitem1>
      </div>
    </navfold>
    <input type="radio"
           name="active"
           id="dy">
    <navfold for="dy"
             :num="5">
      <span slot="nav_header_l"></span>
      <span slot="nav_header_m">党员发展</span>
      <span slot="nav_header_r"></span>
      <div slot="nav_box">
        <tabitem1 path="/indexqu/qqfkindex">
          <span slot="liintro">积极分子</span>
        </tabitem1>
        <tabitem1 path="/indexqu/qqzjindex">
          <span slot="liintro">发展对象</span>
        </tabitem1>
        <tabitem1 path="/indexqu/qqzjindex">
          <span slot="liintro">预备党员</span>
        </tabitem1>
        <tabitem1 path="/indexqu/qqzjindex">
          <span slot="liintro">正式党员</span>
        </tabitem1>
        <tabitem1 path="/indexqu/qqdwindex">
          <span slot="liintro">党组织活动</span>
        </tabitem1>
      </div>
    </navfold>
    <input type="radio"
           name="active"
           id="buzhu">
    <navfold for="buzhu"
             :num="0">
      <span slot="nav_header_l"></span>
      <span slot="nav_header_m">补助对象</span>
      <span slot="nav_header_r"></span>
    </navfold>
    <input type="radio"
           name="active"
           id="sanzi">
    <navfold for="sanzi"
             :num="5">
      <span slot="nav_header_l"></span>
      <span slot="nav_header_m">村三资详情</span>
      <span slot="nav_header_r"></span>
      <div slot="nav_box">
        <tabitem1 path="/indexqu/qqfkindex">
          <span slot="liintro">资源</span>
        </tabitem1>
        <tabitem1 path="/indexqu/qqzjindex">
          <span slot="liintro">资产</span>
        </tabitem1>
        <tabitem1 path="/indexqu/qqzjindex">
          <span slot="liintro">资金</span>
        </tabitem1>
      </div>
    </navfold>
    <input type="radio"
           name="active"
           id="xiangmu">
    <navfold for="xiangmu"
             :num="0">
      <span slot="nav_header_l"></span>
      <span slot="nav_header_m">在建项目</span>
      <span slot="nav_header_r"></span>
    </navfold>
  </div>
</template>
<script>
import tabitem1 from "components/commen/tabbar/tabitem1"
import navfold from "./navfold"
export default {
  name: "navfolds",
  components: {
    navfold,
    tabitem1
  }
}
</script>
<style lang="less" scoped>
input {
  appearance: none;
  width: 0px;
  height: 0px;
  overflow: hidden;
}
input:checked + .nav_body {
  color: #ffffff;
}
</style>