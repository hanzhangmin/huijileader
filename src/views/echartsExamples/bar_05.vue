
  <template>
  <div class="mycharts"
       ref="bar05">
  </div>
</template>
<script>
export default {
  name: 'bar05',
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
    name: String,
    source: Array
  },
  mounted () {
    this.drawLine();
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.bar05)
      // 绘制图表
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
        xAxis: { type: 'category' },
        yAxis: {},
        series: [
          { type: 'bar' },
          { type: 'bar' },
          { type: 'bar' },
          { type: 'bar' }
        ],
        color: ["#3265ff", "#6c91ff", "#9bb4ff", "#224abe"]
      });
      myChart.hideLoading();
    }
  }
}
</script>
<style lang="less" scoped>
</style>