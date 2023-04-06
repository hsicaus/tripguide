<template>
          <div>
            <el-row :gutter="20">
              <el-col :span="6" v-for="item in adsBox" :key="item.id">
                <el-card class="bodystyle" :body-style="{ padding: '0'}">
                  <img :src=item.src class="image">
                  <div class="cardWord">
                    <span><a class="wordInCard" :href="to">{{item.name}}</a></span>
                  </div>
                  <div class="cardTags" v-if="item.tags">
                    <div style="margin: 0 5px 0 0" v-for="tags in item.tags" :key="tags">
                      <el-tag color="orange" effect="dark" type="warning" size="small">{{ tags }}</el-tag>
                    </div>
                  </div>
                  <div style="font-size: 2rem; font-weight: bolder; margin: 0 10px 0 0; text-align: right;">{{ item.price.toFixed(2)}}<span style="font-size: 1rem;">元起</span></div>
                </el-card>
              </el-col>
            </el-row>
          </div>
</template>

<script>
export default {
  name: 'goodsBoxes',
  props: ['adsBox', 'to']
}
</script>

<style lang="less" scoped>
/deep/ .bodystyle{
  height: 21.5rem;
  width: 100%;
  margin-bottom: 1rem;
}
.image {
    width: 100%;
    display: block;
  }
  .cardWord{
    padding: 14px;
    .wordInCard{
      color: black;
      text-decoration: none;
    }
  }
  .cardTags{
    display:flex;
    margin: 0 0 10px 15px;
  }
</style>
