<template>
  <div class="charts"
       ref="bar04">
  </div>
</template>
<script>
import { post_dylist } from "network/request"
export default {
  name: 'bar04',
  data () {
    return {
      legenddata: ["积极分子", "发展对象", "预备党员", "正式党员"],
      seriesData: []
    }
  },
  computed: {
    xAxisdata () {
      let kks = [];
      for (let index = 0, len = this.$store.state.zhensx.length; index < len; index++) {
        kks.push(this.$store.state.zhensx[index].zhenName)
      }
      return kks
    },

  },
  created () {
    post_dylist()
      .then(res => {
        let dy1 = [], dy2 = [], dy3 = [], dy4 = [];
        for (let index = 0, len = this.xAxisdata.length; index < len; index++) {
          for (let i = 0, len1 = res.data.length; i < len1; i += 5) {
            if (this.xAxisdata[index] === res.data[i][0]) {
              dy1.push(res.data[i + 1])
              dy2.push(res.data[i + 2])
              dy3.push(res.data[i + 3])
              dy4.push(res.data[i + 4])
            }
          }
        }
        this.seriesData.push(dy1, dy2, dy3, dy4)
        console.log(this.seriesData);

        this.drawLine();
      })
  },
  mounted () {
    // this.drawLine();
  },
  methods: {
    drawLine () {
      let myChart = this.$echarts.init(this.$refs.bar04)
      let theseries = [];
      let vm = this;
      for (let index = 0, len = vm.legenddata.length; index < len; index++) {
        theseries.push({
          name: vm.legenddata[index],
          type: 'bar',
          barWidth: '16%',
          itemStyle: {
            emphasis: {
              barBorderRadius: 7
            },
            normal: {
              barBorderRadius: 7
            }
          },
          data: vm.seriesData[index]
        })
      }
      myChart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            label: {
              show: false
            }
          }
        },
        toolbox: {
          feature: {
            dataView: {
              readOnly: true,
              optionToContent: function (opt) {
                console.log(opt);
                let axisData = opt.xAxis[0].data;
                let series = opt.series;
                let table = '<table style="width:100%;font-size:1.4rem" cellspacing="4"><tr>'
                  + '<td>镇</td>'
                  + '<td>' + series[0].name + '</td>'
                  + '<td>' + series[1].name + '</td>'
                  + '<td>' + series[2].name + '</td>'
                  + '<td>' + series[3].name + '</td>'
                  + '</tr>';
                for (var i = 0, len = axisData.length; i < len; i++) {
                  table += '<tr>'
                    + '<td>' + axisData[i] + '</td>'
                    + '<td>' + series[0].data[i] + '</td>'
                    + '<td>' + series[1].data[i] + '</td>'
                    + '<td>' + series[2].data[i] + '</td>'
                    + '<td>' + series[3].data[i] + '</td>'
                    + '</tr>';
                }
                table += '</table>';
                return table;
              }
            }
          }
        },
        legend: {
          data: vm.legenddata,
          top: '2%',
          left: "40",
        },
        xAxis: {
          type: 'category',
          data: vm.xAxisdata
        },
        grid: {
          left: '60',
          top: '40',
          right: '10',
          bottom: '20%'
        },
        yAxis: {
          type: 'value',
        },
        series: theseries,
        color: ["#66b5aa", "#32b588", "#01a068", "#92fcd7", "#c6f8e7"]
      });
    }
  }
}
</script>
<style lang="less" scoped>
</style>