(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c1c82"],{4808:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"el-card login-card text-primary fs-xl is-always-shadow"},[r("div",{staticClass:"el-card__header"},[t._v("修改帳戶")]),t._v(" "),r("div",{staticClass:"el-card__body"},[r("div",{staticClass:"table-responsive"},t._l(t.userslist,(function(e,s,a){return r("table",{key:a,staticClass:"table table-striped table-hover",staticStyle:{color:"black"},attrs:{border:"1",width:"242px"}},[r("tr",[r("td",{attrs:{width:"92px"}},[t._v("使用者名稱")]),r("td",[t._v(t._s(e.username)+" ")])]),t._v(" "),r("tr",[r("td",{attrs:{width:"92px"}},[t._v("備註")]),r("td",[t._v(t._s(e.description))])]),t._v(" "),r("tr",[r("td",{attrs:{width:"92px"}},[t._v("權限")]),r("td",[t._v(t._s(e.group))])]),t._v(" "),r("tr",[r("td",{attrs:{width:"92px"}},[t._v("語言")]),r("td",[t._v(t._s(e.language))])]),t._v(" "),r("tr",[r("td",{attrs:{width:"92px"}},[t._v("地址")]),r("td",[t._v(t._s(e.address))])]),t._v(" "),r("tr",[r("td",{attrs:{width:"92px"}},[t._v("電話號碼")]),r("td",[t._v(t._s(e.phone))])]),t._v(" "),r("tr",[r("td",{attrs:{width:"92px"}},[t._v("email")]),r("td",[t._v(t._s(e.email))])]),t._v(" "),r("tr",[r("td",{attrs:{colspan:"2"}},[r("center",["Guest"==t.group||"User"==t.group&&("User"==e.group&&t.userid!==e.id||"Manger"==e.group)?r("span",{staticStyle:{color:"red"}},[t._v("權限不足")]):r("router-link",{attrs:{to:{name:"EditUser",params:{id:e.id}}}},[r("button",{staticClass:"btn btn-warning"},[t._v("修改\n                  ")])])],1)],1)])])})),0)])])])},a=[],d=r("a8f8"),o=d["b"]+"/user/search",n=localStorage.getItem("CompanyId"),i=localStorage.getItem("ProductId"),c=localStorage.getItem("ProjectId"),l={data:function(){return{userid:"",group:"",search:"",userslist:[]}},created:function(){this.userid=localStorage.getItem("userid"),this.group=localStorage.getItem("group")},mounted:function(){this.query()},methods:{query:function(){var t=this;fetch(o,{method:"post",headers:{"Content-Type":"application/json",Accept:"application/json",Token:localStorage.getItem("token")},body:JSON.stringify({CompanyId:n,ProductId:i,ProjectId:c})}).then((function(t){return t.json().then((function(t){return{data:t}}))})).then((function(e){t.userslist=Object(e.data)}))}}},u=l,p=r("2877"),_=Object(p["a"])(u,s,a,!1,null,null,null);e["default"]=_.exports}}]);