<template>
  <div id="myPage">
    <div class="top">
      <h1 style="margin:3rem 0 0 20%; font-size:3rem;">你好，{{ userinfo.username }}</h1>
    </div>
    <div>
      <el-row><!--控制布局范围-->
        <el-col :span="16" :offset="4">
          <el-row>
            <el-col :span="6">
              <div style="width: 100%; margin-top: 10px;">
                <el-menu style="height: 40rem; box-shadow:0px 0px 1px rgba(0, 0, 0, 0.546);" :default-active="activeItem" class="el-menu-vertical-demo" background-color="white" text-color="black" active-text-color="orange" router>
                    <el-menu-item index="/myPage/tripItem">
                      <i class="el-icon-menu"></i>
                      <span slot="title">旅游产品订单</span>
                    </el-menu-item>
                    <el-menu-item index="/myPage/goodsItem">
                      <i class="el-icon-document"></i>
                      <span slot="title">商品订单</span>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                      <i class="el-icon-setting"></i>
                      <span slot="title">社区设置</span>
                    </el-menu-item>
                    <el-menu-item @click="support">
                      <i class="el-icon-user"></i>
                      <span slot="title">人工客服</span>
                    </el-menu-item>
                </el-menu>
              </div>
            </el-col>
            <el-col :span="18">
            <router-view></router-view>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'mall',
  data () {
    return {
      activeItem: '/'
    }
  },
  methods: {
    support () {
      this.$message('还在开发中捏')
    }
  },
  created () {
    this.activeIndex = this.$route.path
  },
  computed: {
    ...mapState('user', ['userinfo'])
  }
}
</script>

<style lang="less" scoped>
.top{
  width: 100;
  height: 120px;
  background-color: orange;
  display: flex;
  color: white;
}
.el-menu-item:hover{
      background-color: orange !important;
      color:white !important;
    }
</style>
