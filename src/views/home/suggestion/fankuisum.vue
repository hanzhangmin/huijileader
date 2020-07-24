<template>
  <div>
    <!-- <gujia v-if="showgujia"
           :thenum="gj"></gujia>
    <gujia v-if="showgujia"
           :thenum="gj"></gujia> -->
    <div class="fankuisum"
         v-if="(!showgujia)||$store.state.level===1">
      {{time}}全区群众意见建议总量
      <span class="">已处理反馈：<b class="yes">{{fkycl}}</b>条</span>
      &emsp;&emsp; &emsp;&emsp;
      <span class="">未处理反馈：<b class="no">{{fkwcl}}</b>条</span>
    </div>
    <el-row :gutter="10"
            v-if="!showgujia">
      <el-col :span="6"
              v-for="item in items"
              :key="item.id">
        <card>
          <p slot="title"
             class="title">
            <span>{{item.name}}</span>
          </p>
          <p slot="main"
             class="main">
            <span class="yes">已处理：{{item.ycl}}条</span>/
            <span class="no">未处理：{{item.wcl}}条</span>
          </p>
        </card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { get_feedbacks, get_villages } from "network/request"
import card from "components/commen1/Card"
import gujia from 'components/commen1/gujia'
export default {
  name: "fankuisum",
  components: {
    card,
    gujia
  },
  data () {
    return {
      items: [
        {
          name: "name",
          id: "id",
          ycl: 12,
          wcl: 13,
        },
        {
          name: "name",
          id: "id",
          ycl: 12,
          wcl: 13,
        },
        {
          name: "name",
          id: "id",
          ycl: 12,
          wcl: 13,
        }, {
          name: "name",
          id: "id",
          ycl: 12,
          wcl: 13,
        },
        {
          name: "name",
          id: "id",
          ycl: 12,
          wcl: 13,
        },
        {
          name: "name",
          id: "id",
          ycl: 12,
          wcl: 13,
        },
        {
          name: "name",
          id: "id",
          ycl: 12,
          wcl: 13,
        },
        {
          name: "name",
          id: "id",
          ycl: 12,
          wcl: 13,
        }
      ],
      fkycl: 0,
      fkwcl: 0,
      showgujia: true,
      gj: 4
    }
  },
  computed: {
    time () {
      return (new Date()).getFullYear() + "年" + ((new Date()).getMonth() + 1) + "月"
    }
  },
  created () {
    // get_feedbacks({
    //   join: "town",
    //   s: {
    //     "town.id": {
    //       "$eq": Number(9)
    //     },
    //     // "processed": Boolean(processed)
    //   }
    // }).then(res => {
    //   console.log(res);
    // })
    // this.getfeedback()
  },
  methods: {
    getfeedback () {
      let promises = this.$store.state.towns.map(town => {
        return get_feedbacks({
          join: "town",
          s: {
            "town.id": {
              "$eq": Number(town.zhenid)
            },
            // "processed": Boolean(processed)
          }
        })
      })
      Promise.all(promises).then(posts => {
        console.log(posts);
      })
      // .then(res => {
      //   console.log(res);
      // })
    }
  },
}
</script>
<style lang="less" scoped>
.fankuisum {
  font-size: 20px;
  color: @gray1;
  // background-color: #ffffff;
  // margin-bottom: 10px;
  // border-radius: 4px;
  // .boxshadow();
  margin-bottom: 16px;
  span {
    color: @gray3;
    font-size: @fontsize15;
  }
}

// button {
//   padding: 5px;
//   border-radius: 5px;
//   margin: 0px 10px;
// }
.fkitems {
  width: 100%;
  display: flex;
  // display: grid;
  // grid-template-columns: repeat(4, auto);
  // grid-template-rows: repeat(2, auto);
  // grid-column-gap: 10px;
  // grid-row-gap: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
}
</style>
