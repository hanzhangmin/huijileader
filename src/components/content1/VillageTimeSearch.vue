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
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    change="changetime">
    </el-date-picker>
    <el-button type="primary"
               :size="size"
               @click="onSubmit">搜索</el-button>
  </div>

</template>

<script>
import { formatDate, isnull } from 'assets/js/myjs'
import { get_towns, get_villages } from 'network/request'
export default {
  name: "SearchFeedback",
  data () {
    return {
      size: "medium",
      townid: "0",
      villages: [],
      villageid: "0",
      time: "",
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
          if (res.length != 0) {
            this.villageid = res[0].id.toString()
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 365 * 5);
            this.time = [start, end]
            this.onSubmit()
          }
          this.villages = res.map(v => {
            return {
              id: v.id.toString(),
              name: v.name
            }
          })
        })
    },
    // timetostring(){

    // },
    onSubmit () {
      // console.log(formatDate(this.time[0], "yyyy-MM-dd"));
      this.$emit("Search", this.villageid, formatDate(this.time[0], "yyyy-MM-dd"), formatDate(this.time[1], "yyyy-MM-dd"))
    }
  },
  watch: {
    townid (val) {
      this.getvillages(this.townid)
    },
  },
}
</script>