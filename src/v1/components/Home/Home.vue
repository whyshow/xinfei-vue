<template>
  <el-container>
    <el-header>
      <!-- 导航栏组件-->
      <NavigationBar></NavigationBar>
    </el-header>
    <el-main>
      <!-- 轮播图组件-->
      <Carousel ></Carousel>
      <div class="cent">
        <!-- 智慧教育组件-->
        <div><Wisdom></Wisdom></div>
        <!-- 信飞动态组件-->
        <div><XinFeiDynamic style="margin-top: 10px"></XinFeiDynamic></div>
      </div>
    </el-main>
    <!-- 底部组件-->
    <el-footer>
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script>
import NavigationBar from "@/v1/components/Element/TNavigationBar";
import Carousel from "@/v1/components/Element/Carousel";
import Wisdom from "@/v1/components/Element/Wisdoms";
import XinFeiDynamic from "../Element/XinFeiDynamic";
import Footer from "@/v1/components/Element/Footer";

export default {
  data(){
    return{
      hackReset:true
    }
  },
  name: "Home",
  components:{
    Footer,
    XinFeiDynamic,
    Wisdom,
    NavigationBar,
    Carousel
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.cent{
  padding-right: 2%;
  margin-left: 2%;

}
.el-footer{
  margin: 0;
  padding: 0;

}
.el-main{
  padding: 0;
  margin-top: -4.5%;
  padding-bottom: 5%;
  overflow: hidden;
}

</style>
