<template>
  <div>
    {{areaname}}:

    <el-date-picker v-model="time"
                    type="monthrange"
                    align="right"
                    unlink-panels
                    range-separator="至"
                    start-placeholder="开始月份"
                    end-placeholder="结束月份"
                    :picker-options="pickerOptions">
    </el-date-picker>
    &nbsp; &nbsp; &nbsp;
    <el-button type="primary"
               :size="size"
               @click="onSubmit">搜索</el-button>
  </div>

</template>

<script>
import { get_towns } from 'network/request'
export default {
  name: "YearSearch",
  data () {
    return {
      size: "medium",
      time: "",
      pickerOptions: {
        shortcuts: [{
          text: '本月',
          onClick (picker) {
            picker.$emit('pick', [new Date(), new Date()]);
          }
        }, {
          text: '今年至今',
          onClick (picker) {
            const end = new Date();
            const start = new Date(new Date().getFullYear(), 0);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近六个月',
          onClick (picker) {
            const end = new Date();
            const start = new Date();
            start.setMonth(start.getMonth() - 6);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
    }
  },
  computed: {
    areaid () {
      return Number(this.$store.state.areaid)
    },
    areaname () {
      return this.$store.state.areaname
    },
    towns () {
      let arr = this.$store.state.towns.map(res => {
        return {
          id: res.zhenid.toString(),
          name: res.zhenName
        }
      })
      return arr
    }
  },
  created () {
    const end = new Date();
    const start = new Date();
    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30 * 30);
    this.time = [start, end]
    this.onSubmit()
  },
  methods: {
    onSubmit () {
      console.log(this.time);
      this.$emit("villageSearch", this.time)
    }
  },
}
</script>



