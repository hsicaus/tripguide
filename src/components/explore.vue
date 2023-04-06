<template>
  <div id="explore">
    <div class="banner"> <!--最上面的轮播背景-->
      <div :class="{ dim : searchStatus | searchInfoStatus }" ></div><!--在点击搜索框后，让除去搜索框的背景变暗-->
      <carousel :pic="pic"></carousel>
      <el-row class="exploreSearch"><!--轮播图中间的搜索-->
        <el-col :span="18" :offset="3">
          <h1 style="color:white; font-size: 4rem;">探索你的下一趟旅程</h1>
          <el-input style="font-size:1.2rem" v-model="searchText" @focus="focusing" @blur="bluring" placeholder="想去哪里？"></el-input>
          <div class="hotCitiesInfo" v-show="searchStatus" ><!--点击搜索后出现的热门城市列表-->
            <h2 style="display:inline-block; background-color:orange; color: white; margin:20px 0 0 30px;">热门城市</h2>
            <div style="margin:10px 30px 0 30px">
              <a href="/#/" target="_blank">
                <span class="hotCitiesNames" v-for="item in hotcities" :key=item.id>{{ item.name }}</span>
              </a>
            </div>
          </div>
          <div class="searchInfo" v-show="searchInfoStatus" ><!--搜索内容列表-->
            <ul>
              <a style="text-decoration: none; color: black;" href="#" v-for="item in searchList" :key="item.id">
                <li class="searchInfoList">{{ item.name }} <span style="color:gray; font-weight: 300;">{{ item.country.name }}</span></li>
              </a>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
    <div><!--主体-->
      <el-row><!--控制布局范围-->
        <el-col :span="18" :offset="3">
          <el-alert
            title=" 了解限制措施"
            type="warning"
            style="background-color: orange; border-radius: 0.5rem;"
            description=" 在旅途开始前，了解当地防治 COVID-19 的限制措施"
            effect="dark"
            show-icon>
          </el-alert>
          <!--值得一去-->
          <a style="text-decoration: none;" href="/#/destination" target="_blank"><span class="titleMainStyle"><span style="color:orange"><br>值</span>得一去</span><br><br></a>
          <div>
          <el-row :gutter="20">
            <el-col style="margin-bottom: 0.3rem;" :span="8" v-for="item in picBox" :key="item.id">
              <a class="viewBox" style= "position:relative" href="#/destination/detail">
                <img class="boxPic" :src=item.src  alt="">
                <div style="width:25rem; position: absolute; left:0%; top:-40%" >{{ item.name }}</div>
              </a>
            </el-col>
          </el-row>
          </div>
          <!--特别优惠-->
          <a style="text-decoration: none;" href="/#/mall" target="_blank"><span class="titleMainStyle"><br>特别优<span style="color:orange">惠</span></span><br><br></a>
          <goodsBoxes :adsBox="adsBox" :to="to"></goodsBoxes>
          <!--多元文化-->
          <a style="text-decoration: none;" href="/#/mall" target="_blank"><span class="titleMainStyle"><br><span style="color:orange">多元</span>文化</span><br><br></a>
          <div style="margin-bottom: 5rem;">
            <el-row :gutter="20">
              <el-col style="margin-bottom: 0.3rem;" :span="12" v-for="item in foodsBox" :key="item.id">
              <a class="viewBox" style= "position:relative" href="#/mall/detail">
                <img class="longBoxPic" :src=item.src  alt="">
                <div style=" position: absolute; text-shadow: 3px 3px 5px #000000; left:2%; top:-40%" >{{ item.name }}</div>
              </a>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// import api from '../api/index.js'
