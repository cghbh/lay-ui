## 基于Vue的UI组件库----LayUI

### 文档说明链接

[LayUI组件库文档说明地址]( https://cghbh.github.io/lay-ui/)

### 安装

npm install lay-ui -S

### 快速上手

```js
import Vue from 'vue'
import LayUI from 'lay-ui'
// 如果需要使用Modal的动画，请npm install animate.css -S
// 在main.js导入animated.css
import 'animate.css'

// 全部注册安装
Vue.use(LayUI)
// 或者是按需加载
import { Button, Icon } from 'lay-ui'
Vue.use(Button).use(Icon)
// 或者是下面的这样的
Vue.use(Button)
Vue.use(Icon)
```

### LICENSE

[MIT](https://github.com/cghbh/lay-ui/blob/master/LICENSE)

