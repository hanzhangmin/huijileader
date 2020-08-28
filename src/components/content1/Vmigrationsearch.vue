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
import { get_towns, get_villages } from 'network/request'
import { formatDate, isnull } from 'assets/js/myjs'
export default {
  name: "VmigrationSearch",
  data () {
    return {
      size: "medium",
      townid: "0",
      villages: [],
      villageid: "0",
      time: "",
      type: "0",
      types: [
        { id: "0", name: "全部迁移" },
        { id: "1", name: "迁入" },
        { id: "2", name: "迁出" },
      ],
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