// import request from '../utils/request.js'
import goodsBoxes from './goodsBoxes.vue'
import carousel from './carousel.vue'
export default {
  name: 'explore',
  data () {
    return {
      pic: [
        {
          id: 1,
          src: require('../../public/img/wuhan.jpg')
        },
        {
          id: 2,
          src: require('../../public/img/shanghai1.jpg')
        },
        {
          id: 3,
          src: require('../../public/img/malacca.jpg')
        }
      ],
      picBox: [
        {
          id: 1,
          src: require('../../public/img/shanghai.jpg'),
          name: '上海'
        },
        {
          id: 2,
          src: require('../../public/img/osaka.jpg'),
          name: '大阪'
        },
        {
          id: 3,
          src: require('../../public/img/malacca.jpg'),
          name: '马六甲'
        },
        {
          id: 4,
          src: require('../../public/img/kyoto.jpg'),
          name: '京都'
        },
        {
          id: 5,
          src: require('../../public/img/wuhan.jpg'),
          name: '武汉'
        },
        {
          id: 6,
          src: require('../../public/img/macao.jpg'),
          name: '澳门'
        }
      ],
      adsBox: [
        {
          id: 1,
          src: require('../../public/img/foshanH.jpg'),
          name: '佛山岭南天地万圣节限定团',
          price: 199,
          tags: ['当地参团', '特别好评', '纯玩']
        },
        {
          id: 2,
          src: require('../../public/img/canton.jpg'),
          name: '广州沙面夜游珠江三日游',
          price: 1299,
          tags: ['当地参团', '五星酒店']
        },
        {
          id: 3,
          src: require('../../public/img/foshan.jpg'),
          name: '佛山祖庙南海影视城两日游',
          price: 399,
          tags: ['当地参团', '纯玩']
        },
        {
          id: 4,
          src: require('../../public/img/foshanC.jpg'),
          name: '广佛圣诞节限定团',
          price: 99,
          tags: ['当地参团', '纯玩']
        }
      ],
      foodsBox: [
        {
          id: 1,
          src: require('../../public/img/chengdu1.jpg'),
          name: '川渝火锅'
        },
        {
          id: 2,
          src: require('../../public/img/guangdong1.jpg'),
          name: '广东茶点'
        }],
      hotcities: [],
      searchList: [],
      searchText: '',
      searchStatus: false,
      searchInfoStatus: false,
      to: '#/mall/detail'
    }
  },
  components: {
    goodsBoxes,
    carousel
  },
  mounted () {
    this.getHotCities()
  },
  watch: {
    // 监听搜索框的情况
    searchText (val, old) {
      // console.log(val, old)
      if (!val) {
        this.searchStatus = true
        this.searchInfoStatus = false
        return
      }
      this.searchStatus = false
      this.searchInfoStatus = true
      // 搜索接口调用
      this.$api.getSearch({
        keyword: val
      }).then(res => {
        this.searchList = res.data.data.list
        console.log(res.data)
      })
    }
  },
  methods: {
    focusing () {
      if (this.searchText) {
        this.searchStatus = false
        this.searchInfoStatus = true
        return
      }
      this.searchStatus = true
    },
    bluring () {
      this.searchStatus = false
      this.searchInfoStatus = false
    },
    async getHotCities () {
      const res = await this.$api.getHotCities()
      this.hotcities = res.data.result.hotcity
      // console.log('获取hotcities', res.data)
    }
  }
}
</script>

<style lang="less" scoped>

.viewBox{
  color:white;
  text-decoration: none;
  text-shadow: 5px 5px 8px #000000;
  text-align: center;
  font-size:3rem;
  font-weight: bold;
}
.boxPic{
  justify-content:center;
  width:100%;
  height: 19rem;
  border-radius:0.5rem;
  text-decoration: none;
}
.longBoxPic{
  justify-content:center;
  width:100%;
  height: 100%;
  border-radius:0.5rem;
  text-decoration: none;
  background-image: linear-gradient(180deg, rgba(0,0,0,0.00) 0%, #000000 100%);
}
.dim{
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 98;
}
.banner{
  position: relative;
  .exploreSearch{
    position: absolute;
    margin: 0 20% 0 20%;
    width:60%;
    z-index: 99;
    top:30%;
    .searchInfo{
      background-color: white;
      width: 100%;
      border-radius:0 0 8px 8px;
      box-sizing: border-box;
      padding: 10px 10px 1px 10px;
      .searchInfoList{
        list-style: none;
        padding: 5px;
        margin:-10px 0 10px -30px;
        font-size: 1.2rem;
        font-weight: bolder;
      }
    }
    .hotCitiesInfo{
      background-color: white;
      height: 180px;
      width: 100%;
      border-radius:0 0 8px 8px;
      box-sizing: border-box;
      padding: 10px;
    }
  }
}
.titleMainStyle{
  color:black;
  font-size: 3.5rem;
  font-weight: bolder;
}
.hotCitiesNames{
  display:inline-block;
  margin:10px 30px 10px 0;
  color: gray;
  font-size: 1.1rem;
  font-weight: 600;
}
</style>
