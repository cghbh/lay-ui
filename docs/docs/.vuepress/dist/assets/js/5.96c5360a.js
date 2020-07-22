(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{302:function(t,e,n){},303:function(t,e,n){"use strict";var i=n(302);n.n(i).a},305:function(t,e,n){"use strict";n(66),n(166);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={name:"lay-button",props:{type:{type:String,default:"default"},disabled:{type:Boolean,default:!1},size:{type:String,default:"default"},icon:{type:String,default:""},round:{type:Boolean,default:!1}},computed:{styleClass:function(){var t;return i(t={},"lay-button--".concat(this.type),!0),i(t,"is-disabled",this.disabled),i(t,"lay-button-".concat(this.size),!0),i(t,"is-round",this.round),t},iconName:function(){return"#icon-".concat(this.icon)},showIcon:function(){return this.icon}},methods:{handleClick:function(t){this.$emit("click",t)}}},o=(n(303),n(44)),a=Object(o.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"lay-button",class:this.styleClass,on:{click:this.handleClick}},[this.showIcon?e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":this.iconName}})]):this._e(),this._v(" "),this._t("default")],2)}),[],!1,null,"0eb422fc",null).exports;a.install=function(t){t.component(a.name,a)};e.a=a},310:function(t,e,n){},344:function(t,e,n){"use strict";var i=n(1),s=n(95),o=n(47),a=n(14),c=n(12),r=n(96),l=n(49),u=n(48),f=n(18),h=u("splice"),d=f("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,v=Math.min;i({target:"Array",proto:!0,forced:!h||!d},{splice:function(t,e){var n,i,u,f,h,d,m=c(this),g=a(m.length),y=s(t,g),b=arguments.length;if(0===b?n=i=0:1===b?(n=0,i=g-y):(n=b-2,i=v(p(o(e),0),g-y)),g+n-i>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(u=r(m,i),f=0;f<i;f++)(h=y+f)in m&&l(u,f,m[h]);if(u.length=i,n<i){for(f=y;f<g-i;f++)d=f+n,(h=f+i)in m?m[d]=m[h]:delete m[d];for(f=g;f>g-i+n;f--)delete m[f-1]}else if(n>i)for(f=g-i;f>y;f--)d=f+n-1,(h=f+i-1)in m?m[d]=m[h]:delete m[d];for(f=0;f<n;f++)m[f+y]=arguments[f+2];return m.length=g-i+n,u}})},345:function(t,e,n){"use strict";var i=n(310);n.n(i).a},347:function(t,e,n){},353:function(t,e,n){"use strict";n(171),n(344);var i={props:{message:{default:"这是一条消息提示"},center:{type:Boolean,default:!1},position:{type:String,default:"center"}},data:function(){return{visible:!1,verticalTop:0}},components:{},mounted:function(){this.createElement()},beforeDestroy:function(){console.log("test---001destroy"),this.$el.parentNode.removeChild(this.$el)},methods:{createElement:function(){var t=this;this.visible=!0,document.body.appendChild(this.$el),this.$nextTick((function(){console.log(t.verticalTop)}))},closeMessage:function(){this.visible=!1}},computed:{computedStyle:function(){return console.log(this.verticalTop),{top:this.verticalTop+"px"}},isCenter:function(){return"center"===this.position},isLeft:function(){return"left"===this.position},isRight:function(){return"right"===this.position}},watch:{visible:function(t){var e=this;t||(this.$el.addEventListener("transitionend",(function(){e.$destroy()})),this.$emit("close"))}}},s=(n(345),n(44)),o=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"message-fade"}},[t.visible?n("div",{staticClass:"lay-message",class:{"is-content-center":t.center,"is-message-center":t.isCenter,"is-message-right":t.isRight,"is-message-left":t.isLeft},style:t.computedStyle},[n("div",{staticClass:"lay-message-content"},[t._v("\n\t\t\t"+t._s(t.message)+"\n\t\t\t"),n("span",{staticClass:"close-btn",on:{click:t.closeMessage}},[n("svg",{staticClass:"icon",attrs:{t:"1595411366477",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2772",width:"200",height:"200"}},[n("path",{attrs:{d:"M503.466667 467.285333l319.829333-319.829333a25.6 25.6 0 1 1 36.181333 36.181333l-319.829333 319.829334 319.829333 319.829333a25.6 25.6 0 1 1-36.181333 36.181333l-319.829333-319.829333-319.829334 319.829333a25.6 25.6 0 1 1-36.181333-36.181333l319.829333-319.829333-319.829333-319.829334a25.6 25.6 0 1 1 36.181333-36.181333l319.829334 319.829333z","p-id":"2773"}})])])])]):t._e()])}),[],!1,null,"b2ed68de",null).exports,a=[],c=0;e.a={install:function(t){function e(e){var n=new(t.extend(o))({propsData:e}).$mount(document.createElement("div"));return n.verticalTop=a.reduce((function(t,e){return t+e.$el.offsetHeight+18}),18),n.id="message"+c++,n.$once("close",(function(){!function(t){for(var e=t.verticalTop,n=0;n<a.length&&a[n].id!==t.id;n++);for(a.splice(n,1);n<a.length;n++){var i=[e,a[n].verticalTop];a[n].verticalTop=i[0],e=i[1]}}(n)})),n}t.prototype.$message=function(t){var n=e(t);a.push(n)}}}},400:function(t,e,n){"use strict";var i=n(347);n.n(i).a},420:function(t,e,n){"use strict";n.r(e);var i=n(305),s=n(0),o=n(353);s.a.use(o.a);var a={components:{LayMessage:o.a,LayButton:i.a},data:function(){return{selectItem:"选项一"}},methods:{showMessagePosition:function(t){this.$message({position:t,message:"我是消息提示组件，我在".concat(t,"边展示")})}}},c=(n(400),n(44)),r=Object(c.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"message-4"},[n("lay-button",{on:{click:function(e){return t.showMessagePosition("left")}}},[t._v("左边")]),t._v(" "),n("lay-button",{on:{click:function(e){return t.showMessagePosition("center")}}},[t._v("中间")]),t._v(" "),n("lay-button",{on:{click:function(e){return t.showMessagePosition("right")}}},[t._v("右边")])],1)}),[],!1,null,"7c18da63",null);e.default=r.exports}}]);