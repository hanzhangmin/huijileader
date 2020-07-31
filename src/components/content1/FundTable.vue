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
                           label="标题"
                           width="300">
          </el-table-column>
          <el-table-column prop="input"
                           sortable
                           label="收入（元）"
                           width="120">
          </el-table-column>
          <el-table-column prop="output"
                           sortable
                           label="支出（元）"
                           width="120">
          </el-table-column>
          <el-table-column prop="time"
                           sortable
                           label="时间"
                           width="100">
          </el-table-column>
          <el-table-column prop="cause"
                           label="事由"
                           width="300">
          </el-table-column>
          <el-table-column prop="remarks"
                           label="备注"
                           width="auto">
          </el-table-column>
          <!-- <el-table-column prop="index"
                           fixed="right"
                           label="操作"
                           width="60">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)"
                         type="text"
                         size=" medium">详情</el-button>
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
          <BaseCard2>
            <div slot="header">
              {{itemdata.name}}
              <span class="littlespan">{{itemdata.time}}</span>
            </div>
            <div slot="body">
              <div class="cardcontent">
                活动内容 <span>{{itemdata.content}}</span>
                <el-image v-for="url in itemdata.img"
                          :key="url"
                          :src="url"
                          lazy></el-image>
              </div>
            </div>
          </BaseCard2>
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
import { get_funds } from 'network/request'
import { formatDate, isnull } from 'assets/js/myjs'
import BaseCard from "components/commen1/BaseCard"
import BaseCard2 from "components/commen1/BaseCard2"
import themask from "components/commen1/Mask/hzmMask"
import VillageTimeSearch from "./FundSearch"
export default {
  name: "VactivityTable",
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
      type: "",
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
      let s = {
        "village.id": {
          "$eq": Number(this.villageid)
        },
        "time": {
          "$between": [this.time1, this.time2],
        },
      }
      if (this.type != "2") {
        s["type"] = this.type
      }
      get_funds({
        limit: this.pageSize,
        page: this.currentPage,
        join: "village",
        s
      })
        .then(res => {
          console.log(res);
          this.loading = false
          // this.currentPage = res.pageCount
          this.total = res.total
          this.tableData.splice(0)
          this.tableData = res.data.map((data, index) => {
            // image: [{…}]
            let img
            if (data.relatedDocuments != null && (typeof data.relatedDocuments) != "object") {
              img = data.relatedDocuments.map(file => {
                return file.url
              })
            }
            return {
              id: data.id,
              index: index,
              input: parseFloat(data.input).toFixed(2),
              output: parseFloat(data.output).toFixed(2),
              time: isnull(data.time),
              name: isnull(data.name),
              cause: isnull(data.cause),
              remarks: isnull(data.remarks),
              img: img,
            }
          })
        })
    },
    villageSearch (villageid, type, time1, time2) {
      this.villageid = villageid
      this.type = type
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

