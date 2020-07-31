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
    <el-button type="primary"
               :size="size"
               @click="onSubmit">搜索</el-button>
  </div>

</template>

<script>
import { get_towns, get_villages, get_resource_types } from 'network/request'
export default {
  name: "ResourceSearch",
  data () {
    return {
      size: "medium",
      townid: "0",
      villages: [],
      villageid: "0",
      type: "类型",
      types: []
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
          console.log(this.villageid);
          return get_resource_types(this.villageid)
        })
        .then(res => {
          console.log(res);
          this.types = res.map(type => {
            return {
              id: type.id.toString(),
              name: type.name
            }
          })
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
      get_resource_types(this.villageid)
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
      console.log(this.type);
      this.$emit("Search", this.villageid, this.type)
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

