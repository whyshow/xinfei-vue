<!-- 创新人才子组件-->
<template>
<div class="container">
    <div class="block">
      <el-slider
          v-model="value2"
          @change="change"
          style="width: 70%;margin-left: 15%"
          :max=max1
          :min=min1
          :marks="marks"
          :step="1"
          show-stops>
      </el-slider>
    </div>


        <div v-for="vak in userdata" style="float: left;padding: 15px">
          <el-card :body-style="{ padding: '0px' }" shadow="always" style="border: 1px #eeecea solid">
              <img :src='vak.User_icon'>
            <div >
              <h4 style="padding: 5px">姓 名：{{vak.User_name}}</h4>
              <p style="padding: 5px">职 位：核心成员</p>
              <p style="padding: 5px">座右铭：{{vak.User_motto}}</p>
              <p style="padding: 5px">班 级：{{vak.User_class}}</p>
              <p style="padding: 5px">专 业：{{vak.User_direction}}</p>
              <p style="padding: 5px"> Q Q：{{vak.User_qq}}</p>
            </div>
          </el-card>
        </div>
</div>


</template>

<script>

export default {
  name: "MemberShow",
  data() {
    return {
      value2: 2019,
      marks: {},
      userdata:[],
      max1: Number,
      min1: Number
    }
  },
  created() {
    this.GetGradelist()

  },
  methods:{
    change(value){
      this.GetUserlist2(value)
    },
    async GetGradelist() {
      const ret = await this.$http.get('api/member/grade')
      if (ret.data.code === 1) {
        this.marks = ret.data.result
        this.min1 = parseInt(ret.data.min)
        this.max1 = parseInt(ret.data.max)
        this.value2 = parseInt(ret.data.max)
      }
      this.GetUserlist()
    },
    async GetUserlist(max1) {
      const ret = await this.$http.get('api/member')
      console.log(ret.data.result)
      if (ret.data.code === 1) {
        this.userdata = ret.data.result
        this.css1()
      }
    },
    async GetUserlist2(max1) {
      const ret = await this.$http.get('api/member?grade='+max1)
      console.log(ret.data.result)
      if (ret.data.code === 1) {
        this.userdata = ret.data.result
        this.css1()
      }
    }
  }
}

</script>

<style scoped>
.block{
  height: 100px;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

</style>