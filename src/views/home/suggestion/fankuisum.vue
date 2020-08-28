<template>
  <div>
    <!-- <gujia v-if="showgujia"
           :thenum="gj"></gujia>
    <gujia v-if="showgujia"
           :thenum="gj"></gujia> -->
    <div class="fankuisum">
      <h4>
        <el-date-picker v-model="time"
                        type="daterange"
                        align="right"
                        unlink-panels
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :picker-options="pickerOptions">
        </el-date-picker> &emsp;&emsp; &emsp;&emsp;
        全区群众意见建议总量
        <span class="">已处理反馈：<b class="yes">{{fkycl}}</b>条</span>
        &emsp;&emsp; &emsp;&emsp;
        <span class="">未处理反馈：<b class="no">{{fkwcl}}</b>条</span>
      </h4>
    </div>
    <div style="margin-bottom:16px;">
      <el-row :gutter="10">
        <el-col :span="6"
                v-for="index in 8"
                :key="'item'+index">
          <card>
            <p slot="title"
               class="title">
              <span>{{chartDate.dataname[index-1]}}</span>
            </p>
            <p slot="main"
               class="main">
              <!-- <router-link :to="{path:'/home/suggestion/sugtable',query:{type:'true',townid:townids[index-1]}}"> -->
              <a>
                <span class="yes"
                      @click.stop="gofktable({type:'true',townid:townids[index-1]})">已处理：{{chartDate.data1[index-1]}}条</span>
              </a>
              <!-- </router-link> -->

              <!-- <router-link :to="{path:'/home/suggestion/sugtable',query:{type:'false',townid:townids[index-1]}}"> -->
              <a>
                <span class="no"
                      @click.stop="gofktable({type:'false',townid:townids[index-1]})">未处理：{{chartDate.data2[index-1]}}条</span>
              </a>
              <!-- </router-link> -->
            </p>
          </card>
        </el-col>
      </el-row>
    </div>
    <el-row>
      <el-col :span="16">
        <BaseCard2>
          <div slot="header">本月各镇街道反馈处理柱状图</div>
          <div slot="body">
            <div style="height:80vh">
              <bar02 :chartDate="chartDate"
                     :key="reloadbar02" />
            </div>
          </div>
        </BaseCard2>

      </el-col>
      <el-col :span="8">
        <BaseCard2>
          <div slot="header">本月全区意见建议处理情况占比图</div>
          <div slot="body">
            <div style="height:33vh">
              <pie02 :pie02data="pie02data"
                     :key="reloadpie02" />
            </div>
          </div>
        </BaseCard2>
        <BaseCard2>
          <div slot="header">本月全区意见建议类型占比图</div>
          <div slot="body">
            <div style="height:33vh">
              <pie01 :key="reloadpie01"
                     :pie01data="pie01data" />
            </div>
          </div>
        </BaseCard2>
      </el-col>
    </el-row>

  </div>
