<template>
  <div>
    <BaseCard>
      <div slot="header">
        <VillageTimeSearch @Search="villageSearch" />
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
                           width="auto">
          </el-table-column>
          <el-table-column prop="sex"
                           label="性别"
                           width="auto">
          </el-table-column>
          <el-table-column prop="phone"
                           label="联系方式"
                           width="auto">
          </el-table-column>
          <el-table-column prop="applicationTime"
                           sortable
                           label="补助时间"
                           width="120">
          </el-table-column>
          <el-table-column prop="cause"
                           label="补助原因"
                           width="300">
          </el-table-column>
          <el-table-column prop="subsidyName"
                           label="补助项"
                           width="auto">
          </el-table-column>
          <el-table-column prop="subsidyAmount"
                           label="补助金额（元）"
                           width="auto">
          </el-table-column>
          <el-table-column prop="subsidyItems"
                           label="补助物品"
                           width="auto">
          </el-table-column>
          <el-table-column prop="remarks"
                           label="备注"
                           width="auto">
          </el-table-column>
          <el-table-column prop="index"
                           fixed="right"
                           label="操作"
                           width="60">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)"
                         type="text"
                         size=" medium">详情</el-button>
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
        <slot name="centerbody">
          <BaseCard2>
            <div slot="header">
              {{itemdata.name}}
              <span class="littlespan">性别：{{itemdata.sex}}</span>
              <span class="littlespan">联系方式：{{itemdata.phone}}</span>
              <span class="littlespan">地址：{{itemdata.address}}</span>
            </div>
            <div slot="body">
              <div class="cardcontent">
                补助原因： <span>{{itemdata.cause}}</span>
                补助项：<span>{{itemdata.subsidyName}}</span>
                补助金额： <span>{{itemdata.subsidyAmount}}</span>
                补助物品：<span>{{itemdata.subsidyItems}}</span>
              </div>
              <div class="cardcontent">
                备注： <span>{{itemdata.remarks}}</span>
              </div>
            </div>
          </BaseCard2>
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
import { get_subsidy_infos } from 'network/request'
import { formatDate, isnull } from 'assets/js/myjs'
import BaseCard from "components/commen1/BaseCard"
import BaseCard2 from "components/commen1/BaseCard2"
import themask from "components/commen1/Mask/hzmMask"
import VillageTimeSearch from "./VillageTimeSearch"
export default {
  name: "SubsidypersonTable",
  components: {
    BaseCard,
    themask,
    BaseCard2,
    VillageTimeSearch
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
      time1: "",
      time2: ""
    }
  },
  created () {
    // this.showcard = true
  },
  methods: {
    get_tableData () {
      this.loading = true
      // let s = {}
      // s["village.id"] = { "$eq": Number(this.villageid) }
      // s["time"] = {
      //   "$between": [this.time1, this.time2],
      // }
      get_subsidy_infos({
        limit: this.pageSize,
        page: this.currentPage,
        join: "village,subsidy",
        s: {
          "village.id": {
            "$eq": Number(this.villageid)
          },
          "personal": true,
          "applicationTime": {
            "$between": [this.time1, this.time2],
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
            let subsidyName = "", subsidyAmount = "", subsidyItems = ""
            if (data.subsidy != null) {
              subsidyName = isnull(data.subsidy.name)
              subsidyItems = isnull(data.subsidy.items)
              subsidyAmount = isnull(data.subsidy.amount)
            }
            return {
              id: data.id,
              index: index,
              sex: data.sex === 0 ? "男" : "女",
              applicationTime: isnull(data.applicationTime),
              cause: isnull(data.cause),
              name: isnull(data.name),
              phone: isnull(data.phone),
              address: isnull(data.address),
              remarks: isnull(data.remarks),
              subsidyName,
              subsidyAmount,
              subsidyItems,
            }
          })
        })
    },
    villageSearch (villageid, time1, time2) {
      this.villageid = villageid
      this.time1 = time1
      this.time2 = time2
      this.get_tableData()
    },
    handleClick (scope) {
      console.log(scope.index);
      this.itemdata = this.tableData[Number(scope.index)]
      this.showcard = true
    },
    handleSizeChange (val) {
      this.pageSize = Number(val)
      this.page = 1
      this.get_tableData()
    },
    handleCurrentChange (val) {
      this.currentPage = Number(val)
      this.page = Number(val)
      this.get_tableData()
    },
    hidenMask () {
      this.showcard = false
    }
  },
}
</script>

