<template>
  <div class="mycharts"
       ref="pie02">
  </div>
</template>
<script>
export default {
  name: 'pie02',
  props: {
    pie02data: Object
  },
  mounted () {
    this.drawLine();
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.pie02)
      myChart.showLoading();
      // 绘制图表
      let vm = this;
      myChart.setOption({
        // backgroundColor: '#efefef',
        title: {
          text: vm.pie02data.name,
          top: "3%",
          left: "3%",
          textStyle: {
            color: "#888888"
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)条"
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
        series: [
          {
            name: vm.pie02data.name2,
            type: 'pie',

            radius: ['40%', '48%'],
            label: {
              show: false
            },
            emphasis: {
              label: {
                show: true
              }
            },
            labelLine: {
              show: true
            },
            data: vm.pie02data.data,
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
              return Math.random() * 200;
            }
          },
        ],
        color: ["#224abe", "orange"]
      });
      myChart.hideLoading();
      myChart.on('click', function (param) {
        console.log(param);//这里根据param填写你的跳转逻辑
      });
    }
  }
}
</script>
<style lang="less" scoped>
</style>