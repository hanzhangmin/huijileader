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
          <!-- <el-option label="全区"
                 value="0">
      </el-option> -->
          <el-option v-for="item in towns"
                     :key="'town'+item.id"
                     :label="item.name"
                     :value="item.id">
          </el-option>
        </el-select>
      </label>
      <!-- <span v-if="$store.state.level!=0">{{$store.state.townname}}>></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->
      <label for="">
        村：
        <el-select v-model="villageid"
                   :size="size"
                   placeholder="请选择行政村">
          <el-option label="所有村"
                     value="0">
          </el-option>
          <el-option v-for="item in villages"
                     :key="'village'+item.id"
                     :label="item.name"
                     :value="item.id">
          </el-option>
        </el-select>
      </label>
      <label for="">
        状态：
        <el-select v-model="processed"
                   :size="size"
                   albel="处理状态"
                   placeholder="请选择处理状态">
          <el-option v-for="item in processeds"
                     :key="'processed'+item.value"
                     :label="item.label"
                     :value="item.value">
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
                        align="right"
                        unlink-panels
                        range-separator="至"
                        start-placeholder="开始月份"
                        end-placeholder="结束月份"
                        :picker-options="pickerOptions"
                        change="changetime">
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
export default {
  name: "SearchFeedback",
  data () {
    return {
      size: "medium",
      townid: "0",
      villages: [],
      villageid: "0",
      type: "6",
      types: [
        { id: "6", name: "全部类别" },
        { id: "0", name: "资金" },
        { id: "1", name: "资产" },
        { id: "2", name: "资源" },
        { id: "3", name: "党务" },
        { id: "4", name: "村务" },
        { id: "5", name: "其他" },
      ],
      processed: "0",
      time: "",
      processeds: [
        {
          value: '0',
          label: '全部处理情况'
        },
        {
          value: 'true',
          label: '已处理'
        },
        {
          value: 'false',
          label: '未处理'
        },
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
    this.townid = this.$store.state.fktownid.toString();
    try {
      if (this.$route.query) {
        if (this.$route.query.townid) {
          this.processed = this.$route.query.type.toString()
          this.villageid = "0"
        } else {
          this.processed = this.$route.query.type.toString()
          this.villageid = this.$route.query.villageid.toString()
        }
      } else {
      }
    } catch (error) {

    }
    const end = new Date();
    // console.log(new Date("2020-08-24T05:42:41.000Z"));
    // end.setTime(end.getTime() + 3600 * 1000 * 24);
    console.log(end.toISOString());
    const start = new Date();
    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
    this.time = [start, end]
    this.getvillages(this.townid)
    this.onSubmit()
    // this.townname
    // console.log(this.townid);
    // console.log(this.$store.state.townname);
    // this.villageid = this.$store.state.villageid.toString()

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
      // if (localStorage.time) {
      // }
      // this.time = localStorage.time.split(",")
      console.log(this.time);
      this.$emit("searchFeedback", this.townid, this.villageid, this.processed, this.type, this.time)
    }
  },
  watch: {
    townid (val) {
      this.getvillages(this.townid)
    },
    time (val) {
      // console.log(val);
    },
    $route (to) {
      if (to.query) {
        if (to.query.townid) {
          this.townid = to.query.townid.toString();
          this.processed = to.query.type.toString();
          // this.villageid = "0";
        } else {
          this.processed = to.query.type.toString()
          this.villageid = to.query.villageid.toString()
        }
      } else {
      }

      this.getvillages(this.townid)
      this.onSubmit()
    }
  },
}
</script>