(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{322:function(e,c,s){},333:function(e,c,s){"use strict";s(66),s(167),s(170);var a={name:"de-checkbox",inject:{checkedGroup:{type:Array,default:""}},props:{label:{type:String},value:{type:[Boolean,Array]},disabled:{type:Boolean,default:!1}},computed:{checkValue:{set:function(e){this.isGroup?this.checkedGroup.$emit("input",e):this.$emit("input",e)},get:function(){return this.isGroup?this.checkedGroup.value:this.value}},isGroup:function(){return""!==this.checkedGroup},isChecked:function(){return this.isGroup?this.checkedGroup.value.includes(this.label):"boolean"==typeof this.value?this.value:this.value.includes(this.label)}}},t=(s(334),s(44)),i=Object(t.a)(a,(function(){var e=this,c=e.$createElement,s=e._self._c||c;return s("label",{staticClass:"de-checkbox"},[s("span",{staticClass:"de-checkbox-outer",class:{"is-checked":e.isChecked,"is-disabled":e.disabled}},[s("span",{staticClass:"de-checkbox-inner",class:{"is-checked":e.isChecked,"is-disabled":e.disabled}}),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.checkValue,expression:"checkValue"}],staticClass:"de-checkbox-native",class:{"is-disabled":e.disabled},attrs:{type:"checkbox",disabled:e.disabled},domProps:{value:e.label,checked:Array.isArray(e.checkValue)?e._i(e.checkValue,e.label)>-1:e.checkValue},on:{change:function(c){var s=e.checkValue,a=c.target,t=!!a.checked;if(Array.isArray(s)){var i=e.label,l=e._i(s,i);a.checked?l<0&&(e.checkValue=s.concat([i])):l>-1&&(e.checkValue=s.slice(0,l).concat(s.slice(l+1)))}else e.checkValue=t}}})]),e._v(" "),s("span",{staticClass:"checkbox__label",class:{"is-disabled":e.disabled}},[e._v(e._s(e.label))])])}),[],!1,null,"37f6abb1",null).exports;i.install=function(e){e.component(i.name,i)};c.a=i},334:function(e,c,s){"use strict";var a=s(322);s.n(a).a},378:function(e,c,s){},474:function(e,c,s){"use strict";var a=s(378);s.n(a).a},544:function(e,c,s){"use strict";s.r(c);var a={components:{DeCheckbox:s(333).a},data:function(){return{checkedList:["选项A"]}}},t=(s(474),s(44)),i=Object(t.a)(a,(function(){var e=this,c=e.$createElement,s=e._self._c||c;return s("div",{staticClass:"checkbox"},[s("de-checkbox",{attrs:{label:"选项A"},model:{value:e.checkedList,callback:function(c){e.checkedList=c},expression:"checkedList"}},[e._v("选项A")]),e._v(" "),s("de-checkbox",{attrs:{label:"选项B"},model:{value:e.checkedList,callback:function(c){e.checkedList=c},expression:"checkedList"}},[e._v("选项B")]),e._v(" "),s("de-checkbox",{attrs:{label:"选项C"},model:{value:e.checkedList,callback:function(c){e.checkedList=c},expression:"checkedList"}},[e._v("选项C")]),e._v(" "),s("de-checkbox",{attrs:{label:"选项D"},model:{value:e.checkedList,callback:function(c){e.checkedList=c},expression:"checkedList"}},[e._v("选项D")])],1)}),[],!1,null,"02185de3",null);c.default=i.exports}}]);