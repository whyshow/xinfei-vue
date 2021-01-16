<template>
  <div class="row" style="padding-bottom: 10%">
    <el-card style="padding-bottom: 10%">
    <div class="col-sm-1"></div>
    <div class="el-col-sm-24">

      <div id="cont_news">
        <h3 class="text-center">{{result.Article_title}}</h3>
        <p style="text-align: right; font-size: 14px; color: #666;">作者：{{result.Article_user}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日期：{{result.Article_date}}</p>
        <p v-html="result.Article_html" ></p>
      </div>
    </div>
    </el-card>
    </div>
</template>

<script>

export default {
  data(){
    return{
      result:{}
    }
  },
  watch:{
    '$route'(to,from) {
      this.GetOneArticle(to.query.id)
    }
  },
  props:{
    NewId:""
  },
  created() {
    // 根据id获取新闻详情数据
    this.GetOneArticle(this.$route.query.id)
   // this.Log(this.NewId)
  },
  name: "NewsInfo",
  methods:{
    async GetOneArticle(id) {
      const ret = await this.$http.get('api/article/'+id)
      if (ret.data.code === -1){
        this.$message({
          message: ret.data.message, center: true, type: 'warning', duration: 2000, onClose: () => {
            this.$router.go(-1)
          }
        })
      }
      this.result = ret.data.result
    }
  }
}
</script>

<style scoped>
@media (max-width: 520px) {
  .row{
    margin-left: 5%;
    margin-right: -5%;
  }
}
</style>