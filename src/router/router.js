import VueRouter from 'vue-router'
import routes from './router.config.js'

const router = new VueRouter({
  base: process.env.BASE_URL, // vue.config.js 的 publicPath
  mode: 'history',
  routes: routes,
})

export default router
