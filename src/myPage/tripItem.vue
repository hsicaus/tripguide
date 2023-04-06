<template>
  <div id="tripItem">
    <myPurchase :items="adsBox"></myPurchase>
  </div>
</template>

<script>
import myPurchase from '@/components/myPurchase.vue'
export default {
  name: 'mallDetail',
  data () {
    return {
      adsBox: [
        {
          id: 3,
          src: require('../../public/img/malacca.jpg'),
          name: '特价新马泰三国七天游',
          price: 3999,
          time: '2021-10-12 15:46:29'
        },
        {
          id: 5,
          src: require('../../public/img/foshan.jpg'),
          name: '佛山祖庙南海影视城两日游',
          price: 399,
          time: '2022-04-12 23:19:53'
        },
        {
          id: 6,
          src: require('../../public/img/canton.jpg'),
          name: '广州沙面夜游珠江三日游',
          price: 1299,
          time: '2022-08-12 10:29:09'
        },
        {
          id: 7,
          src: require('../../public/img/foshanH.jpg'),
          name: '佛山岭南天地万圣节限定团',
          price: 199,
          time: '2022-10-31 05:35:12'
        },
        {
          id: 8,
          src: require('../../public/img/foshanC.jpg'),
          name: '广佛圣诞节限定团',
          price: 99,
          time: '2022-12-25 00:21:49'
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
