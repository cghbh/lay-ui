(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{302:function(t,e,s){},303:function(t,e,s){"use strict";s(166);function n(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var i={name:"lay-button",props:{type:{type:String,default:"default"},disabled:{type:Boolean,default:!1},size:{type:String,default:"default"},icon:{type:String,default:""},round:{type:Boolean,default:!1}},computed:{styleClass:function(){var t;return n(t={},"lay-button--".concat(this.type),!0),n(t,"is-disabled",this.disabled),n(t,"lay-button-".concat(this.size),!0),n(t,"is-round",this.round),t},iconName:function(){return"#icon-".concat(this.icon)},showIcon:function(){return this.icon}},methods:{handleClick:function(t){if(this.disabled)return!1;this.$emit("click",t)}}},o=(s(305),s(44)),r=Object(o.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"lay-button",class:this.styleClass,on:{click:this.handleClick}},[this.showIcon?e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":this.iconName}})]):this._e(),this._v(" "),this._t("default")],2)}),[],!1,null,"7279b4ab",null);e.a=r.exports},304:function(t,e,s){"use strict";s(66);var n=s(303);n.a.install=function(t){t.component(n.a.name,n.a)},e.a=n.a},305:function(t,e,s){"use strict";var n=s(302);s.n(n).a},306:function(t,e,s){},307:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},308:function(t,e,s){var n=s(24),i="["+s(307)+"]",o=RegExp("^"+i+i+"*"),r=RegExp(i+i+"*$"),a=function(t){return function(e){var s=String(n(e));return 1&t&&(s=s.replace(o,"")),2&t&&(s=s.replace(r,"")),s}};t.exports={start:a(1),end:a(2),trim:a(3)}},309:function(t,e,s){var n=s(5),i=s(94);t.exports=function(t,e,s){var o,r;return i&&"function"==typeof(o=e.constructor)&&o!==s&&n(r=o.prototype)&&r!==s.prototype&&i(t,r),t}},310:function(t,e,s){"use strict";var n=s(6),i=s(4),o=s(93),r=s(11),a=s(7),c=s(18),l=s(309),u=s(45),f=s(2),g=s(29),h=s(67).f,p=s(25).f,d=s(9).f,m=s(308).trim,v=i.Number,y=v.prototype,b="Number"==c(g(y)),M=function(t){var e,s,n,i,o,r,a,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(43===(e=(l=m(l)).charCodeAt(0))||45===e){if(88===(s=l.charCodeAt(2))||120===s)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+l}for(r=(o=l.slice(2)).length,a=0;a<r;a++)if((c=o.charCodeAt(a))<48||c>i)return NaN;return parseInt(o,n)}return+l};if(o("Number",!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var w,C=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof C&&(b?f((function(){y.valueOf.call(s)})):"Number"!=c(s))?l(new v(M(e)),s,C):M(e)},E=n?h(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;E.length>N;N++)a(v,w=E[N])&&!a(C,w)&&d(C,w,p(v,w));C.prototype=y,y.constructor=C,r(i,"Number",C)}},312:function(t,e,s){"use strict";var n=s(1),i=s(95),o=s(46),r=s(14),a=s(12),c=s(96),l=s(48),u=s(47),f=s(19),g=u("splice"),h=f("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,d=Math.min;n({target:"Array",proto:!0,forced:!g||!h},{splice:function(t,e){var s,n,u,f,g,h,m=a(this),v=r(m.length),y=i(t,v),b=arguments.length;if(0===b?s=n=0:1===b?(s=0,n=v-y):(s=b-2,n=d(p(o(e),0),v-y)),v+s-n>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(u=c(m,n),f=0;f<n;f++)(g=y+f)in m&&l(u,f,m[g]);if(u.length=n,s<n){for(f=y;f<v-n;f++)h=f+s,(g=f+n)in m?m[h]=m[g]:delete m[h];for(f=v;f>v-n+s;f--)delete m[f-1]}else if(s>n)for(f=v-n;f>y;f--)h=f+s-1,(g=f+n-1)in m?m[h]=m[g]:delete m[h];for(f=0;f<s;f++)m[f+y]=arguments[f+2];return m.length=v-n+s,u}})},313:function(t,e,s){"use strict";var n=s(306);s.n(n).a},314:function(t,e,s){"use strict";s(26),s(167),s(312),s(310),s(317);var n=s(315);console.log(n.a,"LayIcon");var i={props:{message:{default:"这是一条消息提示"},center:{type:Boolean,default:!1},position:{type:String,default:"center"},duration:{type:Number,default:3e3},autoClose:{type:Boolean,default:!0},type:{type:String,default:""},showClose:{type:Boolean,default:!1}},data:function(){return{visible:!1,verticalTop:0}},components:{LayIcon:n.a},mounted:function(){console.log(this.type,"this.type"),this.createElement(),this.autoClose&&this.startTimer()},beforeDestroy:function(){this.$el.parentNode.removeChild(this.$el)},methods:{createElement:function(){this.visible=!0,document.body.appendChild(this.$el)},closeMessage:function(){this.visible=!1},startTimer:function(){var t=this,e=setTimeout((function(){t.visible=!1}),this.duration);this.$once("hook: beforeDestroy",(function(){clearTimeout(e),e=null}))}},computed:{computedStyle:function(){return console.log(this.verticalTop),{top:this.verticalTop+"px"}},isCenter:function(){return"center"===this.position},isLeft:function(){return"left"===this.position},isRight:function(){return"right"===this.position},isSuccessMessage:function(){return"success"===this.type},isWarningMessage:function(){return"warning"===this.type},isErrorMessage:function(){return"error"===this.type}},watch:{visible:function(t){var e=this;t||(this.$el.addEventListener("transitionend",(function(){e.$destroy()})),this.$emit("close"))}}},o=(s(313),s(44)),r=Object(o.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"message-fade"}},[t.visible?s("div",{staticClass:"lay-message",class:{"is-content-center":t.center,"is-message-center":t.isCenter,"is-message-right":t.isRight,"is-message-left":t.isLeft},style:t.computedStyle},[s("div",{staticClass:"lay-message-content",class:{"is-success-message":t.isSuccessMessage,"is-error-message":t.isErrorMessage,"is-warning-message":t.isWarningMessage}},[s("span",{staticClass:"lay-info-icon",class:{"is-success-message":t.isSuccessMessage,"is-error-message":t.isErrorMessage,"is-warning-message":t.isWarningMessage}},[t.isErrorMessage?s("lay-icon",{attrs:{icon:"error"}}):t.isSuccessMessage?s("lay-icon",{attrs:{icon:"success"}}):t.isWarningMessage?s("lay-icon",{attrs:{icon:"warning"}}):s("lay-icon",{attrs:{icon:"info"}})],1),t._v("\n\t\t\t"+t._s(t.message)+"\n\t\t\t"),t._v(" "),!t.autoClose||t.showClose?s("span",{staticClass:"close-btn",on:{click:t.closeMessage}},[s("svg",{staticClass:"lay-message-svg icon",attrs:{t:"1595411366477",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2772",width:"200",height:"200"}},[s("path",{attrs:{d:"M503.466667 467.285333l319.829333-319.829333a25.6 25.6 0 1 1 36.181333 36.181333l-319.829333 319.829334 319.829333 319.829333a25.6 25.6 0 1 1-36.181333 36.181333l-319.829333-319.829333-319.829334 319.829333a25.6 25.6 0 1 1-36.181333-36.181333l319.829333-319.829333-319.829333-319.829334a25.6 25.6 0 1 1 36.181333-36.181333l319.829334 319.829333z","p-id":"2773"}})])]):t._e()])]):t._e()])}),[],!1,null,"aba88e7c",null).exports,a=[],c=0;e.a={install:function(t){function e(e){var s=new(t.extend(r))({propsData:e}).$mount(document.createElement("div"));return s.verticalTop=function(t){console.log(t,"position");var e=a.filter((function(e){return e.position===t}));return console.log(e,"filterInstances"),e.reduce((function(t,e){return e.$el.offsetHeight+t+16}),16)}(s.position),s.id="message-"+c++,s.$once("close",(function(){!function(t){for(var e=t.verticalTop,s=0;s<a.length&&a[s].id!==t.id;s++);for(a.splice(s,1);s<a.length;s++)if(a[s].position===t.position){var n=[e,a[s].verticalTop];a[s].verticalTop=n[0],e=n[1]}}(s)})),s}t.prototype.$message=function(t){var s=e(t);console.log(s.position,"instances position"),a.push(s)}}}},360:function(t,e,s){},417:function(t,e,s){"use strict";var n=s(360);s.n(n).a},443:function(t,e,s){"use strict";s.r(e);var n=s(304),i=s(0),o=s(314);i.a.use(o.a);var r={components:{LayMessage:o.a,LayButton:n.a},data:function(){return{selectItem:"选项一"}},methods:{showMessagePosition:function(t){console.log(this.getMessageClass(),"getMessageClass"),this.$message({position:t,message:"我是消息提示弹框，我在".concat(this.getPositionBy(t),"展示"),type:this.getMessageClass()})},getPositionBy:function(t){return"left"===t?"左边":"right"===t?"右边":"center"===t?"中间":void 0},getMessageClass:function(){return["","error","warning","success"][Math.floor(4*Math.random())]}}},a=(s(417),s(44)),c=Object(a.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"message-4"},[s("lay-button",{on:{click:function(e){return t.showMessagePosition("left")}}},[t._v("左边")]),t._v(" "),s("lay-button",{on:{click:function(e){return t.showMessagePosition("center")}}},[t._v("中间")]),t._v(" "),s("lay-button",{on:{click:function(e){return t.showMessagePosition("right")}}},[t._v("右边")])],1)}),[],!1,null,"75df8cfb",null);e.default=c.exports}}]);