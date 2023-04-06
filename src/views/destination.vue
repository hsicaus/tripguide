<template>
  <div id="destination">
    <!--最上面的搜索框-->
    <div class="destinationSearch">
      <el-col :span="14" :offset="5">
          <h1 style="color:white; font-size: 4rem;">目的地</h1>
          <div style="display: flex;">
            <el-input style="font-size:1.2rem" v-model="searchText" placeholder="输入想了解的目的地"></el-input>
            <el-button style="color:orange; font-weight: 600;" >搜索目的地</el-button>
          </div>
          <!--搜索内容列表-->
          <!--
            <div class="searchInfo" v-show="searchInfoStatus" >
            <ul>
              <a style="text-decoration: none; color: black;" href="#" v-for="item in searchList" :key="item.id">
                <li class="searchInfoList">{{ item.name }} <span style="color:gray; font-weight: 300;">{{ item.country.name }}</span></li>
              </a>
            </ul>
          </div>
          -->
        </el-col>
    </div>
    <!--下面的盒子们-->
    <div>
    <el-row style="margin-top: 30px;">
      <el-col :span="18" :offset="3">
        <cityBoxes :picBox="picBox" :to="to"></cityBoxes>
      </el-col>
    </el-row>
    </div>
  </div>
</template>

<script>
import cityBoxes from '@/components/cityBoxes.vue'
export default {
  components: { cityBoxes },
  name: 'destination',
  data () {
    return {
      searchText: '',
      searchList: [],
      searchInfoStatus: false,
      picBox: [
        {
          id: 1,
          src: require('../../public/img/canton.jpg'),
          name: '广州'
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
        },
        {
          id: 7,
          src: require('../../public/img/shanghai.jpg'),
          name: '上海'
        },
        {
          id: 8,
          src: require('../../public/img/foshan.jpg'),
          name: '佛山'
        },
        {
          id: 9,
          src: require('../../public/img/changsha.jpg'),
          name: '长沙'
        }
      ],
      to: '#/destination/detail'
    }
  },
  methods: {
    bluring () {
      this.searchInfoStatus = false
    }
  },
  watch: {
    // 监听搜索框的情况
    searchText (val, old) {
      // console.log(val, old)
      if (!val) {
        this.searchInfoStatus = false
        return
      }
      this.searchInfoStatus = true
      // 搜索接口调用
      this.$api.getSearch({
        keyword: val
      }).then(res => {
        this.searchList = res.data.data.list
        console.log(res.data)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.destinationSearch{
  width: 100%;
  height: 250px;
  background-color: orange;
}
.searchInfo{
  background-color: white;
  width: 100%;
  border-radius:0 0 8px 8px;
  box-sizing: border-box;
  padding: 10px 10px 1px 10px;
  position: absolute;
  .searchInfoList{
    list-style: none;
    padding: 5px;
    margin:-10px 0 10px -30px;
    font-size: 1.2rem;
    font-weight: bolder;
      }

}
</style>
