<template>
  <div class="bodyitem">
    <div>
      <fankuisum></fankuisum>
      <div class="platesbody">
        <div class="plate-header">
          <timeselect @search="searchfk"
                      :year="year1"
                      :mouth="mouth1"></timeselect>
        </div>
        <div class="plate-box">
          <div class="box-left">
            <bar02 :chartDate="fkchartdata"
                   :key="reload" />
          </div>
          <div class="box-right">
            <div class="br-item">
              <pie01 :pie01data="pie01data"
                     :key="reload1"></pie01>
            </div>
            <div class="br-item">
              <pie02 :pie02data="pie02data"
                     :key="reload2"></pie02>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { post_fksum, post_fltype } from "network/request"
import { gettime } from "assets/js/myjs"
import fankuisum from "./fankuisum"
import timeselect from "components/commen/dataselectbar/timeselect"
import bar02 from "views/echartsExamples/bar_02"
import pie01 from "views/echartsExamples/pie_01"
import pie02 from "views/echartsExamples/pie_02"
export default {
  name: "fkbody",
  components: {
    fankuisum,
    timeselect,
    bar02,
    pie01,
    pie02
  },
  data () {
    return {
      fkchartdata: {
        title: "各镇(街道)所辖行政村群众意见建议数量条形图",
        datasign1: "已处理反馈",
        datasign2: "未处理反馈",
      },
      fkycl: 0,
      fkwcl: 0,
      reload: "",
      reload1: "",
      reload2: "",
      year1: 0,
      mouth1: 0,
      time1: "",
      pie01data: {
        name: "全区群众意见建议类型占比图",
      },
      pie02data: {
        name: "全区群众意见建议处理占比图",
        name2: "反馈数量"
      },
    }
  },
  created () {
    this.year1 = (new Date).getFullYear();
    this.mouth1 = ((new Date).getMonth() + 1)
    this.time1 = gettime(this.year1, this.mouth1);
    myCreated(this);
  },
  methods: {
    searchfk (year, mouth) {
      this.year1 = Number(year);
      this.mouth1 = Number(mouth);
      // console.log(year + "/" + mouth);
      if (this.year1 === 0 && this.mouth1 === 0) {
        this.$mytoast.toast("请选择年份", 3000)
      } else if (this.year1 === 0 && this.mouth1 != 0) {
        let date = new Date().getFullYear()
        this.time1 = (date - 2) + "-12-31~" + date + "-12-31"
        myCreated(this)
      } else if (this.mouth1 === 0 && this.year1 != 0) {
        this.time1 = this.year1 + "-01-01~" + this.year1 + "-12-31"
        myCreated(this)
      } else {
        this.time1 = gettime(this.year1, this.mouth1);
        myCreated(this)
      }
    }
  },
}
function post_fksum_handle (vm, res) {
  vm.fkycl = 0
  vm.fkwcl = 0
  let dataname = [], data1 = [], data2 = [];
  for (var j = 0, len1 = vm.$store.state.zhensx.length; j < len1; j++) {
    for (let i = 0, len = res.data.length; i < len; i++) {
      if (res.data[i].name === vm.$store.state.zhensx[j].zhenName) {
        dataname.push(res.data[i].name)
        data1.push(res.data[i].ycl)
        data2.push(res.data[i].wcl)
        vm.fkycl += res.data[i].ycl
        vm.fkwcl += res.data[i].wcl
      }
    }
  }
  vm.$set(vm.fkchartdata, "dataname", dataname)
  vm.$set(vm.fkchartdata, "data1", data1)
  vm.$set(vm.fkchartdata, "data2", data2)
  vm.$set(vm.pie02data, "data", [{ name: "已处理反馈", value: vm.fkycl }, { name: "未处理反馈", value: vm.fkwcl }])
  vm.reload = (new Date()).getTime();
  // console.log((new Date()).getTime());
  vm.reload2 = (new Date()).getTime();
}
function post_fltype_handle (vm, res) {
  let data = res.data.map(data => {
    return {
      name: data.type,
      value: data.shuliang
    }
  })
  vm.$set(vm.pie01data, "data", data)
  vm.reload1 = (new Date()).getTime();
}
function myCreated (vm) {
  post_fksum(0, vm.time1)
    .then(res => {
      post_fksum_handle(vm, res)
    })
  post_fltype(vm.time1)
    .then(res => {
      post_fltype_handle(vm, res)
    })
}
</script>
<style lang="less" scoped>
@import "assets/css/quindex.less";
</style>