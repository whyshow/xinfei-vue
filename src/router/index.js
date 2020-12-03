import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home/Home";
import News from "@/components/News/News";
Vue.use(VueRouter)
// 路由
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title:'信飞门户站'
    }
  },
  {
    path: '/news',
    name: 'News',
    component: News,
    meta:{
      title:'信飞动态'
    }
  }
]


const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
