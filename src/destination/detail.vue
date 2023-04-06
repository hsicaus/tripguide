<template>
  <div id="destinationDetail">
    <div class="topItem">
      <h1 style="font-size: 4rem; margin: 0;">上海</h1>
      <el-row>
        <el-col :span="6"><el-button class="buttonStyle" type="warning" @click="dev">风景名胜</el-button></el-col>
        <el-col :span="6"><el-button class="buttonStyle" type="warning" @click="dev">酒店民宿</el-button></el-col>
        <el-col :span="6"><el-button class="buttonStyle" type="warning" @click="dev">特色体验</el-button></el-col>
        <el-col :span="6"><el-button class="buttonStyle" type="warning" @click="dev">私人向导</el-button></el-col>
      </el-row>
      <img style="width: 100%;" src="../../public/img/shanghai1.jpg">
    </div>
    <desciption></desciption>
  </div>
</template>

<script>
import desciption from '../components/description.vue'
export default {
  name: 'destinationDetail',
  data () {
    return {
    }
  },
  components: {
    desciption
  },
  methods: {
    dev () {
      this.$message('还在开发中')
    }
  }
}
</script>

<style lang="less" scoped>
.topItem{
  width: 75%;
  margin: auto;
  padding-top: 30px;
}
.buttonStyle{
  background-color:orange;
  border-color:orange;
  margin:10px 10px 10px 10px;
  width: 92%;
  border-radius: 0.8rem;
}
</style>
