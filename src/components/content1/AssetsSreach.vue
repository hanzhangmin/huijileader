<template>
  <div class="searchbox">
    <div class="searchobj">
      <label for="">
        {{areaname}}:
        <el-select v-if="$store.state.level!=0"
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
          <el-option v-for="item in towns"
                     :key="'town'+item.id"
                     :label="item.name"
                     :value="item.id">
          </el-option>
        </el-select>
      </label>
      <label for="">
        村:
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

      <!-- <el-select v-model="type"
               :size="size"
               placeholder="请选择类型">
      <el-option v-for="item in types"
                 :key="'type'+item.id"
                 :label="item.name"
                 :value="item.id">
      </el-option>
    </el-select> -->
    </div>
    <div>
      <el-button type="primary"
                 :size="size"
                 @click="onSubmit">搜索</el-button>
    </div>
  </div>

</template>

<script>
import { get_towns, get_villages, get_assets_types } from 'network/request'
export default {
  name: "AssetsSearch",
  data () {
    return {
      size: "medium",
      townid: "0",
      villages: [],
      villageid: "0",
      type: "",
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
          return get_assets_types({
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
      get_assets_types({
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

