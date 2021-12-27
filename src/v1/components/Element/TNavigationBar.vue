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
          <ul class="layui-nav" lay-filter="">
            <li class="layui-nav-item"><a href="/">首页</a></li>
            <li class="layui-nav-item layui-this"><a href="/news">信飞动态</a></li>
            <li class="layui-nav-item">
              <a href="javascript:;">关于我们</a>
              <dl class="layui-nav-child"> <!-- 二级菜单 -->
                <dd><a href="/about">信飞简介</a></dd>
                <dd><a href="/member">成员介绍</a></dd>
                <dd><a href="/achievement">成果展示</a></dd>
              </dl>
            </li>
            <li class="layui-nav-item">
              <a href="javascript:;">科大讯飞</a>
              <dl class="layui-nav-child"> <!-- 二级菜单 -->
                <dd><a href="/iflytek">讯飞简介</a></dd>
                <dd><a href="/iflytek_class">科大讯飞班</a></dd>
              </dl>
            </li>
            <li class="layui-nav-item"><a href="/join">加入我们</a></li>
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
  mounted(){
    layui.use('element', function(){
      var element = layui.element
      element.init()
    })
  },
  methods:{
    async GetAppBar() {
      const rest = await this.$http.get("api/appbar")
      if (rest.data.code == 1){
        this.AppBar = rest.data.data.appbar
      }
    }
  },
  name: "NavigationBar"
}



</script>

<style scoped>
a{
  text-decoration: none;
}
.layui-nav {
  position: relative;
  background: #f8f8f8;

  border-radius: 2px;
  font-size: 0;
  box-sizing: border-box;
}
.layui-nav .layui-nav-item a{
  color: #777;
}
.layui-nav .layui-nav-item a:hover{
  color: #777;
}
.layui-nav * {
  font-size: 20px;
}
.layui-this:after{
  display: none;
}

.layui-nav-child *{
  font-size: 16px;
}

* {
  margin: 0;
  padding: 0;
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
