<template>
  <div class="platesbody">
    <div class="plate-header"
         style="text-align:left">
      <h2>
        <buttonback />村会议详情
        <!-- {{$route.params}} -->
      </h2>
    </div>
    <div class="plate-box">
      <table border="1"
             cellspacing="0"
             cellpadding="0">
        <tr>
          <th>会议主题</th>
          <!-- <td colspan="5">{{feedback.fTitle}}</td> -->
          <td colspan="2">{{title}}</td>
          <th>会议焦点</th>
          <!-- <td colspan="5">{{feedback.fTitle}}</td> -->
          <td colspan="2">{{name}}</td>
        </tr>
        <tr>
          <th>会议时间</th>
          <td>{{time}}</td>
          <th>会议地点</th>
          <td>{{place}}</td>
          <th>会议主持人</th>
          <td>{{host}}</td>
        </tr>
        <tr>
          <th>会议记录人员</th>
          <td>{{Notetaker}}</td>
          <th>会议参与者</th>
          <td>{{vaAttendants}}</td>
        </tr>
        <tr>
          <th>内容</th>
          <td colspan="5">{{content}}</td>
        </tr>
        <tr></tr>
        <tr>
          <th>相关图片</th>
          <td colspan="5">
            <span v-if="imgs.length==0">无</span>
            <viewer v-else
                    :images="imgs"
                    :options="options">
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
import { get_meeting_details } from "network/request"
import buttonback from "components/commen/dataselectbar/buttonback"
export default {
  name: "zhenvmd",
  components: {
    buttonback
  },
  data () {
    return {
      title: "",
      name: "",
      time: "",
      place: "",
      host: "",
      content: "",
      Notetaker: "",
      vaAttendants: "",
      imgs: [],
      options: {
        "navbar": false,
        "title": false,
        "toolbar": false,
      }
    }
  },
  created () {
    this.chyid = this.$route.params.chyid
    get_meeting_details(this.chyid)
      .then(res => {
        console.log(res);
        //         villageaffair:
        // vaAttendants: "undefined"
        // vaBeiyong1: null
        // vaBeiyong2: null
        // vaBeiyong3: null
        // vaContent: "讨论决定村民年终福利发放标准"
        // vaHost: "刘峰"
        // vaName: "村两委及村民代表会议-村民福利发放"
        // vaNotetaker: "袁华"
        // vaPhoto: null
        // vaPlace: "刘砦村委会"
        // vaTime: "2018-01-31"
        // vaTitle: "2018-01-31村两委及村民代表会议"
        // vaTypeofaffair: null
        // vaVillageid: 2
        // vaXuhao: null
        // villageaffairId: 1
        this.title = res.villageaffair.vaTitle === null ? "未知" : res.villageaffair.vaTitle;
        this.name = res.villageaffair.vaName === null ? "未知" : res.villageaffair.vaName;
        this.time = res.villageaffair.vaTime === null ? "未知" : res.villageaffair.vaTime;
        this.place = res.villageaffair.vaPlace === null ? "未知" : res.villageaffair.vaPlace;
        this.host = res.villageaffair.vaHost === null ? "未知" : res.villageaffair.vaHost;
        this.vaAttendants = isnull(res.villageaffair.vaAttendants);
        this.Notetaker = isnull(res.villageaffair.vaNotetaker);
        this.content = res.villageaffair.vaContent === null ? "未知" : res.villageaffair.vaContent;
        if (res.villageaffair.vaPhoto != "" && res.villageaffair.vaPhoto != null) {
          let photos = res.villageaffair.vaPhoto.split(",")
          photos.length--;
          this.imgs = photos.map(p => {
            return `${this.$store.state.vhuiyipurl}${p}`
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