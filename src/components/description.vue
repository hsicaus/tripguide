<template>
  <div id="description">
    <div v-for="item in info" :key="item.location">
      <div class="intro">
        <el-row>
          <el-col :span="12"><img :src="item.mapsrc"></el-col>
          <el-col :span="12">
            <div id="word">
              <h1>关于{{ item.location }}</h1>
              <p>{{ item.describe }}</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'description',
  data () {
    return {
      info: [{
        location: '上海',
        describe: '上海是中国最大的城市，也是中国最国际化的都市，在这里游客能一次性体验过去、现在和未来。黄浦江将上海分为两个区域：浦东和浦西。浦东的天际线看起来像是《杰森一家》里的画面，东方明珠电视塔看上去就像是穿了两颗糖球的棒棒糖。而在浦西，沿着外滩漫步，可以尽情体验老上海味道。这里的美食街令人赞叹；不妨聚焦于饺子等当地美食，充分利用旅行时光。另外，不要错过在定制商店尽情购买定制服装的机会。',
        mapsrc: require('../../public/img/shanghaimap.jpg')
      }]
    }
  }
}
</script>

<style lang="less" scoped>
#description{
  width: 75%;
  margin: auto;
  p{
    font-size: 1.2rem;
  }
}
.intro{
  display: flex;
  img{
    width: 100%;
    margin-top: 10px;
  }
  #word{
    padding:0 0px 0 15px;
  }
}
</style>
