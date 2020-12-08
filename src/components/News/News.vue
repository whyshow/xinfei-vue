<!-- 新闻拼接组件页面 -->
<template>

  <el-container>
    <el-header>
      <!-- 导航栏组件-->
      <NavigationBar></NavigationBar>
    </el-header>

    <el-main>
      <div class="banner">
        <span class="banner_title">信飞动态</span>
      </div>
      <div class="cent" style="margin-top: 2%">
        <div class="one">
          <!-- 时间轴新闻组件-->
          <Timeline></Timeline>
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
// 引入相关组件
import NavigationBar from "@/components/Element/TNavigationBar";
import Timeline from "../Element/Timeline";
import Footer from "../Element/Footer";
import HotNews from "../Element/HotNews";

// 页面动作
export default {
  // 测试路由接收参数
  // created(){
  //  console.log(this.$route.query)
  // },
  name: "News",
  // 插入组件
  components:{
    Footer,
    HotNews,
    Timeline,
    NavigationBar
  }
}

</script>

<!-- 拼接页面中的 css 样式-->
<style scoped>
.el-footer{
  position:relative;bottom:0;width:100%;height:100px;
}
.one{
  width: 65%;
  float: left;
  padding-left: 2%;
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
  background-image:url('../../../public/img/bg17.jpg');
}
.banner_title{
  width: 122px;
  height: 52px;
  display: block;
  background-image:url('../../../public/img/c01.png');
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
@media (min-width: 320px) and (max-width: 48  0px) {
  .two{
    display: none;
  }
  .one{
    width: 100%;
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
