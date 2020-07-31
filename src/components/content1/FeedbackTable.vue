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
                  style="width: 100%;font-size:16px;"
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
                         size=" medium">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div slot="footer">
        <div v-if="showpageselect">
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
        <div v-else>
          共{{total}}条
        </div>
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
import { get_feedbacks, get_villages } from 'network/request'
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
      townid: "",
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
      showpageselect: true
    }
  },
  created () {
    // this.showcard = true
  },
  methods: {
    getfeedback_town () {
      this.loading = true
      get_villages({
        join: "town",
        fields: "id,name",
        s: {
          "town.id": {
            "$eq": Number(this.townid)
          }
        }
      }).then(res => {
        let promises = res.map(village => {

          let s = {
          }
          switch (this.processed) {
            case "true":
              s["processed"] = true
              break;
            case "false":
              s["processed"] = false
              break;
            default:
              break;
          }
          if (this.type != "6") {
            s["type"] = this.type
          }
          s["village.id"] = { "$eq": Number(village.id) }
          s["createdAt"] = {
            "$between": [new Date(this.time[0]).toISOString(), new Date(this.time[1]).toISOString()],
          }
          return get_feedbacks(
            {
              join: "village,villager",
              s: s
            }
          )
        })
        Promise.all(promises)
          .then(res => {
            console.log(res);
            let arr = []
            res.forEach(element => {
              arr.push(...element)
            });
            console.log(arr);
            this.total = arr.length
            this.tableData.splice(0)
            this.tableData = arr.map((feedback, index) => {
              let name = feedback.villager.name
              if (feedback.anonymous === true) {
                name: "匿名"
              }
              let img
              try {
                if (feedback.relatedDocuments != null) {
                  img = feedback.relatedDocuments.map(file => {
                    return file.url
                  })
                }
              } catch (error) {
                // console.log(error);
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
            this.loading = false
          })
      })
    },
    getfeedbacks () {
      this.loading = true
      let s = {
      }
      switch (this.processed) {
        case "true":
          s["processed"] = true
          break;
        case "false":
          s["processed"] = false
          break;
        default:
          break;
      }
      // if (this.processed != "0") {
      //   s["processed"] = this.processed
      // }
      if (this.type != "6") {
        s["type"] = this.type
      }
      if (this.villageid != "0") {
        s["village.id"] = { "$eq": Number(this.villageid) }
      }
      s["createdAt"] = {
        "$between": [new Date(this.time[0]).toISOString(), new Date(this.time[1]).toISOString()],
      }
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
            let name = feedback.villager.name
            if (feedback.anonymous === true) {
              name: "匿名"
            }
            let img
            try {
              if (feedback.relatedDocuments != null) {
                img = feedback.relatedDocuments.map(file => {
                  return file.url
                })
              }
            } catch (error) {
              // console.log(error);
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
    searchFeedback (townid, villageid, processed, type, time) {
      this.time = time;
      this.type = type;
      this.townid = townid;
      this.processed = processed;
      this.villageid = villageid;
      console.log(villageid);
      if (villageid === "0") {
        this.showpageselect = false
        this.getfeedback_town()
      } else {
        this.showpageselect = true
        this.getfeedbacks()
      }
    },
    handleClick (scope) {
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
  watch: {
    $route (to) {
      if (to.query) {
        if (to.query.townid) {
          this.showpageselect = false
        }
      }
    }
  },
}
</script>

