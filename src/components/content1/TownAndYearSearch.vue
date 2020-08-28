<template>
  <div>
    {{areaname}}:
    <el-select v-if="$store.state.level!=0"
               disabled
               v-model="townid"
               :size="size"
               placeholder="请选择镇/街道">
      <el-option v-for="item in towns"
                 :key="'town'+item.id"
                 :label="item.name"
                 :value="item.id">
      </el-option>
    </el-select>
    <el-select v-else
               v-model="townid"
               :size="size"
               placeholder="请选择镇/街道">
      <!-- <el-option label="全区"
                 value="0">
      </el-option> -->
      <el-option v-for="item in towns"
                 :key="'town'+item.id"
                 :label="item.name"
                 :value="item.id">
      </el-option>

    </el-select>
    年份：
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
  name: "SearchFeedback",
  data () {
    return {
      size: "medium",
      townid: "0",
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
          },
          {
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
    this.townid = this.$store.state.townid.toString()
    this.theyear = new Date()
    this.onSubmit()
  },
  methods: {
    gettowns (areaid) {
      get_towns({
        join: "area",
        s: {
          "area.id": {
            "$eq": Number(areaid)
          }
        }
      })
        .then(res => {
          console.log(res);
        })
    },
    onSubmit () {
      let year = this.theyear.getFullYear()
      console.log(year);
      this.$emit("villageSearch", this.townid, year)
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



