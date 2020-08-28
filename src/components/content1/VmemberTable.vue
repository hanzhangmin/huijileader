<template>
  <div>

    <BaseCard>
      <div slot="header">
        <VillageSearch @villageSearch="villageSearch" />
      </div>
      <div slot="body">
        <el-table type="expand"
                  :data="tableData"
                  border
                  v-loading="loading"
                  style="width: 100%;font-size:16px;"
                  height="80vh">
          <el-table-column fixed
                           prop="name"
                           label="姓名"
                           width="100">
          </el-table-column>
          <el-table-column prop="sex"
                           label="性别"
                           width="60">
          </el-table-column>
          <el-table-column prop="phone"
                           label="联系方式"
                           width="160">
          </el-table-column>
          <el-table-column prop="duties"
                           label="职位"
                           width="120">
          </el-table-column>
          <el-table-column prop="periodOfService"
                           label="任职时间"
                           width="120">
          </el-table-column>
          <el-table-column prop="responsibilities"
                           label="职务"
                           width="auto">
          </el-table-column>
          <el-table-column prop="thirdCommittee"
                           label="村三委"
                           width="auto">
          </el-table-column>

          <el-table-column prop="address"
                           label="地址"
                           width="auto">
          </el-table-column>
          <el-table-column prop="index"
                           fixed="right"
                           label="操作"
                           width="80">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)"
                         type="text"
                         size="medium">照片</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div slot="footer">
        <el-pagination background
                       @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="currentPage"
                       :page-sizes="[16, 20, 50, 100]"
                       :page-size="pageSize"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="total">
        </el-pagination>
      </div>
    </BaseCard>
    <div class="mask"
         @click="hidenMask"
         v-show="showcard">
      <div class="centerbody">
        <div class="cardcontent">
          <img :src="itemdata.img"
               alt=""
               style="width:300px;margin:0 auto;"
               srcset="">
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import { get_village_cadres } from 'network/request'
import { formatDate, isnull } from 'assets/js/myjs'
import BaseCard from "components/commen1/BaseCard"
import BaseCard2 from "components/commen1/BaseCard2"
import themask from "components/commen1/Mask/hzmMask"
import VillageSearch from "./VillageSearch"
export default {
  name: "VmemberTable",
  components: {
    BaseCard,
    themask,
    BaseCard2,
    VillageSearch
  },
  data () {
    return {
      pageSize: 16,
      currentPage: 1,
      pageCount: 1,
      total: 0,
      tableData: [],
      itemdata: {},
      loading: true,
      showcard: false,
      villageid: "",
    }
  },
  created () {
    // this.showcard = true
  },
  methods: {
    get_tableData (villageid) {
      this.loading = true
      // let s = {
      // }
      // if (processed != "0") {
      //   s["processed"] = processed
      // }
      // if (type != "6") {
      //   s["type"] = type
      // }
      // s["village.id"] = { "$eq": Number(villageid) }
      // s["createdAt"] = {
      //   "$between": [new Date(time[0]).toISOString(), new Date(time[1]).toISOString()],
      // }
      // s["village.id"]
      get_village_cadres({
        limit: this.pageSize,
        page: this.currentPage,
        join: "village",
        s: {
          "village.id": {
            "$eq": Number(villageid)
          }
        }
      })
        .then(res => {
          console.log(res);
          this.loading = false
          // this.currentPage = res.pageCount
          this.total = res.total
          this.tableData.splice(0)
          this.tableData = res.data.map((data, index) => {
            let img = null;
            if (data.image != null) {
              if (data.image.length > 0) {
                img = data.image[0].url
              }
            }
            return {
              id: data.id,
              index: index,
              name: isnull(data.name),
              sex: data.sex === 0 ? "男" : "女",
              phone: isnull(data.phone),
              address: isnull(data.address),
              thirdCommittee: isnull(data.thirdCommittee),
              duties: isnull(data.duties),
              responsibilities: isnull(data.responsibilities),
              periodOfService: isnull(data.periodOfService),
              img: img,
            }
          })
        })
    },
    villageSearch (villageid) {
      this.villageid = villageid
      this.get_tableData(villageid)
    },
    handleClick (scope) {
      this.itemdata = this.tableData[Number(scope.index)]
      this.showcard = true
    },
    handleSizeChange (val) {
      this.pageSize = Number(val)
      this.currentPage = 1
      this.page = 1
      this.get_tableData(this.villageid)
    },
    handleCurrentChange (val) {
      this.currentPage = Number(val)
      this.page = Number(val)
      this.get_tableData(this.villageid)
    },
    hidenMask () {
      this.showcard = false
    }
  },
}
</script>

