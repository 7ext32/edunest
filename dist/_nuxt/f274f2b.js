(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{665:function(e,t,o){},745:function(e,t,o){"use strict";o(665)},797:function(e,t,o){"use strict";o.r(t);o(11);var r=o(10),l=(o(37),o(72),o(68)),n={data:function(){return{model:{name:"",username:"",phone:"",email:"",password:"",referal_id:""}}},methods:{save:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var o,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=e.model.username.trim().replace(/\s/g,"").toLowerCase(),data={username:o,name:e.model.name,phone:e.model.phone,email:e.model.email,vmail:e.model.email,password:e.model.password,passwordConfirm:e.model.password,ref:e.model.referal_id,paid:!1,cwallet:0,dwallet:0,address:"",rin:0,lin:0,tin:0,cbo:0,fmre:0,td:0,ttm:0,avatar:""},""==e.model.username||""==e.model.name||""==e.model.phone||""==e.model.email||""==e.model.password||""==e.model.referal_id){t.next=10;break}return t.next=5,l.a.collection("users").create(data);case 5:alert("Registered Successfully"),e.model={},e.$router.push("/"),t.next=11;break;case 10:alert("Fill Complete Details First!");case 11:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.model.referal_id=this.$route.params.id}},d=(o(745),o(7)),component=Object(d.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticStyle:{"min-height":"100vh"}},[t("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center","min-height":"100vh"}},[t("div",{},[t("h1",{staticStyle:{"text-align":"center"}},[e._v("REGISTRATION EDUNEST")]),e._v(" "),t("div",{staticClass:"container"},[t("div",{staticClass:"input-outer-wrap"},[t("div",{staticClass:"control-wrap"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.model.username,expression:"model.username"}],attrs:{type:"text"},domProps:{value:e.model.username},on:{input:function(t){t.target.composing||e.$set(e.model,"username",t.target.value)}}}),e._v(" "),t("label",[e._v("Username")])])])]),e._v(" "),t("div",{staticClass:"container"},[t("div",{staticClass:"input-outer-wrap"},[t("div",{staticClass:"control-wrap"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.model.name,expression:"model.name"}],attrs:{type:"text"},domProps:{value:e.model.name},on:{input:function(t){t.target.composing||e.$set(e.model,"name",t.target.value)}}}),e._v(" "),t("label",[e._v("Full Name")])])])]),e._v(" "),t("div",{staticClass:"container"},[t("div",{staticClass:"input-outer-wrap"},[t("div",{staticClass:"control-wrap"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.model.phone,expression:"model.phone"}],attrs:{type:"text"},domProps:{value:e.model.phone},on:{input:function(t){t.target.composing||e.$set(e.model,"phone",t.target.value)}}}),e._v(" "),t("label",[e._v("Phone")])])])]),e._v(" "),t("div",{staticClass:"container"},[t("div",{staticClass:"input-outer-wrap"},[t("div",{staticClass:"control-wrap"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.model.email,expression:"model.email"}],attrs:{type:"text"},domProps:{value:e.model.email},on:{input:function(t){t.target.composing||e.$set(e.model,"email",t.target.value)}}}),e._v(" "),t("label",[e._v("Email")])])])]),e._v(" "),t("div",{staticClass:"container"},[t("div",{staticClass:"input-outer-wrap"},[t("div",{staticClass:"control-wrap"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.model.password,expression:"model.password"}],attrs:{type:"text"},domProps:{value:e.model.password},on:{input:function(t){t.target.composing||e.$set(e.model,"password",t.target.value)}}}),e._v(" "),t("label",[e._v("Password")])])])]),e._v(" "),t("div",{staticClass:"container"},[t("div",{staticClass:"input-outer-wrap"},[t("div",{staticClass:"control-wrap"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.model.referal_id,expression:"model.referal_id"}],attrs:{type:"text",readonly:""},domProps:{value:e.model.referal_id},on:{input:function(t){t.target.composing||e.$set(e.model,"referal_id",t.target.value)}}}),e._v(" "),t("label",[e._v("Referal Id")])])])]),e._v(" "),t("div",{staticClass:"container"},[t("button",{staticClass:"btn",on:{click:function(t){return e.save()}}},[e._v("Register")])])])])])}),[],!1,null,"3376515b",null);t.default=component.exports}}]);