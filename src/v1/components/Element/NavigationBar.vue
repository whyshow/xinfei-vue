<!-- 公共组件 导航栏-->
<template>
  <!-- 导航栏-->

  <div id="nav">
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse"
                  data-target="#example-navbar-collapse">
            <span class="sr-only">切换导航</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div class="navbar-brand fontfamily">信飞工程研发中心</div>
        </div>
        <div class="collapse navbar-collapse navbar-right" id="example-navbar-collapse">
          <ul class="nav navbar-nav" v-for="(item,index) in AppBar">
            <li @mouseenter="MouseEnter()" @mouseout="MouseOut()"><router-link to="/">{{item.name}}</router-link>
              <ul class="dropdown-menu-tek" v-for="(items,indexs) in AppBar.children">
                <li><router-link to="/">{{ items.cname }}</router-link></li>

              </ul>
            </li>

<!--            <li><router-link  to="/">首页</router-link ></li>-->
<!--            <li><router-link  to="/news">信飞动态</router-link ></li>-->
<!--            <li @mouseenter="MouseEnter()" @mouseout="MouseOut()"><router-link to="/">关于我们</router-link>-->
<!--              <ul class="dropdown-menu-tek">-->
<!--                <li><router-link to="/">信飞简介</router-link></li>-->
<!--                <li><router-link to="/">成员介绍</router-link></li>-->
<!--                <li><router-link to="/">成果展示</router-link></li>-->
<!--              </ul>-->
<!--            </li>-->
<!--            <li v-on:@mouseenter="MouseEnter" @mouseout="MouseOut()"><router-link to="/">科大讯飞</router-link>-->
<!--              <ul class="dropdown-menu-tek">-->
<!--                <li><router-link to="/">讯飞简介</router-link></li>-->
<!--                <li><router-link to="/">科大讯飞班</router-link></li>-->
<!--              </ul>-->
<!--            </li>-->
<!--            <li class=""><a href="{:U('join')}">加入我们</a></li>-->
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  created() {
   // this.GetAppBar()
  },
  data(){
    return{
      AppBar:[]
    }
  },
  methods:{
    async GetAppBar() {
      const rest = await this.$http.get("api/appbar")
      if (rest.data.code == 1){
        this.AppBar = rest.data.data.appbar
      }
    },
    MouseEnter(){
      $(".navbar-nav>li").hover(function () {
        $(this).children(".dropdown-menu-tek").stop().slideDown(200);
      }, function () {
        $(this).children(".dropdown-menu-tek").stop().slideUp(200);
      })
    },
    MouseOut(){
      $(".navbar-nav>li").hover(function () {
        $(this).children(".dropdown-menu-tek").stop().slideDown(200);
      }, function () {
        $(this).children(".dropdown-menu-tek").stop().slideUp(200);
      })
    }
  },
  name: "NavigationBar"
}
$(function () {
  $(".navbar-nav>li").hover(function () {
    $(this).children(".dropdown-menu-tek").stop().slideDown(200);
  }, function () {
    $(this).children(".dropdown-menu-tek").stop().slideUp(200);
  })
})

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}


.container-fluid {
  padding: 0px;
}

a {
  color: #222;
  font-size: 16px;

}

a:hover {
  text-decoration: none;
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

 .javastatue span {
  display: none;
 }

@media (min-width: 768px) {
  .container-fluid > .navbar-header {
    margin-left: 5%;
  }
  .navbar-nav > li {
    margin: 0px 15px;
  }
  .navbar-nav > li >a {
    font-size: 20px;
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

}
@media (min-width: 320px) and (max-width: 420px) {
  .coursejava img {
    position: absolute;
    left: 15px;
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
}

.navbar-nav > li {
  position: relative;
}

.dropdown-menu-tek {
  width: 100%;
  list-style: none;
  background: #f8f8f8;
  position: absolute;
  top: 50px;
  left: 0px;
  text-align: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  display: none;
}

.dropdown-menu-tek > li {
  height: 50px;
  line-height: 50px;
}

.nav-active {
  background: #e7e7e7;
}

.dropdown-menu-tek > li > a {
  color: #777;
}

.dropdown-menu-tek > li > a:hover {
  color: rgb(88, 163, 253);
}

.fontfamily{
  font-family: 隶书;
  font-size: 35px;
 padding: 12px;
}
.navbar-toggle{
  padding: 2px;
  right: 25px;
  top: 10px;
}
</style>
