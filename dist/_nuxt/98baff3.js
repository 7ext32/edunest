(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{655:function(t,e,n){},739:function(t,e,n){"use strict";n(655)},792:function(t,e,n){"use strict";n.r(e);n(88),n(72);var r=n(12),c=(n(38),n(47),n(13),n(27),n(21),n(63),n(64),n(70)),o=n(371),l=n(736),d=n.n(l),v=(n(737),n(738),{data:function(){return{course:[],s:!0,newcourse:[],total:0,respon:{},see:!0,da:[],das:[],vv:"COPY"}},mounted:function(){this.getData()},methods:{copyText:function(){var textarea=document.createElement("textarea");console.log(this.respon.pay_address),textarea.value=this.respon.pay_address,document.body.appendChild(textarea),textarea.select(),document.execCommand("copy"),document.body.removeChild(textarea),this.vv="COPIED"},getData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.collection("tempcourse").getFullList({sort:"-created"});case 3:n=e.sent,t.course=n.map((function(t){return t.name})),t.getData1(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error fetching course:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},getData1:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$route.params.id,e.next=3,c.a.collection("waiting").getFullList({sort:"-created"});case 3:t.da=e.sent,t.das=t.da.filter((function(t){return t.cid==n})),0!=t.das.length&&(r=JSON.parse(t.das[0].course),t.course=t.course.filter((function(element){return!r.includes(element)})));case 6:case"end":return e.stop()}}),e)})))()},sel:function(t){this.total=0;var i=this.newcourse.indexOf(t);-1===i?(this.newcourse.push(t),this.total=30*this.newcourse.length):(this.newcourse.splice(i,1),this.total=30*this.newcourse.length)},sendapi:function(){var t=this;if(0!=this.newcourse.length){this.s=!1;var e=this.$route.params.id,data={amount:this.total,order_id:Math.random().toString(36).substring(2)+(new Date).getTime().toString(36),name:e};o.a.post("http://139.59.56.62:8080/api/createPayment",data).then((function(e){t.respon={},t.respon=e.data.message,t.re()})).catch((function(e){console.error(e),alert("Something went wrong!"),t.s=!0}))}else alert("Select Course First"),this.s=!0},re:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,data,o,l,i,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.$route.params.id,r=[t.respon.payment_id],data={total:t.total,wait:JSON.stringify(r),course:JSON.stringify(t.newcourse),cid:n,status:"Pending"},0!=t.das.length){e.next=11;break}return e.next=6,c.a.collection("waiting").create(data);case 6:e.sent,t.see=!1,t.genQR(),e.next=21;break;case 11:for(o=JSON.parse(t.das[0].wait),l=JSON.parse(t.das[0].course),o.push(t.respon.payment_id),i=0;i<l.length;i++)t.newcourse.push(l[i]);return d={total:t.total,wait:JSON.stringify(o),course:JSON.stringify(t.newcourse),cid:n,status:"Pending"},e.next=18,c.a.collection("waiting").update(t.das[0].id,d);case 18:e.sent,t.see=!1,t.genQR();case 21:case"end":return e.stop()}}),e)})))()},genQR:function(){var t=document.getElementById("qrcode");t&&t.parentNode.removeChild(t);var e=document.createElement("div");e.id="qrcode",e.style.width="280px",e.style.height="280px",e.style.display="flex",e.style.justifyContent="center",e.style.alignItems="center",e.style.border="3px solid white",document.querySelector(".col-md-6").appendChild(e);new d.a(e,{logoWidth:70,text:this.respon.pay_address,logoHeight:70,logoBackgroundColor:"#26144e",logoBackgroundTransparent:!1,width:270,height:270})}}}),h=(n(739),n(8)),component=Object(h.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"main"},[e("h1",{staticStyle:{"text-align":"center"}},[t._v("Select Course")]),t._v(" "),e("div",{staticClass:"date"},t._l(t.course,(function(n){return e("div",{key:n,staticClass:"date2",class:{active:t.newcourse.includes(n)},on:{click:function(e){return t.sel(n)}}},[e("p",{staticClass:"datetext"},[t._v(t._s(n))])])})),0),t._v(" "),e("div",{staticClass:"summary"},[e("div",{staticStyle:{width:"90%",margin:"0 auto"}},[e("h1",{staticStyle:{"text-align":"center"}},[t._v("SUMMARY")]),t._v(" "),t._m(0),t._v(" "),t._l(t.newcourse,(function(i){return e("div",{key:i,staticClass:"flex"},[e("p",{staticClass:"datetext11"},[t._v(t._s(i))]),t._v(" "),e("p",{staticClass:"datetext11"},[t._v("$30")])])})),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"flex"},[e("p",{staticClass:"datetext1"},[t._v("Total")]),t._v(" "),e("p",{staticClass:"datetext1"},[t._v("$ "+t._s(t.total))])]),t._v(" "),e("div",{staticStyle:{width:"100%",display:"flex","justify-content":"center"}},[1==t.s?e("button",{staticClass:"btn",on:{click:function(e){return t.sendapi()}}},[t._v("PAY")]):e("button",{staticClass:"btn"},[e("p",{staticClass:"spinner"})])])],2)]),t._v(" "),e("div",{staticClass:"pop",attrs:{hidden:t.see}},[e("div",{staticClass:"popop"},[e("h1",{staticStyle:{color:"white","text-align":"center"}},[t._v("Payment Details")]),t._v(" "),e("p",{staticClass:"pcx",staticStyle:{color:"white","text-align":"center","font-weight":"bold"}},[t._v("\n          "+t._s(t.respon.pay_address)+"\n          "),e("button",{staticClass:"cop",on:{click:function(e){return t.copyText()}}},[t._v(t._s(t.vv))])]),t._v(" "),t._m(1)])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex"},[e("p",{staticClass:"datetext1"},[t._v("Course")]),t._v(" "),e("p",{staticClass:"datetext1"},[t._v("Price")])])},function(){var t=this._self._c;return t("div",{staticStyle:{display:"flex","justify-content":"center"}},[t("div",{staticClass:"col-md-6"},[t("div",{attrs:{id:"qrcode"}})])])}],!1,null,"188597eb",null);e.default=component.exports}}]);