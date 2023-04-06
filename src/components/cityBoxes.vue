<template>
  <div>
      <el-row :gutter="10">
        <el-col :span="6" v-for="item in picBox" :key="item.id">
          <a class="viewBox" style= "position:relative" :href="to">
          <img class="boxPic" :src=item.src  alt="">
          <div style="width:19rem; position: absolute; left:0%; top:-40%" >{{ item.name }}</div>
          </a>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'cityBoxes',
  data () {
    return {
    }
  },
  props: ['picBox', 'to']
}
</script>

<style lang="less" scoped>
.boxPic{
  justify-content:center;
  width:100%;
  height: 15rem;
  border-radius:0.5rem;
  text-decoration: none;
}
.viewBox{
  color:white;
  text-decoration: none;
  text-shadow: 5px 5px 8px #000000;
  text-align: center;
  font-size:3rem;
  font-weight: bold;
}
</style>
