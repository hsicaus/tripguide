<template>
  <div id="myFooter">
    <div class="footerWord">
      <p>该项目仅作个人练习使用 ctenoemail@yahoo.co.jp</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myFooter',
  data () {
    return {
    }
  }
}
</script>

<style>
#myFooter{
  font-size: 1.3rem;
  background-color: orange;
  width: 100%;
  margin-top: 2rem;
  height: 150px;
  color: white;
}
.footerWord{
  text-align: center;
  line-height: 100px;
}
</style>
