<template>
  <div class="platesbody">
    <div class="plate-header"
         style="text-align:left">
      <h2>
        <buttonback /> 群众意见建议详情
      </h2>
    </div>
    <div class="plate-box">
      <table border="1"
             cellspacing="0"
             cellpadding="0">
        <tr>
          <td>群众意见标题</td>
          <!-- <td colspan="5">{{feedback.fTitle}}</td> -->
          <td colspan="5">{{fTitle}}</td>
        </tr>
        <tr>
          <td>提交时间</td>
          <td>{{fTime}}</td>
          <td>意见建议类型</td>
          <td>{{fType}}</td>
          <td>处理情况</td>
          <td>{{fHandle===true?"已处理":"未处理"}}</td>
        </tr>
        <tr>
          <td>内容</td>
          <td colspan="5">{{fContent}}</td>
        </tr>
        <tr></tr>
        <tr>
          <td>处理单位：</td>
          <td>{{department}}</td>
          <td>处理结果：</td>
          <td colspan="3">{{feedbackreply}}</td>
        </tr>
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
import { get_feedback_type, get_fkdetail_byid } from "network/request"
import buttonback from "components/commen/dataselectbar/buttonback"
export default {
  name: "fkdetail",
  components: {
    buttonback
  },
  data () {
    return {
      fTitle: "",
      fTime: "",
      fType: "",
      fHandle: "",
      fContent: "",
      department: "",
      feedbackreply: "",
      imgs: [],
      fkid: 0,
      options: {
        "navbar": false,
        "title": false,
        "toolbar": false,
      }
    }
  },
  created () {
    this.fkid = this.$route.params.fkid
    get_fkdetail_byid(this.fkid)
      .then(res => {
        console.log(res);
        switch (res.feedback.fType) {
          case 1:
            res.feedback.fType = "资金"
            break;
          case 2:
            res.feedback.fType = "资产"
            break;
          case 3:
            res.feedback.fType = "资源"
            break;
          case 5:
            res.feedback.fType = "党务"
            break;
          case 6:
            res.feedback.fType = "村务"
            break;
          case 7:
            res.feedback.fType = "其他"
            break;
          default:
            break;
        }
        this.fTitle = res.feedback.fTitle
        this.fTime = res.feedback.fTime
        this.fType = res.feedback.fType
        this.fHandle = res.feedback.fHandle
        this.fContent = res.feedback.fContent
        this.department = res.feedback.department
        this.feedbackreply = res.feedback.feedbackreply
        if (res.feedback.fImagepath != "" && res.feedback.fImagepath != null) {
          let photos = res.feedback.fImagepath.split(",")
          // if (photos[(photos.length - 1) === ","]) {
          photos.length--;
          // }
          this.imgs = photos.map(p => {
            return `${this.$store.state.feedbackurl}${p}`
          });
        }
      })
  },
}
function get_fkdetail_byid_handle (vm, id) {
  get_fkdetail_byid(id)
    .then(res => {
      console.log(res);
      switch (res.feedback.fType) {
        case 1:
          res.feedback.fType = "资金"
          break;
        case 2:
          res.feedback.fType = "资产"
          break;
        case 3:
          res.feedback.fType = "资源"
          break;
        case 5:
          res.feedback.fType = "党务"
          break;
        case 6:
          res.feedback.fType = "村务"
          break;
        case 7:
          res.feedback.fType = "其他"
          break;
        default:
          break;
      }
      for (const [k, v] of Object.entries(res.feedback)) {
        vm.$set(vm.feedback, k, v === null || "" ? "未知" : v)
      }
      if (vm.feedback.fImagepath != "未知") {
        let photos = vm.feedback.fImagepath.split(",")
        photos.length--;
        vm.imgs = photos.map(p => {
          return `${vm.$store.state.feedbackurl}${p}`
        });
      }
    })
}
</script>
<style lang="less" scoped>
@import "assets/css/quindex.less";
@import "assets/css/tablecard.less";
</style>