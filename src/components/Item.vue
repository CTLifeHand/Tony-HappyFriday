<template>
  	<div>
    	<Itemcontainer father-component="Item"></Itemcontainer>
  	</div>
</template>

<script>
import Itemcontainer from './Itemcontainer'

export default {
  name: 'Item',
  components: {
    Itemcontainer
  },
  created () {
    // 进入题目页面，开始计时
    this.$store.commit('REMBER_TIME')
  }
}
</script>

<style lang="less">


</style>
