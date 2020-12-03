import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

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
