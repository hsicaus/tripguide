<template>
  <div class="headerContainer" id="myHeader" style="background-color: orange;">
    <div class="logo"><a class="logoa" href="">TripGuide</a></div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" text-color="white" background-color="orange" active-text-color="white" router>
      <el-menu-item style="font-size: 1.3rem; font-weight: 600;" index="/">探索</el-menu-item>
      <el-menu-item style="font-size: 1.3rem; font-weight: 600;" index="/destination">目的地</el-menu-item>
      <el-menu-item style="font-size: 1.3rem; font-weight: 600;" index="/mall">商城</el-menu-item>
    </el-menu>
    <div class="button">
      <el-button type="warning" style=" background-color:white; color:orange;" round v-if="userinfo.ifLogin" @click="toMyPage">个人中心</el-button>
      <el-button type="warning" style=" background-color:white; color:orange;" round v-if="userinfo.ifLogin" @click="logout">登出</el-button>
      <el-button type="warning" style=" background-color:white; color:orange;" round v-else @click="toLogin">登陆</el-button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'myHeader',
  data () {
    return {
      activeIndex: '/'
    }
  },
  created () {
    this.activeIndex = this.$route.path
  },
  computed: {
    ...mapState('user', ['userinfo'])
  },
  methods: {
    ...mapMutations('user', ['deleteUser']),
    toLogin () {
      this.$router.replace('/Login')
    },
    toMyPage () {
      this.$router.replace('/myPage')
    },
    logout () {
      // 登出
      localStorage.removeItem('user')
      this.deleteUser()
      this.$router.replace('/')
    }
  }
}
</script>

<style lang="less" scoped>
.headerContainer{
    .el-menu-item:hover{
      background-color: white !important;
      color:orange !important;
    }
  display: flex;
  .logoa{

    text-decoration:none;
    font-weight:bolder;
    color:white
  }
  .el-menu,.el-menu--horizontal{
    border-bottom:none;
  }
  .logo,.button{
    padding: 0 20px 0 20px;
    line-height: 60px;
  }
  .el-menu-demo{
    flex :1;
  }
}
</style>
