(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{386:function(t,e,l){"use strict";l(34),l(23),l(27),l(39),l(40),l(25),l(21),l(45),l(46),l(44);var o=l(10);l(13);function r(t,e){var l="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!l){if(Array.isArray(t)||(l=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var l=Object.prototype.toString.call(t).slice(8,-1);"Object"===l&&t.constructor&&(l=t.constructor.name);if("Map"===l||"Set"===l)return Array.from(t);if("Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){l&&(t=l);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,n=!0,d=!1;return{s:function(){l=l.call(t)},n:function(){var t=l.next();return n=t.done,t},e:function(t){d=!0,r=t},f:function(){try{n||null==l.return||l.return()}finally{if(d)throw r}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,l=new Array(e);i<e;i++)l[i]=t[i];return l}function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"file-input",inheritAttrs:!1,props:{initialLabel:{type:String,default:"Select file"}},data:function(){return{files:[]}},computed:{listeners:function(){return d(d({},this.$listeners),{},{change:this.fileChange})},label:function(){var t,e=[],l=r(this.files);try{for(l.s();!(t=l.n()).done;){var o=t.value;e.push(o.name)}}catch(t){l.e(t)}finally{l.f()}return e.length?e.join(", "):this.initialLabel}},methods:{fileChange:function(t){this.files=t.target.files,this.$emit("change",this.files)}}},m=l(8),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"custom-file"},[e("input",t._g(t._b({staticClass:"custom-file-input",attrs:{type:"file",id:"customFileLang",lang:"en"}},"input",t.$attrs,!1),t.listeners)),t._v(" "),e("label",{staticClass:"custom-file-label",attrs:{for:"customFileLang"}},[t._v("\n    "+t._s(t.label)+"\n  ")])])}),[],!1,null,null,null);e.a=component.exports},772:function(t,e,l){"use strict";l.r(e);l(13);var o={name:"form-elements",layout:"DashboardLayout",components:{FileInput:l(386).a},data:function(){return{inputs:{file:[]},checkboxes:{unchecked:!1,checked:!0,uncheckedDisabled:!1,checkedDisabled:!0},radios:{radio1:"checked",radio2:"checked"}}},methods:{filesChange:function(t){this.inputs.file=t}}},r=l(8),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("base-header",{staticClass:"pb-6"},[e("div",{staticClass:"row align-items-center py-4"},[e("div",{staticClass:"col-lg-6 col-7"},[e("h6",{staticClass:"h2 text-white d-inline-block mb-0"},[t._v(t._s(t.$route.name))]),t._v(" "),e("nav",{staticClass:"d-none d-md-inline-block ml-md-4",attrs:{"aria-label":"breadcrumb"}},[e("route-breadcrumb")],1)]),t._v(" "),e("div",{staticClass:"col-lg-6 col-5 text-right"},[e("base-button",{attrs:{size:"sm",type:"neutral"}},[t._v("New")]),t._v(" "),e("base-button",{attrs:{size:"sm",type:"neutral"}},[t._v("Filters")])],1)])]),t._v(" "),e("div",{staticClass:"container-fluid mt--6"},[e("div",{staticClass:"card mb-4"},[t._m(0),t._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4"},[e("base-input",{attrs:{label:"One of three cols",placeholder:"One of three cols"}})],1),t._v(" "),e("div",{staticClass:"col-md-4"},[e("base-input",{attrs:{label:"One of three cols",placeholder:"One of three cols"}})],1),t._v(" "),e("div",{staticClass:"col-md-4"},[e("base-input",{attrs:{label:"One of three cols",placeholder:"One of three cols"}})],1)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6 col-md-3"},[e("base-input",{attrs:{label:"One of four cols",placeholder:"One of four cols"}})],1),t._v(" "),e("div",{staticClass:"col-sm-6 col-md-3"},[e("base-input",{attrs:{label:"One of four cols",placeholder:"One of four cols"}})],1),t._v(" "),e("div",{staticClass:"col-sm-6 col-md-3"},[e("base-input",{attrs:{label:"One of four cols",placeholder:"One of four cols"}})],1),t._v(" "),e("div",{staticClass:"col-sm-6 col-md-3"},[e("base-input",{attrs:{label:"One of four cols",placeholder:"One of four cols"}})],1)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("base-input",{attrs:{label:"One of two cols",placeholder:"One of two cols"}})],1),t._v(" "),e("div",{staticClass:"col-md-6"},[e("base-input",{attrs:{label:"One of two cols",placeholder:"One of two cols"}})],1)])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card-wrapper"},[e("div",{staticClass:"card"},[t._m(1),t._v(" "),e("div",{staticClass:"card-body"},[e("form",[e("base-input",{attrs:{label:"Email address",placeholder:"name@example.com"}}),t._v(" "),e("base-input",{attrs:{label:"Example select"}},[e("select",{staticClass:"form-control"},[e("option",[t._v("1")]),t._v(" "),e("option",[t._v("2")]),t._v(" "),e("option",[t._v("3")]),t._v(" "),e("option",[t._v("4")]),t._v(" "),e("option",[t._v("5")])])]),t._v(" "),e("base-input",{attrs:{label:"Example multiple select"}},[e("select",{staticClass:"form-control",attrs:{multiple:""}},[e("option",[t._v("1")]),t._v(" "),e("option",[t._v("2")]),t._v(" "),e("option",[t._v("3")]),t._v(" "),e("option",[t._v("4")]),t._v(" "),e("option",[t._v("5")])])]),t._v(" "),e("base-input",{attrs:{label:"Example textarea"}},[e("textarea",{staticClass:"form-control",attrs:{id:"exampleFormControlTextarea3",rows:"3"}})])],1)])]),t._v(" "),e("div",{staticClass:"card"},[t._m(2),t._v(" "),e("div",{staticClass:"card-body"},[e("form",[e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-2 col-form-label form-control-label"},[t._v("Text")]),t._v(" "),e("div",{staticClass:"col-md-10"},[e("base-input",{attrs:{placeholder:"Jon Snow"}})],1)]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-2 col-form-label form-control-label",attrs:{for:"example-search-input"}},[t._v("Search")]),t._v(" "),e("div",{staticClass:"col-md-10"},[e("base-input",{attrs:{id:"example-search-input",placeholder:"Tell me your secret ..."}})],1)]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-2 col-form-label form-control-label",attrs:{for:"example-email-input"}},[t._v("Email")]),t._v(" "),e("div",{staticClass:"col-md-10"},[e("base-input",{attrs:{type:"email",autocomplete:"username email",placeholder:"argon@example.com",id:"example-email-input"}})],1)]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-2 col-form-label form-control-label",attrs:{for:"example-url-input"}},[t._v("URL")]),t._v(" "),e("div",{staticClass:"col-md-10"},[e("base-input",{attrs:{type:"url",placeholder:"https://www.creative-tim.com",id:"example-url-input"}})],1)]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-2 col-form-label form-control-label",attrs:{for:"example-tel-input"}},[t._v("Phone")]),t._v(" "),e("div",{staticClass:"col-md-10"},[e("base-input",{attrs:{type:"tel",placeholder:"40-(770)-888-444",id:"example-tel-input"}})],1)]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-2 col-form-label form-control-label",attrs:{for:"example-password-input"}},[t._v("Password")]),t._v(" "),e("div",{staticClass:"col-md-10"},[e("base-input",{attrs:{type:"password",autocomplete:"current-password",placeholder:"password",id:"example-password-input"}})],1)]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-2 col-form-label form-control-label",attrs:{for:"example-number-input"}},[t._v("Number")]),t._v(" "),e("div",{staticClass:"col-md-10"},[e("base-input",{attrs:{type:"number",placeholder:"23",id:"example-number-input"}})],1)]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-2 col-form-label form-control-label",attrs:{for:"example-datetime-local-input"}},[t._v("Datetime")]),t._v(" "),e("div",{staticClass:"col-md-10"},[e("base-input",{attrs:{type:"datetime-local",value:"2018-11-23T10:30:00",id:"example-datetime-local-input"}})],1)]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-2 col-form-label form-control-label",attrs:{for:"example-date-input"}},[t._v("Date")]),t._v(" "),e("div",{staticClass:"col-md-10"},[e("base-input",{attrs:{type:"date",value:"2018-11-23",id:"example-date-input"}})],1)]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-2 col-form-label form-control-label",attrs:{for:"example-month-input"}},[t._v("Month")]),t._v(" "),e("div",{staticClass:"col-md-10"},[e("base-input",{attrs:{type:"month",value:"2018-11",id:"example-month-input"}})],1)]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-2 col-form-label form-control-label",attrs:{for:"example-week-input"}},[t._v("Week")]),t._v(" "),e("div",{staticClass:"col-md-10"},[e("base-input",{attrs:{type:"week",value:"2018-W23",id:"example-week-input"}})],1)]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-2 col-form-label form-control-label",attrs:{for:"example-time-input"}},[t._v("Time")]),t._v(" "),e("div",{staticClass:"col-md-10"},[e("base-input",{attrs:{type:"time",value:"10:30:00",id:"example-time-input"}})],1)]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-2 col-form-label form-control-label",attrs:{for:"example-color-input"}},[t._v("Color")]),t._v(" "),e("div",{staticClass:"col-md-10"},[e("base-input",{attrs:{type:"color",value:"#5e72e4",id:"example-color-input"}})],1)])])])])])]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card-wrapper"},[e("div",{staticClass:"card"},[t._m(3),t._v(" "),e("div",{staticClass:"card-body"},[e("base-input",{attrs:{label:"Large input","input-classes":"form-control-lg",placeholder:".form-control-lg"}}),t._v(" "),e("base-input",{attrs:{label:"Default input",placeholder:"Default input"}}),t._v(" "),e("base-input",{attrs:{label:"Default input","input-classes":"form-control-sm",placeholder:".form-control-sm"}})],1)]),t._v(" "),e("div",{staticClass:"card"},[t._m(4),t._v(" "),e("div",{staticClass:"card-body"},[e("form",[e("base-input",{attrs:{label:"Basic textarea"}},[e("textarea",{staticClass:"form-control",attrs:{id:"exampleFormControlTextarea1",rows:"3"}})]),t._v(" "),e("base-input",{attrs:{label:"Unresizable textarea"}},[e("textarea",{staticClass:"form-control",attrs:{id:"exampleFormControlTextarea2",rows:"3",resize:"none"}})])],1)])]),t._v(" "),e("div",{staticClass:"card"},[t._m(5),t._v(" "),e("div",{staticClass:"card-body"},[e("form",[e("base-input",{attrs:{label:"Basic select"}},[e("select",{staticClass:"form-control",attrs:{id:"exampleFormControlSelect1"}},[e("option",[t._v("1")]),t._v(" "),e("option",[t._v("2")]),t._v(" "),e("option",[t._v("3")]),t._v(" "),e("option",[t._v("4")]),t._v(" "),e("option",[t._v("5")])])]),t._v(" "),e("base-input",{attrs:{label:"Basic select"}},[e("select",{staticClass:"form-control",attrs:{id:"exampleFormControlSelect2",disabled:""}},[e("option",[t._v("1")]),t._v(" "),e("option",[t._v("2")]),t._v(" "),e("option",[t._v("3")]),t._v(" "),e("option",[t._v("4")]),t._v(" "),e("option",[t._v("5")])])]),t._v(" "),e("base-input",{attrs:{label:"Multiple select"}},[e("label",{staticClass:"form-control-label",attrs:{for:"exampleFormControlSelect3"}},[t._v("Multiple select")]),t._v(" "),e("select",{staticClass:"form-control",attrs:{multiple:"",id:"exampleFormControlSelect3"}},[e("option",[t._v("1")]),t._v(" "),e("option",[t._v("2")]),t._v(" "),e("option",[t._v("3")]),t._v(" "),e("option",[t._v("4")]),t._v(" "),e("option",[t._v("5")])])]),t._v(" "),e("base-input",{staticClass:"form-group",attrs:{label:"Disabled multiple select"}},[e("select",{staticClass:"form-control",attrs:{multiple:"",id:"exampleFormControlSelect4",disabled:""}},[e("option",[t._v("1")]),t._v(" "),e("option",[t._v("2")]),t._v(" "),e("option",[t._v("3")]),t._v(" "),e("option",[t._v("4")]),t._v(" "),e("option",[t._v("5")])])])],1)])]),t._v(" "),e("div",{staticClass:"card"},[t._m(6),t._v(" "),e("div",{staticClass:"card-body"},[e("form",[e("file-input",{on:{change:t.filesChange}})],1)])]),t._v(" "),e("div",{staticClass:"card"},[t._m(7),t._v(" "),e("div",{staticClass:"card-body"},[e("form",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("base-checkbox",{staticClass:"mb-3",model:{value:t.checkboxes.unchecked,callback:function(e){t.$set(t.checkboxes,"unchecked",e)},expression:"checkboxes.unchecked"}},[t._v("\n                      Unchecked\n                    ")]),t._v(" "),e("base-checkbox",{staticClass:"mb-3",model:{value:t.checkboxes.checked,callback:function(e){t.$set(t.checkboxes,"checked",e)},expression:"checkboxes.checked"}},[t._v("\n                      Checked\n                    ")]),t._v(" "),e("base-checkbox",{staticClass:"mb-3",attrs:{disabled:""},model:{value:t.checkboxes.unchecked,callback:function(e){t.$set(t.checkboxes,"unchecked",e)},expression:"checkboxes.unchecked"}},[t._v("\n                      Disabled Unchecked\n                    ")]),t._v(" "),e("base-checkbox",{staticClass:"mb-3",attrs:{disabled:""},model:{value:t.checkboxes.checked,callback:function(e){t.$set(t.checkboxes,"checked",e)},expression:"checkboxes.checked"}},[t._v("\n                      Disabled Checked\n                    ")])],1),t._v(" "),e("div",{staticClass:"col-md-6"},[e("base-radio",{staticClass:"mb-3",attrs:{name:"unchecked"},model:{value:t.radios.radio1,callback:function(e){t.$set(t.radios,"radio1",e)},expression:"radios.radio1"}},[t._v("\n                      Unchecked\n                    ")]),t._v(" "),e("base-radio",{staticClass:"mb-3",attrs:{name:"checked"},model:{value:t.radios.radio1,callback:function(e){t.$set(t.radios,"radio1",e)},expression:"radios.radio1"}},[t._v("\n                      Checked\n                    ")]),t._v(" "),e("base-radio",{staticClass:"mb-3",attrs:{disabled:"",name:"unchecked"},model:{value:t.radios.radio2,callback:function(e){t.$set(t.radios,"radio2",e)},expression:"radios.radio2"}},[t._v("\n                      Unchecked\n                    ")]),t._v(" "),e("base-radio",{staticClass:"mb-3",attrs:{disabled:"",name:"checked"},model:{value:t.radios.radio2,callback:function(e){t.$set(t.radios,"radio2",e)},expression:"radios.radio2"}},[t._v("\n                      Checked\n                    ")])],1)])])])])])])])])],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"card-header"},[t("h3",{staticClass:"mb-0"},[this._v("Form group in grid")])])},function(){var t=this._self._c;return t("div",{staticClass:"card-header"},[t("h3",{staticClass:"mb-0"},[this._v("Form controls")])])},function(){var t=this._self._c;return t("div",{staticClass:"card-header"},[t("h3",{staticClass:"mb-0"},[this._v("HTML5 inputs")])])},function(){var t=this._self._c;return t("div",{staticClass:"card-header"},[t("h3",{staticClass:"mb-0"},[this._v("Sizes")])])},function(){var t=this._self._c;return t("div",{staticClass:"card-header"},[t("h3",{staticClass:"mb-0"},[this._v("Text inputs")])])},function(){var t=this._self._c;return t("div",{staticClass:"card-header"},[t("h3",{staticClass:"mb-0"},[this._v("Select")])])},function(){var t=this._self._c;return t("div",{staticClass:"card-header"},[t("h3",{staticClass:"mb-0"},[this._v("File browser")])])},function(){var t=this._self._c;return t("div",{staticClass:"card-header"},[t("h3",{staticClass:"mb-0"},[this._v("Checkboxes and radios")])])}],!1,null,null,null);e.default=component.exports}}]);