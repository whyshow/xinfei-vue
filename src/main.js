import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

// 导入 axios
import axios from 'axios'
//设置请求根路径
//axios.defaults.baseURL = 'http://127.0.0.1:8080/'
axios.defaults.baseURL = 'http://api.ccit.club/'
//挂载 axios 全局
Vue.prototype.$http = axios
Vue.config.productionTip = false
// HTML 页面的title动态赋值
router.beforeEach((to,from,next)=>{
  if (to.meta.title){
    document.title = to.meta.title
  }
  next()
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
