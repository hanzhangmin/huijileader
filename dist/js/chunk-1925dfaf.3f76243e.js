(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1925dfaf"],{"421a":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"searchbox"},[a("div",{staticClass:"searchobj"},[a("label",{attrs:{for:""}},[e._v(" "+e._s(e.areaname)+": "),0!=e.$store.state.level?a("el-select",{attrs:{disabled:"",size:e.size,placeholder:"请选择镇/街道"},model:{value:e.townid,callback:function(t){e.townid=t},expression:"townid"}},e._l(e.towns,(function(e){return a("el-option",{key:"town"+e.id,attrs:{label:e.name,value:e.id}})})),1):a("el-select",{attrs:{size:e.size,placeholder:"请选择镇/街道"},model:{value:e.townid,callback:function(t){e.townid=t},expression:"townid"}},e._l(e.towns,(function(e){return a("el-option",{key:"town"+e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("label",{attrs:{for:""}},[e._v(" 村： "),a("el-select",{attrs:{size:e.size,placeholder:"请选择行政村"},model:{value:e.villageid,callback:function(t){e.villageid=t},expression:"villageid"}},e._l(e.villages,(function(e){return a("el-option",{key:"village"+e.id,attrs:{label:e.name,value:e.id}})})),1)],1)]),a("div",[a("el-button",{attrs:{type:"primary",size:e.size},on:{click:e.onSubmit}},[e._v("搜索")])],1)])},n=[],o=(a("d81d"),a("b0c0"),a("a9e3"),a("d3b7"),a("25f0"),a("1bab")),r={name:"SearchFeedback",data:function(){return{size:"medium",townid:"0",villages:[],villageid:"0"}},computed:{areaid:function(){return Number(this.$store.state.areaid)},areaname:function(){return this.$store.state.areaname},towns:function(){var e=this.$store.state.towns.map((function(e){return{id:e.zhenid.toString(),name:e.zhenName}}));return e}},created:function(){this.townid=this.$store.state.townid.toString(),this.villageid=this.$store.state.villageid.toString(),this.getvillages(this.townid)},methods:{gettowns:function(e){Object(o["r"])({join:"area",s:{"area.id":{$eq:Number(e)}}}).then((function(e){console.log(e)}))},getvillages:function(e){var t=this;Object(o["z"])({join:"town",s:{"town.id":{$eq:Number(e)}}}).then((function(e){0!=e.length&&(t.villageid=e[0].id.toString(),t.onSubmit()),t.villages=e.map((function(e){return{id:e.id.toString(),name:e.name}}))}))},onSubmit:function(){this.$emit("villageSearch",this.villageid)}},watch:{townid:function(e){this.villageid="",this.getvillages(this.townid)}}},s=r,l=a("2877"),c=Object(l["a"])(s,i,n,!1,null,null,null);t["a"]=c.exports},"480a":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"bar01",staticClass:"mycharts"})},n=[],o=(a("b0c0"),{name:"bar01",props:{chartdata:Object},mounted:function(){this.drawLine()},methods:{drawLine:function(){var e=this.$echarts.init(this.$refs.bar01);e.showLoading();var t=this;e.setOption({title:{text:t.chartdata.name},xAxis:{data:t.chartdata.xAxisdata,nameTextStyle:{color:"#888888"},nameRotate:"30",boundaryGap:!1,axisLine:{lineStyle:{color:"#999"}},axisTick:{lineStyle:{color:"#999"}},splitLine:{show:!0}},tooltip:{trigger:"axis",axisPointer:{type:"shadow",label:{show:!1}}},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!0},magicType:{show:!0,type:["pie","funnel"]}}},yAxis:{type:"value",name:"条",splitNumber:1,axisLine:{lineStyle:{color:"#999"}},axisTick:{lineStyle:{color:"#999"}}},series:[{barMaxWidth:20,name:t.chartdata.seriesname,type:"bar",data:t.chartdata.seriesdata}],color:["#224abe","#3265ff","#6c91ff","#9bb4ff"]}),e.hideLoading()}}}),r=o,s=a("2877"),l=Object(s["a"])(r,i,n,!1,null,null,null);t["a"]=l.exports},"907a":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"bar06",staticClass:"mycharts"})},n=[],o=(a("b0c0"),{name:"bar06",props:{name:String,name1:{type:String,default:"万元"},source:Array},mounted:function(){this.drawLine()},methods:{drawLine:function(){var e=this.$echarts.init(this.$refs.bar06);console.log(this.source),e.showLoading();var t=this;e.setOption({title:{text:t.name},legend:{},tooltip:{trigger:"axis",axisPointer:{type:"shadow",label:{show:!1}}},dataset:{source:t.source},xAxis:{type:"category",axisLine:{lineStyle:{color:"#999"}},axisTick:{lineStyle:{color:"#999"}},splitLine:{show:!0}},yAxis:{name:t.name1,splitNumber:1,axisLine:{lineStyle:{color:"#999"}},axisTick:{lineStyle:{color:"#999"}}},series:[{type:"bar"},{type:"bar"}],color:["#224abe","orange"]}),e.hideLoading()}}}),r=o,s=a("2877"),l=Object(s["a"])(r,i,n,!1,null,"1138170c",null);t["a"]=l.exports},"948d":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("BaseCard2",[a("div",{attrs:{slot:"header"},slot:"header"},[a("villageSearch",{on:{searchFeedback:e.Search}})],1),a("div",{attrs:{slot:"body"},slot:"body"},[a("div",{staticClass:"flexbox"},[a("div",{staticClass:"flexsize1"},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{height:"400px"}},[a("pie02",{key:e.reloadpiepro,attrs:{pie02data:e.piedatapro}})],1)]),a("div",{staticClass:"flexsize1"},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{height:"400px"}},[a("bar01",{key:e.reloadbar,attrs:{chartdata:e.chartdatabar}})],1)])])])]),0===e.$store.state.level?a("SuggestionArea"):e._e()],1)},n=[],o=(a("4160"),a("a9e3"),a("159b"),a("1bab")),r=a("7ebd"),s=a("ea2c"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"searchbox"},[a("div",{staticClass:"searchobj"},[a("label",{attrs:{for:""}},[e._v(" "+e._s(e.areaname)+": "),0!=e.$store.state.level?a("el-select",{attrs:{disabled:"",size:e.size,placeholder:"请选择镇/街道"},model:{value:e.townid,callback:function(t){e.townid=t},expression:"townid"}},e._l(e.towns,(function(e){return a("el-option",{key:"town"+e.id,attrs:{label:e.name,value:e.id}})})),1):a("el-select",{attrs:{size:e.size,placeholder:"请选择镇/街道"},model:{value:e.townid,callback:function(t){e.townid=t},expression:"townid"}},e._l(e.towns,(function(e){return a("el-option",{key:"town"+e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("label",{attrs:{for:""}},[e._v(" 村： "),a("el-select",{attrs:{size:e.size,placeholder:"请选择行政村"},model:{value:e.villageid,callback:function(t){e.villageid=t},expression:"villageid"}},e._l(e.villages,(function(e){return a("el-option",{key:"village"+e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("label",{attrs:{for:""}},[e._v(" 时间段： "),a("el-date-picker",{attrs:{size:e.size,type:"monthrange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始月份","end-placeholder":"结束月份","picker-options":e.pickerOptions,change:"changetime"},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}})],1)]),a("div",[a("el-button",{attrs:{type:"primary",size:e.size},on:{click:e.onSubmit}},[e._v("搜索")])],1)])},c=[],d=(a("d81d"),a("b0c0"),a("d3b7"),a("25f0"),{name:"SearchFeedback",data:function(){return{size:"medium",townid:"0",villages:[],villageid:"0",time:"",pickerOptions:{shortcuts:[{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近半年",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-15552e6),e.$emit("pick",[a,t])}},{text:"最近一年",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-31536e6),e.$emit("pick",[a,t])}}],disabledDate:function(e){var t=Date.now();return e.getTime()>=t}}}},computed:{areaid:function(){return Number(this.$store.state.areaid)},areaname:function(){return this.$store.state.areaname},towns:function(){var e=this.$store.state.towns.map((function(e){return{id:e.zhenid.toString(),name:e.zhenName}}));return e}},created:function(){this.townid=this.$store.state.townid.toString(),this.villageid=this.$store.state.villageid.toString(),this.getvillages(this.townid)},methods:{gettowns:function(e){Object(o["r"])({join:"area",s:{"area.id":{$eq:Number(e)}}}).then((function(e){console.log(e)}))},getvillages:function(e){var t=this;Object(o["z"])({join:"town",s:{"town.id":{$eq:Number(e)}}}).then((function(e){if(0!=e.length){t.villageid=e[0].id.toString();var a=new Date,i=new Date;i.setTime(i.getTime()-2592e6),t.time=[i,a],t.onSubmit()}t.villages=e.map((function(e){return{id:e.id.toString(),name:e.name}}))}))},onSubmit:function(){this.$emit("searchFeedback",this.villageid,this.time)}},watch:{townid:function(e){this.getvillages(this.townid)},time:function(e){}}}),u=d,h=a("2877"),m=Object(h["a"])(u,l,c,!1,null,null,null),g=m.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"pie01",staticClass:"mycharts"})},v=[],b={name:"pie01",props:{pie01data:Object},mounted:function(){this.drawLine()},methods:{drawLine:function(){var e=this.$echarts.init(this.$refs.pie01);e.showLoading();var t=this;console.log(t.pie01data),e.setOption({title:{text:t.pie01data.name,top:"3%",left:"3%",textStyle:{color:"#888888"}},legend:{orient:"vertical",right:0,top:40,data:t.pie01data.legenddata},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!0},magicType:{show:!0,type:["pie","funnel"]}}},series:[{name:t.pie01data.name2,type:"pie",radius:"40%",label:{show:!1},emphasis:{label:{show:!0}},labelLine:{show:!0},data:t.pie01data.data}],color:["#224abe","#9bb4ff","#01a068","#04d88e","#92fcd7","#c6f8e7"]}),e.hideLoading(),e.on("click",(function(e){console.log(e)}))}}},f=b,w=Object(h["a"])(f,p,v,!1,null,null,null),x=w.exports,y=a("9bbc"),k=a("480a"),S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("BaseCard2",[a("div",{attrs:{slot:"header"},slot:"header"},[a("TownSearch",{on:{villageSearch:e.TownSearch}})],1),a("div",{attrs:{slot:"body"},slot:"body"},[a("div",{staticClass:"flexbox"},[a("div",{staticClass:"flexsize2"},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{height:"400px"}},[a("bar01",{key:e.reloadbar,attrs:{name:e.name,name1:e.name1,source:e.source}})],1)]),a("div",{staticClass:"flexsize1"},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{height:"400px"}},[a("pie01",{key:e.reloadpie,attrs:{pie02data:e.pie02data}})],1)])])])])},$=[],_=(a("a434"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v(" "+e._s(e.areaname)+": "),a("el-date-picker",{attrs:{type:"monthrange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始月份","end-placeholder":"结束月份","picker-options":e.pickerOptions},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}}),e._v(" "),a("el-button",{attrs:{type:"primary",size:e.size},on:{click:e.onSubmit}},[e._v("搜索")])],1)}),D=[],O={name:"YearSearch",data:function(){return{size:"medium",time:"",pickerOptions:{shortcuts:[{text:"本月",onClick:function(e){e.$emit("pick",[new Date,new Date])}},{text:"今年至今",onClick:function(e){var t=new Date,a=new Date((new Date).getFullYear(),0);e.$emit("pick",[a,t])}},{text:"最近六个月",onClick:function(e){var t=new Date,a=new Date;a.setMonth(a.getMonth()-6),e.$emit("pick",[a,t])}}],disabledDate:function(e){var t=Date.now();return e.getTime()>=t}}}},computed:{areaid:function(){return Number(this.$store.state.areaid)},areaname:function(){return this.$store.state.areaname},towns:function(){var e=this.$store.state.towns.map((function(e){return{id:e.zhenid.toString(),name:e.zhenName}}));return e}},created:function(){var e=new Date,t=new Date;t.setTime(t.getTime()-7776e7),this.time=[t,e],this.onSubmit()},methods:{onSubmit:function(){console.log(this.time),this.$emit("villageSearch",this.time)}}},z=O,C=Object(h["a"])(z,_,D,!1,null,null,null),T=C.exports,j=a("907a"),L=a("c22f"),N={name:"fundArea",components:{BaseCard2:s["a"],bar01:j["a"],TownSearch:T,pie01:y["a"],membervillage:L["a"]},data:function(){return{loading:!0,townid:"",time:"",source:[["product","已处理","未处理"]],name:"该镇各村资金收支柱状图",name1:"条",villages:[],reloadbar:"11",pie02data:{name:"全区该时间段内群众意见建议类型占比",name2:["资金","资产","资源","党务","村务","其他"],name3:"条数"},reloadpie:""}},methods:{TownSearch:function(e){this.time=e,this.getChartDatabyTownid()},getChartDatabyTownid:function(){var e=this;this.loading=!0,Object(o["f"])({join:"village,village.feedback",s:{createdAt:{$between:[new Date(this.time[0]).toISOString(),new Date(this.time[1]).toISOString()]}}}).then((function(t){console.log(t),e.source.splice(1);var a=[{value:0,name:"资金"},{value:0,name:"资产"},{value:0,name:"资源"},{value:0,name:"党务"},{value:0,name:"村务"},{value:0,name:"其他"}];t.forEach((function(t){var i=[t.name,0,0];t.village.forEach((function(e){for(var t=0,n=e.feedback.length;t<n;t++)e.feedback[t].processed?i[1]++:i[2]++,a[e.feedback[t].type].value++;console.log(e.feedback)})),e.source.push(i)})),e.$set(e.pie02data,"data",a),e.reloadbar=(new Date).getTime(),e.reloadpie=(new Date).getTime(),e.loading=!1}))}}},E=N,A=Object(h["a"])(E,S,$,!1,null,null,null),B=A.exports,q={name:"Suggestions",data:function(){return{loading:!0,villageid:"",time:"",reloadpietype:"type",reloadpiepro:"pro",reloadbar:"bar",chartdatabar:{name:"反馈量类型柱状图",xAxisdata:["资金","资产","资源","党务","村务","其他"],seriesname:"反馈量"},piedatapro:{name:"反馈量处理情况占比图",name2:"反馈量"}}},components:{BaseCard:r["a"],BaseCard2:s["a"],villageSearch:g,pie01:x,pie02:y["a"],bar01:k["a"],SuggestionArea:B},created:function(){},methods:{Search:function(e,t){this.villageid=e,this.time=t,this.getChartData()},getChartData:function(){var e=this;this.loading=!0,Object(o["e"])({fields:"type,processed",join:"village",s:{"village.id":{$eq:Number(this.villageid)},createdAt:{$between:[new Date(this.time[0]).toISOString(),new Date(this.time[1]).toISOString()]}}}).then((function(t){console.log(t);var a=[{value:0,name:"已处理"},{value:0,name:"未处理"}],i=[0,0,0,0,0,0];t.forEach((function(t){switch(t.processed){case!0:a[0].value++;break;case!1:a[1].value++;break;default:break}i[t.type]++,console.log(a),e.$set(e.piedatapro,"data",a),e.$set(e.chartdatabar,"seriesdata",i),e.reloadpiepro=(new Date).getTime(),e.reloadbar=(new Date).getTime(),e.loading=!1}))}))}}},F=q,I=Object(h["a"])(F,i,n,!1,null,null,null);t["default"]=I.exports},"9bbc":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"pie02",staticClass:"mycharts"})},n=[],o=(a("b0c0"),{name:"pie02",props:{pie02data:Object},mounted:function(){this.drawLine()},methods:{drawLine:function(){var e=this.$echarts.init(this.$refs.pie02);e.showLoading();var t=this;e.setOption({title:{text:t.pie02data.name,textStyle:{color:"#888888"}},legend:{orient:"vertical",right:0,top:40,data:t.pie02data.name2},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!0},magicType:{show:!0,type:["pie","funnel"]}}},series:[{name:t.pie02data.name3,type:"pie",right:"20",radius:["40%","48%"],label:{show:!1},emphasis:{label:{show:!0}},labelLine:{show:!0},data:t.pie02data.data,animationEasing:"elasticOut",animationDelay:function(e){return 200*Math.random()}}],color:["#224abe","orange","rgb(28,200,138)","rgb(54,185,204)","#e74a3b","#858796"]}),e.hideLoading(),e.on("click",(function(e){console.log(e)}))}}}),r=o,s=a("2877"),l=Object(s["a"])(r,i,n,!1,null,"94a09ff4",null);t["a"]=l.exports},c22f:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("BaseCard2",[a("div",{attrs:{slot:"header"},slot:"header"},[a("villageSearch",{on:{villageSearch:e.Search}})],1),a("div",{attrs:{slot:"body"},slot:"body"},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{height:"400px"}},[a("bar01",{key:e.reloadbar,attrs:{chartdata:e.chartdatabar}})],1)])])},n=[],o=(a("4160"),a("a9e3"),a("159b"),a("1bab")),r=a("ea2c"),s=a("421a"),l=a("480a"),c={name:"membervillage",components:{BaseCard2:r["a"],villageSearch:s["a"],bar01:l["a"]},data:function(){return{loading:!0,villageid:"",reloadbar:"",chartdatabar:{name:"党员发展柱状图",xAxisdata:["积极分子","发展对象","预备党员","正式党员"],seriesname:"人"}}},methods:{Search:function(e){this.villageid=e,this.getChartData()},getChartData:function(){var e=this;this.loading=!0,Object(o["j"])({fields:"status",join:"village",s:{"village.id":{$eq:Number(this.villageid)}}}).then((function(t){var a=[0,0,0,0];t.forEach((function(e){a[e.status-2]++})),e.$set(e.chartdatabar,"seriesdata",a),e.reloadbar=(new Date).getTime(),e.loading=!1})).catch((function(t){console.log(t),e.$set(e.chartdatabar,"seriesdata",[0,0,0,0])}))}}},d=c,u=a("2877"),h=Object(u["a"])(d,i,n,!1,null,null,null);t["a"]=h.exports}}]);