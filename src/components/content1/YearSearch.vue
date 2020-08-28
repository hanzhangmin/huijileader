<template>
  <div>
    {{areaname}}:
    <el-date-picker v-model="theyear"
                    :size="size"
                    type="year"
                    placeholder="选择年"
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
      theyear: "",
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一个月',
            onClick (picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          },
          {
            text: '最近半年',
            onClick (picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30 * 6);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一年',
            onClick (picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 365);
              picker.$emit('pick', [start, end]);
            }
          }],
        disabledDate (time) {
          return time.getTime() > new Date().getTime()
        }
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
    this.theyear = new Date()
    this.onSubmit()
  },
  methods: {
    // gettowns (areaid) {
    //   get_towns({
    //     join: "area",
    //     s: {
    //       "area.id": {
    //         "$eq": Number(areaid)
    //       }
    //     }
    //   })
    //     .then(res => {
    //       console.log(res);
    //     })
    // },
    onSubmit () {
      console.log(this.theyear);
      let year = this.theyear.getFullYear()
      console.log(year);
      this.$emit("villageSearch", year)
    }
  },
  // watch: {
  //   townid (val) {
  //     this.villageid = ""
  //     this.getvillages(this.townid)
  //   },
  // },
}
</script>



