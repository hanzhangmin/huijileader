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
                           label="项目名"
                           width="200">
          </el-table-column>

          <el-table-column prop="createdAt"
                           sortable
                           label="时间"
                           width="120">
          </el-table-column>
          <el-table-column prop="number"
                           label="编号"
                           width="120">
          </el-table-column>

          <el-table-column prop="projected"
                           label="是否立项"
                           width="100">
          </el-table-column>

          <el-table-column prop="bidding"
                           label="是否投标"
                           width="100">
          </el-table-column>
          <el-table-column prop="implement"
                           label="是否招标实施方"
                           width="100">
          </el-table-column>
          <el-table-column prop="implementer"
                           label="实施方"
                           width="200">
          </el-table-column>
          <el-table-column prop="acceptor"
                           label="验收方"
                           width="200">
          </el-table-column>
          <el-table-column prop="supervisor"
                           label="监理方"
                           width="200">
          </el-table-column>
          <el-table-column prop="deliverySituation"
                           label="工程款支付情况"
                           width="100">
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
              <span class="littlespan">{{itemdata.createdAt}}</span>
            </div>
            <div slot="body">
              <div class="cardcontent">
                <div class="cardcontent">
                  项目编号： <span>{{itemdata.number}}</span>
                </div>
                <div class="cardcontent">
                  是否立项： <span>{{itemdata.projected}}</span>
                </div>

                <div class="cardcontent">
                  是否投标： <span>{{itemdata.bidding}}</span>
                </div>
                <div class="cardcontent">
                  是否招标实施方： <span>{{itemdata.implement}}</span>
                </div>
                <div class="cardcontent">
                  实施方： <span>{{itemdata.implementer}}</span>
                </div>
                <div class="cardcontent">
                  验收方： <span>{{itemdata.acceptor}}</span>
                </div>
                <div class="cardcontent">
                  监理方 ：<span>{{itemdata.supervisor}}</span>
                </div>
                <div class="cardcontent">
                  工程款支付情况 ：<span>{{itemdata.deliverySituation}}</span>
                </div>
                <div class="cardcontent">
                  备注： <span>{{itemdata.remarks}}</span>
                </div>
                <div class="cardcontent">
                  相关图片：
                  <viewer v-if="itemdata.img.length>0"
                          :images="itemdata.img">

                    <div class="img"
                         v-for="(src,index) in itemdata.img"
                         :key="index">
                      <img :src="src"
                           :onerror="errorImg">
                    </div>
                  </viewer>
                  <span v-else>无</span>
                </div>
              </div>
            </div>
          </BaseCard2>
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
import { get_project_constractions } from 'network/request'
import { formatDate, isnull } from 'assets/js/myjs'
import BaseCard from "components/commen1/BaseCard"
import BaseCard2 from "components/commen1/BaseCard2"
import themask from "components/commen1/Mask/hzmMask"
import VillageSearch from "./VillageSearch"
export default {
  name: "VprojectTable",
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
      itemdata: {
        img: []
      },
      loading: true,
      showcard: false,
      villageid: "",
    }
  },
  methods: {
    get_tableData () {
      this.loading = true;
      get_project_constractions({
        limit: this.pageSize,
        page: this.currentPage,
        join: "village",
        // sort: "migrationTime,DESC",
        s: {
          "village.id": {
            "$eq": Number(this.villageid)
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
            if (data.relatedDocuments != null) {
              img = data.relatedDocuments.map(file => {
                return file.url
              })
            }
            console.log(img);
            return {
              id: data.id,
              index: index,
              number: isnull(data.number),
              implement: data.implement === true ? "是" : "否",
              name: isnull(data.name),
              supervisor: isnull(data.supervisor),
              remarks: isnull(data.remarks),
              projected: data.projected === true ? "是" : "否",
              implementer: isnull(data.implementer),
              deliverySituation: isnull(data.deliverySituation),
              bidding: data.bidding === true ? "是" : "否",
              acceptor: isnull(data.acceptor),
              img: img,
              createdAt: formatDate(new Date(data.createdAt), "yyyy-MM-dd")
            }
          })

        })
    },
    villageSearch (villageid) {
      console.log(this.villageid);
      this.villageid = villageid
      this.get_tableData()
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

