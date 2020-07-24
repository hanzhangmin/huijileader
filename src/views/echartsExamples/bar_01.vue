<template>
  <div class="mycharts"
       ref="bar01">
  </div>
</template>
<script>
export default {
  name: 'bar01',
  // data () {
  //   return {
  //     chartdata: {
  //       name: "zhanbitu",
  //       xAxisdata: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
  //       seriesname: "销量",
  //       seriesdata: [5, 20, 36, 10, 10, 20]
  //     }
  //   }
  // },
  props: {
    chartdata: Object
  },
  mounted () {
    this.drawLine();
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.bar01)
      // 绘制图表
      myChart.showLoading();
      let vm = this
      myChart.setOption({
        title: { text: vm.chartdata.name },
        xAxis: {
          data: vm.chartdata.xAxisdata,
          nameTextStyle: {
            color: "#888888"
          },
          nameRotate: "30",
          splitLine: {
            show: true
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            label: {
              show: false
            },
          }
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: true },
            magicType: {
              show: true,
              type: ['pie', 'funnel']
            },
          }
        },
        yAxis: {
          type: 'value',
          name: "条",
          splitNumber: 1
        },
        series: [{
          barMaxWidth: 20,
          name: vm.chartdata.seriesname,
          type: 'bar',
          data: vm.chartdata.seriesdata,
        }],
        color: ["#224abe", "#3265ff", "#6c91ff", "#9bb4ff"]
        //         color: #224abe;
        // color: #3265ff;
        // color: #6c91ff;
        // color: #9bb4ff;
      });
      myChart.hideLoading();
    }
  }
}
</script>
<style lang="less" scoped>
</style>