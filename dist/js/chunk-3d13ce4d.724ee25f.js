(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d13ce4d"],{"159b":function(t,e,i){var n=i("da84"),o=i("fdbc"),a=i("17c2"),s=i("9112");for(var l in o){var r=n[l],c=r&&r.prototype;if(c&&c.forEach!==a)try{s(c,"forEach",a)}catch(u){c.forEach=a}}},"17c2":function(t,e,i){"use strict";var n=i("b727").forEach,o=i("a640"),a=i("ae40"),s=o("forEach"),l=a("forEach");t.exports=s&&l?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,i){var n=i("d039"),o=i("b622"),a=i("2d00"),s=o("species");t.exports=function(t){return a>=51||!n((function(){var e=[],i=e.constructor={};return i[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},3752:function(t,e,i){"use strict";var n=i("d7f8"),o=i.n(n);o.a},4160:function(t,e,i){"use strict";var n=i("23e7"),o=i("17c2");n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"65f0":function(t,e,i){var n=i("861d"),o=i("e8b5"),a=i("b622"),s=a("species");t.exports=function(t,e){var i;return o(t)&&(i=t.constructor,"function"!=typeof i||i!==Array&&!o(i.prototype)?n(i)&&(i=i[s],null===i&&(i=void 0)):i=void 0),new(void 0===i?Array:i)(0===e?0:e)}},"729e":function(t,e,i){},"77b8":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("div",{staticClass:"header"},[i("div",[t._m(0),i("ul",[i("li",[i("span",{staticStyle:{color:"#ffffff"}},[t._v(" "+t._s(t.$store.state.name)+"，欢迎登陆！ ")])]),i("li",{staticClass:"lihavea",on:{click:function(e){return e.stopPropagation(),t.exit(e)}}},[i("a",[i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"退出",placement:"bottom"}},[i("button",{staticClass:"li el-icon-switch-button"})])],1)]),t.isopenfall?i("li",{staticClass:"lihavea",on:{click:function(e){return e.stopPropagation(),t.openall(e)}}},[i("a",[i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"全屏",placement:"bottom"}},[i("button",{staticClass:"li el-icon-full-screen"})])],1)]):i("li",{staticClass:"lihavea",on:{click:function(e){return e.stopPropagation(),t.hidenall(e)}}},[i("a",[i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"恢复",placement:"bottom"}},[i("button",{staticClass:"li el-icon-copy-document"})])],1)]),i("li",{staticClass:"lihavea",on:{click:function(e){return e.stopPropagation(),t.refresh(e)}}},[i("a",[i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"刷新",placement:"bottom"}},[i("button",{staticClass:"li el-icon-refresh-right"})])],1)]),i("li",{staticClass:"lihavea",attrs:{disabled:""},on:{click:function(e){return e.stopPropagation(),t.gofront(e)}}},[i("a",[i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"前进",placement:"bottom"}},[i("button",{staticClass:"li el-icon-d-arrow-right",attrs:{disabled:t.showfront}})])],1)]),i("li",{staticClass:"lihavea",on:{click:function(e){return e.stopPropagation(),t.goback(e)}}},[i("a",[i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"后退",placement:"bottom"}},[i("button",{staticClass:"li el-icon-d-arrow-left",attrs:{disabled:t.showback}})])],1)]),0===t.$store.state.leaderlevel?i("li",[i("span",{staticStyle:{color:"#ffffff"}},[t._v("身份选择：")]),i("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择锁定您的身份",filterable:""},model:{value:t.yourlevel,callback:function(e){t.yourlevel=e},expression:"yourlevel"}},[i("el-option",{attrs:{label:"区领导",value:"0"}},[i("span",{staticStyle:{float:"left","padding-left":"10px"}},[t._v("区领导")])]),t._l(t.levels,(function(e){return i("el-option",{key:e.value,attrs:{label:e.label+"领导",value:e.value}},[i("span",{staticStyle:{float:"left","padding-left":"10px"}},[t._v(t._s(e.label)+"领导")])])}))],2)],1):t._e()])]),i("div",{staticClass:"breadcrumb"})]),i("div",{staticClass:"side"},[i("div",{staticClass:"menu"},[i("el-menu",{key:t.reloadmenu,ref:"elmenu",staticStyle:{"font-size":"20px"},attrs:{collapse:t.isCollapse,"default-active":t.defaultPath,"unique-opened":!0,router:""},on:{open:t.handleOpen,close:t.handleClose}},[i("el-submenu",{attrs:{index:"suggestion"}},[i("template",{slot:"title"},[i("i",{staticClass:"el-icon-chat-line-round"}),i("span",[t._v("群众意见建议")])]),i("el-menu-item",{attrs:{index:"/home/suggestion/sugsum"}},[t._v("数据分析")]),i("el-menu-item",{attrs:{index:"/home/suggestion/sugtable"}},[t._v("列表详情")])],2),i("el-submenu",{attrs:{index:"Party"}},[i("template",{slot:"title"},[i("i",{staticClass:"icon-danghui"}),i("span",[t._v("党务")])]),i("el-menu-item",{attrs:{index:"/home/party/PartyMember"}},[t._v("党员发展")]),i("el-menu-item",{attrs:{index:"/home/party/PartyActivity"}},[t._v("党组织活动")])],2),i("el-submenu",{attrs:{index:"villagebox"}},[i("template",{slot:"title"},[i("i",{staticClass:"el-icon-office-building"}),i("span",[t._v("村务")])]),i("el-menu-item",{attrs:{index:"/home/villagebox/cadre"}},[t._v("村庄简介")]),i("el-menu-item",{attrs:{index:"/home/villagebox/villagemember"}},[t._v("村干部")]),i("el-menu-item",{attrs:{index:"/home/villagebox/villager"}},[t._v("村民")]),i("el-menu-item",{attrs:{index:"/home/villagebox/vActivity"}},[t._v("村活动")]),i("el-menu-item",{attrs:{index:"/home/villagebox/vMeeting"}},[t._v("村会议")]),i("el-menu-item",{attrs:{index:"/home/villagebox/vmigration"}},[t._v("户口迁移")]),i("el-menu-item",{attrs:{index:"/home/villagebox/subsitytype"}},[t._v("补助项")]),i("el-menu-item",{attrs:{index:"/home/villagebox/subsityfamily"}},[t._v("补助户")]),i("el-menu-item",{attrs:{index:"/home/villagebox/subsityperson"}},[t._v("补助对象")])],2),i("el-submenu",{attrs:{index:"finance"}},[i("template",{slot:"title"},[i("i",{staticClass:"el-icon-coin"}),i("span",[t._v("财务")])]),i("el-menu-item",{attrs:{index:"/home/finance/resource"}},[t._v("资源")]),i("el-menu-item",{attrs:{index:"/home/finance/assets"}},[t._v("资产")]),i("el-menu-item",{attrs:{index:"/home/finance/fund"}},[t._v("资金")]),i("el-menu-item",{attrs:{index:"/home/finance/project"}},[t._v("项目建设")])],2),i("el-submenu",{attrs:{index:"bigdata"}},[i("template",{slot:"title"},[i("i",{staticClass:"el-icon-s-data"}),i("span",{attrs:{slot:"title"},slot:"title"},[t._v("数据可视化一览表")])]),i("el-menu-item",{attrs:{index:"/home/bigdata/funds"}},[t._v("资金")]),i("el-menu-item",{attrs:{index:"/home/bigdata/partymembers"}},[t._v("党员发展")])],2),i("el-submenu",{attrs:{index:"profile"}},[i("template",{slot:"title"},[i("i",{staticClass:"el-icon-user"}),i("span",{attrs:{slot:"title"},slot:"title"},[t._v("我的账户")])]),i("el-menu-item",{attrs:{index:"/home/profile/updata"}},[t._v("编辑")])],2)],1)],1)]),i("div",{staticClass:"body"},[i("keep-alive",[i("router-view")],1)],1)])},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"logo"},[i("div",{staticClass:"logo-img"},[t._v(" 惠济区 村（居）务监督平台 ")])])}],a=(i("4160"),i("d81d"),i("a9e3"),i("d3b7"),i("ac1f"),i("25f0"),i("5319"),i("159b"),{name:"home",data:function(){return{defaultPath:"/home/suggestion/sugsum",isCollapse:!1,changefold:"el-icon-s-fold",reloadmenu:"",yourlevel:localStorage.yourlevel||"0",isopenfall:!0,historyState:1,showfront:!1,showback:!1}},computed:{levels:function(){var t=this.$store.state.towns.map((function(t){return{value:t.zhenid.toString(),label:t.zhenName}}));return t}},created:function(){try{this.defaultPath=this.$route.path}catch(t){}localStorage.isopenfall&&this.openall()},methods:{hidenall:function(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen(),"undefined"!=typeof cfs&&cfs&&cfs.call(el),this.isopenfall=!0},openall:function(){var t=document.documentElement,e=t.requestFullScreen||t.webkitRequestFullScreen||t.mozRequestFullScreen||t.msRequestFullscreen;"undefined"!=typeof e&&e&&e.call(t),this.isopenfall=!1},changemenu:function(){this.isCollapse?(this.changefold="el-icon-s-fold",this.isCollapse=!1):(this.changefold="el-icon-s-unfold",this.isCollapse=!0)},goback:function(){this.$router.go(-1),this.historyState--},gofront:function(){this.$router.go(1),this.historyState++},refresh:function(){location.reload()},handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)},exit:function(){this.$router.replace("/login"),localStorage.removeItem("token")},historyStateChange:function(){var t=window.history.length;this.historyState<t?this.showfront=!1:this.showfront=!0,this.historyState>1?this.showback=!1:this.showback=!0},cancel:function(){this.defaultPath=this.$route.path}},watch:{yourlevel:function(t){var e=this;localStorage.yourlevel=t,"0"===t?(this.$store.commit("set_level",t),this.$store.commit("set_townid","6")):(this.$store.commit("set_level",t),this.$store.commit("set_townid",t.toString()),this.$store.state.towns.forEach((function(i){Number(t)===i.zhenid&&e.$store.commit("set_townname",i.zhenName)}))),this.refresh()},$route:function(){this.historyState=window.history.length,console.log(this.historyState),this.defaultPath=this.$route.path}},mounted:function(){window.history&&window.history.pushState&&(history.pushState(null,null,document.URL),window.addEventListener("popstate",this.cancel,!1))},destroyed:function(){window.removeEventListener("popstate",this.cancel,!1)}}),s=a,l=(i("3752"),i("cd52"),i("2877")),r=Object(l["a"])(s,n,o,!1,null,"71b8a4fb",null);e["default"]=r.exports},a640:function(t,e,i){"use strict";var n=i("d039");t.exports=function(t,e){var i=[][t];return!!i&&n((function(){i.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,i){var n=i("83ab"),o=i("d039"),a=i("5135"),s=Object.defineProperty,l={},r=function(t){throw t};t.exports=function(t,e){if(a(l,t))return l[t];e||(e={});var i=[][t],c=!!a(e,"ACCESSORS")&&e.ACCESSORS,u=a(e,0)?e[0]:r,f=a(e,1)?e[1]:void 0;return l[t]=!!i&&!o((function(){if(c&&!n)return!0;var t={length:-1};c?s(t,1,{enumerable:!0,get:r}):t[1]=1,i.call(t,u,f)}))}},b727:function(t,e,i){var n=i("0366"),o=i("44ad"),a=i("7b0b"),s=i("50c4"),l=i("65f0"),r=[].push,c=function(t){var e=1==t,i=2==t,c=3==t,u=4==t,f=6==t,d=5==t||f;return function(m,h,p,v){for(var b,g,y=a(m),x=o(y),C=n(h,p,3),S=s(x.length),_=0,w=v||l,k=e?w(m,S):i?w(m,0):void 0;S>_;_++)if((d||_ in x)&&(b=x[_],g=C(b,_,y),t))if(e)k[_]=g;else if(g)switch(t){case 3:return!0;case 5:return b;case 6:return _;case 2:r.call(k,b)}else if(u)return!1;return f?-1:c||u?u:k}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},cd52:function(t,e,i){"use strict";var n=i("729e"),o=i.n(n);o.a},d7f8:function(t,e,i){},d81d:function(t,e,i){"use strict";var n=i("23e7"),o=i("b727").map,a=i("1dde"),s=i("ae40"),l=a("map"),r=s("map");n({target:"Array",proto:!0,forced:!l||!r},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},e8b5:function(t,e,i){var n=i("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);