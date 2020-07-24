<template>
  <div>

    <BaseCard>
      <div slot="header">
        <SearchFeedback @searchFeedback="searchFeedback" />
      </div>
      <div slot="body">
        <el-table type="expand"
                  :data="tableData"
                  border
                  v-loading="loading"
                  style="width: 100%"
                  height="80vh">
          <el-table-column fixed
                           prop="title"
                           label="意见建议标题"
                           width="150">
          </el-table-column>
          <el-table-column prop="name"
                           label="建议人"
                           width="120">
          </el-table-column>
          <el-table-column prop="time"
                           sortable
                           label="提交时间"
                           width="120">
          </el-table-column>
          <el-table-column prop="content"
                           label="内容"
                           width="auto">
          </el-table-column>
          <el-table-column prop="handler"
                           label="处理人"
                           width="120">
          </el-table-column>
          <el-table-column prop="status"
                           label="状态"
                           width="120">
          </el-table-column>
          <el-table-column prop="index"
                           fixed="right"
                           label="操作"
                           width="60">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)"
                         type="text"
                         size="small">查看</el-button>
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
    </div>
  </div>
</template>
<script>
import { get_feedbacks } from 'network/request'
import { formatDate, isnull } from 'assets/js/myjs'
import BaseCard from "components/commen1/BaseCard"
import BaseCard2 from "components/commen1/BaseCard2"
import themask from "components/commen1/Mask/hzmMask"
import SearchFeedback from "./FeedbackSearch"
export default {
  name: "FeedbackTable",
  components: {
    BaseCard,
    themask,
    BaseCard2,
    SearchFeedback
  },
  data () {
    return {
      pageSize: 16,
      currentPage: 1,
      total: 0,
      pageCount: 1,
      tableData: [],
      itemdata: {},
      loading: true,
      showcard: false,
      time: "",
      type: "",
      processed: "",
      villageid: "",
    }
  },
  created () {
    // this.showcard = true
  },
  methods: {
    getfeedbacks () {
      this.loading = true
      let s = {
      }
      if (this.processed != "0") {
        s["processed"] = Boolean(this.processed)
      }
      if (this.type != "6") {
        s["type"] = Number(this.type)
      }
      s["village.id"] = { "$eq": Number(this.villageid) }
      s["createdAt"] = {
        "$between": [new Date(this.time[0]).toISOString(), new Date(this.time[1]).toISOString()],
      }
      s["village.id"]
      get_feedbacks({
        limit: this.pageSize,
        page: this.currentPage,
        join: "village,villager,handler",
        s: s
      })
        .then(res => {
          console.log(res);
          this.loading = false
          this.pageCount = res.pageCount
          this.total = res.total
          this.tableData.splice(0)
          this.tableData = res.data.map((feedback, index) => {
            console.log(index);
            let name = feedback.villager.name
            if (feedback.anonymous === true) {
              name: "匿名"
            }
            let img
            if (feedback.relatedDocuments != null) {
              img = feedback.relatedDocuments.map(file => {
                return file.url
              })
            }
            let status = ""
            switch (feedback.status) {
              case 0:
                status = "村级处理"
                break;
              case 1:
                status = "镇级处理"
                break;
              case 2:
                status = "区级处理"
                break;
              default:
                status = "--"
                break;
            }
            let handler = "处理中..."
            if (feedback.handler != null) {
              handler = isnull(feedback.handler.name)
            }
            return {
              id: feedback.id,
              index: index,
              title: isnull(feedback.title),
              name: isnull(name),
              time: formatDate(new Date(feedback.createdAt), "yyyy-MM-dd"),
              content: isnull(feedback.content),
              status: status,
              handler: handler,
              handlRes: isnull(feedback.handlRes),
              upMessage: isnull(feedback.upMessage),//向上级反馈附带信息
              downMessage: isnull(feedback.downMessage),//退回反馈附带信息
              img: img
            }
          })
        })
    },
    searchFeedback (villageid, processed, type, time) {
      this.time = time
      this.type = type
      this.processed = processed
      this.villageid = villageid
      this.getfeedbacks()
    },
    handleClick (scope) {
      // this.$showMask.showMask()
      console.log(scope.index);
      this.itemdata = this.tableData[Number(scope.index)]
      this.showcard = true

    },
    handleSizeChange (val) {
      this.pageSize = Number(val)
      this.page = 1
      this.getfeedbacks()
    },
    handleCurrentChange (val) {
      this.currentPage = Number(val)
      this.page = Number(val)
      this.getfeedbacks()
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    },
    hidenMask () {
      this.showcard = false
    }
  },
}
</script>

