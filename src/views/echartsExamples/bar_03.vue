<template>
  <div class="charts"
       ref="bar03">
  </div>
</template>
<script>
import { post_fksum } from "network/request"
export default {
  name: 'bar03',
  props: {
    chartDate: Object
  },
  mounted () {
    this.drawLine();
  },
  methods: {
    drawLine () {
      let myChart = this.$echarts.init(this.$refs.bar03)
      // 绘制图表
      myChart.showLoading();
      let vm = this;
      let options = []
      this.chartDate.seriesData.forEach(element => {
        let seriesItems = [];
        for (let index = 0; index < element.seriesNames.length; index++) {
          let seriesItem = {
            type: 'bar',
            name: element.seriesNames[index],
            data: element.seriesValue[index],
            cursor: 'pointer',
            barWidth: '30%',
            itemStyle: {
              emphasis: {
                barBorderRadius: 7
              },
              normal: {
                barBorderRadius: 7
              }
            },
          }
          seriesItems.push(seriesItem)
        }
        let optionitem = {
          xAxis: [{
            data: this.chartDate.xAxisData // 镇名
          }],
          yAxis: [{
            type: 'value',
            name: "人民币（万元）"
          }],
          legend: {
            type: "scroll",
            data: this.chartDate.types, //收入，支出
            itemGap: 4,
            pageIconColor: 'white',
            pageTextStyle: {
              color: "#ccc"
            },
          },
          series: seriesItems,
          color: ["#32b588", "#aaffdd"]
        }
        options.push(optionitem)
      });
      myChart.setOption({
        //timeline基本配置都写在baseoption 中
        baseOption: {
          timeline: {
            type: 'slider',
            bottom: '0',
            left: '10',
            right: '10',
            axisType: 'category',
            show: true,
            autoPlay: false,
            playInterval: 2000,
            data: this.chartDate.timelineData,
            controlStyle: {
              emphasis: {
                color: "#32b588",
                borderColor: "#32b588",
                shadowColor: '#32b588',
              }
            },
            checkpointStyle: {
              color: "#32b588",
              borderColor: "#32b588",
              shadowColor: '#32b588',
              shadowBlur: 12
            },
            itemStyle: {
              emphasis: {
                color: "#32b588",
                borderColor: "#32b588",
                shadowColor: '#32b588',
                shadowBlur: 10
              }
            }
          },
          grid: {
            left: '80',
            top: '40',
            right: '10',
            bottom: '20%'
          },
          xAxis: [{
            type: 'category'
          },],
          yAxis: {
            type: 'value',
          },
          series: [{
            type: 'bar',
          },],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
              label: {
                show: false
              }
            }
          },
          calculable: true,
        },
        //变量则写在options中
        options: options
      });
      myChart.hideLoading();
      // myChart.on('click', function (param) {
      //   console.log(param);//这里根据param填写你的跳转逻辑
      // });
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    }
  }
}
</script>
<style lang="less" scoped>
.charts {
  position: relative;
  min-width: 100%;
  min-height: 100%;
}
</style>