(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ce9af36"],{"06c5":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a("a630"),a("fb6a"),a("b0c0"),a("d3b7"),a("25f0"),a("3ca3");var n=a("6b75");function r(t,e){if(t){if("string"===typeof t)return Object(n["a"])(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n["a"])(t,e):void 0}}},3835:function(t,e,a){"use strict";function n(t){if(Array.isArray(t))return t}a.d(e,"a",(function(){return l}));a("a4d3"),a("e01a"),a("d28b"),a("e260"),a("d3b7"),a("3ca3"),a("ddb0");function r(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var a=[],n=!0,r=!1,i=void 0;try{for(var o,l=t[Symbol.iterator]();!(n=(o=l.next()).done);n=!0)if(a.push(o.value),e&&a.length===e)break}catch(s){r=!0,i=s}finally{try{n||null==l["return"]||l["return"]()}finally{if(r)throw i}}return a}}var i=a("06c5");function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t,e){return n(t)||r(t,e)||Object(i["a"])(t,e)||o()}},"3ca3":function(t,e,a){"use strict";var n=a("6547").charAt,r=a("69f3"),i=a("7dd0"),o="String Iterator",l=r.set,s=r.getterFor(o);i(String,"String",(function(t){l(this,{type:o,string:String(t),index:0})}),(function(){var t,e=s(this),a=e.string,r=e.index;return r>=a.length?{value:void 0,done:!0}:(t=n(a,r),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,a){"use strict";var n=a("0366"),r=a("7b0b"),i=a("9bdd"),o=a("e95a"),l=a("50c4"),s=a("8418"),c=a("35a1");t.exports=function(t){var e,a,u,d,f,b,h=r(t),p="function"==typeof this?this:Array,g=arguments.length,m=g>1?arguments[1]:void 0,v=void 0!==m,y=c(h),w=0;if(v&&(m=n(m,g>2?arguments[2]:void 0,2)),void 0==y||p==Array&&o(y))for(e=l(h.length),a=new p(e);e>w;w++)b=v?m(h[w],w):h[w],s(a,w,b);else for(d=y.call(h),f=d.next,a=new p;!(u=f.call(d)).done;w++)b=v?i(d,m,[u.value,w],!0):u.value,s(a,w,b);return a.length=w,a}},"4fad":function(t,e,a){var n=a("23e7"),r=a("6f53").entries;n({target:"Object",stat:!0},{entries:function(t){return r(t)}})},"6b75":function(t,e,a){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}a.d(e,"a",(function(){return n}))},"6f53":function(t,e,a){var n=a("83ab"),r=a("df75"),i=a("fc6a"),o=a("d1e7").f,l=function(t){return function(e){var a,l=i(e),s=r(l),c=s.length,u=0,d=[];while(c>u)a=s[u++],n&&!o.call(l,a)||d.push(t?[a,l[a]]:l[a]);return d}};t.exports={entries:l(!0),values:l(!1)}},"7a9b":function(t,e,a){},"7ebd":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._t("header")],2),a("div",{staticClass:"card-body"},[t._t("body")],2),a("div",{staticClass:"card-footer"},[t._t("footer")],2)])},r=[],i={name:"BaseCard"},o=i,l=(a("d13f"),a("2877")),s=Object(l["a"])(o,n,r,!1,null,"2f50af30",null);e["a"]=s.exports},a2ef:function(t,e,a){"use strict";var n=a("7a9b"),r=a.n(n);r.a},a434:function(t,e,a){"use strict";var n=a("23e7"),r=a("23cb"),i=a("a691"),o=a("50c4"),l=a("7b0b"),s=a("65f0"),c=a("8418"),u=a("1dde"),d=a("ae40"),f=u("splice"),b=d("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,p=Math.min,g=9007199254740991,m="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!f||!b},{splice:function(t,e){var a,n,u,d,f,b,v=l(this),y=o(v.length),w=r(t,y),S=arguments.length;if(0===S?a=n=0:1===S?(a=0,n=y-w):(a=S-2,n=p(h(i(e),0),y-w)),y+a-n>g)throw TypeError(m);for(u=s(v,n),d=0;d<n;d++)f=w+d,f in v&&c(u,d,v[f]);if(u.length=n,a<n){for(d=w;d<y-n;d++)f=d+n,b=d+a,f in v?v[b]=v[f]:delete v[b];for(d=y;d>y-n+a;d--)delete v[d-1]}else if(a>n)for(d=y-n;d>w;d--)f=d+n-1,b=d+a-1,f in v?v[b]=v[f]:delete v[b];for(d=0;d<a;d++)v[d+w]=arguments[d+2];return v.length=y-n+a,u}})},a630:function(t,e,a){var n=a("23e7"),r=a("4df4"),i=a("1c7e"),o=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:o},{from:r})},c4ae:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("AssetsTable")},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("BaseCard",[a("div",{attrs:{slot:"header"},slot:"header"},[a("VillageSearch",{on:{Search:t.villageSearch}})],1),a("div",{attrs:{slot:"body"},slot:"body"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{type:"expand",data:t.tableData,border:"",height:"80vh"}},[a("el-table-column",{attrs:{fixed:"",prop:"name",label:"资产",width:"300"}}),a("el-table-column",{attrs:{label:"非经营表"}},[a("el-table-column",{attrs:{prop:"quantity",label:"数量",width:"auto"}}),a("el-table-column",{attrs:{prop:"unitOfMeasurement",label:"单位",width:"auto"}}),a("el-table-column",{attrs:{prop:"unitPrice",label:"单价(元)",width:"auto"}}),a("el-table-column",{attrs:{prop:"brand",label:"品牌",width:"100"}}),a("el-table-column",{attrs:{prop:"sizeAndModel",label:"规格型号",width:"100"}}),a("el-table-column",{attrs:{prop:"presentValue",label:"现今价值",width:"auto"}}),a("el-table-column",{attrs:{prop:"estimatedYears",label:"预计年限",width:"auto"}}),a("el-table-column",{attrs:{prop:"creationTime",label:"构建时间",width:"100"}}),a("el-table-column",{attrs:{prop:"source",label:"产品来源",width:"auto"}}),a("el-table-column",{attrs:{prop:"changes",label:"变动情况",width:"auto"}}),a("el-table-column",{attrs:{prop:"productStatus",label:"产品状态",width:"auto"}}),a("el-table-column",{attrs:{prop:"useDepartmentsAndUser",label:"使用部门及使用者",width:"200"}}),a("el-table-column",{attrs:{prop:"remarks",label:"备注",width:"auto"}})],1),a("el-table-column",{attrs:{label:"经营表"}},[a("el-table-column",{attrs:{prop:"amount",label:"合同金额",width:"auto"}}),a("el-table-column",{attrs:{prop:"contractSigned",label:"是否签订合同",width:"auto"}}),a("el-table-column",{attrs:{prop:"contractStatus",label:"合同状态",width:"auto"}}),a("el-table-column",{attrs:{prop:"durationOfCooperation",label:"合同期限",width:"200"}}),a("el-table-column",{attrs:{prop:"lessee",label:"承租人",width:"200"}}),a("el-table-column",{attrs:{prop:"paymentStatus",label:"支付状态",width:"200"}}),a("el-table-column",{attrs:{prop:"remarks",label:"备注",width:"auto"}})],1)],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-sizes":[16,20,50,100],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showcard,expression:"showcard"}],staticClass:"mask",on:{click:t.hidenMask}},[a("div",{staticClass:"centerbody"},[t._t("centerbody",t._l(t.itemdata.image,(function(t,e){return a("el-image",{key:"file"+e,attrs:{src:t.url,lazy:""}})})))],2)])],1)},o=[],l=(a("d81d"),a("a434"),a("b0c0"),a("a9e3"),a("4fad"),a("d3b7"),a("25f0"),a("5530")),s=a("3835"),c=a("1bab"),u=a("0c58"),d=a("7ebd"),f=a("ea2c"),b=a("1b72"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" "+t._s(t.areaname)+": "),1!=t.$store.state.level?a("el-select",{attrs:{disabled:"",size:t.size,placeholder:"请选择镇/街道"},model:{value:t.townid,callback:function(e){t.townid=e},expression:"townid"}},t._l(t.towns,(function(t){return a("el-option",{key:"town"+t.id,attrs:{label:t.zhenName,value:t.zhenid}})})),1):a("el-select",{attrs:{size:t.size,placeholder:"请选择镇/街道"},model:{value:t.townid,callback:function(e){t.townid=e},expression:"townid"}},t._l(t.towns,(function(t){return a("el-option",{key:"town"+t.id,attrs:{label:t.name,value:t.id}})})),1),a("el-select",{attrs:{size:t.size,placeholder:"请选择行政村"},model:{value:t.villageid,callback:function(e){t.villageid=e},expression:"villageid"}},t._l(t.villages,(function(t){return a("el-option",{key:"village"+t.id,attrs:{label:t.name,value:t.id}})})),1),a("el-button",{attrs:{type:"primary",size:t.size},on:{click:t.onSubmit}},[t._v("搜索")])],1)},p=[],g={name:"AssetsSearch",data:function(){return{size:"mini",townid:"0",villages:[],villageid:"0",type:"",types:[]}},computed:{areaid:function(){return Number(this.$store.state.areaid)},areaname:function(){return this.$store.state.areaname},towns:function(){var t=this.$store.state.towns.map((function(t){return{id:t.zhenid.toString(),name:t.zhenName}}));return t}},created:function(){this.townid=this.$store.state.townid.toString(),this.getVillagesAndTypes()},methods:{gettowns:function(t){Object(c["p"])({join:"area",s:{"area.id":{$eq:Number(t)}}}).then((function(t){console.log(t)}))},getVillagesAndTypes:function(){var t=this;Object(c["w"])({join:"town",s:{"town.id":{$eq:Number(this.townid)}}}).then((function(e){return t.villageid=e[0].id.toString(),t.villages=e.map((function(t){return{id:t.id.toString(),name:t.name}})),Object(c["b"])({join:"village",s:{"village.id":{$eq:Number(t.villageid)}}})})).then((function(e){console.log(e),t.types=e.map((function(t){return{id:t.id.toString(),name:t.name}})),t.onSubmit()}))},getvillages:function(t){var e=this;Object(c["w"])({join:"town",s:{"town.id":{$eq:Number(t)}}}).then((function(t){e.villageid=t[0].id.toString(),e.villages=t.map((function(a){return e.type=t[0].id.toString(),{id:a.id.toString(),name:a.name}}))}))},getSubsidytypes:function(){var t=this;Object(c["b"])({join:"village",s:{"village.id":{$eq:Number(this.villageid)}}}).then((function(e){console.log(e),t.types=e.map((function(t){return{id:t.id.toString(),name:t.name}}))}))},onSubmit:function(){console.log(this.villageid),this.$emit("Search",this.villageid,this.type)}},watch:{townid:function(t){this.getvillages(this.townid)},villageid:function(t){this.type="",this.getSubsidytypes()}}},m=g,v=a("2877"),y=Object(v["a"])(m,h,p,!1,null,null,null),w=y.exports,S={name:"VmemberTable",components:{BaseCard:d["a"],themask:b["a"],BaseCard2:f["a"],VillageSearch:w},data:function(){return{pageSize:16,page:1,currentPage:1,pageCount:1,total:0,tableData:[],itemdata:{},loading:!0,showcard:!1,villageid:"",type:""}},created:function(){},methods:{get_tableData:function(){var t=this;this.loading=!0,Object(c["c"])({limit:this.pageSize,page:this.page,join:"village,operatingAssets,nonOperatingAssets",s:{"village.id":{$eq:Number(this.villageid)}}}).then((function(e){console.log(e),t.loading=!1,t.total=e.total,t.tableData.splice(0),t.tableData=e.data.map((function(t,e){var a={amount:"--",contractSigned:"--",contractStatus:"--",createdAt:"--",durationOfCooperation:"--",id:"--",lessee:"--",paymentStatus:"--",relatedDocuments:"--",remarks:"--"},n={brand:"--",changes:"--",createdAt:"--",creationTime:"--",estimatedYears:"--",presentValue:"--",productStatus:"--",quantity:"--",remarks:"--",sizeAndModel:"--",source:"--",unitOfMeasurement:"--",unitPrice:"--",useDepartmentsAndUser:"--"};if(null!=t.operatingAssets){for(var r=0,i=Object.entries(t.operatingAssets);r<i.length;r++){var o=Object(s["a"])(i[r],2),c=o[0],d=o[1];a[c.toString()]=Object(u["c"])(d)}!0===t.operatingAssets.contractSigned?a.contractSigned="签订合同":a.contractSigned="未签订合同",delete a["id"]}if(null!=t.nonOperatingAssets){console.log(1111111111111);for(var f=0,b=Object.entries(t.nonOperatingAssets);f<b.length;f++){var h=Object(s["a"])(b[f],2),p=h[0],g=h[1];n[p.toString()]=Object(u["c"])(g)}delete n["id"]}return Object(l["a"])(Object(l["a"])({id:t.id,index:e,name:Object(u["c"])(t.name)},a),n)})),console.log(t.tableData)}))},villageSearch:function(t,e){console.log(t),this.villageid=t,this.type=e,this.get_tableData()},handleClick:function(t){console.log(t.index),this.itemdata=this.tableData[Number(t.index)],this.showcard=!0},handleSizeChange:function(t){this.pageSize=Number(t),this.currentPage=1,this.page=1,this.get_tableData()},handleCurrentChange:function(t){this.currentPage=Number(t),this.page=Number(t),this.get_tableData()},hidenMask:function(){this.showcard=!1}}},A=S,O=Object(v["a"])(A,i,o,!1,null,null,null),j=O.exports,C={name:"Assets",components:{AssetsTable:j}},x=C,_=Object(v["a"])(x,n,r,!1,null,null,null);e["default"]=_.exports},d13f:function(t,e,a){"use strict";var n=a("f25b"),r=a.n(n);r.a},d28b:function(t,e,a){var n=a("746f");n("iterator")},d81d:function(t,e,a){"use strict";var n=a("23e7"),r=a("b727").map,i=a("1dde"),o=a("ae40"),l=i("map"),s=o("map");n({target:"Array",proto:!0,forced:!l||!s},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},ddb0:function(t,e,a){var n=a("da84"),r=a("fdbc"),i=a("e260"),o=a("9112"),l=a("b622"),s=l("iterator"),c=l("toStringTag"),u=i.values;for(var d in r){var f=n[d],b=f&&f.prototype;if(b){if(b[s]!==u)try{o(b,s,u)}catch(p){b[s]=u}if(b[c]||o(b,c,d),r[d])for(var h in i)if(b[h]!==i[h])try{o(b,h,i[h])}catch(p){b[h]=i[h]}}}},e01a:function(t,e,a){"use strict";var n=a("23e7"),r=a("83ab"),i=a("da84"),o=a("5135"),l=a("861d"),s=a("9bf2").f,c=a("e893"),u=i.Symbol;if(r&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};c(f,u);var b=f.prototype=u.prototype;b.constructor=f;var h=b.toString,p="Symbol(test)"==String(u("test")),g=/^Symbol\((.*)\)[^)]+$/;s(b,"description",{configurable:!0,get:function(){var t=l(this)?this.valueOf():this,e=h.call(t);if(o(d,t))return"";var a=p?e.slice(7,-1):e.replace(g,"$1");return""===a?void 0:a}}),n({global:!0,forced:!0},{Symbol:f})}},ea2c:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._t("header")],2),a("div",{staticClass:"card-body"},[t._t("body")],2)])},r=[],i={name:"BaseCard2"},o=i,l=(a("a2ef"),a("2877")),s=Object(l["a"])(o,n,r,!1,null,"054593fc",null);e["a"]=s.exports},f25b:function(t,e,a){},fb6a:function(t,e,a){"use strict";var n=a("23e7"),r=a("861d"),i=a("e8b5"),o=a("23cb"),l=a("50c4"),s=a("fc6a"),c=a("8418"),u=a("b622"),d=a("1dde"),f=a("ae40"),b=d("slice"),h=f("slice",{ACCESSORS:!0,0:0,1:2}),p=u("species"),g=[].slice,m=Math.max;n({target:"Array",proto:!0,forced:!b||!h},{slice:function(t,e){var a,n,u,d=s(this),f=l(d.length),b=o(t,f),h=o(void 0===e?f:e,f);if(i(d)&&(a=d.constructor,"function"!=typeof a||a!==Array&&!i(a.prototype)?r(a)&&(a=a[p],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return g.call(d,b,h);for(n=new(void 0===a?Array:a)(m(h-b,0)),u=0;b<h;b++,u++)b in d&&c(n,u,d[b]);return n.length=u,n}})}}]);