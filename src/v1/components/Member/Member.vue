<!-- 创新人才页面-->
<template>
  <el-container>
    <el-header>
      <!-- 导航栏组件-->
      <NavigationBar></NavigationBar>
    </el-header>
    <el-main>
      <div class="banner">
        <span class="banner_title">创新人才</span>
      </div>
      <div class="cent" style="margin-top: 2%;height: 100%">
        <div class="one">
          <!-- 成员组件-->
          <MemberShow></MemberShow>
        </div>
      </div>
    </el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script>

import Footer from "@/v1/components/Element/Footer";
import NavigationBar from "@/v1/components/Element/TNavigationBar";
import MemberShow from "@/v1/components/Member/MemberShow";

export default {
  name: "Member",
  // 插入组件
  components:{
    MemberShow,
    Footer,
    NavigationBar
  },
}

</script>

<style scoped>
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
.banner{
  position: relative;
  height: 200px;
  background-image:url('../../../../public/img/bg17.jpg');
}
.one{
  width: 100%;
  height: 100%;
padding: 0px;
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
</style>