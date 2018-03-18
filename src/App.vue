<template>
  <div class="app">
    <m-header></m-header>
    <!-- LOGO + 标题 -->
    <m-tab></m-tab>
    <!-- Router 导航-->
    <router-view></router-view>
  </div>
</template>

<script>

import MHeader from './components/m-header'
// LOGO + 标题
import MTab from './components/m-tab'
// 头部导航条(通过 Router 管理)

export default {

  name: 'App',

  data () {
    return {

    }
  },
  components: {
    MHeader,
    MTab
  }
}
</script>

<style lang="less" scoped>
</style>
