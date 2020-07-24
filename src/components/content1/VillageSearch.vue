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
      this.$emit("villageSearch", this.villageid)
    }
  },
  watch: {
    townid (val) {
      this.villageid = ""
      this.getvillages(this.townid)
    },
  },
}
</script>

