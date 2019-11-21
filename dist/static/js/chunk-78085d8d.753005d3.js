(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78085d8d"],{a67a:function(e,s,t){"use strict";var r=t("f98b"),a=t.n(r);a.a},d5c2:function(e,s,t){"use strict";t.r(s);var r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("div",{staticClass:"el-card login-card text-primary fs-xl is-always-shadow"},[t("div",{staticClass:"el-card__header"},[e._v("註冊")]),e._v(" "),e.errorMessage?t("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v("\n      "+e._s(e.errorMessage)+"\n    ")]):e._e(),e._v(" "),e.signingUp?e._e():t("form",{on:{submit:function(s){return s.preventDefault(),e.signup(s)}}},[t("div",{staticClass:"form-group"},[t("div",{staticClass:"el-form-item"},[t("label",{staticClass:"el-form-item__label"},[e._v("使用者名稱")]),e._v(" "),t("div",{staticClass:"el-form-item__content"},[t("div",{staticClass:"el-input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"el-input__inner",attrs:{id:"username",type:"text","aria-describedby":"usernameHelp",placeholder:"輸入使用者名稱",required:""},domProps:{value:e.user.username},on:{input:function(s){s.target.composing||e.$set(e.user,"username",s.target.value)}}})])])]),e._v(" "),e._m(0)]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"form-group col-md-6"},[t("span",{staticClass:"tag"},[e._v("密碼")]),t("br"),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"textbox",attrs:{id:"password",type:"password","aria-describedby":"passwordHelp",placeholder:"輸入密碼",required:""},domProps:{value:e.user.password},on:{input:function(s){s.target.composing||e.$set(e.user,"password",s.target.value)}}}),e._v(" "),e._m(1)]),e._v(" "),t("div",{staticClass:"form-group col-md-6"},[t("span",{staticClass:"tag"},[e._v("確認密碼")]),t("br"),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.confirmPassword,expression:"user.confirmPassword"}],staticClass:"textbox",attrs:{id:"confirmPassword",type:"password","aria-describedby":"confirmPasswordHelp",placeholder:"確認密碼",required:""},domProps:{value:e.user.confirmPassword},on:{input:function(s){s.target.composing||e.$set(e.user,"confirmPassword",s.target.value)}}})]),e._v(" "),t("div",{staticClass:"form-group col-md-6"},[t("span",{staticClass:"tag"},[e._v("姓")]),t("br"),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.lastName,expression:"user.lastName"}],staticClass:"textbox",attrs:{id:"lastName",type:"text","aria-describedby":"lastNameHelp",placeholder:"輸入姓",required:""},domProps:{value:e.user.lastName},on:{input:function(s){s.target.composing||e.$set(e.user,"lastName",s.target.value)}}})]),e._v(" "),t("div",{staticClass:"form-group col-md-6"},[t("span",{staticClass:"tag"},[e._v("名")]),t("br"),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.firstName,expression:"user.firstName"}],staticClass:"textbox",attrs:{id:"firstName",type:"text","aria-describedby":"firstNameHelp",placeholder:"輸入名",required:""},domProps:{value:e.user.firstName},on:{input:function(s){s.target.composing||e.$set(e.user,"firstName",s.target.value)}}})]),e._v(" "),t("div",{staticClass:"form-group col-md-6"},[t("span",{staticClass:"tag"},[e._v("Email")]),t("br"),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"textbox",attrs:{id:"email",type:"text","aria-describedby":"emailHelp",placeholder:"Email",required:""},domProps:{value:e.user.email},on:{input:function(s){s.target.composing||e.$set(e.user,"email",s.target.value)}}})])]),e._v(" "),t("div"),e._v(" "),e.privacy?t("div",{staticStyle:{color:"black"},attrs:{width:"100%"}},[t("h1",[e._v("隱私權政策")]),e._v("\n        為了讓您能夠安心的使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策，以保障您的權益，請您詳閱下列內容："),t("br"),e._v(" "),t("br"),e._v("\n        一、隱私權保護政策的適用範圍"),t("br"),e._v("\n        隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。"),t("br"),e._v(" "),t("br"),e._v("\n        二、個人資料的蒐集、處理及利用方式"),t("br"),e._v("\n        當您造訪本網站或使用本網站所提供之功能服務時，我們將視該服務功能性質，請您提供必要的個人資料，並在該特定目的範圍內處理及利用您的個人資料；非經您書面同意，本網站不會將個人資料用於其他用途。"),t("br"),e._v("\n        本網站在您使用服務信箱、問卷調查等互動性功能時，會保留您所提供的姓名、電子郵件地址、聯絡方式及使用時間等。"),t("br"),e._v("\n        於一般瀏覽時，伺服器會自行記錄相關行徑，包括您使用連線設備的IP位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等，做為我們增進網站服務的參考依據，此記錄為內部應用，決不對外公佈。"),t("br"),e._v("\n        為提供精確的服務，我們會將收集的問卷調查內容進行統計與分析，分析結果之統計數據或說明文字呈現，除供內部研究外，我們會視需要公佈統計數據及說明文字，但不涉及特定個人之資料。"),t("br"),e._v("\n        三、資料之保護"),t("br"),e._v("\n        如因業務需要有必要委託其他單位提供服務時，本網站會嚴格要求其遵守保密義務，並且採取必要檢查程序以確定其將確實遵守。"),t("br"),e._v("\n        四、網站對外的相關連結"),t("br"),e._v("\n        本網站的網頁提供其他網站的網路連結，您也可經由本網站所提供的連結，點選進入其他網站。但該連結網站不適用本網站的隱私權保護政策，您必須參考該連結網站中的隱私權保護政策。"),t("br"),e._v(" "),t("br"),e._v("\n        五、與第三人共用個人資料之政策"),t("br"),e._v("\n        本網站絕不會提供、交換、出租或出售任何您的個人資料給其他個人、團體、私人企業或公務機關，但有法律依據或合約義務者，不在此限。"),t("br"),e._v(" "),t("br"),e._v("\n        前項但書之情形包括不限於："),t("br"),e._v(" "),t("br"),e._v("\n        經由您書面同意。"),t("br"),e._v("\n        法律明文規定。"),t("br"),e._v("\n        為免除您生命、身體、自由或財產上之危險。"),t("br"),e._v("\n        與公務機關或學術研究機構合作，基於公共利益為統計或學術研究而有必要，且資料經過提供者處理或蒐集者依其揭露方式無從識別特定之當事人。"),t("br"),e._v("\n        當您在網站的行為，違反服務條款或可能損害或妨礙網站與其他使用者權益或導致任何人遭受損害時，經網站管理單位研析揭露您的個人資料是為了辨識、聯絡或採取法律行動所必要者。"),t("br"),e._v("\n        有利於您的權益。"),t("br"),e._v("\n        本網站委託廠商協助蒐集、處理或利用您的個人資料時，將對委外廠商或個人善盡監督管理之責。"),t("br"),e._v(" "),t("br"),e._v("\n        六、Cookie之使用"),t("br"),e._v("\n        為了提供您最佳的服務，本網站會在您的電腦中放置並取用我們的Cookie，若您不願接受Cookie的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕Cookie的寫入，但可能會導致網站某些功能無法正常執行 。"),t("br")]):e._e(),e._v(" "),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.isChecked,expression:"isChecked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isChecked)?e._i(e.isChecked,null)>-1:e.isChecked},on:{change:function(s){var t=e.isChecked,r=s.target,a=!!r.checked;if(Array.isArray(t)){var i=null,n=e._i(t,i);r.checked?n<0&&(e.isChecked=t.concat([i])):n>-1&&(e.isChecked=t.slice(0,n).concat(t.slice(n+1)))}else e.isChecked=a}}}),t("span",{staticStyle:{color:"black"}},[e._v("我同意NADI")]),e._v(" "),t("a",{on:{click:function(s){e.privacy=!e.privacy}}},[e._v("隱私權政策")]),e._v(" "),t("br"),e._v(" "),t("div",{staticStyle:{"padding-top":"21px"}},[t("button",{staticClass:"btn-cyan",attrs:{type:"submit"}},[e._v("新增帳號")]),e._v(" "),t("router-link",{attrs:{to:"/login"}},[t("button",{staticClass:"btn-white",attrs:{type:"submit"}},[e._v("已有帳號?登入")])])],1)])])])},a=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("h5",{staticClass:"form-text text-muted",attrs:{id:"usernameHelp"}},[e._v("\n          使用者名稱需大於兩個字小於30個字"),t("br"),e._v("\n          只可包含英文字母及數字。\n        ")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("h5",{staticClass:"form-text text-muted",attrs:{id:"passwordHelp"}},[e._v("\n            密碼需大於8個字"),t("br"),e._v("\n            密碼須包含1個大寫字1個小寫字及1個數字。\n          ")])}],i=t("a8f8"),n=i["a"]+"/account/register/",o={data:function(){return{privacy:!1,signingUp:!1,errorMessage:"",user:{username:"",password:"",confirmPassword:"",lastName:"",firstName:"",email:"",su:"",sf:"",permission:""},isChecked:!0}},watch:{user:{handler:function(){this.errorMessage=""},deep:!0}},methods:{signup:function(){var e=this;this.errorMessage="",this.signingUp=!0,fetch(n,{method:"post",headers:{US:this.user.username,PS:this.user.password,LN:this.user.lastName,FN:this.user.firstName,EMAIL:this.user.email,SU:"0",SF:"0"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw new Error(e.message)}))})).then((function(s){localStorage.token=s.token,setTimeout((function(){e.signingUp=!1,e.$router.push("/login")}),1e3)})).catch((function(s){setTimeout((function(){e.signingUp=!1,e.errorMessage=s.message}),1e3)}))}}},l=o,c=(t("a67a"),t("2877")),u=Object(c["a"])(l,r,a,!1,null,"600b85c4",null);s["default"]=u.exports},f98b:function(e,s,t){}}]);