</template>
<script>
import { get_feedbacks_bytown, get_villages } from "network/request"
import card from "components/commen1/Card"
import gujia from 'components/commen1/gujia'
import bar02 from '../../echartsExamples/bar_02'
import BaseCard2 from "components/commen1/BaseCard2"
import pie02 from 'views/echartsExamples/pie_02'
import pie01 from 'views/echartsExamples/pie_04'
export default {
  name: "fankuisum",
  components: {
    card,
    gujia,
    bar02,
    BaseCard2,
    pie02,
    pie01
  },
  data () {
    return {
      townids: [],
      chartDate: {
        title: "",
        legenddata: ["已处理", "未处理"],
        // dataname: ["1月", "bbbb", "cccc", "dddd", "eeeee", "ffffff"],
        // data1: [12, 32, 43, 23, 45, 23],
        // data2: [23, 54, 65, 24, 83, 45]
      },
      reloadbar02: "",
      pie02data: {
        name2: ["资金", "资产", "资源", "党务", "村务", "其他"],
        name3: "条数",
        // data: [
        //   { value: 2000, name: "收入" },
        //   { value: 2800, name: "支出" }
        // ]
      },
      reloadpie02: "",
      pie01data: {
        // name: "党员发展类型占比图",
        name2: "条",
        legenddata: ["已处理", "未处理"]
      },
      reloadpie01: "pie01",
      fkycl: 0,
      fkwcl: 0,
      showgujia: true,
      gj: 4,
      items: [],
      time: "",
      endtime: "",
      pickerOptions: {
        shortcuts: [{
          text: '最近一个月',
          onClick (picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近半年',
          onClick (picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30 * 6);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一年',
          onClick (picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 365);
            picker.$emit('pick', [start, end]);
          }
        }],
        disabledDate (time) {
          return time.getTime() > new Date().getTime()
        }
      },
    }
  },

  created () {
    const end = new Date();
    this.endtime = new Date(end.getTime() + 3600 * 1000 * 24);
    const start = new Date();
    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
    this.time = [start, end];
  },
  methods: {
    getfeedback () {
      get_feedbacks_bytown(
        {
          join: "village,village.feedback",
          s: {
            "village.feedback.createdAt": {
              "$between": [new Date(this.time[0]).toISOString(), new Date(this.endtime.toISOString())],
            },
            "village.feedback.deleteAt": null
          }
        }
      )
        .then(res => {
          console.log(res);
          let piedata = [
            { value: 0, name: "资金" },
            { value: 0, name: "资产" },
            { value: 0, name: "资源" },
            { value: 0, name: "党务" },
            { value: 0, name: "村务" },
            { value: 0, name: "其他" },
          ];
          let dataname = [], data1 = [], data2 = [];
          this.fkycl = 0;
          this.fkwcl = 0;
          for (let townindex = 0, lentown = this.$store.state.towns.length; townindex < lentown; townindex++) {
            dataname.push(this.$store.state.towns[townindex].zhenName);
            this.townids.push(this.$store.state.towns[townindex].zhenid);
            res.forEach(town => {
              if (this.$store.state.towns[townindex].zhenid === town.id) {
                let dataycl = 0, datawcl = 0;
                town.village.forEach(village => {
                  for (let index = 0, len = village.feedback.length; index < len; index++) {
                    if (village.feedback[index].processed) {
                      dataycl++;
                      this.fkycl++;
                    } else {
                      datawcl++;
                      this.fkwcl++;
                    }
                    piedata[village.feedback[index].type].value++;
                  }
                });
                data1.push(dataycl);
                data2.push(datawcl);
              }
            });
            if (data1.length < dataname.length) {
              data1.push(0);
              data2.push(0)
            }
          }
          this.$set(this.chartDate, "dataname", dataname)
          this.$set(this.chartDate, "data1", data1)
          this.$set(this.chartDate, "data2", data2)
          this.$set(this.pie02data, "data", piedata)
          let data = [
            { value: this.fkycl, name: "已处理" },
            { value: this.fkwcl, name: "未处理" }
          ];
          this.$set(this.pie01data, "data", data)
          this.reloadbar02 = (new Date()).getTime()
          this.reloadpie02 = (new Date()).getTime()

        })

      // .then(res => {
      //   console.log(res);
      // })
    },
    gofktable (path) {
      this.$store.commit("set_fktownid", path.townid);
      this.$router.push({
        path: '/home/suggestion/sugtable',
        query: { ...path }
      })
    }
  },
  watch: {
    time (val) {
      console.log(val);
      this.getfeedback()
    }
  },
}
</script>
<style lang="less" scoped>
.title {
  font-size: 20px;
}
a {
  cursor: pointer;
}
.fankuisum {
  font-size: 20px;
  color: @gray1;
  // background-color: #ffffff;
  // margin-bottom: 10px;
  // border-radius: 4px;
  // .boxshadow();
  margin-top: 12px;
  margin-bottom: 12px;
  span {
    color: @gray3;
    font-size: @fontsize15;
  }
}
.yes {
  margin-right: 20px;
}
.yes :hover,
.no :hover {
  background-color: fade(@mainColor, 0.2);
}
// button {
//   padding: 5px;
//   border-radius: 5px;
//   margin: 0px 10px;
// }
.fkitems {
  width: 100%;
  display: flex;
  // display: grid;
  // grid-template-columns: repeat(4, auto);
  // grid-template-rows: repeat(2, auto);
  // grid-column-gap: 10px;
  // grid-row-gap: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
}
</style>
