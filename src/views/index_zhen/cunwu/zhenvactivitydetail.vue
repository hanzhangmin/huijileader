<template>
  <div class="platesbody">
    <div class="plate-header"
         style="text-align:left">
      <h2>
        <buttonback />村活动详情
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
          <td>{{place}}</td>
          <td>活动类型</td>
          <td>{{type}}</td>
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
import { get_activity_details } from "network/request"
import buttonback from "components/commen/dataselectbar/buttonback"
export default {
  name: "zhenvad",
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
      }
    }
  },
  created () {
    this.chdid = this.$route.params.chdid
    get_activity_details(this.chdid)
      .then(res => {
        console.log(res);
        this.title = res.data.cdyzzhdName;
        this.time = res.data.cdyzzhdTime === null ? "未知" : res.data.cdyzzhdTime;
        this.place = res.data.cdyzzhdPlace === null ? "未知" : res.data.cdyzzhdPlace;
        this.type = res.data.cunhuodongleixing === null ? "未知" : res.data.cunhuodongleixing.chdlxName;
        this.content = res.data.cdyzzhdContent === null ? "未知" : res.data.cdyzzhdContent;
        if (res.data.cdyzzhdZhenshilujing != "" && res.data.cdyzzhdZhenshilujing != null) {
          let photos = res.data.cdyzzhdZhenshilujing.split(",")
          photos.length--;
          this.imgs = photos.map(p => {
            return `${this.$store.state.vhuodongpurl}${p}`
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
// .imgbox::before {
//   content: "查看";
//   position: absolute;
//   width: 200px;
//   height: 200px;
//   background-color: @mainColor;
// }
</style>