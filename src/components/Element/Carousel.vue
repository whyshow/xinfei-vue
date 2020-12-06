<!-- 公共组件 轮播图-->
<template>
<!--  <div id="banner">-->
<!--    <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="3000" data-pause="hover">-->
<!--      &lt;!&ndash; 轮播（Carousel）项目 &ndash;&gt;-->
<!--      <div class="carousel-inner">-->
<!--          <div class="item">-->
<!--            <img v-bind:src="imagsrc">-->

<!--          </div>-->
<!--        <div class="item">-->
<!--          <img v-bind:src="imagsrc">-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->

  <el-carousel :interval="5000" arrow="always" height="465px">
    <el-carousel-item v-for="item in 4" :key="item">
      <div style=" width: 100%;height: 100%; background: url('http://www.ccit.club/Public/lunbo/2018-11-29/175711125052102.jpg');background-size: cover;"></div>
<!--      <img style="height: 500px;background-image: url('http://www.ccit.club/Public/lunbo/2018-11-29/175711125052102.jpg')"/>-->
    </el-carousel-item>
  </el-carousel>

</template>

<script>
export default {
  data(){
    return{
      imagsrc:"http://www.ccit.club/Public/lunbo/2018-11-29/175711125052102.jpg"
    }
  },
  name: "Carousel"
}
</script>

<style scoped>

@media (min-width: 320px) and (max-width: 420px) {
  .el-carousel{
    height: 110px;
  }
  div{
    height: 110px;
    background-size: contain;
    background-repeat:no-repeat;
  }
}
div{
  background-size: contain;
  background-repeat:no-repeat;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>