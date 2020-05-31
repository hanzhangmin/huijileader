<template>
  <div class="platesbody"
       ref="details">
    <div class="plate-box">
      <table border="1"
             cellspacing="0"
             cellpadding="0">
        <tr>
          <th>村主任</th>
          <td>{{header}}</td>
          <th>村坐标</th>
          <td colspan="6">{{place}}</td>
        </tr>
        <tr>
          <th>村简介</th>
          <td colspan="8">{{jianjie}}</td>
        </tr>

        <tr>
          <th>村规划</th>
          <td colspan="8">{{guihua}}</td>
        </tr>
        <tr>
          <th>相关图片</th>
          <td colspan="8">
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
import { isnull } from 'assets/js/myjs'
import { get_v_imgs, get_v_intro, get_v_guihua } from "network/request"
export default {
  name: "zhenvinfo",
  data () {
    return {
      jianjie: "",
      guihua: "",
      header: "",
      place: "",
      imgs: [],
    }
  },
  computed: {
    vid () {
      return this.$route.params.vid
    }
  },
  created () {
    let vid = this.$route.params.vid
    console.log(vid);
    get_v_imgs(vid)
      .then(res => {
        console.log(res);
        this.imgs = res.img.map((aimg) => {
          return this.$store.state.imgurl + aimg.replace(/[\\]\\/g, '/')
        })
      })
    get_v_intro(vid)
      .then(res => {
        console.log(res);
        this.jianjie = (res.villagesurvey === null ? "暂无" : res.villagesurvey.vsSurvey)
        this.header = (res.villagesurvey === null ? "暂无" : res.villagesurvey.vsVillagehead)
        this.place = (res.villagesurvey === null ? "暂无" : res.villagesurvey.vsPlace)
      })
    get_v_guihua(vid)
      .then(res => {
        this.guihua = (res.cunfanzhan === null ? "暂无" : res.cunfanzhan.cfzContent)
      })
  },
  watch: {
    vid (vid) {
      get_v_imgs(vid)
        .then(res => {
          console.log(res);
          this.imgs = res.img.map((aimg) => {
            return this.$store.state.imgurl + aimg.replace(/[\\]\\/g, '/')
          })
        })
      get_v_intro(vid)
        .then(res => {
          this.jianjie = (res.villagesurvey.vsSurvey === null ? "暂无" : res.villagesurvey.vsSurvey)
          this.header = (res.villagesurvey.vsVillagehead === null ? "暂无" : res.villagesurvey.vsVillagehead)
          this.place = (res.villagesurvey.vsPlace === null ? "暂无" : res.villagesurvey.vsPlace)
        })
      get_v_guihua(vid)
        .then(res => {
          console.log(res);
          this.guihua = (res.cunfanzhan === null ? "暂无" : res.cunfanzhan.cfzContent)
        })
    }
  },
}
</script>
<style lang="less" scoped>
@import "assets/css/quindex.less";
@import "assets/css/tablecard.less";
</style>