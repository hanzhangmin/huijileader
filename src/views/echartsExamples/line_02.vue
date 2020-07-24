<template>
  <div class="mycharts"
       ref="line02">
  </div>
</template>
<script>
export default {
  name: 'line02Chart',

  props: {

    ChartData: Object
  },
  // created () {
  //   this.drawLine();
  // },
  mounted () {
    this.drawLine();
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.line02)
      myChart.setOption({
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ["收入", "支出"],
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: {}
          }
        },
        xAxis: {
          splitLine: { show: false },//去除网格线
          type: 'category',
          data: this.ChartData.xAxisData,
          axisLine: {
            show: true
          },
          axisTick: {
            show: true
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
        dataZoom: {
          start: 95,
          end: 100,
          // fillerColor: "#224abe",
          // handleStyle: {
          //   color: '#fff',
          //   shadowBlur: 3,
          //   shadowColor: 'rgba(0, 0, 0, 0.6)',
          //   shadowOffsetX: 2,
          //   shadowOffsetY: 2
          // }
        },
        series: [
          {
            name: "收入",
            type: 'line',
            smooth: true,
            itemStyle: {
              color: '#224abe'
            },
            data: this.ChartData.sr
          },
          {
            name: "支出",
            type: 'line',
            smooth: true,
            itemStyle: {
              color: 'orange'
            },
            data: this.ChartData.zc
          }
        ]
      });
    }
  }
}
</script>
<style scoped>
</style>