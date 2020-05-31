<template>
  <div>
    <div class="fankuisum">
      <h1>
        {{time}}全区群众意见建议总量
        <button @click.stop="gofklist(1,0)">已处理反馈：<span class="yes">{{fkycl}}</span>条</button>
        &emsp;&emsp; &emsp;&emsp;
        <button @click.stop="gofklist(0,0)">未处理反馈：<span class="no">{{fkwcl}}</span>条</button>
      </h1>
    </div>
    <div class="fkitems">
      <card v-for="item in items"
            :key="item.id">
        <h2 slot="title">
          <router-link :to="'/indexzhen/'+item.id">{{item.name}}</router-link>
        </h2>
        <!-- <p slot="main">
          <span class="yes">已处理：{{item.ycl}}条</span>/
          <span class="no">未处理：{{item.wcl}}条</span>
        </p> -->
        <p slot="main">
          <button @click.stop="gofklistz(1,item.id,item.name)"
                  class="yes">已处理：{{item.ycl}}条</button>/
          <button @click.stop="gofklistz(0,item.id,item.name)"
                  class="no">未处理：{{item.wcl}}条</button>
        </p>
      </card>
    </div>
    <div class="fkitems">
      <card v-for="item in items2"
            :key="item.id">
        <h2 slot="title">
          <router-link :to="'/indexzhen/'+item.id">{{item.name}}</router-link>
        </h2>
        <p slot="main">
          <button @click.stop="gofklistz(1,item.id,item.name)"
                  class="yes">已处理：{{item.ycl}}条</button>/
          <button @click.stop="gofklistz(0,item.id,item.name)"
                  class="no">未处理：{{item.wcl}}条</button>
        </p>
        <!-- <p slot="main">
          <span class="yes">已处理：{{item.ycl}}条</span>/
          <span class="no">未处理：{{item.wcl}}条</span>
        </p> -->
      </card>
    </div>
  </div>
</template>
<script>
import { post_fksum } from "network/request"
import card from "components/commen/card/card"
export default {
  name: "fankuisum",
  components: {
    card
  },
  data () {
    return {
      items: [],
      items2: [],
      fkycl: 0,
      fkwcl: 0
    }
  },
  computed: {
    time () {
      return (new Date()).getFullYear() + "年" + ((new Date()).getMonth() + 1) + "月"
    }
  },
  created () {
    post_fksum(0, this.$store.getters.theday)
      .then(res => {
        // console.log(res);
        // for (var j = 0, len1 = this.$store.state.zhensx.length; j < len1; j++) {
        for (let j = 0, len1 = 4; j < len1; j++) {
          for (let i = 0, len = res.data.length; i < len; i++) {
            if (res.data[i].name === this.$store.state.zhensx[j].zhenName) {
              let item = {
                name: this.$store.state.zhensx[j].zhenName,
                id: this.$store.state.zhensx[j].zhenid,
                ycl: res.data[i].ycl,
                wcl: res.data[i].wcl,
              }
              this.items.push(item)
            }
          }
          this.fkycl += res.data[j].ycl;
          this.fkwcl += res.data[j].wcl;
        }
        for (let j = 4, len1 = 8; j < len1; j++) {
          for (let i = 0, len = res.data.length; i < len; i++) {
            if (res.data[i].name === this.$store.state.zhensx[j].zhenName) {
              let item = {
                name: this.$store.state.zhensx[j].zhenName,
                id: this.$store.state.zhensx[j].zhenid,
                ycl: res.data[i].ycl,
                wcl: res.data[i].wcl,
              }
              this.items2.push(item)
            }
          }
          this.fkycl += res.data[j].ycl;
          this.fkwcl += res.data[j].wcl;
        }
      })
  },
  methods: {
    gofklist (type, zhenid) {
      this.$router.push({
        path: `/indexqu/qqfkindex/qqfklist/${type}/${zhenid}`,
      })
    },
    gofklistz (type, vid, zhenname) {
      this.$router.push({
        path: `/indexqu/qqfkindex/qqfklistz/${type}/${vid}/${zhenname}`,
      })
    }
  },
}
</script>
<style lang="less" scoped>
.fankuisum {
  span .yes {
    .yes();
  }
  span .no {
    .no();
  }
}
h1 {
  button {
    background-color: #ffffff;
    color: @mainColor;
    -webkit-transition: background-color 0.5s ease-in, color 0.5s ease-in;
    -moz-transition: background-color 0.5s ease-in, color 0.5s ease-in;
    transition: background-color 0.5s ease-in, color 0.5s ease-in;
    cursor: pointer;
    padding: 5px;
    border-radius: 5px;
    margin: 0px 1rem;
    font-size: 1.3rem;
    &:hover {
      background-color: @mainColor;
      // background-color: @mainColor;
      color: #ffffff;
    }
  }
}
.fkitems {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
}
each(@fitmobile, {
    @media screen and (min-width: @value) {
      .fkitems{
        height: 36rem;
      }
    }
  }

)
  each(@fitipad, {
    @media screen and (min-width: @value) {
       .fkitems{
        height: 18rem;
      }
    }
  }

)
  each(@fitpc, {
    @media screen and (min-width: @value) {
       .fkitems{
        height: 9rem;
      }
    }
  }

)
  a:hover {
  color: @mainColor;
}
</style>
