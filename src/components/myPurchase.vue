<template>
  <div>
  <div class="items" v-for="item in items" :key="item.id">
      <img :src="item.src">
      <div style="width: 100%; height: 100px; padding-top: 15px;">
        <span style="margin:15px 0 0 10px;"><a href="#">{{ item.name }}</a></span>
        <h2 style="margin:70px 0 -3px 10px;">{{ item.price.toFixed(2) }}</h2>
        <span style="margin:15px 0 0 10px; font-size:0.9rem;">付款时间:{{ item.time }}</span>
      </div>
      <el-button type="warning" style=" background-color:orange; color:white; height: 40px; margin:110px 10px 0 0;" round >再次购买</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['items']
}
</script>

<style lang="less" scoped>
.items{
  display: flex;
  border-color:black;
  margin: auto;
  margin-top: 10px;
  width:98%;
  height: 160px;
  box-shadow:0px 0px 2px rgba(0, 0, 0, 0.546);
  img {
    margin:10px;
    height: 140px;
  }
  a{
    text-decoration: none;
    color: black;
    font-size: 1.1rem;
  }
}
</style>
