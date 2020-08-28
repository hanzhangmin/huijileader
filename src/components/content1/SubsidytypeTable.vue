<template>
  <div>

    <BaseCard>
      <div slot="header">
        <VillageSearch @Search="villageSearch" />
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
                           label="补助项"
                           width="auto">
          </el-table-column>
          <el-table-column prop="standards"
                           label="补助标准"
                           width="auto">
          </el-table-column>
          <el-table-column prop="amount"
                           label="补助金额"
                           width="auto">
          </el-table-column>
          <el-table-column prop="items"
                           label="补助物品"
                           width="auto">
          </el-table-column>
          <el-table-column prop="applicationTime"
                           sortable
                           label="申请时间"
                           width="auto">
          </el-table-column>
          <el-table-column prop="pickUpTime"
                           sortable
                           label="领取时间"
                           width="auto">
          </el-table-column>
          <el-table-column prop="implementationPolicy"
                           label="实施政策"
                           width="auto">
          </el-table-column>

          <el-table-column prop="nationalPolicy"
                           label="相关国家政策"
                           width="auto">
          </el-table-column>
          <!-- <el-table-column prop="index"
                           fixed="right"
                           label="操作"
                           width="80">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)"
                         type="text"
                         size=" medium">查看照片</el-button>
            </template>
          </el-table-column> -->
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
          <el-image v-for="(file,index) in itemdata.image"
                    :key="'file'+index"
                    :src="file.url"
                    lazy></el-image>
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
import { get_subsidys } from 'network/request'
import { formatDate, isnull } from 'assets/js/myjs'
import BaseCard from "components/commen1/BaseCard"
import BaseCard2 from "components/commen1/BaseCard2"
import themask from "components/commen1/Mask/hzmMask"
import VillageSearch from "./SubsidytypeSearch"
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
      page: 1,
      currentPage: 1,
      pageCount: 1,
      total: 0,
      tableData: [],
      itemdata: {},
      loading: true,
      showcard: false,
      villageid: "",
      type: ""
    }
  },
  created () {
  },
  methods: {
    get_tableData () {
      this.loading = true
      get_subsidys({
        // fields: fields,
        limit: this.pageSize,
        page: this.page,
        join: "village,type",
        sort: "applicationTime,DESC",
        s: {
          "village.id": {
            "$eq": Number(this.villageid)
          },
          "type.id": {
            "$eq": this.type
          }
        },
      })
        .then(res => {
          console.log(res);
          this.loading = false
          // this.currentPage = res.pageCount
          this.total = res.total
          this.tableData.splice(0)
          this.tableData = res.data.map((data, index) => {
            return {
              id: data.id,
              index: index,
              name: isnull(data.name),
              standards: isnull(data.standards),
              pickUpTime: isnull(data.pickUpTime),
              nationalPolicy: isnull(data.nationalPolicy),
              implementationPolicy: isnull(data.implementationPolicy),
              applicationTime: isnull(data.applicationTime),
              amount: isnull(data.amount),
              items: isnull(data.items),
            }
          })
        })
    },
    villageSearch (villageid, type) {
      console.log(villageid);
      this.villageid = villageid
      this.type = type
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

