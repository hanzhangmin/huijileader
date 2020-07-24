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
          <el-table-column fixed
                           prop="name"
                           label="资产"
                           width="300">
          </el-table-column>
          <el-table-column label="非经营表">
            <el-table-column prop="quantity"
                             label="数量"
                             width="auto">
            </el-table-column>
            <el-table-column prop="unitOfMeasurement"
                             label="单位"
                             width="auto">
            </el-table-column>
            <el-table-column prop="unitPrice"
                             label="单价(元)"
                             width="auto">
            </el-table-column>
            <el-table-column prop="brand"
                             label="品牌"
                             width="100">
            </el-table-column>
            <el-table-column prop="sizeAndModel"
                             label="规格型号"
                             width="100">
            </el-table-column>

            <el-table-column prop="presentValue"
                             label="现今价值"
                             width="auto">
            </el-table-column>
            <el-table-column prop="estimatedYears"
                             label="预计年限"
                             width="auto">
            </el-table-column>
            <el-table-column prop="creationTime"
                             label="构建时间"
                             width="100">
            </el-table-column>
            <el-table-column prop="source"
                             label="产品来源"
                             width="auto">
            </el-table-column>
            <el-table-column prop="changes"
                             label="变动情况"
                             width="auto">
            </el-table-column>
            <el-table-column prop="productStatus"
                             label="产品状态"
                             width="auto">
            </el-table-column>
            <el-table-column prop="useDepartmentsAndUser"
                             label="使用部门及使用者"
                             width="200">
            </el-table-column>
            <el-table-column prop="remarks"
                             label="备注"
                             width="auto">
            </el-table-column>
          </el-table-column>

          <el-table-column label="经营表">
            <el-table-column prop="amount"
                             label="合同金额"
                             width="auto">
            </el-table-column>
            <el-table-column prop="contractSigned"
                             label="是否签订合同"
                             width="auto">
            </el-table-column>
            <el-table-column prop="contractStatus"
                             label="合同状态"
                             width="auto">
            </el-table-column>
            <el-table-column prop="durationOfCooperation"
                             label="合同期限"
                             width="200">
            </el-table-column>
            <el-table-column prop="lessee"
                             label="承租人"
                             width="200">
            </el-table-column>
            <el-table-column prop="paymentStatus"
                             label="支付状态"
                             width="200">
            </el-table-column>
            <el-table-column prop="remarks"
                             label="备注"
                             width="auto">
            </el-table-column>
          </el-table-column>

          <!-- <el-table-column prop="index"
                           fixed="right"
                           label="操作"
                           width="80">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)"
                         type="text"
                         size="small">查看照片</el-button>
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
import { get_assetss } from 'network/request'
import { formatDate, isnull } from 'assets/js/myjs'
import BaseCard from "components/commen1/BaseCard"
import BaseCard2 from "components/commen1/BaseCard2"
import themask from "components/commen1/Mask/hzmMask"
import VillageSearch from "./AssetsSreach"
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
      get_assetss({
        // fields: fields,
        limit: this.pageSize,
        page: this.page,
        join: "village,operatingAssets,nonOperatingAssets",
        s: {
          "village.id": {
            "$eq": Number(this.villageid)
          },
          // "type.id": {
          //   "$eq": this.type
          // }
        },
      })
        .then(res => {
          console.log(res);
          this.loading = false
          // this.currentPage = res.pageCount
          this.total = res.total
          this.tableData.splice(0)
          this.tableData = res.data.map((data, index) => {
            let operatingAssets = {
              amount: "--",
              contractSigned: "--",
              contractStatus: "--",
              createdAt: "--",
              durationOfCooperation: "--",
              id: "--",
              lessee: "--",
              paymentStatus: "--",
              relatedDocuments: "--",
              remarks: "--",
            },
              nonOperatingAssets = {
                brand: "--",
                changes: "--",
                createdAt: "--",
                creationTime: "--",
                estimatedYears: "--",
                presentValue: "--",
                productStatus: "--",
                quantity: "--",
                remarks: "--",
                sizeAndModel: "--",
                source: "--",
                unitOfMeasurement: "--",
                unitPrice: "--",
                useDepartmentsAndUser: "--",
              }
            if (data.operatingAssets != null) {
              for (const [k, v] of Object.entries(data.operatingAssets)) {
                operatingAssets[k.toString()] = isnull(v)
              }
              if (data.operatingAssets.contractSigned === true) {
                operatingAssets.contractSigned = "签订合同"
              } else {
                operatingAssets.contractSigned = "未签订合同"
              }
              delete operatingAssets["id"]
            }

            if (data.nonOperatingAssets != null) {
              console.log(1111111111111);
              for (const [k, v] of Object.entries(data.nonOperatingAssets)) {
                nonOperatingAssets[k.toString()] = isnull(v)
              }
              delete nonOperatingAssets["id"]
            }
            return {
              id: data.id,
              index: index,
              name: isnull(data.name),
              ...operatingAssets,
              ...nonOperatingAssets
            }
          })
          console.log(this.tableData);

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

