<template>
  <div class="mycharts"
       ref="pie01">
  </div>
</template>
<script>
export default {
  name: 'pie01',
  props: {
    pie01data: Object
  },
  mounted () {
    this.drawLine();
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.pie01)
      myChart.showLoading();
      // 绘制图表
      let vm = this;
      console.log(vm.pie01data);
      myChart.setOption({
        // backgroundColor: '#efefef',
        title: {
          text: vm.pie01data.name,
          top: "3%",
          left: "3%",
          textStyle: {
            color: "#888888"
          }
        },
        legend: {
          orient: 'vertical',
          right: 0,
          top: 40,
          data: vm.pie01data.legenddata,
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
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
            name: vm.pie01data.name2,
            type: 'pie',
            radius: '40%',
            // center: ['50%', '50%'],
            // roseType: 'radius',
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
            data: vm.pie01data.data,
            // animationEasing: 'elasticOut',
            // animationDelay: function (idx) {
            //   return Math.random() * 200;
            // }
          },
        ],
        color: ["#224abe", "#9bb4ff", "#01a068", "#04d88e", "#92fcd7", "#c6f8e7"]
      });
      myChart.hideLoading();
      myChart.on('click', function (param) {
        console.log(param);//这里根据param填写你的跳转逻辑
      });
    }
  }
}
</script>