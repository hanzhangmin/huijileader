<template>
  <div>
    <!-- <gujia v-if="showgujia"
           :thenum="gj"></gujia>
    <gujia v-if="showgujia"
           :thenum="gj"></gujia> -->
    <div class="fankuisum">
      <h3>
        <el-date-picker v-model="time"
                        type="daterange"
                        align="right"
                        unlink-panels
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :picker-options="pickerOptions">
        </el-date-picker> &emsp;&emsp; &emsp;&emsp;{{$store.state.townname}}群众意见建议总量
        <span class="">已处理反馈：<b class="yes">{{fkycl}}</b>条</span>
        &emsp;&emsp; &emsp;&emsp;
        <span class="">未处理反馈：<b class="no">{{fkwcl}}</b>条</span>
      </h3>
    </div>
    <div style="margin-bottom:16px;">
      <el-row :gutter="10">
        <el-col :span="itemspan"
                v-for="index in itemlength"
                :key="'item'+index">
          <card>
            <p slot="title"
               class="title">
              <span>{{chartDate.dataname[index-1]}}</span>
            </p>
            <p slot="main"
               class="main">
              <router-link :to="{path:'/home/suggestion/sugtable',query:{type:'true',villageid:villageids[index-1]}}">
                <span class="yes">已处理：{{chartDate.data1[index-1]}}条</span>
              </router-link>
              <router-link :to="{path:'/home/suggestion/sugtable',query:{type:'false',villageid:villageids[index-1]}}">
                <span class="no">未处理：{{chartDate.data2[index-1]}}条</span>
              </router-link>
            </p>
          </card>
        </el-col>
      </el-row>
    </div>
    <el-row>
      <el-col :span="16">
        <BaseCard2>
          <div slot="header">本月{{$store.state.townname}}反馈处理柱状图</div>
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
          <div slot="header">本月{{$store.state.townname}}意见建议处理情况占比图</div>
          <div slot="body">
            <div style="height:33vh">
              <pie02 :pie02data="pie02data"
                     :key="reloadpie02" />
            </div>
          </div>
        </BaseCard2>
        <BaseCard2>
          <div slot="header">本月{{$store.state.townname}}意见建议类型占比图</div>
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
import { get_feedbacks_bytown, get_villages, get_feedbacks } from "network/request"
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
      itemspan: 6,
      itemlength: 0,
      villageids: [],
      villagenames: [],
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
  computed: {
    townid () {
      return this.$store.state.townid.toString()
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
      get_villages({
        join: "town",
        fields: "id,name",
        s: {
          "town.id": {
            "$eq": Number(this.townid)
          }
        }
      }).then(res => {
        this.villageids.splice(0)
        this.villagenames.splice(0)
        this.itemlength = res.length
        let promises = res.map(village => {
          // this.villages.push(village.id)
          this.villageids.push(village.id)
          this.villagenames.push(village.name)
          return get_feedbacks(
            {
              fields: "type,processed",
              join: "village",
              s: {
                "village.id": {
                  "$eq": Number(village.id)
                },
                "createdAt": {
                  "$between": [new Date(this.time[0]).toISOString(), new Date(this.endtime.toISOString())],
                }
              }
            }
          )
        })
        Promise.all(promises)
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
            let data1 = [], data2 = [];
            this.fkycl = 0;
            this.fkwcl = 0;
            res.forEach(village => {
              let ycl = 0, wcl = 0;
              village.forEach(element => {
                if (element.processed) {
                  ycl++
                  this.fkycl++
                } else {
                  wcl++;
                  this.fkwcl++
                }
                piedata[element.type].value++
              });
              data1.push(ycl);
              data2.push(wcl);
            });

            this.$set(this.chartDate, "dataname", this.villagenames)
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
            this.reloadpie01 = (new Date()).getTime()
          })
      })
    },
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
