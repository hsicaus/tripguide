<template>
  <el-carousel trigger="click" indicator-position="outside" height="45rem" :interval="10000" class="carousel">
        <el-carousel-item v-for="item in pic" :key="item.id">
          <img style="width:100%;" :src=item.src alt="">
        </el-carousel-item>
      </el-carousel>
</template>

<script>
export default {
  props: ['pic']
}
</script>

<style lang="less" scoped>
.carousel{
  width: 1;
  /deep/ .el-carousel__arrow{
    background-color: rgba(255, 255, 255, 0);
    font-size: 3rem;
    text-shadow: 0 0 10px #000000;
  }
}
</style>
