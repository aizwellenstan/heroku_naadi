(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-396d11ca"],{"63c4":function(t,e,n){},b5c0:function(t,e,n){"use strict";var o=n("63c4"),c=n.n(o);c.a},c585:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"el-card login-card text-primary fs-xl is-always-shadow"},[n("div",{staticClass:"el-card__header"},[t._v("Delete Colddata")]),t._v(" "),n("div",{staticClass:"el-card__body"},[n("table",{staticStyle:{color:"black"},attrs:{border:"1"}})])])])}],a=(n("6b54"),n("a8f8")),r=a["a"]+"/account/search/",s={data:function(){return{search:"",userslist:[]}},mounted:function(){var t=this;fetch(r,{method:"post",headers:{Token:localStorage.getItem("token")}}).then((function(t){return t.json().then((function(t){return{data:t}}))})).then((function(e){t.userslist=Object(e.data),console.log(t.userslist)}))},methods:{confirm:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){var e=!1;if(console.log("remove"+t),confirm('Are You Sure To Delete "'.concat(t,'"'))?e=!0:console.log("やめろぉぉぉぉぉ!"),e){var n=localStorage.getItem("token"),o=a["a"]+"/account/delete/".concat(t,"/");fetch(o,{method:"post",headers:{Token:n}}),console.log("シネネネネネネネねね")}}))}},l=s,i=(n("b5c0"),n("2877")),u=Object(i["a"])(l,o,c,!1,null,null,null);e["default"]=u.exports}}]);