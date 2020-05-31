<template>
  <div class="platesbody">
    <div class="plate-header"
         style="text-align:left">
      <h2>
        <buttonback />党组织活动详情
        <!-- {{$route.params}} -->
      </h2>
    </div>
    <div class="plate-box">
      <table border="1"
             cellspacing="0"
             cellpadding="0">
        <tr>
          <td>活动标题</td>
          <!-- <td colspan="5">{{feedback.fTitle}}</td> -->
          <td colspan="5">{{title}}</td>
        </tr>
        <tr>
          <td>活动时间</td>
          <td>{{time}}</td>
          <td>活动地点</td>
          <td colspan="3">{{place}}</td>
          <!-- <td>活动类型</td>
          <td>{{type}}</td> -->
        </tr>
        <tr>
          <td>内容</td>
          <td colspan="5">{{content}}</td>
        </tr>
        <tr></tr>
        <tr>
          <td>相关图片</td>
          <td colspan="5">
            <span v-if="imgs.length==0">无</span>
            <viewer v-else
                    :images="imgs"
                    :options="options">
              <div class="imgbox"
                   v-for="(src,index) in imgs"
                   :key="index">
                <img :src="src"
                     :key="src" />
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
import { get_dzuzhihd_detail_by_id } from "network/request"
import buttonback from "components/commen/dataselectbar/buttonback"
export default {
  name: "zhendzad",
  components: {
    buttonback
  },
  data () {
    return {
      title: "",
      time: "",
      place: "",
      type: "",
      content: "",
      imgs: [],
      options: {
        "navbar": false,
        "title": false,
        "toolbar": false,
      },
      zhid: 0
    }
  },
  created () {
    this.zhid = this.$route.params.zhid
    get_dzuzhihd_detail_by_id(this.zhid)
      .then(res => {
        console.log(res);
        //         huodong:
        // dyzzhdContent: ""
        // dyzzhdId: 4
        // dyzzhdLeixing: 1
        // dyzzhdName: "刘砦村2019年01月份党课"
        // dyzzhdPhoto: null
        // dyzzhdPlace: "二楼会议室"
        // dyzzhdTime: "2019-01-17 "
        // dyzzhdVillageid: 2
        // dyzzhdXvhao: "20190502004"
        // dyzzhdZhenshilujing: "0566320038874430fff7593c70062b5.jpg,yiyuedangke.jpg,yiyuedangke2.jpg,"

        this.title = isnull(res.huodong.dyzzhdName);
        this.time = isnull(res.huodong.dyzzhdTime)
        this.place = isnull(res.huodong.dyzzhdPlace)
        // this.type = isnull(res.huodong.dyzzhdTime)
        this.content = isnull(res.huodong.dyzzhdContent)
        if (isnull(res.huodong.dyzzhdZhenshilujing) != "未知") {
          let photos = res.huodong.dyzzhdZhenshilujing.split(",")
          photos.length--;
          this.imgs = photos.map(p => {
            return `${this.$store.state.zzhdpurl}${p}`
          });
        }
      })
  },
  methods: {
    show (event) {
      console.log(event);
    }
  },
}
</script>
<style lang="less" scoped>
@import "assets/css/quindex.less";
@import "assets/css/tablecard.less";
</style>