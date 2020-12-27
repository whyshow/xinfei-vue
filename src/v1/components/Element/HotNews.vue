<!-- 最热新闻组件-->
<template>
  <div class="el-col-sm-22" id="hot">
    <h3 class="text-left" style="margin-left: 20px;">最热文章</h3>
    <div v-for="(item,index) in newsList">
      <el-card style="margin-top: 5px;padding-right: 1%" v-if="index <4">
        <div class="news"  style="margin-left: -5%">
          <router-link :to="'/details?id='+item.Article_id">
            <div class="date">
              <h4>{{item.Article_date|dateFormat("MM")}}月</h4>
              <p>{{item.Article_date|dateFormat("dd")}}日</p>
            </div>
            <h6 class="news_title" title="">{{ item.Article_title }}</h6>
            <div class="news_cont" v-html="item.Article_text" style="font-size: 12px">
            </div>
          </router-link>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      newsList:[]
    }
  },
  inject: ['reload'],
  created() {
    this.GetArticleList()
  },
  name: "HotNews",
  methods:{
    async GetArticleList() {
      const ret = await this.$http.get('api/article/hot')
      // 判断请求是否成功
      if (ret.data.code == 1) {
        this.newsList = ret.data.result
      }
    }
  },filters: {
    dateFormat: function (date, fmt) {
      if (!date) return date;
      date = new Date(date);
      var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        S: date.getMilliseconds() //毫秒
      };
      if (/(y+)/.test(fmt))
        fmt = fmt.replace(
            RegExp.$1,
            (date.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
      for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
          fmt = fmt.replace(
              RegExp.$1,
              RegExp.$1.length == 1 ?
                  o[k] :
                  ("00" + o[k]).substr(("" + o[k]).length)
          );
      return fmt;
    }
  }
}
</script>

<style scoped>
.el-card:hover{
  border:1px rgb(88, 163, 253) solid;
  transform:scale(1.04);
}
/*导航部分*/
* {
  margin: 0;
  padding: 0;
}

.news_cont{
  overflow: hidden;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
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
}
.news {
  text-align: left;
  position: relative;
  padding-bottom: 10px;
}
.news:hover .date {
  background: rgb(88, 163, 253);
  color: #fff;
}
.news:hover .news_title {
  margin-left: 140px;
  color: rgb(88, 163, 253);
}
.date {
  padding-top: 3%;
  width: 80px;
  height: 80px;
  color: #333;
  background: #f6f6f6;
  text-align: center;
  position: absolute;
  left: 20px;
  transition: all 0.5s;
}
.news .news_title {
  width: 25em;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-top: 5px;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 120px;
  transition: all 0.5s;
}
.news > a > .news_cont {
  font-size: 12px;
  color: #999;
  line-height: 20px;
  height: 40px;
  margin-left: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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
</style>
