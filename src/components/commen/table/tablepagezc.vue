<template>
  <div class="tablepage">
    <div class="tb-header">
      <div class="tb-left">
        <slot name="tabletitle"></slot>
      </div>
      <div class="tb-right">
        显示 <select v-model="pagesize"
                @change="changsize">
          <option value="8">8</option>
          <option value="12">12</option>
          <option value="16">16</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>条
      </div>
    </div>
    <div class="tp-table"
         style="overflow-x:auto">
      <table border="1"
             cellspacing="0"
             cellpadding="0">
        <tr>
          <th rowspan="2">资产名称</th>
          <th rowspan="2">资产类型</th>
          <th colspan="15">资产台账表</th>
          <th colspan="7">资产经营表</th>
        </tr>
        <tr>
          <!-- 资产台账表 -->
          <th>单位</th>
          <th>数量</th>
          <th>单价</th>
          <th>品牌</th>
          <th>型号</th>
          <th>状态</th>
          <th>原值</th>
          <th>现值</th>
          <th>变动情况</th>
          <th>构建时间</th>
          <th>来源</th>
          <th>预计使用年限</th>
          <th>管理部门</th>
          <th>管理人员</th>
          <th>备注</th>
          <!-- 资产经营表 -->
          <th>状态</th>
          <th>承租人</th>
          <th>支付情况</th>
          <th>有无签订合同</th>
          <th>合同期限</th>
          <th>支付合同金额</th>
          <th>备注</th>
        </tr>
        <tr v-for="(data,index) in tableData"
            :key="index">
          <td v-for="(value ,index2) in data.values"
              :key="index2">
            {{value}}
          </td>
        </tr>
      </table>
    </div>
    <div class="pagebox">
      <div class="loader">
        共<span>{{length}}</span>条数据，<span>{{count}}</span>页
      </div>
      <div class="pageleft"
           @click.stop="changepageleft">
        《
      </div>
      <div class="pages">
        <select v-model="nowpage">
          <option v-for="(page,index) in count"
                  :key="index"
                  :value="page">
            {{page}}
          </option>
        </select>
      </div>
      <div class="pageright"
           @click.stop="changepageright">
        》
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "tablepagezc",
  props: {
    tableData: Array,
    thepage: Number,
    count: Number,
    length: Number
  },
  data () {
    return {
      nowpage: 1,
      pagesize: "8"
    }
  },
  methods: {
    changepageleft () {
      if (this.nowpage === 1) {
        this.$mytoast.toast("已是首页！", 3000)
      } else {
        this.nowpage--
      }
    },
    changepageright () {
      if (this.nowpage === this.count) {
        this.$mytoast.toast("已是尾页！", 3000)
      } else {
        this.nowpage++
      }
    },
    changsize () {
      this.nowpage = 1,
        this.$emit("changepage", this.nowpage, this.pagesize)
    },
    // godetail (id) {
    //   // alert(id);
    //   // alert(this.routepath)
    //   this.$router.push({
    //     path: `${this.routepath}/${id}`,
    //   })
    // }
  },
  watch: {
    nowpage () {
      this.$emit("changepage", this.nowpage, this.pagesize)
    }
  },
}
</script>
<style lang="less" scoped>
@import "assets/css/table3.less";
.pagebox {
  font-size: 1.5rem;
  display: flex;
  .loader {
    width: 50vw;
  }
  .pageleft,
  .pageright {
    width: 3rem;
    height: 3rem;
    text-align: center;
    line-height: 3rem;
    margin: 4px;
    border: 1px solid #cccccc;
    cursor: pointer;
    &:hover {
      color: @mainColor;
      border-color: @mainColor;
    }
  }
  .loader {
    height: 3rem;
    line-height: 3rem;
    margin: 4px;
    color: #aaaaaa;
    letter-spacing: 4px;
    span {
      color: @mainColor;
      font-size: 2rem;
    }
  }
  .pages {
    height: 3rem;
    width: 4rem;
    text-align: center;
    line-height: 3rem;
    margin: 4px;
    border: 1px solid #cccccc;
    color: @mainColor;
    cursor: pointer;
    select {
      width: 100%;
      height: 100%;
    }
  }
}
.tableimg {
  width: 4rem;
  height: 2rem;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 4px 4px @mainColor;
  }
}
</style>