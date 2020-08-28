
  <template>
  <div class="mycharts"
       ref="bar06">
  </div>
</template>
<script>
export default {
  name: 'bar06',
  props: {
    name: String,
    name1: {
      type: String,
      default: "万元"
    },
    source: Array
  },
  mounted () {
    this.drawLine();
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.bar06)
      // 绘制图表
      // let seriesdata = []
      // for (let index = 0; index < --this.source[0].length; index++) {
      //   seriesdata.push({
      //     type: 'bar'
      //   })
      // }
      console.log(this.source);
      myChart.showLoading();
      let vm = this
      myChart.setOption({
        title: { text: vm.name },
        legend: {},
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            label: {
              show: false
            },
          }
        },
        dataset: {
          // source: [
          //   ['product', '积极分子', '发展对象', '预备党员', '正式党员'],
          //   ['Matcha Latte', 43.3, 85.8, 93.7, 23],
          //   ['Milk Tea', 83.1, 73.4, 55.1, 45],
          //   ['Cheese Cocoa', 86.4, 65.2, 82.5, 64],
          //   ['Walnut Brownie', 72.4, 53.9, 39.1, 32]
          // ]
          source: vm.source
        },
        xAxis: {
          type: 'category',
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
        yAxis: {
          name: vm.name1,
          splitNumber: 1,
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
        series: [
          { type: 'bar' },
          { type: 'bar' },
        ],
        color: ["#224abe", "orange"]
      });
      myChart.hideLoading();
    }
  }
}
</script>
<style lang="less" scoped>
</style>