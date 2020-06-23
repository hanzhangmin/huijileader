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
        <tbody>
          <tr>
            <th v-for="(head,index) in thead"
                :key="index">{{head}}</th>
          </tr>
          <tr v-for="(data,index) in tableData"
              :key="index">
            <td v-for="(value ,index2) in data.values"
                :key="index2">
              {{value}}
            </td>
            <td>
              <span v-if="data.imgs.length==0">无</span>
              <viewer v-else
                      :images="data.imgs">
                <span v-for="(src,index3) in data.imgs"
                      :key="index3">
                  <img class="tableimg"
                       :src="src"
                       :key="src" />
                </span>
              </viewer>
            </td>
          </tr>
        </tbody>
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
  name: "tablepage2",
  props: {
    thead: Array,
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
@import "assets/css/table.less";
.pagebox {
  font-size: 1.5rem;
  display: flex;
  justify-content: right;
  .loader {
    flex: auto;
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