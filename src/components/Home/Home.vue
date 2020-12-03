<template>

  <el-container>
    <el-header>
      <NavigationBar></NavigationBar>
    </el-header>

    <el-main>
      <Carousel></Carousel>
      <div class="cent">
        <div><Wisdom></Wisdom></div>
        <div><HotNewsList style="margin-top: 70px"></HotNewsList></div>
      </div>
    </el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script>
import NavigationBar from "@/components/Element/NavigationBar";
import Carousel from "@/components/Element/Carousel";
import Wisdom from "@/components/Element/Wisdoms";
import HotNewsList from "@/components/Element/HotNewsList";
import Footer from "@/components/Element/Footer";

export default {
  name: "Home",
  components:{
    Footer,
    HotNewsList,
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
  padding-right: 1%;
  margin-left: 1%;

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
