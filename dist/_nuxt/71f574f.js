(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{376:function(e,t,r){"use strict";var n=r(12),o=(r(38),{components:{},data:function(){return{validated:!1,model:{firstName:"Mark",lastName:"Otto",username:"",city:"",state:"",zip:"",agree:!1}}},methods:{firstFormSubmit:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}}}),l=r(8),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("card",[t("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[e._v("Custom styles")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8"},[t("p",{staticClass:"mb-0"},[e._v("\n        For custom form validation messages, you’ll need to provide error messages to your\n        "),t("code",[e._v("<base-input>")]),e._v(" components. This disables the browser default feedback tooltips, but still\n        provides access to the form\n        validation APIs in JavaScript.\n        "),t("br"),t("br"),e._v("\n        When attempting to submit, you’ll see the"),t("code",[e._v(".is-valid")]),e._v(" and "),t("code",[e._v(".is-invalid")]),e._v(" classes applied\n        to your form controls.\n      ")])])]),e._v(" "),t("hr"),e._v(" "),t("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(r){var n=r.handleSubmit;return[t("form",{staticClass:"needs-validation",on:{submit:function(t){return t.preventDefault(),n(e.firstFormSubmit)}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"First name",name:"First name",placeholder:"First name","success-message":"Looks good!",rules:"required"},model:{value:e.model.firstName,callback:function(t){e.$set(e.model,"firstName",t)},expression:"model.firstName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Last name",name:"Last name",placeholder:"Last name",rules:"required","success-message":"Looks good!"},model:{value:e.model.lastName,callback:function(t){e.$set(e.model,"lastName",t)},expression:"model.lastName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Username",name:"Username",placeholder:"Username",rules:"required"},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1)]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"City",name:"City",placeholder:"City",rules:"required"},model:{value:e.model.city,callback:function(t){e.$set(e.model,"city",t)},expression:"model.city"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"State",name:"State",placeholder:"State",rules:"required"},model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Zip",name:"Zip",placeholder:"Zip",rules:"required"},model:{value:e.model.zip,callback:function(t){e.$set(e.model,"zip",t)},expression:"model.zip"}})],1)]),e._v(" "),t("base-input",{attrs:{rules:{required:{allowFalse:!1}},name:"Terms"}},[t("base-checkbox",{model:{value:e.model.agree,callback:function(t){e.$set(e.model,"agree",t)},expression:"model.agree"}},[e._v("\n          Agree to terms and conditions\n        ")])],1),e._v(" "),t("base-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("Submit form")])],1)]}}])})],1)}),[],!1,null,null,null);t.a=component.exports},377:function(e,t,r){"use strict";var n=r(12),o=(r(38),{components:{},data:function(){return{model:{firstName:"Mark",lastName:"Otto",username:"",city:"",state:"",zip:"",agree:!1}}},methods:{submit:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}}}),l=r(8),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("card",[t("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[e._v("Browser defaults")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8"},[t("p",{staticClass:"mb-0"},[e._v("\n        Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you’ll\n        see a slightly different style of feedback.\n        "),t("br"),t("br"),e._v("\n        While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.\n      ")])])]),e._v(" "),t("hr"),e._v(" "),t("form",{staticClass:"needs-validation",on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"First name",name:"First name",placeholder:"First name",required:""},model:{value:e.model.firstName,callback:function(t){e.$set(e.model,"firstName",t)},expression:"model.firstName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Last name",name:"Last name",placeholder:"Last name",required:""},model:{value:e.model.lastName,callback:function(t){e.$set(e.model,"lastName",t)},expression:"model.lastName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Username",name:"Username",placeholder:"Username",required:""},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1)]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"City",name:"City",placeholder:"City",required:""},model:{value:e.model.city,callback:function(t){e.$set(e.model,"city",t)},expression:"model.city"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"State",name:"State",placeholder:"State",required:""},model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Zip",name:"Zip",placeholder:"Zip",required:""},model:{value:e.model.zip,callback:function(t){e.$set(e.model,"zip",t)},expression:"model.zip"}})],1)]),e._v(" "),t("base-input",[t("base-checkbox",{model:{value:e.model.agree,callback:function(t){e.$set(e.model,"agree",t)},expression:"model.agree"}},[e._v("\n        Agree to terms and conditions\n      ")])],1),e._v(" "),t("base-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("Submit form")])],1)])}),[],!1,null,null,null);t.a=component.exports},378:function(e,t,r){"use strict";var n=r(12),o=(r(38),{components:{},data:function(){return{validated:!1,model:{firstName:"Mark",lastName:"Otto",username:"",city:"",state:"",zip:"",agree:!1}}},methods:{onSubmit:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.$refs.formValidator.validate()}}),l=r(8),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("card",[t("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[e._v("Server side validation")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8"},[t("p",{staticClass:"mb-0"},[e._v("\n        We recommend using client side validation, but in case you require server side, you can indicate invalid and\n        valid form fields with "),t("code",[e._v(".is-invalid")]),e._v(" and "),t("code",[e._v(".is-valid")]),e._v(". Note that\n        "),t("code",[e._v(".invalid-feedback")]),e._v("\n        is also supported with these classes.\n      ")])])]),e._v(" "),t("hr"),e._v(" "),t("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(r){var n=r.handleSubmit;return[t("form",{staticClass:"needs-validation",on:{submit:function(t){return t.preventDefault(),n(e.onSubmit)}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"First name",rules:"required",name:"First name",placeholder:"First name","success-message":"Looks good!"},model:{value:e.model.firstName,callback:function(t){e.$set(e.model,"firstName",t)},expression:"model.firstName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Last name",rules:"required",name:"Last name",placeholder:"Last name","success-message":"Looks good!"},model:{value:e.model.lastName,callback:function(t){e.$set(e.model,"lastName",t)},expression:"model.lastName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Username",rules:"required",name:"Username",placeholder:"Username","success-message":"Looks good!"},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1)]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"City",name:"City",rules:"required",placeholder:"City","success-message":"Looks good!"},model:{value:e.model.city,callback:function(t){e.$set(e.model,"city",t)},expression:"model.city"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"State",name:"State",rules:"required",placeholder:"State","success-message":"Looks good!"},model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Zip",name:"Zip",rules:"required",placeholder:"Zip","success-message":"Looks good!"},model:{value:e.model.zip,callback:function(t){e.$set(e.model,"zip",t)},expression:"model.zip"}})],1)]),e._v(" "),t("base-input",{attrs:{rules:{required:{allowFalse:!1}},name:"Terms"}},[t("base-checkbox",{model:{value:e.model.agree,callback:function(t){e.$set(e.model,"agree",t)},expression:"model.agree"}},[e._v("\n          Agree to terms and conditions\n        ")])],1),e._v(" "),t("base-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("Submit form")])],1)]}}])})],1)}),[],!1,null,null,null);t.a=component.exports},386:function(e,t,r){"use strict";r(34),r(23),r(27),r(39),r(40),r(25),r(21),r(45),r(46),r(44);var n=r(10);r(13);function o(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,d=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){d=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(d)throw o}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={name:"file-input",inheritAttrs:!1,props:{initialLabel:{type:String,default:"Select file"}},data:function(){return{files:[]}},computed:{listeners:function(){return d(d({},this.$listeners),{},{change:this.fileChange})},label:function(){var e,t=[],r=o(this.files);try{for(r.s();!(e=r.n()).done;){var n=e.value;t.push(n.name)}}catch(e){r.e(e)}finally{r.f()}return t.length?t.join(", "):this.initialLabel}},methods:{fileChange:function(e){this.files=e.target.files,this.$emit("change",this.files)}}},f=r(8),component=Object(f.a)(m,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"custom-file"},[t("input",e._g(e._b({staticClass:"custom-file-input",attrs:{type:"file",id:"customFileLang",lang:"en"}},"input",e.$attrs,!1),e.listeners)),e._v(" "),t("label",{staticClass:"custom-file-label",attrs:{for:"customFileLang"}},[e._v("\n    "+e._s(e.label)+"\n  ")])])}),[],!1,null,null,null);t.a=component.exports},633:function(e,t){},636:function(e,t,r){},716:function(e,t,r){"use strict";r(636)},779:function(e,t,r){"use strict";r.r(t);r(13),r(120),r(239),r(87);var n,o=r(167),l=r.n(o),c=r(12),d=r(10),m=(r(391),r(392)),f=r.n(m),v=(r(393),r(394)),h=r.n(v),w=(r(38),r(171),r(21),r(63),r(64),r(23),r(45),r(46),r(44),r(47),r(27),r(70)),k=r(376),y=r(377),C=r(378),x=r(386),_=r(414),S=r.n(_),O=(r(415),r(632),{name:"form-components",layout:"DashboardLayout",middleware:["isAuthenticated","checkAdmin"],components:(n={CustomStylesValidation:k.a,BrowserDefaultsValidation:y.a,ServerSideValidation:C.a},Object(d.a)(n,h.a.name,h.a),Object(d.a)(n,f.a.name,f.a),Object(d.a)(n,"FileInput",x.a),Object(d.a)(n,"flatPicker",S.a),n),data:function(){return{validated:!1,seen:!0,se:!0,sin:!0,model:{id:"",name:"",avatar:"",address:"",username:"",email:"",vmail:"",paid:!0,cwallet:0,dwallet:0,rin:0,lin:0,tin:0,cbo:0,fmre:0,td:0,ttm:0,password:"",passwordConfirm:"",emailVisibility:!0,ref:"",floor:0},link:"",obj:null,cat:["Admin","Others"],ref:"",reft:"",ar:[],available:{id:"",limit:0,level:0,referer:"",left:0,mid:0,right:0},users:{id:"",name:"",email:"",level_no:0,referedby:"",pos:""}}},methods:{firstFormSubmit:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var r,n,o,d,m,dt,f,v,data,h,k,y,C,x,_;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=(r=e).model.password){t.next=4;break}return l()({showClose:!0,message:"Password is required!",type:"warning"}),t.abrupt("return");case 4:if(""!=r.model.passwordConfirm){t.next=7;break}return l()({showClose:!0,message:"Confirm Password is required!",type:"warning"}),t.abrupt("return");case 7:if(r.model.passwordConfirm==r.model.password){t.next=10;break}return l()({showClose:!0,message:"Password and Confirm Password must be same!",type:"warning"}),t.abrupt("return");case 10:if(!(r.model.password.length<8)){t.next=13;break}return l()({showClose:!0,message:"Password must be of atleast 8 characters!",type:"warning"}),t.abrupt("return");case 13:if(!(r.model.username.length<5)){t.next=16;break}return l()({showClose:!0,message:"Username must be of atleast 5 characters!",type:"warning"}),t.abrupt("return");case 16:if(!(r.model.username.split(" ").length>1)){t.next=20;break}return l()({showClose:!0,message:"Username must not contain spaces!",type:"warning"}),t.abrupt("return");case 20:return n=new FormData,t.next=23,w.a.collection("util").getOne("configallocator");case 23:if(o=t.sent,d=new Date,m=new Date,dt=""!=o.expirationTime?new Date(o.expirationTime):m,f=new Date(d.setMinutes(d.getMinutes()+2)).toString(),v=(dt-m)/6e4,!(1==o.isLocked&&v<=2&&v>0)){t.next=32;break}return l()({showClose:!0,message:"System is busy. Try after sometime!",type:"warning"}),t.abrupt("return");case 32:if(!(1==o.isLocked&&v<=0)){t.next=36;break}return data={deviceID:"3hlsg1ndkw4md1n",isLocked:!0,expirationTime:f.toString()},t.next=36,w.a.collection("util").update("configallocator",data);case 36:if(0!=o.isLocked){t.next=40;break}return h={deviceID:"3hlsg1ndkw4md1n",isLocked:!0,expirationTime:f.toString()},t.next=40,w.a.collection("util").update("configallocator",h);case 40:if(""==r.model.name||""==r.model.username||""==r.model.email){t.next=59;break}if(r.sin=!1,r.model.vmail=r.model.email,r.model.avatar=null!=r.obj?r.obj:"","Admin"!=r.ref){t.next=48;break}r.model.ref="3hlsg1ndkw4md1n",t.next=55;break;case 48:return k=r.reft.split(" "),y=k[k.length-1],C=y.split(/[()]/),t.next=53,w.a.collection("users").getFirstListItem('email="'.concat(C[1].toLowerCase().trim(),'"'));case 53:x=t.sent,r.model.ref=x.id;case 55:for(_ in r.model)r.model.hasOwnProperty(_)&&n.append(_,r.model[_]);w.a.collection("users").create(n).then(function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(t){var n,o,c,d,data,m,f,v,i,h,k,y,C,x,_,S,O,L,j,N,$,D,F,P,R,col,I,A,U,T,z,E;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.model.ref,o=t.id,c=!1,e.next=5,w.a.collection("users").getOne(n);case 5:for(data=e.sent,m=data.floor;m.toString().length<15;)m="0"+m.toString();return e.next=10,w.a.collection("floor").getOne(m);case 10:for(f=e.sent,v=JSON.parse(f.ids),i=0;i<v.length;i++)v[i]==n&&(d=[i]);case 13:if(0!=c){e.next=83;break}for(h=parseInt(m)+1;m.toString().length<15;)m="0"+m.toString();for(;h.toString().length<15;)h="0"+h.toString();return k=null,y=!0,e.prev=19,e.next=22,w.a.collection("floor").getOne(h);case 22:k=e.sent,e.next=28;break;case 25:e.prev=25,e.t0=e.catch(19),y=!1;case 28:if(0!=y){e.next=45;break}return C=Math.pow(3,parseInt(h)),x=Array.from({length:C},(function(){return" "})),_=3*parseInt(d[0]),x[_]=o,S={id:h,ids:JSON.stringify(x)},e.next=36,w.a.collection("floor").create(S);case 36:return e.sent,O={floor:parseInt(h)},e.next=40,w.a.collection("users").update(t.id,O);case 40:e.sent,P=!0,c=!0,e.next=81;break;case 45:for(L=JSON.parse(k.ids),j=[],N=[],i=3*d[0];i<=3*d[d.length-1]+2;i++)j.push(i),N.push(L[i]);D=3,F=($=N).length/D,P=!1,R=0;case 54:if(!(R<D&&0==P)){e.next=78;break}col=0;case 56:if(!(col<F)){e.next=75;break}if(" "!=$[I=col*D+R]){e.next=72;break}for($[I]=t.id,A=0;A<j.length;A++)L[j[A]]=$[A];return U={id:h,ids:JSON.stringify(L)},e.next=64,w.a.collection("floor").update(h,U);case 64:return e.sent,T={floor:parseInt(h)},e.next=68,w.a.collection("users").update(t.id,T);case 68:return e.sent,P=!0,c=!0,e.abrupt("break",75);case 72:col++,e.next=56;break;case 75:R++,e.next=54;break;case 78:m=parseInt(m)+1,d=j,f=k;case 81:e.next=13;break;case 83:return e.next=85,w.a.collection("util").getList(1,1,{filter:'deviceID = "3hlsg1ndkw4md1n"'});case 85:if(z=e.sent,E={deviceID:"",isLocked:!1,expirationTime:""},!(z.items.length>0)){e.next=90;break}return e.next=90,w.a.collection("util").update("configallocator",E);case 90:l()({showClose:!0,message:"Saved Successfuly!",type:"success"}),setTimeout((function(){window.close()}),1500);case 92:case"end":return e.stop()}}),e,null,[[19,25]])})));return function(t){return e.apply(this,arguments)}}()).catch(function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(t){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.sin=!0,e.next=3,w.a.collection("util").getList(1,1,{filter:'deviceID = "3hlsg1ndkw4md1n"'});case 3:if(n=e.sent,o={deviceID:"",isLocked:!1,expirationTime:""},!(n.items.length>0)){e.next=8;break}return e.next=8,w.a.collection("util").update("configallocator",o);case 8:l()({showClose:!0,message:"Something went wrong!",type:"warning"});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.next=60;break;case 59:l()({showClose:!0,message:"All fields are required!",type:"warning"});case 60:case"end":return t.stop()}}),t)})))()},filesChange1:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=t,0!=e.length&&(n.link="",n.se=!1,n.link=URL.createObjectURL(e[0]),n.obj=e[0],n.se=!0);case 2:case"end":return r.stop()}}),r)})))()},dlt:function(){this.link="",this.obj=null},getData:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,w.a.collection("users").getFullList({sort:"-created"});case 3:r.ar=t.sent,r.reff=r.ar.filter((function(e){return"info.edunestorg@gmail.com"!=e.email})).map((function(e){return{name:"".concat(e.name.trim()," (").concat(e.email.trim(),")")}}));case 5:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.getData()},destroyed:function(){return Object(c.a)(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.collection("util").getList(1,1,{filter:'deviceID = "3hlsg1ndkw4md1n"'});case 2:if(t=e.sent,r={deviceID:"",isLocked:!1,expirationTime:""},!(t.items.length>0)){e.next=7;break}return e.next=7,w.a.collection("util").update("configallocator",r);case 7:case"end":return e.stop()}}),e)})))()}}),L=O,j=(r(716),r(8)),component=Object(j.a)(L,(function(){var e=this,t=e._self._c;return t("div",[t("base-header",{staticClass:"pb-6"},[t("div",{staticClass:"row align-items-center py-4"},[t("div",{staticClass:"col-lg-6 col-7"},[t("h6",{staticClass:"h2 text-white d-inline-block mb-0"},[e._v(e._s(e.$route.name))]),e._v(" "),t("nav",{staticClass:"d-none d-md-inline-block ml-md-4",attrs:{"aria-label":"breadcrumb"}},[t("route-breadcrumb")],1)])])]),e._v(" "),t("div",{staticClass:"container-fluid mt--6"},[t("div",{staticClass:"row ht"},[t("div",{staticClass:"col"},[t("div",{staticClass:"card-wrapper"},[t("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(r){var n=r.handleSubmit;return[t("form",{staticClass:"needs-validation",on:{submit:function(e){e.preventDefault()}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Name",name:"name",placeholder:"Enter Name","success-message":"Looks good!",rules:"required"},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Username",name:"Username",placeholder:"Enter Username","success-message":"Looks good!",rules:"required"},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Email",name:"Email",placeholder:"Enter Email","success-message":"Looks good!",rules:"required"},model:{value:e.model.email,callback:function(t){e.$set(e.model,"email",t)},expression:"model.email"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Refered By"}},[t("el-select",{attrs:{placeholder:"Select"},model:{value:e.ref,callback:function(t){e.ref=t},expression:"ref"}},e._l(e.cat,(function(option){return t("el-option",{key:option,attrs:{value:option}})})),1)],1)],1),e._v(" "),"Others"==e.ref?t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Referer"}},[t("el-select",{attrs:{placeholder:"Select",filterable:""},model:{value:e.reft,callback:function(t){e.reft=t},expression:"reft"}},e._l(e.reff,(function(option,i){return t("el-option",{key:i,attrs:{value:option.name}})})),1)],1)],1):e._e(),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Password",name:"Password",placeholder:"Enter Password","success-message":"Looks good!",type:"password"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Confirm Password",name:"Confirm Password",placeholder:"Enter Confirm Password","success-message":"Looks good!"},model:{value:e.model.passwordConfirm,callback:function(t){e.$set(e.model,"passwordConfirm",t)},expression:"model.passwordConfirm"}})],1),e._v(" "),t("div",{staticClass:"mb-4",staticStyle:{width:"100%"}},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Avatar"}},[t("file-input",{attrs:{accept:".jpg,.png,.jpeg,.webp"},on:{change:e.filesChange1}})],1)],1),e._v(" "),""!=e.link?t("div",{staticClass:"col-md-4 cnm",staticStyle:{height:"250px"}},[t("img",{staticClass:"op",attrs:{src:e.link}}),e._v(" "),t("i",{staticClass:"fa fa-trash plg",on:{click:function(t){return e.dlt()}}})]):e._e(),e._v(" "),t("div",{staticClass:"col-md-4 kp",staticStyle:{height:"250px"},attrs:{hidden:e.se}},[t("p",{staticClass:"spinners",attrs:{hidden:e.se}})])])]),e._v(" "),1==e.sin?t("base-button",{attrs:{type:"success","native-type":"submit"},on:{click:function(t){return n(e.firstFormSubmit)}}},[e._v("Save")]):t("base-button",{attrs:{type:"success","native-type":"submit",disabled:""}},[e._v("Saving\n                "),t("p",{staticClass:"spinner"})])],1)]}}])})],1)])])])],1)}),[],!1,null,"07ddcbee",null);t.default=component.exports}}]);