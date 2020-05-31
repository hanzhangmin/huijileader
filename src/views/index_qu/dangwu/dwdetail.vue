<template>
  <div class="platesbody">
    <div class="plate-header"
         style="text-align:left">
      <h2>
        <buttonback />组织活动详情
      </h2>
    </div>
    <div class="plate-box">
      <table border="1"
             cellspacing="0"
             cellpadding="0">
        <tr>
          <td>组织活动标题</td>
          <td colspan="3">{{huodong.dyzzhdName}}</td>
          <td>活动时间</td>
          <td>{{huodong.dyzzhdTime}}</td>
        </tr>
        <tr>
          <td>内容</td>
          <td colspan="5">{{huodong.dyzzhdContent}}</td>
        </tr>
        <tr>
          <td>相关图片</td>
          <td colspan="5">
            <span v-if="imgs.length==0">无</span>
            <viewer v-else
                    :images="imgs">
              <div class="imgbox"
                   v-for="(src,index) in imgs"
                   :key="index">
                <img :src="src"
                     :key="src">
              </div>
            </viewer>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import { get_dzuzhihd_detail_by_id } from "network/request"
import buttonback from "components/commen/dataselectbar/buttonback"
export default {
  name: "dwdetail",
  components: {
    buttonback
  },
  data () {
    return {
      huodong: Object,
      imgs: []
    }
  },
  created () {
    get_dzuzhihd_detail_by_id(this.$route.params.id)
      .then(res => {
        console.log(res);
        for (const [k, v] of Object.entries(res.huodong)) {
          this.$set(this.huodong, k, v === null || "" ? "未知" : v)
        }
        if (this.huodong.dyzzhdZhenshilujing != "未知") {
          let photos = this.huodong.dyzzhdZhenshilujing.split(",")
          this.imgs = photos.map(p => {
            return `${this.$store.state.zzhdpurl}${p}`
          });
        }
      })
  },
}
</script>
<style lang="less" scoped>
@import "assets/css/quindex.less";
@import "assets/css/tablecard.less";
</style>