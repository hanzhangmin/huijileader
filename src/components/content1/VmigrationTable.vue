<template>
  <div>
    <BaseCard>
      <div slot="header">
        <SearchBar @Search="Search" />
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
                           width="100">
          </el-table-column>
          <el-table-column prop="time"
                           sortable
                           label="迁移时间"
                           width="120">
          </el-table-column>
          <el-table-column prop="location"
                           label="迁移地"
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
              {{itemdata.name}}迁移信息

            </div>
            <div slot="body">
              <div class="cardcontent">
                迁移时间： <span>{{itemdata.time}}</span>
              </div>
              <div class="cardcontent">
                迁移地： <span>{{itemdata.location}}</span>
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
          </BaseCard2>
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
import { get_migraters } from 'network/request'
import { formatDate, isnull } from 'assets/js/myjs'
import BaseCard from "components/commen1/BaseCard"
import BaseCard2 from "components/commen1/BaseCard2"
import themask from "components/commen1/Mask/hzmMask"
import SearchBar from "./Vmigrationsearch"
export default {
  name: "VmigrationTable",
  components: {
    BaseCard,
    themask,
    BaseCard2,
    SearchBar
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
      time1: "",
      time2: "",
      type: ""
    }
  },
  created () {
    // this.showcard = true
  },
  methods: {
    get_tableData () {
      this.loading = true
      let s = {}
      s["village.id"] = { "$eq": Number(this.villageid) }
      s["migrationTime"] = {
        "$between": [this.time1, this.time2],
      }
      if (this.type !== "0") {
        s["type"] = this.type
      }
      get_migraters({
        limit: this.pageSize,
        page: this.currentPage,
        join: "village",
        sort: "migrationTime,DESC",
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
            let img = [];
            if (data.relatedDocuments != null) {
              // img = data.relatedDocuments.map(file => {
              //   return file.url
              // })
              data.relatedDocuments.forEach(element => {
                img.push(element.url);
              });
            }
            address: null
            return {
              id: data.id,
              index: index,
              sex: data.sex === 0 ? "男" : "女",
              time: isnull(data.migrationTime),
              name: isnull(data.name),
              location: isnull(data.migrationLocation),
              img: img,
            }
          })
        })
    },
    Search (villageid, type, time1, time2) {
      this.villageid = villageid
      this.time1 = time1
      this.time2 = time2
      this.type = type
      this.get_tableData()
    },
    handleClick (scope) {
      console.log(scope.index);
      this.itemdata = this.tableData[Number(scope.index)]
      this.showcard = true;
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

