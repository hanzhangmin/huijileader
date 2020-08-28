<template>
  <div class="searchbox">
    <div class="searchobj">
      <label for="">
        {{areaname}}：
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
          <el-option v-for="item in towns"
                     :key="'town'+item.id"
                     :label="item.name"
                     :value="item.id">
          </el-option>
        </el-select>
      </label>
      <label for="">
        村：
        <el-select v-model="villageid"
                   :size="size"
                   placeholder="请选择行政村">
          <el-option v-for="item in villages"
                     :key="'village'+item.id"
                     :label="item.name"
                     :value="item.id">
          </el-option>
        </el-select>
      </label>
      <label for="">
        类型：
        <el-select v-model="type"
                   :size="size"
                   placeholder="请选择类型">
          <el-option v-for="item in types"
                     :key="'type'+item.id"
                     :label="item.name"
                     :value="item.id">
          </el-option>
        </el-select>
      </label>
      <label for="">
        时间段：
        <el-date-picker :size="size"
                        v-model="time"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        change="changetime"
                        :picker-options="pickerOptions">
        </el-date-picker>
      </label>
    </div>
    <div>
      <el-button type="primary"
                 :size="size"
                 @click="onSubmit">搜索</el-button>
    </div>
  </div>

</template>

<script>
import { formatDate, isnull } from 'assets/js/myjs'
import { get_towns, get_villages, get_action_types } from 'network/request'
export default {
  name: "PartyactivitySearch",
  data () {
    return {
      size: "medium",
      townid: "0",
      villages: [],
      villageid: "0",
      type: "",
      types: [],
      time: "",
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
    this.getVillagesAndTypes()
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
    getVillagesAndTypes () {
      get_villages({
        join: "town",
        // fields: "id,name",
        s: {
          "town.id": {
            "$eq": Number(this.townid)
          }
        }      }
      )
        .then(res => {
          if (res.length != 0) {
            this.villageid = res[0].id.toString()
          }
          this.villages = res.map(v => {
            return {
              id: v.id.toString(),
              name: v.name
            }
          })
          return get_action_types({
            join: "village",
            s: {
              "village.id": {
                "$eq": Number(this.villageid)
              }
            }
          })
        })
        .then(res => {
          console.log(res);
          this.type = res[0].id.toString()
          this.types = res.map(type => {
            return {
              id: type.id.toString(),
              name: type.name
            }
          })
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 365);
          this.time = [start, end]
          this.onSubmit()
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
            this.type = res[0].id.toString()
            return {
              id: v.id.toString(),
              name: v.name
            }
          })
        })
    },
    getSubsidytypes () {
      get_action_types({
        join: "village",
        s: {
          "village.id": {
            "$eq": Number(this.villageid)
          }
        }
      })
        .then(res => {
          console.log(res);
          this.types = res.map(type => {
            return {
              id: type.id.toString(),
              name: type.name
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
    villageid (val) {
      this.type = ""
      this.getSubsidytypes()
    }
  },
}
</script>

