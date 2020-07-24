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
                  style="width: 100%"
                  height="80vh">
          <!--
              position: isnull(data.position),
              footprint: isnull(data.footprint),
              explanation: isnull(data.explanation),
              img -->
          <el-table-column fixed
                           prop="name"
                           label="资源"
                           width="auto">
          </el-table-column>
          <el-table-column prop="footprint"
                           label="占地面积（平方千米）"
                           width="auto">
          </el-table-column>
          <el-table-column prop="position"
                           label="坐标"
                           width="auto">
          </el-table-column>
          <el-table-column prop="explanation"
                           label="详情"
                           width="auto">
          </el-table-column>
          <el-table-column prop="index"
                           fixed="right"
                           label="操作"
                           width="80">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)"
                         type="text"
                         size="small">查看照片</el-button>
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
          <el-image v-for="(file,index) in itemdata.img"
                    :key="'file'+index"
                    :src="file.url"
                    lazy></el-image>
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
import { get_resources } from 'network/request'
import { formatDate, isnull } from 'assets/js/myjs'
import BaseCard from "components/commen1/BaseCard"
import BaseCard2 from "components/commen1/BaseCard2"
import themask from "components/commen1/Mask/hzmMask"
import VillageSearch from "./ResourceSreach"
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
      get_resources({
        // fields: fields,
        limit: this.pageSize,
        page: this.page,
        join: "village,type",
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
            //             createdAt: "2019-01-02T14:32:25.000Z"
            // explanation: "某村谁的土地资源"



            let img
            if (data.image != null && (typeof data.image) != "object") {
              img = data.image.map(file => {
                return file.url
              })
            }
            return {
              id: data.id,
              index: index,
              name: isnull(data.name),
              position: isnull(data.position),
              footprint: isnull(data.footprint),
              explanation: isnull(data.explanation),
              img
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

