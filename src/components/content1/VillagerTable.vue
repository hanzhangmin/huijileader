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
                           width="150">
          </el-table-column>
          <el-table-column prop="sex"
                           label="性别"
                           width="120">
          </el-table-column>
          <el-table-column prop="phone"
                           label="联系方式"
                           width="160">
          </el-table-column>
          <el-table-column prop="address"
                           label="地址"
                           width="auto">
          </el-table-column>

          <!-- <el-table-column prop="index"
                           fixed="right"
                           label="操作"
                           width="60">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)"
                         type="text"
                         size=" medium">查看</el-button>
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
    <!-- <div class="mask"
         @click="hidenMask"
         v-show="showcard">
      <div class="centerbody">
        <slot name="centerbody">
          <BaseCard2>
            <div slot="header">
              {{itemdata.title}}
              <span class="littlespan">{{itemdata.time}}</span>
            </div>
            <div slot="body">
              <div class="cardcontent">
                意见建议人： <span>{{itemdata.name}}</span>
              </div>
              <div class="cardcontent">
                意见建议内容:
                <span>{{itemdata.content}}</span>
                <el-image v-for="url in itemdata.img"
                          :key="url"
                          :src="url"
                          lazy></el-image>
              </div>
              <div class="cardcontent">
                意见建议处理行政级别： <span>{{itemdata.status}}</span>
              </div>
              <div class="cardcontent">
                意见建议处理人 <span>{{itemdata.handler}}</span>
              </div>
              <div class="cardcontent">
                意见建议处理结果： <span>{{itemdata.handlRes}}</span>
              </div>
              <div class="cardcontent">
                向上级反馈附带信息 <span>{{itemdata.upMessage}}</span>
              </div>
              <div class="cardcontent">
                退回反馈附带信息 <span>{{itemdata.downMessage}}</span>
              </div>
            </div>
          </BaseCard2>
        </slot>
      </div>
    </div> -->
  </div>
</template>
<script>
import { get_villagers } from 'network/request'
import { formatDate, isnull } from 'assets/js/myjs'
import BaseCard from "components/commen1/BaseCard"
import BaseCard2 from "components/commen1/BaseCard2"
import themask from "components/commen1/Mask/hzmMask"
import VillageSearch from "./VillageSearch"
export default {
  name: "villagerTable",
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
      get_villagers({
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
          // this.pageCount = res.pageCount
          this.total = res.total,
            this.tableData.splice(0)
          this.tableData = res.data.map((data, index) => {

            return {
              id: data.id,
              index: index,
              name: isnull(data.name),
              sex: data.sex === 0 ? "男" : "女",
              phone: isnull(data.phone),
              address: isnull(data.address)
            }
          })
        })
    },
    villageSearch (villageid) {
      console.log(villageid);
      this.villageid = villageid
      this.get_tableData(villageid)
    },
    handleClick (scope) {
      console.log(scope.index);
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

