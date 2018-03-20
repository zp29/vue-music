<template>
  <div class="recommend">
    <slider></slider>
    <p>推荐新歌</p>
  </div>
</template>

<script>

import slider from './base/slider/slider'

export default {

  name: 'recommend',
  
  data () {
    return {

    }
  },
  components: {
    slider
  }

}
</script>

<style lang="less" scoped>
  p {
    color: orangered;
    text-align: center;
  }
</style>
