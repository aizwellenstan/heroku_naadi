(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0de505"],{"84b5":function(t,a,e){"use strict";e.r(a);var c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"el-card login-card text-primary fs-xl is-always-shadow"},[e("div",{staticClass:"el-card__header"},[t._v("更新靜態資料點位")]),t._v(" "),e("div",{staticClass:"el-card__body"},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-striped table-hover",staticStyle:{color:"black"},attrs:{border:"1"}},[t._m(0),t._v(" "),e("tbody",t._l(t.colddataList,(function(a,c,n){return e("tr",{key:n},[e("td",[t._v(t._s(a.ObjectData.ParentId))]),t._v(" "),e("td",[t._v(t._s(a.ObjectData.ObjectId))]),t._v(" "),e("td",[e("router-link",{attrs:{to:{name:"EditColddata",params:{id:a.ObjectData.id}}}},[e("button",{staticClass:"btn btn-warning"},[t._v("Edit")])])],1)])})),0)])])])])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",{staticClass:"bg-info"},[e("tr",[e("th",[t._v("ParentId")]),e("th",[t._v("ObjectId")]),e("th",[t._v("Edit")])])])}],d=e("a8f8"),o=localStorage.getItem("CompanyId"),s=localStorage.getItem("ProductId"),r=localStorage.getItem("ProjectId"),l=d["b"]+"/".concat(o,"/").concat(s,"/").concat(r,"/colddata"),i={data:function(){return{search:"",colddataList:[]}},mounted:function(){var t=this;fetch(l,{method:"get",headers:{Token:localStorage.getItem("token")}}).then((function(t){return t.json().then((function(t){return{data:t}}))})).then((function(a){t.colddataList=Object(a.data),console.log(t.colddataList)}))}},u=i,b=e("2877"),_=Object(b["a"])(u,c,n,!1,null,null,null);a["default"]=_.exports}}]);