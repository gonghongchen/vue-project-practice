import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@src/App.vue'
import router from '@router/router.js'
import { Button, Empty, message } from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css'

// 组件注册
Vue.use(VueRouter)
Vue.use(Button)
Vue.use(Empty)

Vue.prototype.$message = message

// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

// 指定组件的渲染和观察期间未捕获错误的处理函数。这个处理函数被调用时，可获取错误信息和 Vue 实例。https://cn.vuejs.org/v2/api/#errorHandler
Vue.config.errorHandler = function (err, vm, info) {
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  // 只在 2.2.0+ 可用

  console.log(11111, err, vm, info)
  vm.do()
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
