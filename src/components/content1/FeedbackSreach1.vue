<template>
  <div>
    {{areaname}}:
    <el-select v-if="$store.state.level!=1"
               disabled
               v-model="townid"
               :size="size"
               placeholder="请选择镇/街道">
      <el-option v-for="item in towns"
                 :key="'town'+item.id"
                 :label="item.zhenName"
                 :value="item.zhenid">
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
    <el-select v-model="villageid"
               :size="size"
               placeholder="请选择行政村">
      <!-- <el-option label="全镇/街道"
                 value="0">
      </el-option> -->
      <el-option v-for="item in villages"
                 :key="'village'+item.id"
                 :label="item.name"
                 :value="item.id">
      </el-option>
    </el-select>

    <el-date-picker :size="size"
                    v-model="time"
                    type="monthrange"
                    align="right"
                    unlink-panels
                    range-separator="至"
                    start-placeholder="开始月份"
                    end-placeholder="结束月份"
                    :picker-options="pickerOptions"
                    change="changetime">
    </el-date-picker>
    <el-button type="primary"
               :size="size"
               @click="onSubmit">搜索</el-button>
  </div>

</template>

<script>
import { get_towns, get_villages } from 'network/request'
export default {
  name: "SearchFeedback",
  data () {
    return {
      size: "mini",
      townid: "0",
      villages: [],
      villageid: "0",
      // type: "6",
      // types: [
      //   { id: "6", name: "全部" },
      //   { id: "0", name: "资金" },
      //   { id: "1", name: "资产" },
      //   { id: "2", name: "资源" },
      //   { id: "3", name: "党务" },
      //   { id: "4", name: "村务" },
      //   { id: "5", name: "其他" },
      // ],
      // processed: "0",
      time: "",
      // processeds: [
      //   {
      //     value: '0',
      //     label: '全部'
      //   },
      //   {
      //     value: 'true',
      //     label: '已处理'
      //   },
      //   {
      //     value: 'false',
      //     label: '未处理'
      //   },
      // ],
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
          }, {
            text: '最近一年',
            onClick (picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 365);
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
    this.townid = this.$store.state.townid.toString()
    this.villageid = this.$store.state.villageid.toString()
    this.getvillages(this.townid)
    const end = new Date();
    const start = new Date();
    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30 * 5);
    this.time = [start, end]
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
    getvillages (townid) {
      get_villages({
        join: "town",
        // fields: "id,name",
        s: {
          "town.id": {
            "$eq": Number(townid)
          }
        }
      })
        .then(res => {
          this.villages = res.map(v => {
            return {
              id: v.id.toString(),
              name: v.name
            }
          })
        })
    },
    onSubmit () {
      this.$emit("searchFeedback", this.villageid, this.time)
    }
  },
  watch: {
    townid (val) {
      this.getvillages(this.townid)
    },
    time (val) {
      // console.log(val);
    }
  },
}
</script>