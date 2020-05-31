<template>
  <div class="charts"
       ref="bar02">
  </div>
</template>
<script>
import { post_fksum } from "network/request"
export default {
  name: 'bar02',
  props: {
    chartDate: Object
  },
  mounted () {
    this.drawLine();
  },
  methods: {
    drawLine () {
      let myChart = this.$echarts.init(this.$refs.bar02)
      // 绘制图表
      myChart.showLoading();
      let vm = this;
      myChart.setOption({
        title: {
          text: vm.chartDate.title,
          top: "3%",
          left: "3%",
          textStyle: {
            color: "#888888"
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
        legend: {
          data: [vm.chartDate.datasign1, vm.chartDate.datasign2],
          top: '10%',
          right: "6%",
        },
        grid: {
          top: '20%',
          left: '6%',
          right: '6%',
          bottom: '5%',
          containLabel: true
        },
        yAxis: {
          type: 'category',
          splitLine: {
            show: false
          },
          inverse: true,
          nameGap: 40,
          data: vm.chartDate.dataname,
          scale: true,
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false
          }
        },
        xAxis: {
          type: 'value',
          name: "条",
          nameGap: 100,
          splitLine: {
            show: false
          },
          show: false
        },
        series: [{
          name: vm.chartDate.datasign1,
          type: 'bar',
          barMaxWidth: 20,
          itemStyle: {
            emphasis: {
              barBorderRadius: 10
            },
            normal: {
              color: "#c6f8e7",
              barBorderRadius: 10,
              shadowColor: "#cccccc",
              shadowBlur: 20,
            }
          },
          label: {
            normal: {
              show: true,
              position: 'right'
            }
          },
          data: vm.chartDate.data1
        }, {
          // "#026341", "#037a51", "#01a068", "#04d88e", "#92fcd7", "#c6f8e7"
          name: vm.chartDate.datasign2,
          type: 'bar',
          barMaxWidth: 20,
          itemStyle: {
            emphasis: {
              barBorderRadius: 5
            },
            normal: {
              color: "#32b588",
              barBorderRadius: 10,
              shadowColor: "#cccccc",
              shadowBlur: 10,
            }
          },
          label: {
            normal: {
              show: true,
              position: 'right'
            }
          },
          data: vm.chartDate.data2
        }],
      });
      myChart.hideLoading();
      myChart.on('click', function (param) {
        console.log(param);//这里根据param填写你的跳转逻辑
      });
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    }
  }
}
</script>
<style lang="less" scoped>
</style>