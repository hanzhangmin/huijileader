(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9373dbea"],{"421a":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v(" "+e._s(e.areaname)+": "),1!=e.$store.state.level?a("el-select",{attrs:{disabled:"",size:e.size,placeholder:"请选择镇/街道"},model:{value:e.townid,callback:function(t){e.townid=t},expression:"townid"}},e._l(e.towns,(function(e){return a("el-option",{key:"town"+e.id,attrs:{label:e.zhenName,value:e.zhenid}})})),1):a("el-select",{attrs:{size:e.size,placeholder:"请选择镇/街道"},model:{value:e.townid,callback:function(t){e.townid=t},expression:"townid"}},e._l(e.towns,(function(e){return a("el-option",{key:"town"+e.id,attrs:{label:e.name,value:e.id}})})),1),a("el-select",{attrs:{size:e.size,placeholder:"请选择行政村"},model:{value:e.villageid,callback:function(t){e.villageid=t},expression:"villageid"}},e._l(e.villages,(function(e){return a("el-option",{key:"village"+e.id,attrs:{label:e.name,value:e.id}})})),1),a("el-button",{attrs:{type:"primary",size:e.size},on:{click:e.onSubmit}},[e._v("搜索")])],1)},n=[],l=(a("d81d"),a("b0c0"),a("a9e3"),a("d3b7"),a("25f0"),a("1bab")),r={name:"SearchFeedback",data:function(){return{size:"mini",townid:"0",villages:[],villageid:"0"}},computed:{areaid:function(){return Number(this.$store.state.areaid)},areaname:function(){return this.$store.state.areaname},towns:function(){var e=this.$store.state.towns.map((function(e){return{id:e.zhenid.toString(),name:e.zhenName}}));return e}},created:function(){this.townid=this.$store.state.townid.toString(),this.villageid=this.$store.state.villageid.toString(),this.getvillages(this.townid),this.onSubmit()},methods:{gettowns:function(e){Object(l["p"])({join:"area",s:{"area.id":{$eq:Number(e)}}}).then((function(e){console.log(e)}))},getvillages:function(e){var t=this;Object(l["w"])({join:"town",s:{"town.id":{$eq:Number(e)}}}).then((function(e){t.villageid=e[0].id.toString(),t.villages=e.map((function(e){return{id:e.id.toString(),name:e.name}}))}))},onSubmit:function(){console.log(this.villageid),this.$emit("villageSearch",this.villageid)}},watch:{townid:function(e){this.villageid="",this.getvillages(this.townid)}}},s=r,o=a("2877"),d=Object(o["a"])(s,i,n,!1,null,null,null);t["a"]=d.exports},"7a9b":function(e,t,a){},"7ebd":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[e._t("header")],2),a("div",{staticClass:"card-body"},[e._t("body")],2),a("div",{staticClass:"card-footer"},[e._t("footer")],2)])},n=[],l={name:"BaseCard"},r=l,s=(a("d13f"),a("2877")),o=Object(s["a"])(r,i,n,!1,null,"2f50af30",null);t["a"]=o.exports},a2ef:function(e,t,a){"use strict";var i=a("7a9b"),n=a.n(i);n.a},a434:function(e,t,a){"use strict";var i=a("23e7"),n=a("23cb"),l=a("a691"),r=a("50c4"),s=a("7b0b"),o=a("65f0"),d=a("8418"),c=a("1dde"),u=a("ae40"),h=c("splice"),g=u("splice",{ACCESSORS:!0,0:0,1:2}),b=Math.max,f=Math.min,v=9007199254740991,p="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!h||!g},{splice:function(e,t){var a,i,c,u,h,g,m=s(this),w=r(m.length),S=n(e,w),_=arguments.length;if(0===_?a=i=0:1===_?(a=0,i=w-S):(a=_-2,i=f(b(l(t),0),w-S)),w+a-i>v)throw TypeError(p);for(c=o(m,i),u=0;u<i;u++)h=S+u,h in m&&d(c,u,m[h]);if(c.length=i,a<i){for(u=S;u<w-i;u++)h=u+i,g=u+a,h in m?m[g]=m[h]:delete m[g];for(u=w;u>w-i+a;u--)delete m[u-1]}else if(a>i)for(u=w-i;u>S;u--)h=u+i-1,g=u+a-1,h in m?m[g]=m[h]:delete m[g];for(u=0;u<a;u++)m[u+S]=arguments[u+2];return m.length=w-i+a,c}})},d04b:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("VillagerTable")},n=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("BaseCard",[a("div",{attrs:{slot:"header"},slot:"header"},[a("VillageSearch",{on:{villageSearch:e.villageSearch}})],1),a("div",{attrs:{slot:"body"},slot:"body"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{type:"expand",data:e.tableData,border:"",height:"80vh"}},[a("el-table-column",{attrs:{fixed:"",prop:"name",label:"姓名",width:"150"}}),a("el-table-column",{attrs:{prop:"sex",label:"性别",width:"120"}}),a("el-table-column",{attrs:{prop:"phone",sortable:"",label:"联系方式",width:"120"}}),a("el-table-column",{attrs:{prop:"address",label:"地址",width:"auto"}})],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[16,20,50,100],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])],1)},r=[],s=(a("d81d"),a("a434"),a("b0c0"),a("a9e3"),a("1bab")),o=a("0c58"),d=a("7ebd"),c=a("ea2c"),u=a("1b72"),h=a("421a"),g={name:"villagerTable",components:{BaseCard:d["a"],themask:u["a"],BaseCard2:c["a"],VillageSearch:h["a"]},data:function(){return{pageSize:16,currentPage:1,pageCount:1,total:0,tableData:[],itemdata:{},loading:!0,showcard:!1,villageid:""}},created:function(){},methods:{get_tableData:function(e){var t=this;this.loading=!0,Object(s["v"])({limit:this.pageSize,page:this.currentPage,join:"village",s:{"village.id":{$eq:Number(e)}}}).then((function(e){console.log(e),t.loading=!1,t.total=e.total,t.tableData.splice(0),t.tableData=e.data.map((function(e,t){return{id:e.id,index:t,name:Object(o["c"])(e.name),sex:0===e.sex?"男":"女",phone:Object(o["c"])(e.phone),address:Object(o["c"])(e.address)}}))}))},villageSearch:function(e){console.log(e),this.villageid=e,this.get_tableData(e)},handleClick:function(e){console.log(e.index),this.itemdata=this.tableData[Number(e.index)],this.showcard=!0},handleSizeChange:function(e){this.pageSize=Number(e),this.currentPage=1,this.page=1,this.get_tableData(this.villageid)},handleCurrentChange:function(e){this.currentPage=Number(e),this.page=Number(e),this.get_tableData(this.villageid)},hidenMask:function(){this.showcard=!1}}},b=g,f=a("2877"),v=Object(f["a"])(b,l,r,!1,null,null,null),p=v.exports,m={name:"Villager",components:{VillagerTable:p}},w=m,S=Object(f["a"])(w,i,n,!1,null,null,null);t["default"]=S.exports},d13f:function(e,t,a){"use strict";var i=a("f25b"),n=a.n(i);n.a},d81d:function(e,t,a){"use strict";var i=a("23e7"),n=a("b727").map,l=a("1dde"),r=a("ae40"),s=l("map"),o=r("map");i({target:"Array",proto:!0,forced:!s||!o},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},ea2c:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[e._t("header")],2),a("div",{staticClass:"card-body"},[e._t("body")],2)])},n=[],l={name:"BaseCard2"},r=l,s=(a("a2ef"),a("2877")),o=Object(s["a"])(r,i,n,!1,null,"054593fc",null);t["a"]=o.exports},f25b:function(e,t,a){}}]);