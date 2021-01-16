<!-- 新闻详情页面-->
<template>
  <el-container>
    <el-header>
      <!-- 导航栏组件-->
      <NavigationBar></NavigationBar>
    </el-header>
    <el-main>
      <div class="banner">
        <span class="banner_title">动态详情</span>
      </div>
      <div class="cent" style="margin-top: 2%;height: 100%">
        <div class="one">
          <!-- 新闻详情组件-->
          <NewsInfo v-bind:NewId="ID"></NewsInfo>
        </div>
        <div class="two">
          <!-- 最热新闻组件组件-->
          <HotNews></HotNews>
        </div>
      </div>
    </el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script>
import NavigationBar from "../Element/TNavigationBar";
import Footer from "../Element/Footer";
import HotNews from "../Element/HotNews";
import Timeline from "../News/Timeline";
import NewsInfo from "./NewsInfo";

export default {
  name: "Details",
  // HTML模板提供数据
  data(){
    return{
      ID:""
    }
  },
  // 组件创建时调用
  created(){
    this.ReturnTop()
    this.SetId(this.$route.query.id)
  },
  // 插入组件
  components:{
    Footer,
    HotNews,
    Timeline,
    NavigationBar,
    NewsInfo
  },
  watch:{
    // 监听路由变化
    '$route'(to,from) {
      // 使页面回到顶部
      this.ReturnTop()
    }
  },
  methods:{
    // 向子组件传递id
    SetId(id){
      this.ID = id
    },
    // 实现滚动回到顶部效果
    ReturnTop(){
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    }
  }
}
</script>

<style scoped>
.one{
  width: 65%;
  float: left;
  padding-left: 4%;
  padding-right: 3%;
  box-sizing: border-box;
}
.two{
  width: 35%;
  float: left;
  box-sizing: border-box;
}
.el-main{
  padding: 0;
  margin-top: -4.5%;
  overflow: hidden;
}
.el-footer{
  padding: 0;
}
.banner{
  position: relative;
  height: 200px;
  background-image:url('../../../../public/img/bg17.jpg');
}
.banner_title{
  width: 122px;
  height: 52px;
  display: block;
  background-image:url('../../../../public/img/c01.png');
  font-size: 20px;
  color: #fff;
  line-height: 42px;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 65%;
  margin-left: -61px;
  margin-top: -26px;
}
@media (min-width: 320px) and (max-width: 420px) {
  .two{
    display: none;
  }
  .one{
    width: 100%;
    margin-left: -6%;
  }
  .el-main{
    padding: 0;
    margin-top: -16%;
    padding-bottom: -40%;
    overflow: visible;
  }
  .el-footer{
    margin-top: 1%;
  }
}
</style>