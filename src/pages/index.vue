<style lang="less" scoped>
  @import url("../assets/style/main.less");
  .index {
  	width: 100%;
  	
  }
</style>

<template>
  <div class="index">
    <index-head @switchNav="switchNav" />
  </div>
</template>

<script>
  import indexHead from '@/components/index/head';
  export default {
  	components: { indexHead },
  	data () {
  	  return {
  	  	
  	  }
  	},
  	methods: {
  	  switchNav (idx) {
  	  	console.log(idx)
  	  }
  	}
  }
</script>
