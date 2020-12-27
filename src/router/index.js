import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/v1/components/Home/Home";
import News from "@/v1/components/News/News";
import Details from "@/v1/components/Details/Details";
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
  },
  {
    path: '/details',
    name: 'Details',
    component: Details,
    meta:{
      title:'动态详情'
    }
  }
]


const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
