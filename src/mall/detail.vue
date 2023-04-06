<template>
  <div id="mallDetail">
    <div class="itemBox" v-for="item in goods" :key="item.id">
      <el-row>
        <el-col :span="10">
          <img :src="item.src">
        </el-col>
        <el-col :span="14">
          <div class="desc">
            <h1>{{ item.name }}</h1>
            <div class="tag">
              <span style="color: gray;" v-for="tags in item.tags" :key="tags">{{ tags }}</span>
            </div>
            <h2>{{ item.price.toFixed(2) }}</h2>
            <el-select class="selector" v-model="item.defaultColor" placeholder="请选择颜色">
              <el-option
                v-for="item in item.colors"
                :key="item.color"
                :label="item.label"
                :value="item.color">
              </el-option>
            </el-select>
            <div class="counter">
              <el-input-number v-model="num" :min="1" :max="item.num"></el-input-number>
              <span>(库存 {{ item.num }} 件)</span>
            </div>
            <div class="buttons">
              <el-button class="buttonStyle" type="warning" @click="dev">加入购物车</el-button>
              <el-button class="buttonStyle" type="warning" @click="dev">立即购买</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="introBox">
      <h1>商品信息</h1>
      <div v-for="item in introPic" :key="item.id">
        <img :src="item.src">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mallDetail',
  data () {
    return {
      goods: [
        {
          id: 1,
          src: require('../../public/img/goods/1.jpg'),
          name: '迷你便携超小手电筒2000流明超长续航超长射程居家户外必备',
          num: 9,
          price: 9.9,
          tags: ['限时特惠 ', '五年质保 '],
          colors: [
            {
              color: 'black',
              label: '经典黑色'
            }, {
              color: 'white',
              label: '简约白色'
            }
          ],
          defaultColor: 'black'
        }
      ],
      introPic: [
        {
          id: 1,
          src: require('../../public/img/goodsIntro/1.jpg')
        },
        {
          id: 2,
          src: require('../../public/img/goodsIntro/2.jpg')
        },
        {
          id: 3,
          src: require('../../public/img/goodsIntro/3.jpg')
        }
      ],
      num: 1
    }
  },
  methods: {
    dev () {
      this.$message('还在开发中')
    }
  }
}
</script>

<style lang="less" scoped>
.itemBox{
  width: 75%;
  margin: auto;
  margin-top: 40px;
  box-shadow:0px 0px 2px rgba(0, 0, 0, 0.546);
  padding: 10px;
  img{
    width: 100%;
  }
  .desc{
    margin-left: 20px;
    h1{
      margin:5px;
    }
    h2{
      margin:0;
      margin-left:8px;
      font-size: 3rem;
      color: orange;
    }
  }
  .tag{
    margin-left:5px;
  }
  .buttons{
    margin:10px 5px 0px 0px;
  }
  .counter{
    margin-top: 120px;
    span{
      color:gray;
      padding-left:10px;
    }
  }
}
.buttonStyle{
  background-color:orange;
  border-color:orange;
  margin-right:5px;
  width: 180px;
  font-size: 1.6rem;
  border-radius: 0.5rem;
}
.introBox{
  width: 75%;
  margin: auto;
  margin-top: 40px;
  h1{
    margin:auto;
    margin-bottom: 30px;
    color:orange;
    text-align: center;
    font-size: 3.5rem;
  }
  img{
    width:100%;
    padding:0;
    margin:0;
  }
}
</style>
