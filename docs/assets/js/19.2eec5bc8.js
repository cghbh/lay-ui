(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{302:function(t,n,e){},303:function(t,n,e){"use strict";e(166);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var i={name:"lay-button",props:{type:{type:String,default:"default"},disabled:{type:Boolean,default:!1},size:{type:String,default:"default"},icon:{type:String,default:""},round:{type:Boolean,default:!1}},computed:{styleClass:function(){var t;return a(t={},"lay-button--".concat(this.type),!0),a(t,"is-disabled",this.disabled),a(t,"lay-button-".concat(this.size),!0),a(t,"is-round",this.round),t},iconName:function(){return"#icon-".concat(this.icon)},showIcon:function(){return this.icon}},methods:{handleClick:function(t){if(this.disabled)return!1;this.$emit("click",t)}}},s=(e(305),e(44)),o=Object(s.a)(i,(function(){var t=this.$createElement,n=this._self._c||t;return n("button",{staticClass:"lay-button",class:this.styleClass,on:{click:this.handleClick}},[this.showIcon?n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":this.iconName}})]):this._e(),this._v(" "),this._t("default")],2)}),[],!1,null,"7279b4ab",null);n.a=o.exports},304:function(t,n,e){"use strict";e(66);var a=e(303);a.a.install=function(t){t.component(a.a.name,a.a)},n.a=a.a},305:function(t,n,e){"use strict";var a=e(302);e.n(a).a},339:function(t,n,e){},398:function(t,n,e){"use strict";var a=e(339);e.n(a).a},426:function(t,n,e){"use strict";e.r(n);var a={name:"my-button",components:{LayButton:e(304).a}},i=(e(398),e(44)),s=Object(i.a)(a,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"button-exam3"},[e("lay-button",{attrs:{icon:"loading"}},[t._v("默认")]),t._v(" "),e("lay-button",{attrs:{type:"primary",icon:"info"}}),t._v(" "),e("lay-button",{attrs:{type:"warning",icon:"star"}},[t._v("警告")]),t._v(" "),e("lay-button",{attrs:{type:"danger",icon:"bell"}},[t._v("危险")]),t._v(" "),e("lay-button",{attrs:{type:"success",icon:"success"}},[t._v("成功")])],1)}),[],!1,null,"59263992",null);n.default=s.exports}}]);