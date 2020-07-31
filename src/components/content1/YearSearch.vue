<template>
  <div>
    {{areaname}}:
    <el-date-picker v-model="theyear"
                    :size="size"
                    type="year"
                    placeholder="选择年">
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
  name: "YearSearch",
  data () {
    return {
      size: "medium",
      theyear: "",
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
    this.theyear = new Date()
    this.onSubmit()
  },
  methods: {
    // gettowns (areaid) {
    //   get_towns({
    //     join: "area",
    //     s: {
    //       "area.id": {
    //         "$eq": Number(areaid)
    //       }
    //     }
    //   })
    //     .then(res => {
    //       console.log(res);
    //     })
    // },
    onSubmit () {
      console.log(this.theyear);
      let year = this.theyear.getFullYear()
      console.log(year);
      this.$emit("villageSearch", year)
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



