(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fe64894"],{b40f:function(e,t,o){"use strict";var s=o("ccb0"),r=o.n(s);r.a},ccb0:function(e,t,o){},dc3f9:function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"loginbox"},[o("el-row",[o("el-col",{attrs:{span:12,offset:8}},[o("div",{staticClass:"loginform"},[o("h1",[e._v("郑州市惠济区村务监督平台")]),o("el-form",{attrs:{model:e.form}},[o("el-form-item",[o("el-input",{attrs:{placeholder:"请输入账号",clearable:"","prefix-icon":"el-icon-user",type:"text"},model:{value:e.form.usernum,callback:function(t){e.$set(e.form,"usernum",t)},expression:"form.usernum"}})],1),o("el-form-item",[o("el-input",{attrs:{clearable:"",placeholder:"请输入密码","prefix-icon":"el-icon-key",type:"password"},model:{value:e.form.pas,callback:function(t){e.$set(e.form,"pas",t)},expression:"form.pas"}})],1),o("el-form-item",[o("el-switch",{model:{value:e.form.remember,callback:function(t){e.$set(e.form,"remember",t)},expression:"form.remember"}}),o("span",[e._v("记住我")])],1),o("br"),o("el-form-item",[o("el-button",{staticClass:"loginbutton",attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("登录")])],1)],1)],1)])],1)],1),o("el-row",[o("el-col",{attrs:{span:12}},[o("div",{staticClass:"login login-left"})]),o("el-col",{attrs:{span:12}},[o("div",{staticClass:"login login-right"})])],1)],1)},r=[],a=(o("b0c0"),o("ac1f"),o("5319"),o("1bab")),n={name:"login",data:function(){return{form:{usernum:"",pas:"",remember:!1}}},created:function(){localStorage.token&&this.$router.replace("/home")},methods:{onSubmit:function(){var e=this;Object(a["x"])(this.form.usernum,this.form.pas).then((function(t){return e.$store.commit("set_token",t.access_token),e.$message({message:t.message,type:"success"}),Object(a["q"])()}),(function(t){e.$message({showClose:!0,message:t.data.message,type:"error"})})).then((function(t){console.log(t),e.$store.commit("set_level",t.level),e.$store.commit("set_id",t.id),e.$store.commit("set_name",t.name),e.$store.commit("set_townid",t.town.id),e.$store.commit("set_townname",t.town.name),e.$store.commit("set_areaid",t.area.id),e.$store.commit("set_areaname",t.area.name),e.$store.commit("set_villagename",t.village.name),e.$store.commit("set_villageid",t.village.id),e.$router.replace("/home")}))}}},i=n,m=(o("b40f"),o("2877")),l=Object(m["a"])(i,s,r,!1,null,"071c0a84",null);t["default"]=l.exports}}]);