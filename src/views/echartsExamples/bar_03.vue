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
  data () {
    return {
      // chartDate: {
      //   xAxisData: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      //   timelineData: [12, 13, 14, 15, 16],
      //   types: ["1", "2"],
      //   seriesData: [
      //     { seriesNames: ["1", "2"], seriesValue: [[1, 2, 3, 3, 5, 7], [4, 6, 3, 7, 3, 2]] },
      //     { seriesNames: ["1", "2"], seriesValue: [[2, 2, 3, 7, 1, 2], [4, 6, 3, 7, 3, 2]] },
      //     { seriesNames: ["1", "2"], seriesValue: [[5, 6, 3, 3, 5, 4], [1, 26, 3, 5, 3, 2]] },
      //     { seriesNames: ["1", "2"], seriesValue: [[4, 2, 5, 3, 3, 7], [4, 8, 12, 7, 5, 5]] },
      //     { seriesNames: ["1", "2"], seriesValue: [[1, 2, 3, 2, 5, 7], [4, 9, 3, 7, 3, 2]] }
      //   ]
      // }
    }
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
</style>