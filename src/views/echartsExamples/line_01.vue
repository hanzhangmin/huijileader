<template>
  <div class="charts"
       ref="line01">
  </div>
</template>
<script>
export default {
  name: 'line01',
  data () {
    return {
      xAxisdata: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
      // legend: [
      //   [12, 34, 23, 54, 24, 75],
      //   [75, 83, 36, 74, 37, 24]
      // ]
    }
  },
  props: {
    legend: Array
  },
  mounted () {
    this.drawLine();
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.line01)
      // 绘制图表
      let vm = this
      myChart.setOption({
        // backgroundColor: "#888888",
        tooltip: {
          trigger: 'axis',
          position: function (pt) {
            return [pt[0], '10%'];
          }
        },
        legend: {
          data: ["收入", "支出"],
          align: 'left',
          // top: "10"
        },
        grid: {
          show: false,
          // borderColor: "rgba(0,0,0,0)"
        },
        xAxis: {
          splitLine: { show: false },//去除网格线
          type: 'category',
          data: vm.xAxisdata,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
        },
        yAxis: {
          splitLine: { show: false },//去除网格线
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          name: "元",
          type: 'value',
        },
        series: [
          {
            name: '收入',
            type: 'line',
            smooth: true,
            itemStyle: {
              color: '#32b588'
            },
            // areaStyle: {
            //   color: "#32b588"
            //   // color: {
            //   //   type: 'linear',
            //   //   x: 0,
            //   //   y: 0,
            //   //   x2: 0,
            //   //   y2: 1,
            //   //   colorStops: [{
            //   //     offset: 0, color: '#32b588' // 0% 处的颜色
            //   //   }, {
            //   //     offset: 1, color: 'rgba(50,181,136,0.3)' // 100% 处的颜色
            //   //   }],
            //   //   global: false // 缺省为 false
            //   // }
            // },
            data: vm.legend[0]
          },
          {
            name: '支出',
            type: 'line',
            smooth: true,
            itemStyle: {
              color: 'rgba(240, 137, 162,1)'
            },
            data: vm.legend[1]
          }
        ]
      });
    }
  }
}
</script>
<style scoped>
h1 {
  color: #32b5877e;
}
</style>