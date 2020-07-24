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
      <el-option v-for="item in villages"
                 :key="'village'+item.id"
                 :label="item.name"
                 :value="item.id">
      </el-option>
    </el-select>
    <el-select v-model="type"
               :size="size"
               placeholder="请选择类型">
      <el-option v-for="item in types"
                 :key="'type'+item.id"
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
  name: "FundSearch",
  data () {
    return {
      size: "mini",
      townid: "0",
      villages: [],
      villageid: "0",
      type: "2",
      types: [
        {
          id: "2",
          name: "全部收支"
        },
        {
          id: "1",
          name: "现金收支"
        },
        {
          id: "0",
          name: "银行收支"
        }
      ],
      time: ""
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
    const end = new Date();
    const start = new Date();
    start.setTime(start.getTime() - 3600 * 1000 * 24 * 365 * 5);
    this.time = [start, end]
    this.getvillages(this.townid)
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
          this.villageid = res[0].id.toString()
          this.villages = res.map(v => {
            return {
              id: v.id.toString(),
              name: v.name
            }
          })
        })
    },

    onSubmit () {
      console.log(this.villageid);
      this.$emit("Search", this.villageid, this.type, formatDate(this.time[0], "yyyy-MM-dd"), formatDate(this.time[1], "yyyy-MM-dd"))
    }
  },
  watch: {
    townid (val) {
      this.getvillages(this.townid)
    },
  },
}
</script>

