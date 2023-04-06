<template>
  <div id="mall">
    <!--<carousel :pic="pic"></carousel>-->
    <div class="sort"><!--旅游团-->
      <div style="display:flex; align-items: center;"><span class="titleMainStyle">特<span style="color: orange;">惠</span>旅游</span></div>
      <el-row style="margin-top: 30px;">
        <el-col :span="18" :offset="3">
          <goodsBoxes :adsBox="adsBox" :to="to"></goodsBoxes>
        </el-col>
      </el-row>
    </div>

    <div class="sort"><!--商品-->
      <div style="display:flex; align-items: center;"><span class="titleMainStyle"><span style="color: orange;">好</span>物推荐</span></div>
      <el-row style="margin-top: 30px;">
        <el-col :span="18" :offset="3">
          <goodsBoxes :adsBox="goodsBox" :to="to"></goodsBoxes>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// import carousel from '@/components/carousel.vue'
import goodsBoxes from '@/components/goodsBoxes.vue'
export default {
  name: 'mall',
  data () {
    return {
      adsBox: [
        {
          id: 1,
          src: require('../../public/img/shanghai.jpg'),
          name: '上海五天精品团外滩豫园迪斯尼',
          price: 1999,
          tags: ['特别好评']
        },
        {
          id: 2,
          src: require('../../public/img/osaka.jpg'),
          name: '关西地区五日深度游',
          price: 8999,
          tags: ['纯玩', '拒签全退']
        },
        {
          id: 3,
          src: require('../../public/img/malacca.jpg'),
          name: '特价新马泰三国七天游',
          price: 3999,
          tags: ['送保险']
        },
        {
          id: 4,
          src: require('../../public/img/kyoto.jpg'),
          name: '京都赏秋一日游',
          price: 899,
          tags: ['当地参团', '特别好评', '纯玩']
        },
        {
          id: 5,
          src: require('../../public/img/foshan.jpg'),
          name: '佛山祖庙南海影视城两日游',
          price: 399,
          tags: ['当地参团', '纯玩']
        },
        {
          id: 6,
          src: require('../../public/img/canton.jpg'),
          name: '广州沙面夜游珠江三日游',
          price: 1299,
          tags: ['当地参团', '五星酒店']
        },
        {
          id: 7,
          src: require('../../public/img/foshanH.jpg'),
          name: '佛山岭南天地万圣节限定团',
          price: 199,
          tags: ['当地参团', '特别好评', '纯玩']
        },
        {
          id: 8,
          src: require('../../public/img/foshanC.jpg'),
          name: '广佛圣诞节限定团',
          price: 99,
          tags: ['当地参团', '纯玩']
        }
      ],
      goodsBox: [
        {
          id: 1,
          src: require('../../public/img/goods/1.jpg'),
          name: '2000流明迷你便携小手电筒',
          price: 9.9,
          tags: ['限时特惠']
        },
        {
          id: 2,
          src: require('../../public/img/goods/2.jpg'),
          name: 'PVC材质环保手机防水袋',
          price: 12.9,
          tags: ['限时特惠', '进水包赔']
        },
        {
          id: 3,
          src: require('../../public/img/goods/3.jpg'),
          name: 'SPF50+ 防水防晒黑晒伤持久有效',
          price: 23.9,
          tags: ['户外必备']
        },
        {
          id: 4,
          src: require('../../public/img/goods/4.jpg'),
          name: '梨甲器推荐德国防紫外线雨伞',
          price: 69.8,
          tags: ['雨季必备']
        }
      ],
      pic: [
        {
          id: 1,
          src: require('../../public/img/guangdong1.jpg')
        },
        {
          id: 3,
          src: require('../../public/img/malacca.jpg')
        }
      ],
      to: '#/mall/detail'
    }
  },
  components: {
    goodsBoxes
    // carousel
  }
}
</script>

<style>
.titleMainStyle{
  color:black;
  font-size: 3.5rem;
  font-weight: bolder;
  margin: auto;
}
.sort{
  margin-top: 4rem;
}
</style>
