<template>
  	<div class="home_container">
        <!-- 这个传参数的意思 -->
        <Itemcontainer father-component="Home"></Itemcontainer>
    </div>
</template>

<script>
import Itemcontainer from './Itemcontainer'

export default {
  name: 'Home',
  components: {
    Itemcontainer
  },
  created () {
  }
}
</script>

<style lang="less" scoped>
  .home_container{

  }
</style>
