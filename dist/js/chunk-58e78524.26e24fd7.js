(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58e78524"],{"06c5":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a("a630"),a("fb6a"),a("b0c0"),a("d3b7"),a("25f0"),a("3ca3");var i=a("6b75");function n(e,t){if(e){if("string"===typeof e)return Object(i["a"])(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(i["a"])(e,t):void 0}}},2909:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var i=a("6b75");function n(e){if(Array.isArray(e))return Object(i["a"])(e)}a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("e260"),a("d3b7"),a("3ca3"),a("ddb0");function r(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}var o=a("06c5");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e){return n(e)||r(e)||Object(o["a"])(e)||s()}},"3ca3":function(e,t,a){"use strict";var i=a("6547").charAt,n=a("69f3"),r=a("7dd0"),o="String Iterator",s=n.set,l=n.getterFor(o);r(String,"String",(function(e){s(this,{type:o,string:String(e),index:0})}),(function(){var e,t=l(this),a=t.string,n=t.index;return n>=a.length?{value:void 0,done:!0}:(e=i(a,n),t.index+=e.length,{value:e,done:!1})}))},"421a":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"searchbox"},[a("div",{staticClass:"searchobj"},[a("label",{attrs:{for:""}},[e._v(" "+e._s(e.areaname)+": "),0!=e.$store.state.level?a("el-select",{attrs:{disabled:"",size:e.size,placeholder:"请选择镇/街道"},model:{value:e.townid,callback:function(t){e.townid=t},expression:"townid"}},e._l(e.towns,(function(e){return a("el-option",{key:"town"+e.id,attrs:{label:e.name,value:e.id}})})),1):a("el-select",{attrs:{size:e.size,placeholder:"请选择镇/街道"},model:{value:e.townid,callback:function(t){e.townid=t},expression:"townid"}},e._l(e.towns,(function(e){return a("el-option",{key:"town"+e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("label",{attrs:{for:""}},[e._v(" 村： "),a("el-select",{attrs:{size:e.size,placeholder:"请选择行政村"},model:{value:e.villageid,callback:function(t){e.villageid=t},expression:"villageid"}},e._l(e.villages,(function(e){return a("el-option",{key:"village"+e.id,attrs:{label:e.name,value:e.id}})})),1)],1)]),a("div",[a("el-button",{attrs:{type:"primary",size:e.size},on:{click:e.onSubmit}},[e._v("搜索")])],1)])},n=[],r=(a("d81d"),a("b0c0"),a("a9e3"),a("d3b7"),a("25f0"),a("1bab")),o={name:"SearchFeedback",data:function(){return{size:"medium",townid:"0",villages:[],villageid:"0"}},computed:{areaid:function(){return Number(this.$store.state.areaid)},areaname:function(){return this.$store.state.areaname},towns:function(){var e=this.$store.state.towns.map((function(e){return{id:e.zhenid.toString(),name:e.zhenName}}));return e}},created:function(){this.townid=this.$store.state.townid.toString(),this.villageid=this.$store.state.villageid.toString(),this.getvillages(this.townid)},methods:{gettowns:function(e){Object(r["r"])({join:"area",s:{"area.id":{$eq:Number(e)}}}).then((function(e){console.log(e)}))},getvillages:function(e){var t=this;Object(r["z"])({join:"town",s:{"town.id":{$eq:Number(e)}}}).then((function(e){0!=e.length&&(t.villageid=e[0].id.toString(),t.onSubmit()),t.villages=e.map((function(e){return{id:e.id.toString(),name:e.name}}))}))},onSubmit:function(){this.$emit("villageSearch",this.villageid)}},watch:{townid:function(e){this.villageid="",this.getvillages(this.townid)}}},s=o,l=a("2877"),c=Object(l["a"])(s,i,n,!1,null,null,null);t["a"]=c.exports},"480a":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"bar01",staticClass:"mycharts"})},n=[],r=(a("b0c0"),{name:"bar01",props:{chartdata:Object},mounted:function(){this.drawLine()},methods:{drawLine:function(){var e=this.$echarts.init(this.$refs.bar01);e.showLoading();var t=this;e.setOption({title:{text:t.chartdata.name},xAxis:{data:t.chartdata.xAxisdata,nameTextStyle:{color:"#888888"},nameRotate:"30",boundaryGap:!1,axisLine:{lineStyle:{color:"#999"}},axisTick:{lineStyle:{color:"#999"}},splitLine:{show:!0}},tooltip:{trigger:"axis",axisPointer:{type:"shadow",label:{show:!1}}},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!0},magicType:{show:!0,type:["pie","funnel"]}}},yAxis:{type:"value",name:"条",splitNumber:1,axisLine:{lineStyle:{color:"#999"}},axisTick:{lineStyle:{color:"#999"}}},series:[{barMaxWidth:20,name:t.chartdata.seriesname,type:"bar",data:t.chartdata.seriesdata}],color:["#224abe","#3265ff","#6c91ff","#9bb4ff"]}),e.hideLoading()}}}),o=r,s=a("2877"),l=Object(s["a"])(o,i,n,!1,null,null,null);t["a"]=l.exports},"4df4":function(e,t,a){"use strict";var i=a("0366"),n=a("7b0b"),r=a("9bdd"),o=a("e95a"),s=a("50c4"),l=a("8418"),c=a("35a1");e.exports=function(e){var t,a,d,u,f,h,b=n(e),m="function"==typeof this?this:Array,v=arguments.length,g=v>1?arguments[1]:void 0,p=void 0!==g,w=c(b),y=0;if(p&&(g=i(g,v>2?arguments[2]:void 0,2)),void 0==w||m==Array&&o(w))for(t=s(b.length),a=new m(t);t>y;y++)h=p?g(b[y],y):b[y],l(a,y,h);else for(u=w.call(b),f=u.next,a=new m;!(d=f.call(u)).done;y++)h=p?r(u,g,[d.value,y],!0):d.value,l(a,y,h);return a.length=y,a}},"6b75":function(e,t,a){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,i=new Array(t);a<t;a++)i[a]=e[a];return i}a.d(t,"a",(function(){return i}))},"7a9b":function(e,t,a){},a2ef:function(e,t,a){"use strict";var i=a("7a9b"),n=a.n(i);n.a},a434:function(e,t,a){"use strict";var i=a("23e7"),n=a("23cb"),r=a("a691"),o=a("50c4"),s=a("7b0b"),l=a("65f0"),c=a("8418"),d=a("1dde"),u=a("ae40"),f=d("splice"),h=u("splice",{ACCESSORS:!0,0:0,1:2}),b=Math.max,m=Math.min,v=9007199254740991,g="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!f||!h},{splice:function(e,t){var a,i,d,u,f,h,p=s(this),w=o(p.length),y=n(e,w),S=arguments.length;if(0===S?a=i=0:1===S?(a=0,i=w-y):(a=S-2,i=m(b(r(t),0),w-y)),w+a-i>v)throw TypeError(g);for(d=l(p,i),u=0;u<i;u++)f=y+u,f in p&&c(d,u,p[f]);if(d.length=i,a<i){for(u=y;u<w-i;u++)f=u+i,h=u+a,f in p?p[h]=p[f]:delete p[h];for(u=w;u>w-i+a;u--)delete p[u-1]}else if(a>i)for(u=w-i;u>y;u--)f=u+i-1,h=u+a-1,f in p?p[h]=p[f]:delete p[h];for(u=0;u<a;u++)p[u+y]=arguments[u+2];return p.length=w-i+a,d}})},a630:function(e,t,a){var i=a("23e7"),n=a("4df4"),r=a("1c7e"),o=!r((function(e){Array.from(e)}));i({target:"Array",stat:!0,forced:o},{from:n})},c22f:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("BaseCard2",[a("div",{attrs:{slot:"header"},slot:"header"},[a("villageSearch",{on:{villageSearch:e.Search}})],1),a("div",{attrs:{slot:"body"},slot:"body"},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{height:"400px"}},[a("bar01",{key:e.reloadbar,attrs:{chartdata:e.chartdatabar}})],1)])])},n=[],r=(a("4160"),a("a9e3"),a("159b"),a("1bab")),o=a("ea2c"),s=a("421a"),l=a("480a"),c={name:"membervillage",components:{BaseCard2:o["a"],villageSearch:s["a"],bar01:l["a"]},data:function(){return{loading:!0,villageid:"",reloadbar:"",chartdatabar:{name:"党员发展柱状图",xAxisdata:["积极分子","发展对象","预备党员","正式党员"],seriesname:"人"}}},methods:{Search:function(e){this.villageid=e,this.getChartData()},getChartData:function(){var e=this;this.loading=!0,Object(r["j"])({fields:"status",join:"village",s:{"village.id":{$eq:Number(this.villageid)}}}).then((function(t){var a=[0,0,0,0];t.forEach((function(e){a[e.status-2]++})),e.$set(e.chartdatabar,"seriesdata",a),e.reloadbar=(new Date).getTime(),e.loading=!1})).catch((function(t){console.log(t),e.$set(e.chartdatabar,"seriesdata",[0,0,0,0])}))}}},d=c,u=a("2877"),f=Object(u["a"])(d,i,n,!1,null,null,null);t["a"]=f.exports},d28b:function(e,t,a){var i=a("746f");i("iterator")},d81d:function(e,t,a){"use strict";var i=a("23e7"),n=a("b727").map,r=a("1dde"),o=a("ae40"),s=r("map"),l=o("map");i({target:"Array",proto:!0,forced:!s||!l},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},ddb0:function(e,t,a){var i=a("da84"),n=a("fdbc"),r=a("e260"),o=a("9112"),s=a("b622"),l=s("iterator"),c=s("toStringTag"),d=r.values;for(var u in n){var f=i[u],h=f&&f.prototype;if(h){if(h[l]!==d)try{o(h,l,d)}catch(m){h[l]=d}if(h[c]||o(h,c,u),n[u])for(var b in r)if(h[b]!==r[b])try{o(h,b,r[b])}catch(m){h[b]=r[b]}}}},e01a:function(e,t,a){"use strict";var i=a("23e7"),n=a("83ab"),r=a("da84"),o=a("5135"),s=a("861d"),l=a("9bf2").f,c=a("e893"),d=r.Symbol;if(n&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var u={},f=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof f?new d(e):void 0===e?d():d(e);return""===e&&(u[t]=!0),t};c(f,d);var h=f.prototype=d.prototype;h.constructor=f;var b=h.toString,m="Symbol(test)"==String(d("test")),v=/^Symbol\((.*)\)[^)]+$/;l(h,"description",{configurable:!0,get:function(){var e=s(this)?this.valueOf():this,t=b.call(e);if(o(u,e))return"";var a=m?t.slice(7,-1):t.replace(v,"$1");return""===a?void 0:a}}),i({global:!0,forced:!0},{Symbol:f})}},e8d7:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"flexbox"},[a("div",{staticClass:"flexsize1"},[a("membertype")],1),a("div",{staticClass:"flexsize1"},[a("membervillage")],1)]),a("div",{staticClass:"flexbox"},[a("div",{staticClass:"flexsize1"},[a("membertownpie")],1),a("div",{staticClass:"flexsize1"},[a("membertownbar")],1)])])},n=[],r=a("c22f"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("BaseCard2",[a("div",{attrs:{slot:"header"},slot:"header"},[a("TownSearch",{on:{villageSearch:e.TownSearch}})],1),a("div",{attrs:{slot:"body"},slot:"body"},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{height:"400px"}},[a("bar01",{key:e.reloadbar,attrs:{chartdata:e.chartdatabar}})],1)])])},s=[],l=(a("4160"),a("d81d"),a("a9e3"),a("d3b7"),a("3ca3"),a("159b"),a("ddb0"),a("2909")),c=a("1bab"),d=a("ea2c"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v(" "+e._s(e.areaname)+": "),0!=e.$store.state.level?a("el-select",{attrs:{disabled:"",size:e.size,placeholder:"请选择镇/街道"},model:{value:e.townid,callback:function(t){e.townid=t},expression:"townid"}},e._l(e.towns,(function(e){return a("el-option",{key:"town"+e.id,attrs:{label:e.name,value:e.id}})})),1):a("el-select",{attrs:{size:e.size,placeholder:"请选择镇/街道"},model:{value:e.townid,callback:function(t){e.townid=t},expression:"townid"}},e._l(e.towns,(function(e){return a("el-option",{key:"town"+e.id,attrs:{label:e.name,value:e.id}})})),1),a("el-button",{attrs:{type:"primary",size:e.size},on:{click:e.onSubmit}},[e._v("搜索")])],1)},f=[],h=(a("b0c0"),a("25f0"),{name:"SearchFeedback",data:function(){return{size:"medium",townid:"0",villages:[],villageid:"0"}},computed:{areaid:function(){return Number(this.$store.state.areaid)},areaname:function(){return this.$store.state.areaname},towns:function(){var e=this.$store.state.towns.map((function(e){return{id:e.zhenid.toString(),name:e.zhenName}}));return e}},created:function(){this.townid=this.$store.state.townid.toString(),this.getvillages(this.townid)},methods:{gettowns:function(e){Object(c["r"])({join:"area",s:{"area.id":{$eq:Number(e)}}}).then((function(e){console.log(e)}))},getvillages:function(e){var t=this;Object(c["z"])({join:"town",s:{"town.id":{$eq:Number(e)}}}).then((function(e){0!=e.length&&(t.villageid=e[0].id.toString()),t.villages=e.map((function(e){return{id:e.id.toString(),name:e.name}})),t.onSubmit()}))},onSubmit:function(){this.$emit("villageSearch",this.townid)}}}),b=h,m=a("2877"),v=Object(m["a"])(b,u,f,!1,null,null,null),g=v.exports,p=a("480a"),w={name:"membertownbar",components:{BaseCard2:d["a"],bar01:p["a"],TownSearch:g,membervillage:r["a"]},data:function(){return{loading:!0,townid:"",chartdatabar:{name:"党员发展柱状图",xAxisdata:["积极分子","发展对象","预备党员","正式党员"],seriesname:"人"},reloadbar:"11"}},methods:{TownSearch:function(e){this.townid=e,this.getChartDatabyTownid()},getChartDatabyTownid:function(){var e=this;this.loading=!0,Object(c["z"])({join:"town",fields:"id",s:{"town.id":{$eq:Number(this.townid)}}}).then((function(t){var a=t.map((function(e){return Object(c["j"])({fields:"status",join:"village",s:{"village.id":{$eq:Number(e.id)}}})}));Promise.all(a).then((function(t){var a=[];t.forEach((function(e){a.push.apply(a,Object(l["a"])(e))}));var i=[0,0,0,0];a.forEach((function(e){i[e.status-2]++})),e.$set(e.chartdatabar,"seriesdata",i),e.reloadbar=(new Date).getTime(),e.loading=!1}))}))}}},y=w,S=Object(m["a"])(y,o,s,!1,null,null,null),x=S.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("BaseCard2",[a("div",{attrs:{slot:"header"},slot:"header"},[a("TownSearch",{on:{villageSearch:e.TownSearch}})],1),a("div",{attrs:{slot:"body"},slot:"body"},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{height:"400px"}},[a("pie01",{key:e.reloadpie01,attrs:{pie01data:e.pie01data}})],1)])])},$=[],O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"pie03",staticClass:"mycharts"})},_=[],C={name:"pie03",props:{pie01data:Object},mounted:function(){this.drawLine()},methods:{drawLine:function(){var e=this.$echarts.init(this.$refs.pie03);e.showLoading();var t=this;console.log(t.pie01data),e.setOption({title:{text:t.pie01data.name,top:"3%",left:"3%",textStyle:{color:"#888888"}},legend:{orient:"vertical",right:0,top:40,data:t.pie01data.legenddata},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!0},magicType:{show:!0,type:["pie","funnel"]}}},series:[{name:t.pie01data.name2,type:"pie",radius:"40%",label:{show:!1},emphasis:{label:{show:!0}},labelLine:{show:!0},data:t.pie01data.data}],color:["#3265ff","#6c91ff","#9bb4ff","#224abe"]}),e.hideLoading(),e.on("click",(function(e){console.log(e)}))}}},T=C,k=Object(m["a"])(T,O,_,!1,null,null,null),z=k.exports,A={name:"membertownpie",components:{BaseCard2:d["a"],TownSearch:g,pie01:z,membervillage:r["a"]},data:function(){return{loading:!0,townid:"",pie01data:{name:"党员发展类型占比图",name2:"人次"},reloadpie01:"pie01"}},methods:{TownSearch:function(e){this.townid=e,this.getChartDatabyTownidpie()},getChartDatabyTownidpie:function(){var e=this;this.loading=!0,Object(c["z"])({join:"town",fields:"id",s:{"town.id":{$eq:Number(this.townid)}}}).then((function(t){var a=t.map((function(e){return Object(c["j"])({fields:"status",join:"village",s:{"village.id":{$eq:Number(e.id)}}})}));Promise.all(a).then((function(t){var a=[];t.forEach((function(e){a.push.apply(a,Object(l["a"])(e))}));var i=[{value:0,name:"积极分子"},{value:0,name:"发展对象"},{value:0,name:"预备党员"},{value:0,name:"正式党员"}];a.forEach((function(e){i[e.status-2].value++})),e.$set(e.pie01data,"data",i),e.reloadpie01=(new Date).getTime(),e.loading=!1}))}))}}},E=A,N=Object(m["a"])(E,j,$,!1,null,null,null),L=N.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("BaseCard2",[a("div",{attrs:{slot:"header"},slot:"header"},[a("TownSearch",{on:{villageSearch:e.TownSearch}})],1),a("div",{attrs:{slot:"body"},slot:"body"},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{height:"400px"}},[a("bar01",{key:e.reloadbar,attrs:{name:e.name,source:e.source}})],1)])])},q=[],B=(a("a434"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"bar05",staticClass:"mycharts"})}),M=[],P={name:"bar05",props:{name:String,source:Array},mounted:function(){this.drawLine()},methods:{drawLine:function(){var e=this.$echarts.init(this.$refs.bar05);console.log(this.source),e.showLoading();var t=this;e.setOption({title:{top:"0%",left:"3%",text:t.name},legend:{top:"6%",right:"0%"},tooltip:{trigger:"axis",axisPointer:{type:"shadow",label:{show:!1}}},dataset:{source:t.source},xAxis:{type:"category",axisLine:{lineStyle:{color:"#999"}},axisTick:{lineStyle:{color:"#999"}},splitLine:{show:!0}},yAxis:{name:"条",splitNumber:1,axisLine:{lineStyle:{color:"#999"}},axisTick:{lineStyle:{color:"#999"}}},series:[{type:"bar"},{type:"bar"},{type:"bar"},{type:"bar"}],color:["#3265ff","#6c91ff","#9bb4ff","#224abe"]}),e.hideLoading()}}},I=P,F=Object(m["a"])(I,B,M,!1,null,"39520314",null),R=F.exports,J={name:"membertowntype",components:{BaseCard2:d["a"],bar01:R,TownSearch:g,membervillage:r["a"]},data:function(){return{loading:!0,townid:"",source:[["product","积极分子","发展对象","预备党员","正式党员"]],name:"该镇各村党员发展柱状图",villages:[],reloadbar:"11"}},methods:{TownSearch:function(e){this.townid=e,this.getChartDatabyTownid()},getChartDatabyTownid:function(){var e=this;this.loading=!0,Object(c["z"])({join:"town",fields:"id,name",s:{"town.id":{$eq:Number(this.townid)}}}).then((function(t){e.villages.splice(0);var a=t.map((function(t){return e.villages.push(t.name),Object(c["j"])({fields:"status",join:"village,status",s:{"village.id":{$eq:Number(t.id)}}})}));Promise.all(a).then((function(t){console.log(t),e.source.splice(1),t.forEach((function(t,a){console.log(a);var i=[e.villages[a],0,0,0,0];t.forEach((function(e){i[e.status-1]++})),e.source.push(i)})),e.reloadbar=(new Date).getTime(),e.loading=!1}))}))}}},V=J,G=Object(m["a"])(V,D,q,!1,null,null,null),U=G.exports,W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("BaseCard2",[a("div",{attrs:{slot:"header"},slot:"header"},[e._v(" 全区党员发展柱状图 ")]),a("div",{attrs:{slot:"body"},slot:"body"})])},H=[],K={name:"",components:{BaseCard2:d["a"],bar01:p["a"]},created:function(){Object(c["k"])().then((function(e){console.log(e)}))}},Q=K,X=Object(m["a"])(Q,W,H,!1,null,null,null),Y=X.exports,Z={name:"PartyMembers",components:{membervillage:r["a"],membertownbar:x,membertownpie:L,memberArea:Y,membertype:U}},ee=Z,te=Object(m["a"])(ee,i,n,!1,null,null,null);t["default"]=te.exports},ea2c:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[e._t("header")],2),a("div",{staticClass:"card-body"},[e._t("body")],2)])},n=[],r={name:"BaseCard2"},o=r,s=(a("a2ef"),a("2877")),l=Object(s["a"])(o,i,n,!1,null,"054593fc",null);t["a"]=l.exports},fb6a:function(e,t,a){"use strict";var i=a("23e7"),n=a("861d"),r=a("e8b5"),o=a("23cb"),s=a("50c4"),l=a("fc6a"),c=a("8418"),d=a("b622"),u=a("1dde"),f=a("ae40"),h=u("slice"),b=f("slice",{ACCESSORS:!0,0:0,1:2}),m=d("species"),v=[].slice,g=Math.max;i({target:"Array",proto:!0,forced:!h||!b},{slice:function(e,t){var a,i,d,u=l(this),f=s(u.length),h=o(e,f),b=o(void 0===t?f:t,f);if(r(u)&&(a=u.constructor,"function"!=typeof a||a!==Array&&!r(a.prototype)?n(a)&&(a=a[m],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return v.call(u,h,b);for(i=new(void 0===a?Array:a)(g(b-h,0)),d=0;h<b;h++,d++)h in u&&c(i,d,u[h]);return i.length=d,i}})}}]);