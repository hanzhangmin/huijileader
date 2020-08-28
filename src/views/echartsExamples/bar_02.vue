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
  // data () {
  //   return {
  //     chartDate: {
  //       title: "title",
  //       legenddata: ["已处理", "未处理"],
  //       dataname: ["1月", "bbbb", "cccc", "dddd", "eeeee", "ffffff"],
  //       data1: [12, 32, 43, 23, 45, 23],
  //       data2: [23, 54, 65, 24, 83, 45]
  //     }
  //   }
  // },
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
        // title: {
        //   text: vm.chartDate.title,
        //   // top: "3%",
        //   left: "3%",
        //   textStyle: {
        //     color: "#888888"
        //   }
        // },
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
          data: vm.chartDate.legenddata,
          // top: '10%',
          right: "6%",
        },
        grid: {
          // top: '10%',
          left: '6%',
          right: '6%',
          bottom: '5%',
          containLabel: true
        },
        yAxis: {
          type: 'category',
          splitLine: {
            show: true
          },
          inverse: true,
          nameGap: 40,
          data: vm.chartDate.dataname,
          axisLine: {
            lineStyle: {
              color: '#999',
            }
          },
          axisTick: {
            lineStyle: {
              color: '#999',
            }
          },
        },
        xAxis: {
          type: 'value',
          name: "条",
          axisLine: {
            lineStyle: {
              color: '#999',
            }
          },
          axisTick: {
            lineStyle: {
              color: '#999',
            }
          },
          //网格线
          splitLine: {
            show: true,
          },

        },

        series: [{
          name: vm.chartDate.legenddata[0],
          type: 'bar',
          barMaxWidth: 16,
          itemStyle: {
            emphasis: {
              barBorderRadius: 10
            },
            normal: {
              // color: "#c6f8e7",
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
          name: vm.chartDate.legenddata[1],
          type: 'bar',
          barMaxWidth: 16,
          itemStyle: {
            emphasis: {
              barBorderRadius: 5
            },
            normal: {
              // color: "#32b588",
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
        color: ["#224abe", "#9bb4ff"]
        // color: ["rgb(28,200,138)", "#e74a3b"]
        // color: ["#50b780", "#f27277"]
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