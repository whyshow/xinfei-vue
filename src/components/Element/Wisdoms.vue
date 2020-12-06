<!-- 公共组件 智慧教育和创新人才-->
<template>
  <div class="col-sm-6">
    <!--<h3 class="text-center">智慧教育</h3>-->
    <div class="" style="margin-top:11%">
      <el-card class="card">
      <h3 class="block-text-center">智慧教育</h3>
      <div class="col-sm-4 col-xs-5 wow bounceInLeft div1 div2">
        <div class="coursejava">
          <a class="kctu" href="http://47.96.38.38:9090/" target="_blank">
            <img class="lunwen" src="../../../public/img/lunwen.png"
                 style="background: rgb(1,111,182);">
            <p class="coursename">论文检测系统</p>
            <p class="javastatue"><span>点击进入</span></p>
          </a>
        </div>
      </div>
      <div class="col-sm-4 col-xs-5 wow bounceInLeft" style="width: 30%">
        <div class="coursejava">
          <a class="kctu" href="http://47.96.38.38:8033/index.php">
            <img class="lunwen" src="../../../public/img/shizibaozhang.png" style="background: rgb(1,111,182);">
            <p class="coursename">师资管理平台</p>
            <p class="javastatue"><span>点击进入</span></p>
          </a>
        </div>
      </div>
      <div class="col-sm-4 col-xs-5 wow bounceInLeft" style="width: 30%">
        <div class="coursejava">
          <a class="kctu" href="http://47.96.38.38:8999/survey/user/login">
            <img class="lunwen" src="../../../public/img/java.png" style="background: rgb(1,111,182);" >
            <p class="coursename">问卷系统</p>
            <p class="javastatue"><span>点击进入</span></p>
          </a>
        </div>
      </div>
      </el-card>
    </div>
    <div style="margin-top: 8%">
      <el-card class="card">
      <h3 class="block-text-center">创新人才</h3>
      <div class="col-sm-4 col-xs-6 wow bounceInLeft" style="margin-left: 18%;width: 41%">
        <div class="coursejava">
          <a class="kctu" href="{:U('member')}" target="_blank">
            <img class="lunwen" src="../../../public/img/rencai.png"
                 style="background: rgb(1,111,182);">
            <p class="coursename">工程人才</p>
            <p class="javastatue"><span>点击进入</span></p>
          </a>
        </div>
      </div>
      <div class="col-sm-4 col-xs-6 wow bounceInLeft" style="width: 41%">
        <div class="coursejava">
          <a class="kctu" href="{:U('achievement')}" target="_blank">
            <img class="lunwen" src="../../../public/img/jiaoxuechengguo.png"
                 style="background: rgb(1,111,182);">
            <p class="coursename">创新成果</p>
            <p class="javastatue"><span>点击进入</span></p>
          </a>
        </div>
      </div>
      </el-card>
    </div>
  </div>
</template>

<script>


export default {
  name: "Wisdom"
}
</script>

<style scoped>
/*导航部分*/
* {
  margin: 0;
  padding: 0;
}

.el-card:hover{
  border:1px rgb(88, 163, 253) solid;
  transform:scale(1.04);
}
.card{
  border: 1px solid #58A3FD;
}

a {
  color: #222;
  font-size: 16px;

}

a:hover {
  text-decoration: none;
}

.coursejava {
  display: inline-block;
  border: 1px solid rgba(223, 222, 222, 1.00);
  padding: 8px;
  padding-top: 0px;
  margin-top: 60px;
  margin-bottom: 20px;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 100px;
  background: rgba(247, 247, 247, 1.00);
  transition: all 1s;
}


.coursejava:hover {
  background: #999;
}

.coursejava img {
  position: absolute;
  left: 35px;
  top: -45px;
  border: 3px solid #fff;
  background: #fff;
  border-radius: 60px;
  transition: all 1s;
}

.coursejava:hover img {
  transform: rotate(360deg);

}

.coursejava .javastatue {
  transition: 0.5s all;
  position: relative;
  top: -10px;
}

.coursejava:hover .javastatue {
  top: -17px;
}

.javastatue span {
  display: none;
}

.div2{
  width: 30%;
  margin-left: 10%
}
.coursename {
  padding-top: 30px;
  text-align: center;
  color: rgb(0, 84, 169);
}

@media (min-width: 768px) {

  .navbar-nav > li {
    margin: 0px 15px;
  }
  .navbar-nav > li >a {
    font-size: 20px;
  }

  .coursejava {
    display: inline-block;
    border: 1px solid rgba(223, 222, 222, 1.00);
    padding: 8px;
    padding-top: 0px;
    margin-top: 60px;
    margin-left: 17px;
    margin-right: 10px;
    text-decoration: none;
    cursor: pointer;
    position: relative;
    width: 120px;
    height: 60px;
    background: rgba(247, 247, 247, 1.00);
  }

  .coursejava img {
    position: absolute;
    left: 30px;
    top: -35px;
    border: 3px solid #fff;
    background: #fff;
    width: 60px;
    border-radius: 60px;
    transition: all 1s;
  }

  .coursejava .lunwen {
    width: 60px;
    height: 60px;
    border-radius: 60px;
    padding: 7px;
  }

}
@media (min-width: 320px) and (max-width: 420px) {
  .coursejava .lunwen {
    width: 60px;
    height: 60px;
    border-radius: 60px;
  }
  .coursejava {
    display: inline-block;
    border: 1px solid rgba(223, 222, 222, 1.00);
    padding: 8px;
    padding-top: 0px;
    margin-top: 60px;
    margin-left: 8%;
    text-decoration: none;
    cursor: pointer;
    position: relative;
    width: 95px;
    height: 60px;
    background: rgba(247, 247, 247, 1.00);
  }
  .coursejava img {
    position: absolute;
    left: 20px;
    top: -35px;
    border: 3px solid #fff;
    background: #fff;
    width: 60px;
    border-radius: 60px;
    transition: all 1s;
  }

  a {
    color: #222;
    font-size: 12px;

  }
  .div1{
    width: 30%;
    margin-left: 2%;
  }
  .block{
    margin-top: 10%;
  }
}

#member .member_div > img {
  width: 100%;
}

#member .member_info > p {
  margin-left: 10px;
}

#member .member_info > p:nth-child(1) {
  font-size: 16px;
}

#member .member_info > p:nth-child(2) {
  border-bottom: 1px solid #fff;
  padding-bottom: 10px;
}

.navbar-nav > li {
  position: relative;
}

.dropdown-menu-tek > li {
  height: 50px;
  line-height: 50px;
}

.dropdown-menu-tek > li > a {
  color: #777;
}

.dropdown-menu-tek > li > a:hover {
  color: rgb(88, 163, 253);
}

.lunwen {
  width: 66px;
  height: 66px;
}

.block-text-center {
  position: absolute;
  background: #fff;
  left: 50%;
  padding-left: 15px;
  padding-right: 15px;
  margin: -14px 0 0 -55px;
}
</style>
