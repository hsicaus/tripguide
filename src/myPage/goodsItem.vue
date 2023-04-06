<template>
  <div id="goodsItem">
    <myPurchase :items="goodsBox"></myPurchase>
  </div>
</template>

<script>
import myPurchase from '@/components/myPurchase.vue'
export default {
  name: 'mallDetail',
  data () {
    return {
      goodsBox: [
        {
          id: 1,
          src: require('../../public/img/goods/1.jpg'),
          name: '2000流明迷你便携小手电筒',
          price: 9.9,
          time: '2022-08-12 10:29:09'
        },
        {
          id: 2,
          src: require('../../public/img/goods/2.jpg'),
          name: 'PVC材质环保手机防水袋',
          price: 12.9,
          time: '2022-02-21 20:41:23'
        }
      ]
    }
  },
  components: {
    myPurchase
  }
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
