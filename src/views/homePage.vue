<template>
  <div id="Home">
    <myHeader></myHeader>
    <router-view></router-view>
    <myFooter></myFooter>
  </div>
</template>

<script>
import myHeader from '@/components/myHeader.vue'
import myFooter from '@/components/myFooter.vue'

export default {
  name: 'homePage',
  data () {
    return {
    }
  },
  components: {
    myHeader,
    myFooter
  }
}
</script>

<style>
</style>
