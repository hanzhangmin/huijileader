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

          <el-table-column prop="phone"
                           label="联系方式"
                           width="140">
          </el-table-column>
          <el-table-column prop="address"
                           label="地址"
                           width="300">
          </el-table-column>
          <el-table-column prop="periodOfActivists"
                           sortable
                           label="成为积极分子"
                           width="160">
          </el-table-column>
          <el-table-column prop="periodOfDevelopmentObject"
                           sortable
                           label="成为发展对象"
                           width="160">
          </el-table-column>
          <el-table-column prop="periodOfProbationaryMember"
                           sortable
                           label="成为预备党员"
                           width="160">
          </el-table-column>
          <el-table-column prop="periodOfPartyMember"
                           sortable
                           label="转正"
                           width="120">
          </el-table-column>
          <el-table-column prop="duties"
                           label="职务"
                           width="200">
          </el-table-column>
          <el-table-column prop="lnauguralAddress"
                           label="就职单位"
                           width="200">
          </el-table-column>
          <el-table-column prop="partyOrganization"
                           label="党组织"
                           width="200">
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
    <!-- <div class="mask"
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
    </div> -->
  </div>
</template>
<script>
import { get_party_members } from 'network/request'
import { formatDate, isnull } from 'assets/js/myjs'
import BaseCard from "components/commen1/BaseCard"
import BaseCard2 from "components/commen1/BaseCard2"
import themask from "components/commen1/Mask/hzmMask"
import VillageTimeSearch from "./PartymemberSearch"
export default {
  name: "VmemberTable",
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
      // itemdata: {},
      loading: true,
      showcard: false,
      villageid: "",
      type: ""
    }
  },
  created () {
    // this.showcard = true
  },
  methods: {
    get_tableData () {
      this.loading = true
      let s = {}, join = "village"
      s["village.id"] = { "$eq": Number(this.villageid) }

      if (this.type != "0") {
        s["status.id"] = { "$eq": this.type }
        join = "village,status"
      }
      get_party_members({
        limit: this.pageSize,
        page: this.currentPage,
        join,
        s
      })
        .then(res => {
          console.log(res);
          this.loading = false
          // this.currentPage = res.pageCount
          this.total = res.total
          this.tableData.splice(0)
          this.tableData = res.data.map((data, index) => {
            let img
            if (data.image != null && (typeof data.image) != "object") {
              img = data.relatedDocuments.map(file => {
                return file.url
              })
            }
            return {
              id: data.id,
              index: index,
              education: isnull(data.education),
              duties: isnull(data.duties),
              name: isnull(data.name),
              address: isnull(data.address),
              phone: isnull(data.phone),
              partyOrganization: isnull(data.partyOrganization),
              lnauguralAddress: isnull(data.lnauguralAddress),
              periodOfProbationaryMember: isnull(data.periodOfProbationaryMember),
              periodOfPartyMember: isnull(data.periodOfPartyMember),
              periodOfDevelopmentObject: isnull(data.periodOfDevelopmentObject),
              periodOfActivists: isnull(data.periodOfActivists),
              img: img,
            }
          })
        })
    },
    villageSearch (villageid, type) {
      this.villageid = villageid
      this.type = type
      this.get_tableData()
    },
    // handleClick (scope) {
    //   console.log(scope.index);
    //   this.itemdata = this.tableData[Number(scope.index)]
    //   this.showcard = true
    // },
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

