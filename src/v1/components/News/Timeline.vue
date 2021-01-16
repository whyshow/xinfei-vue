<!-- 信飞动态 时间轴-->
<template>
<!-- 时间轴新闻列表-->
  <div class="block">
    <el-timeline v-for="(item,index) in news" :key="item.Article_id">
      <template v-for="(citem,cindex) in colors">
      <el-timeline-item v-if="cindex === index" :color="citem.color">
        {{ item.Article_date }}
        <router-link :to="'/details?id='+item.Article_id">
        <el-card @mouseenter="" :style="{border:'1px '+ colors[index].color+' solid'}">
          <h4>{{ item.Article_title }}</h4>
          <p v-html="item.Article_text"></p>
        </el-card>
        </router-link>
      </el-timeline-item>
      </template>
    </el-timeline>

<!-- 分页-->
    <nav>
<!-- <首页-->
      <ul class="pagination">
        <li :class="{'disabled' : page.currpage === 1 }" @click="refurbish( 1)">
          <span v-if="isShow">
            <span aria-hidden="true">首页</span>
          </span>
        </li>

          <template v-for="(item,index) in page.pages">
            <li :class="{'active' : item === page.currpage}" @click="refurbish(item)">
              <span>
                {{item}}
                <span class="sr-only">
                  (current)
                </span>
              </span>
            </li>
          </template>
<!-- 尾页-->
          <li class="" @click="refurbish(page.totalpages)" :class="{'disabled' :page.currpage === page.totalpages}" >
            <span v-if="isShow">
              <span class="sr-only"></span>
              尾页
            </span>
          </li>
      </ul>
    </nav>
  </div>
</template>

<script>

export default {
  data(){
    return{
      isShow:false,
      news:[],
      page:{},
      colors:[
          {  color: '#FF0000'}, { color: '#FF7F00'}, { color: '#FFFF00'}, { color: '#00FF00'},
        { color: '#00FFFF'},{color: '#0000FF'},{color: '#8B00FF'}
        ]
    }
  },
  // 生命周期函数
  created() {
    this.GetArticleList()
  },
  name: "Timeline",
  methods:{
    // 获取新闻列表 ps: 按时间排序
    async GetArticleList() {
      const ret = await this.$http.get('api/article')
      // 判断请求是否成功
      if (ret.data.code == 1){
        this.news = ret.data.result
        this.page = ret.data.page
        this.isShow = true
      }
    },
    async refurbish(id){
      const ret = await this.$http.get('api/article?p='+id)
      // 判断请求是否成功
      if (ret.data.code == 1){
        this.news = ret.data.result
        this.page = ret.data.page
        this.isShow = true
        // 实现滚动效果
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
}
</script>

<style scoped>
nav{
  margin-left: 7.5%;
}
  p{
    overflow: hidden;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
  }
  .top {
    display: -webkit-box;
    font-size: initial;
    color: yellowgreen;
  }
  .el-timeline-item{
    text-align: left;
  }
  a{
    text-decoration:none;
  }
  .el-card:hover{
    border:1px #FF0000 solid;
    transform:scale(1.04);
  }
li{
    cursor: pointer;
  }
</style>
