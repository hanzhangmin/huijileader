(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d9aaa19"],{"3bcb":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"searchbox"},[a("div",{staticClass:"searchobj"},[a("label",{attrs:{for:""}},[e._v(" "+e._s(e.areaname)+"： "),0!=e.$store.state.level?a("el-select",{attrs:{disabled:"",size:e.size,placeholder:"请选择镇/街道"},model:{value:e.townid,callback:function(t){e.townid=t},expression:"townid"}},e._l(e.towns,(function(e){return a("el-option",{key:"town"+e.id,attrs:{label:e.name,value:e.id}})})),1):a("el-select",{attrs:{size:e.size,placeholder:"请选择镇/街道"},model:{value:e.townid,callback:function(t){e.townid=t},expression:"townid"}},e._l(e.towns,(function(e){return a("el-option",{key:"town"+e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("label",{attrs:{for:""}},[e._v(" 村： "),a("el-select",{attrs:{size:e.size,placeholder:"请选择行政村"},model:{value:e.villageid,callback:function(t){e.villageid=t},expression:"villageid"}},e._l(e.villages,(function(e){return a("el-option",{key:"village"+e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("label",{attrs:{for:""}},[e._v(" 时间段： "),a("el-date-picker",{attrs:{size:e.size,type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",change:"changetime","picker-options":e.pickerOptions},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}})],1)]),a("div",[a("el-button",{attrs:{type:"primary",size:e.size},on:{click:e.onSubmit}},[e._v("搜索")])],1)])},n=[],l=(a("d81d"),a("b0c0"),a("a9e3"),a("d3b7"),a("25f0"),a("0c58")),s=a("1bab"),o={name:"SearchFeedback",data:function(){return{size:"medium",townid:"0",villages:[],villageid:"0",time:"",pickerOptions:{shortcuts:[{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近半年",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-15552e6),e.$emit("pick",[a,t])}},{text:"最近一年",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-31536e6),e.$emit("pick",[a,t])}}],disabledDate:function(e){return e.getTime()>(new Date).getTime()}}}},computed:{areaid:function(){return Number(this.$store.state.areaid)},areaname:function(){return this.$store.state.areaname},towns:function(){var e=this.$store.state.towns.map((function(e){return{id:e.zhenid.toString(),name:e.zhenName}}));return e}},created:function(){this.townid=this.$store.state.townid.toString(),this.villageid=this.$store.state.villageid.toString(),this.getvillages(this.townid)},methods:{gettowns:function(e){Object(s["r"])({join:"area",s:{"area.id":{$eq:Number(e)}}}).then((function(e){console.log(e)}))},getvillages:function(e){var t=this;Object(s["z"])({join:"town",s:{"town.id":{$eq:Number(e)}}}).then((function(e){if(0!=e.length){t.villageid=e[0].id.toString();var a=new Date,i=new Date;i.setTime(i.getTime()-15768e7),t.time=[i,a],t.onSubmit()}t.villages=e.map((function(e){return{id:e.id.toString(),name:e.name}}))}))},onSubmit:function(){this.$emit("Search",this.villageid,Object(l["a"])(this.time[0],"yyyy-MM-dd"),Object(l["a"])(this.time[1],"yyyy-MM-dd"))}},watch:{townid:function(e){this.getvillages(this.townid)}}},r=o,c=a("2877"),d=Object(c["a"])(r,i,n,!1,null,null,null);t["a"]=d.exports},d67c:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("VmeetingTable")},n=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("BaseCard",[a("div",{attrs:{slot:"header"},slot:"header"},[a("VillageTimeSearch",{on:{Search:e.villageSearch}})],1),a("div",{attrs:{slot:"body"},slot:"body"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%","font-size":"16px"},attrs:{type:"expand",data:e.tableData,border:"",height:"80vh"}},[a("el-table-column",{attrs:{fixed:"",prop:"name",label:"标题",width:"200"}}),a("el-table-column",{attrs:{prop:"time",sortable:"",label:"时间",width:"120"}}),a("el-table-column",{attrs:{prop:"location",label:"地点",width:"200"}}),a("el-table-column",{attrs:{prop:"content",label:"内容",width:"auto"}}),a("el-table-column",{attrs:{prop:"index",fixed:"right",label:"操作",width:"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:" medium"},on:{click:function(a){return e.handleClick(t.row)}}},[e._v("详情")])]}}])})],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[16,20,50,100],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.showcard,expression:"showcard"}],staticClass:"mask",on:{click:e.hidenMask}},[a("div",{staticClass:"centerbody"},[e._t("centerbody",[a("BaseCard2",[a("div",{attrs:{slot:"header"},slot:"header"},[e._v(" "+e._s(e.itemdata.name)+" "),a("span",{staticClass:"littlespan"},[e._v(e._s(e.itemdata.time))])]),a("div",{attrs:{slot:"body"},slot:"body"},[a("div",{staticClass:"cardcontent"},[e._v(" 活动内容： "),a("span",[e._v(e._s(e.itemdata.content))]),a("br")]),a("div",{staticClass:"cardcontent"},[e._v(" 相关图片： "),e.itemdata.img.length>0?a("viewer",{attrs:{images:e.itemdata.img}},e._l(e.itemdata.img,(function(t,i){return a("div",{key:i,staticClass:"img"},[a("img",{attrs:{src:t,onerror:e.errorImg}})])})),0):a("span",[e._v("无")])],1)])])])],2)])],1)},s=[],o=(a("4160"),a("d81d"),a("a434"),a("b0c0"),a("a9e3"),a("159b"),a("1bab")),r=a("0c58"),c=a("7ebd"),d=a("ea2c"),u=a("1b72"),m=a("3bcb"),h={name:"VmettingTable",components:{BaseCard:c["a"],themask:u["a"],BaseCard2:d["a"],VillageTimeSearch:m["a"]},data:function(){return{pageSize:16,currentPage:1,pageCount:1,total:0,tableData:[],itemdata:{img:[]},loading:!0,showcard:!1,villageid:"",time1:"",time2:""}},created:function(){},methods:{get_tableData:function(){var e=this;this.loading=!0;var t={};t["village.id"]={$eq:Number(this.villageid)},t["time"]={$between:[this.time1,this.time2]},Object(o["x"])({limit:this.pageSize,page:this.currentPage,join:"village",sort:"time,DESC",s:t}).then((function(t){console.log(t),e.loading=!1,e.total=t.total,e.tableData.splice(0),e.tableData=t.data.map((function(e,t){var a=[];return null!=e.relatedDocuments&&e.relatedDocuments.forEach((function(e){a.push(e.url)})),{id:e.id,index:t,content:Object(r["c"])(e.content),time:Object(r["c"])(e.time),name:Object(r["c"])(e.name),location:Object(r["c"])(e.location),img:a}}))}))},villageSearch:function(e,t,a){this.villageid=e,this.time1=t,this.time2=a,this.get_tableData()},handleClick:function(e){console.log(e.index),this.itemdata=this.tableData[Number(e.index)],this.showcard=!0},handleSizeChange:function(e){this.pageSize=Number(e),this.currentPage=1,this.page=1,this.get_tableData()},handleCurrentChange:function(e){this.currentPage=Number(e),this.page=Number(e),this.get_tableData()},hidenMask:function(){this.showcard=!1}}},g=h,b=a("2877"),p=Object(b["a"])(g,l,s,!1,null,null,null),v=p.exports,f={name:"Vmetting",components:{VmeetingTable:v}},w=f,k=Object(b["a"])(w,i,n,!1,null,null,null);t["default"]=k.exports}}]);