## 快速上手

### 引入Lay-UI

 你可以引入整个 Lay-UI，或是根据需要仅引入部分组件。

#### 完整引入

 在 main.js 中写入以下内容： 

```js
import Vue from 'vue'
import LayUI from 'lay-ui'
import App from './App.vue'

Vue.use(LayUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

#### 按需导入

 如果你只希望引入部分组件，比如 Button 和 Radio，那么需要在 main.js 中写入以下内容 

```js
import Vue from 'vue'
import { Button, Radio } from 'lay-ui'
import App from './App.vue'

Vue.component(Button.name, Button)
Vue.component(Radio.name, Select)
/* 或写为
 * Vue.use(Button)
 * Vue.use(Radio)
*/

new Vue({
  el: '#app',
  render: h => h(App)
});
```

#### 开始使用
至此，一个基于Vue 安装了lay-ui插件的开发环境已经搭建完毕，各个组件的使用方法请参阅它们各自的文档。